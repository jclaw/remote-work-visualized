import csv
import os

columns_to_keep = {
    'age': list(range(5,18)) + list(range(99,114)),
    'class_of_worker': list(range(5,22)) + list(range(123,142)),
    'industry': list(range(5,32)) + list(range(183,212)),
    'median_age': [15,16],
    'occupation': list(range(5,16)) + list(range(87,100)),
    'sex': [35,36,69,70,103,104]
}

directories = [x for x in os.listdir('.') if not x.startswith('.') and x.startswith('ACS_')]
print(directories)

for directory_str in directories:
    title = directory_str.lstrip('ACS_')
    subdirectories = [x for x in os.listdir('./' + directory_str) if not x.startswith('.') and x.startswith('ACS_') and not x.endswith('.zip')]

    for sub_dir_str in subdirectories:
        path = directory_str + '/' + sub_dir_str
        filename = sub_dir_str + '_with_ann.csv'
        new_filename = title + '_' + sub_dir_str[:-11].lstrip('ACS_') + '.csv'

        with open(path + '/' + filename, 'rb') as source:
            rdr = csv.reader( source )
            with open('parsed_data/' + new_filename,'wb') as result:
                wtr = csv.writer( result )
                for r in rdr:
                    rows_to_write = (r[1],r[2],r[3],r[4])
                    for i in columns_to_keep[title]:
                        rows_to_write += (r[i],)
                    wtr.writerow(rows_to_write)
