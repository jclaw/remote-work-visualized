import csv
import json
import os
from pprint import pprint

partition = json.load(open('../PARTITION.json'))
state_data = json.load(open('../state_data.json'))
c_to_v = json.load(open('../NORMALIZED_LABELS.json'))


def main():
    years = range(2010, 2015 + 1)
    categories = ['age', 'sex of workers', 'class of worker', 'industry', 'occupation']


    for year in years:
        parse_and_write(year, categories)

def parse_and_write(year, categories):
    yearfile = open('yearfiles/' + str(year) + '.json', 'wb')

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

        # print fieldnames

        for r in reader:
            state = r[2]
            if state != "District of Columbia":
                state_abr = state_data['rev_map'][state]
                data[state_abr][category]['state'] = state_abr



                for variable in partition[category]['variables']:
                    corrected_label = variable['label'].replace('!!', ' - ')
                    print (year, state, category, corrected_label)
                    code = variable['code']

                    fieldname1 = 'Estimate; Total: - ' + corrected_label
                    fieldname2 = 'Estimate; ' + corrected_label

                    # index = fieldnames.index(fieldname)

                    result = [i for i,x in enumerate(fieldnames) if x == fieldname1 or x == fieldname2]
                    assert (len(result) == 1), ("length of fieldname search is not 1", result)

                    index = result[0]
                    value = r[index]

                    key = 'total' if code.endswith('_001E') else c_to_v[code]['normalized_label']
                    data[state_abr][category][key] = value


    yearfile.write(json.dumps( data, sort_keys=True, indent=4, separators=(',', ': ')))




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

if __name__ == '__main__':
    main()
