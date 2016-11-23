import json
import re

def main():
    json_data = open('variables.json')
    data = json.load(json_data)

    code_to_var = {}
    var_to_code = {}
    unique_data = []
    partitioned_data = {}

    for obj in data:
        code_to_var[obj['code']] = {
            'label': obj['label'],
            'normalized_label': normalize_label(obj['label'])
        }
        if not obj['label'] in var_to_code or is_worked_at_home_field(obj['label']) or is_total_field(obj['code']):
            var_to_code[obj['label']] = obj['code']
            unique_data.append(obj)

            # only use estimate values
            if obj['code'].endswith('E'):
                key = desc_to_category(obj['desc'])
                obj_to_push = {
                    'code': obj['code'],
                    'label': obj['label'],
                    'normalized_label': normalize_label(obj['label'])
                }
                # add variables
                if key in partitioned_data:
                    partitioned_data[key]['variables'].append(obj_to_push)
                else:
                    # create variables array and info section
                    partitioned_data[key] = {}
                    partitioned_data[key]['variables'] = [obj_to_push]
                    partitioned_data[key]['info'] = {
                        'desc': obj['desc'],
                        'normalized_desc': normalize_desc(obj['desc']),
                        'code': desc_to_code(obj['desc'])
                    }

    # for key in partitioned_data:
    #     base_code = key['info']['code']
    #     key['variables'].insert(0, {
    #         'code': base_code + '_001E',
    #         'label': 'Total:'
    #     })

    jsonfile = open('variables_unique.json', 'wb')
    out = json.dumps( unique_data, sort_keys=True, indent=4, separators=(',', ': '))
    jsonfile.write(out)

    maps = open('js/mappings.js', 'wb')
    mapstring = ("function c_to_v (c) {\n"
                "var map = " + json.dumps( code_to_var, sort_keys=True, indent=4, separators=(',', ': ')) + "\n"
                "return map[c];\n"
                "}\n")

    mapstring += ("function v_to_c (v) {\n"
                "var map = " + json.dumps( var_to_code, sort_keys=True, indent=4, separators=(',', ': ')) + "\n"
                "return map[v];\n"
                "}\n")

    mapstring += ("var partition = " + json.dumps( partitioned_data, sort_keys=True, indent=4, separators=(',', ': ')) + "\n")

    maps.write(mapstring)

def desc_to_code(str):
    return str.split('.', 1)[0]

def desc_to_category(str):
    str = normalize_desc(str).lower()
    srch_str = 'means of transportation to work'

    split = re.split(' by | for ', str)
    # category = split[1] if len(split) > 1 else str.split(' by ' + srch_str)[0]
    split_strip = []
    for s in split: split_strip.append(re.sub('-{2}', '', s.strip()))

    if srch_str in split_strip: split_strip.remove(srch_str)

    category = ': '.join(split_strip)

    return category

def normalize_desc(str):
    return str.split('.', 1)[1].lstrip().capitalize()

def normalize_label(str):
    srch_str = 'Worked at home'

    split = str.split('!!')
    if split[0].startswith('Margin of Error'):
        split.pop(0)

    if split[0].startswith(srch_str):
        if len(split) > 2:
            label = re.sub('-{2}', '', split[1]) + ' ' + ': '.join(split[2:])
        elif len(split) == 2:
            label = re.sub('-{2}|:', '', split[1])
        else:
            label = re.sub('-{2}|:', '', split[0])
    else:
        label = re.sub('-{2}|:', '', split[0])

    return label.strip().capitalize()

def total_field_code(code):
    return code.split('_')[0] + '_001E'

def is_worked_at_home_field(str):
    return str == 'Worked at home' or str == 'Worked at home:'

def is_total_field(code):
    return code.split('_')[1].startswith('001')


if __name__ == '__main__':
    main()
