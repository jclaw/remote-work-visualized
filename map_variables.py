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
        code_to_var[obj['code']] = obj['label']
        if not obj['label'] in var_to_code:
            var_to_code[obj['label']] = obj['code']
            unique_data.append(obj)

            # only use estimate values, and ignore worked at home totals
            if obj['code'].endswith('E') and '!!' in obj['label']:
                key = desc_to_category(obj['desc'])
                obj_to_push = {
                    'code': obj['code'],
                    'label':  obj['label'],
                    'normalized_label': normalize_label(obj['label'])
                }
                if key in partitioned_data:
                    partitioned_data[key]['categories'].append(obj_to_push)
                else:
                    partitioned_data[key] = {}
                    partitioned_data[key]['categories'] = [obj_to_push]
                    partitioned_data[key]['info'] = {
                        'desc': obj['desc'],
                        'normalized_desc': normalize_desc(obj['desc']),
                        'code': desc_to_code(obj['desc'])
                    }
            # desc_to_category(obj['desc'])

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
    return str[:6]

def desc_to_category(str):
    str = normalize_desc(str).lower()
    srch_str = 'means of transportation to work'

    split = str.split(srch_str + ' by ')
    category = split[1] if len(split) > 1 else str.split(' by ' + srch_str)[0]

    return category

def normalize_desc(str):
    return ((str[7:]).lstrip()).capitalize()

def normalize_label(str):
    srch_str = 'Worked at home'

    split = str.split('!!')
    category = split[1] if split[0].startswith(srch_str) else split[0]

    return re.sub('-{2}|:', '', category).strip().capitalize()


if __name__ == '__main__':
    main()
