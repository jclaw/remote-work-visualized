import csv
import json
import os
from pprint import pprint


def main():
    columns_to_keep = {
        'age': {
            'subj_total': range_2(5, 19),
            'default': range_2(99,114),
            '05': range_2(111, 128)
        },
        'class_of_worker': {
            'subj_total': range_2(5,23),
            'default': range_2(123,143)
        },
        'industry': {
            'subj_total': range_2(5,33),
            'default': range_2(183,213)
        },
        'median_age': {
            'subj_total': [3],
            'missing_grand_total': True,
            'default': [15]
        },
        'occupation': {
            'subj_total': range_2(5,17),
            'default': range_2(87,101)
        },
        'sex':  {
            'subj_total':  [35],
            'default':     [69,103]
        }
    }

    jsonfile = open('parsed_data/data.json','wb')

    jsonfile.write( parse(jsonfile, columns_to_keep) )

def parse(jsonfile, columns_to_keep):

    # initialize the json object with years and states
    data = initialize_json_obj()
    new_data = {}

    # directories = [x for x in os.listdir('.') if not x.startswith('.') and x.startswith('ACS_')]
    # for directory_str in directories:
    #     title = directory_str.lstrip('ACS_')
    #     subdirectories = [x for x in os.listdir('./' + directory_str) if not x.startswith('.') and x.startswith('ACS_') and not x.endswith('.zip')]
    #
    #     for sub_dir_str in subdirectories:
    #         path = directory_str + '/' + sub_dir_str
    #         filename = sub_dir_str + '_with_ann.csv'
    #         csvfile = open(path + '/' + filename, 'rb')
    #         reader = csv.reader( csvfile )
    #
    #         next(reader)
    #         abbrev_year = sub_dir_str[:-11].lstrip('ACS_')
    #         year = '20' + abbrev_year
    #
    #         new_data[year] = process_file(reader, data[year], columns_to_keep, {
    #             'abbrev_year': abbrev_year,
    #             'title': 'age'
    #         })




    pprint(data)

    directory_str = 'ACS_age'
    title = directory_str.lstrip('ACS_')
    subdirectories = [x for x in os.listdir('./' + directory_str) if not x.startswith('.') and x.startswith('ACS_') and not x.endswith('.zip')]

    for sub_dir_str in subdirectories:
        path = directory_str + '/' + sub_dir_str
        filename = sub_dir_str + '_with_ann.csv'
        csvfile = open(path + '/' + filename, 'rb')
        reader = csv.reader( csvfile )

        next(reader)
        abbrev_year = sub_dir_str[:-11].lstrip('ACS_')
        year = '20' + abbrev_year

        new_data[year] = process_file(reader, data[year], columns_to_keep, {
            'abbrev_year': abbrev_year,
            'title': 'age'
        })


    # csvfile = open('ACS_age/ACS_15_1YR_B08501/ACS_15_1YR_B08501_with_ann.csv', 'rb')
    # reader = csv.reader( csvfile )


    # next(reader)
    # abbrev_year = '15'
    # year = '20' + abbrev_year
    #
    # pprint(data[year])
    # temp = {}
    # temp[year] = process_file(reader, data[year], columns_to_keep, {
    #     'abbrev_year': abbrev_year,
    #     'title': 'age'
    # })
    # pprint(temp)
    # pprint(data[year])
    # data[year] = temp

    out = json.dumps( new_data, sort_keys=True, indent=4, separators=(',', ': '))

    return out


def process_file(reader, yeardata, columns_to_keep, info):
    abbrev_year = info['abbrev_year']
    title = info['title']

    fieldnames = next(reader)

    for r in reader:
        # grab the correct state
        # pprint (yeardata)
        state = r[2]
        state_obj = yeardata[state]

        if not 'missing_grand_total' in columns_to_keep[title]:
            state_obj['g_total'] = r[3] # sval(r[3], r[4])

        indices_key = abbrev_year if abbrev_year in columns_to_keep[title] else 'default'

        print ('YEAR:', abbrev_year)
        print ('KEY:', indices_key)
        print (title)

        print fieldnames
        print ('fieldnames length:', len(fieldnames))

        subj_total_obj = {}
        worked_at_home_obj = {}
        for i in columns_to_keep[title]['subj_total']:
            print i
            fieldname = fieldnames[i].lstrip('Estimate; Total: - ')
            subj_total_obj[fieldname] = r[i] # sval(r[i], r[i + 1])

        # print subj_total_obj

        # data fields
        for index, col in enumerate(columns_to_keep[title][indices_key]):
            # if first element, it is the worked at home total
            fieldname = 'total' if index == 0 else fieldnames[col].lstrip('Estimate; Total: - Worked at home: - ')

            worked_at_home_obj[fieldname] = r[col] # sval(r[col], r[col + 1])


        state_obj['subj_total'] = subj_total_obj
        state_obj['worked_at_home'] = worked_at_home_obj

        yeardata[state] = state_obj

    return yeardata


def initialize_json_obj():
    years = range(2005,2016)

    with open('states.json', 'rb') as data_file:
        states = json.load(data_file)['states']

    obj = {}
    for y in years:
        obj[str(y)] = states

    return obj

def range_2(start, end):
    return [] if start > end else [start] + range_2(start + 2, end)

def sval(est, moe):
    return {'est': est, 'moe': moe}

if __name__ == '__main__':
    main()
