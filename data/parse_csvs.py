import csv
import json
import os
from pprint import pprint

partition = json.load(open('PARTITION.json'))
state_data = json.load(open('state_data.json'))
c_to_v = json.load(open('NORMALIZED_LABELS.json'))


def main():
    years = range(2010, 2015 + 1)
    categories = ['age', 'sex of workers', 'class of worker', 'industry', 'occupation']

    yearsfile = open('../js/StateData.js', 'wb')

    data = {}

    for year in years:
        data[year] = parse_and_write(year, categories)

    maximums = find_maximums(data, categories)

    print maximums

    yearsfile.write("var StateData = " + pretty_print_json(data) + "\n"
                    "var Maximums = " + pretty_print_json(maximums))


def parse_and_write(year, categories):

    data = initialize_with_states(categories)

    directories = map(lambda c: 'ACS_' + c.replace(' ', '_'), categories)

    for i, category in enumerate(categories):
        directory_str = directories[i]

        subdirectories = [x for x in os.listdir('./' + directory_str) if not x.startswith('.') and x.startswith('ACS_') and not x.endswith('.zip')]

        acs_year_dirname = [x for x in subdirectories if x.startswith('ACS_' + str(year)[2:])][0]

        path = directory_str + '/' + acs_year_dirname
        filename = acs_year_dirname + '_with_ann.csv'
        csvfile = open(path + '/' + filename, 'rb')
        reader = csv.reader( csvfile )

        next(reader)

        fieldnames = next(reader)

        for r in reader:
            state = r[2]
            state = "Washington DC" if state == "District of Columbia" else state
            state_abr = state_data['rev_map'][state]
            data[state_abr][category]['state'] = state_abr

            for variable in partition[category]['variables']:
                corrected_label = variable['label'].replace('!!', ' - ')
                print (year, state, category, corrected_label)
                code = variable['code']

                fieldname1 = 'Estimate; Total: - ' + corrected_label
                fieldname2 = 'Estimate; ' + corrected_label

                result = [i for i,x in enumerate(fieldnames) if x == fieldname1 or x == fieldname2]
                assert (len(result) == 1), ("length of fieldname search is not 1", result)

                index = result[0]
                value = r[index]

                key = 'total' if code.endswith('_001E') else c_to_v[code]['normalized_label']
                data[state_abr][category][key] = int(value)

    return data

def find_maximums(data, categories):
    arrs = {'numeral': [], 'percent': []};
    for category in categories:
        for year, yeardata in data.items():
            for state, statedata in yeardata.items():
                arrs['numeral'].append(statedata[category]['Worked at home'])
                arrs['percent'].append(float(statedata[category]['Worked at home']) / float(statedata[category]['total']))
    m = {
        'numeral': max(arrs['numeral']),
        'percent': max(arrs['percent'])
    }
    return m

def initialize_with_states(categories):
    data = {}
    for state in state_data['array']:
        data[state] = {}
        for category in categories:
            data[state][category] = {}

    return data


def range_2(start, end):
    return [] if start > end else [start] + range_2(start + 2, end)

def sval(est, moe):
    return {'est': est, 'moe': moe}

def pretty_print_json(data):
    return json.dumps( data, sort_keys=True, indent=4, separators=(",", ": "))

if __name__ == '__main__':
    main()
