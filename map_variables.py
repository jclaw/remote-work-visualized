import json

def main():
    json_data = open('variables.json')
    data = json.load(json_data)

    code_to_var = {}
    var_to_code = {}

    new_data = []

    for obj in data:
        code_to_var[obj['code']] = obj['label']
        if not obj['label'] in var_to_code:
            var_to_code[obj['label']] = obj['code']
            new_data.append(obj)
            get_category(obj['desc'])

    jsonfile = open('variables_unique.json', 'wb')
    out = json.dumps( new_data, sort_keys=True, indent=4, separators=(',', ': '))
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

    maps.write(mapstring)

def get_category(str):
    code, str = str[:6], (str[7:]).lstrip()

    str = str.lower()
    srch_str = 'means of transportation to work'

    split = str.split(srch_str + ' by ')
    category = split[1] if len(split) > 1 else str.split(' by ' + srch_str)[0]

    return category

if __name__ == '__main__':
    main()
