function c_to_v (c) {
var map = {
    "B08006_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08006_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08006_017E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08006_017M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08006_034E": {
        "label": "Male:!!Worked at home",
        "normalized_label": "Male"
    },
    "B08006_034M": {
        "label": "Margin of Error for!!Male:!!Worked at home",
        "normalized_label": "Male"
    },
    "B08006_051E": {
        "label": "Female:!!Worked at home",
        "normalized_label": "Female"
    },
    "B08006_051M": {
        "label": "Margin of Error for!!Female:!!Worked at home",
        "normalized_label": "Female"
    },
    "B08101_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08101_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08101_049E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08101_049M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08101_050E": {
        "label": "Worked at home:!!16 to 19 years",
        "normalized_label": "16 to 19 years"
    },
    "B08101_050M": {
        "label": "Margin of Error for!!Worked at home:!!16 to 19 years",
        "normalized_label": "16 to 19 years"
    },
    "B08101_051E": {
        "label": "Worked at home:!!20 to 24 years",
        "normalized_label": "20 to 24 years"
    },
    "B08101_051M": {
        "label": "Margin of Error for!!Worked at home:!!20 to 24 years",
        "normalized_label": "20 to 24 years"
    },
    "B08101_052E": {
        "label": "Worked at home:!!25 to 44 years",
        "normalized_label": "25 to 44 years"
    },
    "B08101_052M": {
        "label": "Margin of Error for!!Worked at home:!!25 to 44 years",
        "normalized_label": "25 to 44 years"
    },
    "B08101_053E": {
        "label": "Worked at home:!!45 to 54 years",
        "normalized_label": "45 to 54 years"
    },
    "B08101_053M": {
        "label": "Margin of Error for!!Worked at home:!!45 to 54 years",
        "normalized_label": "45 to 54 years"
    },
    "B08101_054E": {
        "label": "Worked at home:!!55 to 59 years",
        "normalized_label": "55 to 59 years"
    },
    "B08101_054M": {
        "label": "Margin of Error for!!Worked at home:!!55 to 59 years",
        "normalized_label": "55 to 59 years"
    },
    "B08101_055E": {
        "label": "Worked at home:!!60 to 64 years",
        "normalized_label": "60 to 64 years"
    },
    "B08101_055M": {
        "label": "Margin of Error for!!Worked at home:!!60 to 64 years",
        "normalized_label": "60 to 64 years"
    },
    "B08101_056E": {
        "label": "Worked at home:!!65 years and over",
        "normalized_label": "65 years and over"
    },
    "B08101_056M": {
        "label": "Margin of Error for!!Worked at home:!!65 years and over",
        "normalized_label": "65 years and over"
    },
    "B08103_001E": {
        "label": "Median age --!!Total:",
        "normalized_label": "Median age"
    },
    "B08103_001M": {
        "label": "Margin of Error for!!Median age --!!Total:",
        "normalized_label": "Median age"
    },
    "B08103_007E": {
        "label": "Median age --!! Worked at home",
        "normalized_label": "Median age"
    },
    "B08103_007M": {
        "label": "Margin of Error for!!Median age --!! Worked at home",
        "normalized_label": "Median age"
    },
    "B08105A_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105A_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105A_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105A_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105B_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105B_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105B_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105B_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105C_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105C_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105C_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105C_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105D_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105D_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105D_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105D_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105E_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105E_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105E_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105E_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105F_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105F_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105F_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105F_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105G_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105G_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105G_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105G_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105H_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105H_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105H_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105H_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105I_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08105I_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08105I_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08105I_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08111_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08111_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08111_031E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08111_031M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08111_032E": {
        "label": "Worked at home:!!Native",
        "normalized_label": "Native"
    },
    "B08111_032M": {
        "label": "Margin of Error for!!Worked at home:!!Native",
        "normalized_label": "Native"
    },
    "B08111_033E": {
        "label": "Worked at home:!!Foreign born:",
        "normalized_label": "Foreign born"
    },
    "B08111_033M": {
        "label": "Margin of Error for!!Worked at home:!!Foreign born:",
        "normalized_label": "Foreign born"
    },
    "B08111_034E": {
        "label": "Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
        "normalized_label": "Foreign born: naturalized u.s. citizen"
    },
    "B08111_034M": {
        "label": "Margin of Error for!!Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
        "normalized_label": "Foreign born: naturalized u.s. citizen"
    },
    "B08111_035E": {
        "label": "Worked at home:!!Foreign born:!!Not a U.S. citizen",
        "normalized_label": "Foreign born: not a u.s. citizen"
    },
    "B08111_035M": {
        "label": "Margin of Error for!!Worked at home:!!Foreign born:!!Not a U.S. citizen",
        "normalized_label": "Foreign born: not a u.s. citizen"
    },
    "B08113_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08113_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08113_049E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08113_049M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08113_050E": {
        "label": "Worked at home:!!Speak only English",
        "normalized_label": "Speak only english"
    },
    "B08113_050M": {
        "label": "Margin of Error for!!Worked at home:!!Speak only English",
        "normalized_label": "Speak only english"
    },
    "B08113_051E": {
        "label": "Worked at home:!!Speak Spanish:",
        "normalized_label": "Speak spanish"
    },
    "B08113_051M": {
        "label": "Margin of Error for!!Worked at home:!!Speak Spanish:",
        "normalized_label": "Speak spanish"
    },
    "B08113_052E": {
        "label": "Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
        "normalized_label": "Speak spanish: speak english \"very well\""
    },
    "B08113_052M": {
        "label": "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
        "normalized_label": "Speak spanish: speak english \"very well\""
    },
    "B08113_053E": {
        "label": "Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
        "normalized_label": "Speak spanish: speak english less than \"very well\""
    },
    "B08113_053M": {
        "label": "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
        "normalized_label": "Speak spanish: speak english less than \"very well\""
    },
    "B08113_054E": {
        "label": "Worked at home:!!Speak other languages:",
        "normalized_label": "Speak other languages"
    },
    "B08113_054M": {
        "label": "Margin of Error for!!Worked at home:!!Speak other languages:",
        "normalized_label": "Speak other languages"
    },
    "B08113_055E": {
        "label": "Worked at home:!!Speak other languages:!!Speak English \"very well\"",
        "normalized_label": "Speak other languages: speak english \"very well\""
    },
    "B08113_055M": {
        "label": "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English \"very well\"",
        "normalized_label": "Speak other languages: speak english \"very well\""
    },
    "B08113_056E": {
        "label": "Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
        "normalized_label": "Speak other languages: speak english less than \"very well\""
    },
    "B08113_056M": {
        "label": "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
        "normalized_label": "Speak other languages: speak english less than \"very well\""
    },
    "B08119_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08119_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08119_055E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08119_055M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08119_056E": {
        "label": "Worked at home:!!$1 to $9,999 or loss",
        "normalized_label": "$1 to $9,999 or loss"
    },
    "B08119_056M": {
        "label": "Margin of Error for!!Worked at home:!!$1 to $9,999 or loss",
        "normalized_label": "$1 to $9,999 or loss"
    },
    "B08119_057E": {
        "label": "Worked at home:!!$10,000 to $14,999",
        "normalized_label": "$10,000 to $14,999"
    },
    "B08119_057M": {
        "label": "Margin of Error for!!Worked at home:!!$10,000 to $14,999",
        "normalized_label": "$10,000 to $14,999"
    },
    "B08119_058E": {
        "label": "Worked at home:!!$15,000 to $24,999",
        "normalized_label": "$15,000 to $24,999"
    },
    "B08119_058M": {
        "label": "Margin of Error for!!Worked at home:!!$15,000 to $24,999",
        "normalized_label": "$15,000 to $24,999"
    },
    "B08119_059E": {
        "label": "Worked at home:!!$25,000 to $34,999",
        "normalized_label": "$25,000 to $34,999"
    },
    "B08119_059M": {
        "label": "Margin of Error for!!Worked at home:!!$25,000 to $34,999",
        "normalized_label": "$25,000 to $34,999"
    },
    "B08119_060E": {
        "label": "Worked at home:!!$35,000 to $49,999",
        "normalized_label": "$35,000 to $49,999"
    },
    "B08119_060M": {
        "label": "Margin of Error for!!Worked at home:!!$35,000 to $49,999",
        "normalized_label": "$35,000 to $49,999"
    },
    "B08119_061E": {
        "label": "Worked at home:!!$50,000 to $64,999",
        "normalized_label": "$50,000 to $64,999"
    },
    "B08119_061M": {
        "label": "Margin of Error for!!Worked at home:!!$50,000 to $64,999",
        "normalized_label": "$50,000 to $64,999"
    },
    "B08119_062E": {
        "label": "Worked at home:!!$65,000 to $74,999",
        "normalized_label": "$65,000 to $74,999"
    },
    "B08119_062M": {
        "label": "Margin of Error for!!Worked at home:!!$65,000 to $74,999",
        "normalized_label": "$65,000 to $74,999"
    },
    "B08119_063E": {
        "label": "Worked at home:!!$75,000 or more",
        "normalized_label": "$75,000 or more"
    },
    "B08119_063M": {
        "label": "Margin of Error for!!Worked at home:!!$75,000 or more",
        "normalized_label": "$75,000 or more"
    },
    "B08121_001E": {
        "label": "Median earnings in the past 12 months --!!Total:",
        "normalized_label": "Median earnings in the past 12 months"
    },
    "B08121_001M": {
        "label": "Margin of Error for!!Median earnings in the past 12 months --!!Total:",
        "normalized_label": "Median earnings in the past 12 months"
    },
    "B08121_007E": {
        "label": "Median earnings in the past 12 months --!! Worked at home",
        "normalized_label": "Median earnings in the past 12 months"
    },
    "B08121_007M": {
        "label": "Margin of Error for!!Median earnings in the past 12 months --!! Worked at home",
        "normalized_label": "Median earnings in the past 12 months"
    },
    "B08122_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08122_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08122_025E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08122_025M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08122_026E": {
        "label": "Worked at home:!!Below 100 percent of the poverty level",
        "normalized_label": "Below 100 percent of the poverty level"
    },
    "B08122_026M": {
        "label": "Margin of Error for!!Worked at home:!!Below 100 percent of the poverty level",
        "normalized_label": "Below 100 percent of the poverty level"
    },
    "B08122_027E": {
        "label": "Worked at home:!!100 to 149 percent of the poverty level",
        "normalized_label": "100 to 149 percent of the poverty level"
    },
    "B08122_027M": {
        "label": "Margin of Error for!!Worked at home:!!100 to 149 percent of the poverty level",
        "normalized_label": "100 to 149 percent of the poverty level"
    },
    "B08122_028E": {
        "label": "Worked at home:!!At or above 150 percent of the poverty level",
        "normalized_label": "At or above 150 percent of the poverty level"
    },
    "B08122_028M": {
        "label": "Margin of Error for!!Worked at home:!!At or above 150 percent of the poverty level",
        "normalized_label": "At or above 150 percent of the poverty level"
    },
    "B08124_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08124_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08124_043E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08124_043M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08124_044E": {
        "label": "Worked at home:!!Management, business, science, and arts occupations",
        "normalized_label": "Management, business, science, and arts occupations"
    },
    "B08124_044M": {
        "label": "Margin of Error for!!Worked at home:!!Management, business, science, and arts occupations",
        "normalized_label": "Management, business, science, and arts occupations"
    },
    "B08124_045E": {
        "label": "Worked at home:!!Service occupations",
        "normalized_label": "Service occupations"
    },
    "B08124_045M": {
        "label": "Margin of Error for!!Worked at home:!!Service occupations",
        "normalized_label": "Service occupations"
    },
    "B08124_046E": {
        "label": "Worked at home:!!Sales and office occupations",
        "normalized_label": "Sales and office occupations"
    },
    "B08124_046M": {
        "label": "Margin of Error for!!Worked at home:!!Sales and office occupations",
        "normalized_label": "Sales and office occupations"
    },
    "B08124_047E": {
        "label": "Worked at home:!!Natural resources, construction, and maintenance occupations",
        "normalized_label": "Natural resources, construction, and maintenance occupations"
    },
    "B08124_047M": {
        "label": "Margin of Error for!!Worked at home:!!Natural resources, construction, and maintenance occupations",
        "normalized_label": "Natural resources, construction, and maintenance occupations"
    },
    "B08124_048E": {
        "label": "Worked at home:!!Production, transportation, and material moving occupations",
        "normalized_label": "Production, transportation, and material moving occupations"
    },
    "B08124_048M": {
        "label": "Margin of Error for!!Worked at home:!!Production, transportation, and material moving occupations",
        "normalized_label": "Production, transportation, and material moving occupations"
    },
    "B08124_049E": {
        "label": "Worked at home:!!Military specific occupations",
        "normalized_label": "Military specific occupations"
    },
    "B08124_049M": {
        "label": "Margin of Error for!!Worked at home:!!Military specific occupations",
        "normalized_label": "Military specific occupations"
    },
    "B08126_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08126_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08126_091E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08126_091M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08126_092E": {
        "label": "Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
        "normalized_label": "Agriculture, forestry, fishing and hunting, and mining"
    },
    "B08126_092M": {
        "label": "Margin of Error for!!Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
        "normalized_label": "Agriculture, forestry, fishing and hunting, and mining"
    },
    "B08126_093E": {
        "label": "Worked at home:!!Construction",
        "normalized_label": "Construction"
    },
    "B08126_093M": {
        "label": "Margin of Error for!!Worked at home:!!Construction",
        "normalized_label": "Construction"
    },
    "B08126_094E": {
        "label": "Worked at home:!!Manufacturing",
        "normalized_label": "Manufacturing"
    },
    "B08126_094M": {
        "label": "Margin of Error for!!Worked at home:!!Manufacturing",
        "normalized_label": "Manufacturing"
    },
    "B08126_095E": {
        "label": "Worked at home:!!Wholesale trade",
        "normalized_label": "Wholesale trade"
    },
    "B08126_095M": {
        "label": "Margin of Error for!!Worked at home:!!Wholesale trade",
        "normalized_label": "Wholesale trade"
    },
    "B08126_096E": {
        "label": "Worked at home:!!Retail trade",
        "normalized_label": "Retail trade"
    },
    "B08126_096M": {
        "label": "Margin of Error for!!Worked at home:!!Retail trade",
        "normalized_label": "Retail trade"
    },
    "B08126_097E": {
        "label": "Worked at home:!!Transportation and warehousing, and utilities",
        "normalized_label": "Transportation and warehousing, and utilities"
    },
    "B08126_097M": {
        "label": "Margin of Error for!!Worked at home:!!Transportation and warehousing, and utilities",
        "normalized_label": "Transportation and warehousing, and utilities"
    },
    "B08126_098E": {
        "label": "Worked at home:!!Information",
        "normalized_label": "Information"
    },
    "B08126_098M": {
        "label": "Margin of Error for!!Worked at home:!!Information",
        "normalized_label": "Information"
    },
    "B08126_099E": {
        "label": "Worked at home:!!Finance and insurance, and real estate and rental and leasing",
        "normalized_label": "Finance and insurance, and real estate and rental and leasing"
    },
    "B08126_099M": {
        "label": "Margin of Error for!!Worked at home:!!Finance and insurance, and real estate and rental and leasing",
        "normalized_label": "Finance and insurance, and real estate and rental and leasing"
    },
    "B08126_100E": {
        "label": "Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
        "normalized_label": "Professional, scientific, and management, and administrative and waste management services"
    },
    "B08126_100M": {
        "label": "Margin of Error for!!Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
        "normalized_label": "Professional, scientific, and management, and administrative and waste management services"
    },
    "B08126_101E": {
        "label": "Worked at home:!!Educational services, and health care and social assistance",
        "normalized_label": "Educational services, and health care and social assistance"
    },
    "B08126_101M": {
        "label": "Margin of Error for!!Worked at home:!!Educational services, and health care and social assistance",
        "normalized_label": "Educational services, and health care and social assistance"
    },
    "B08126_102E": {
        "label": "Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
        "normalized_label": "Arts, entertainment, and recreation, and accommodation and food services"
    },
    "B08126_102M": {
        "label": "Margin of Error for!!Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
        "normalized_label": "Arts, entertainment, and recreation, and accommodation and food services"
    },
    "B08126_103E": {
        "label": "Worked at home:!!Other services (except public administration)",
        "normalized_label": "Other services (except public administration)"
    },
    "B08126_103M": {
        "label": "Margin of Error for!!Worked at home:!!Other services (except public administration)",
        "normalized_label": "Other services (except public administration)"
    },
    "B08126_104E": {
        "label": "Worked at home:!!Public administration",
        "normalized_label": "Public administration"
    },
    "B08126_104M": {
        "label": "Margin of Error for!!Worked at home:!!Public administration",
        "normalized_label": "Public administration"
    },
    "B08126_105E": {
        "label": "Worked at home:!!Armed forces",
        "normalized_label": "Armed forces"
    },
    "B08126_105M": {
        "label": "Margin of Error for!!Worked at home:!!Armed forces",
        "normalized_label": "Armed forces"
    },
    "B08128_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08128_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08128_061E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08128_061M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08128_062E": {
        "label": "Worked at home:!!Private for-profit wage and salary workers:",
        "normalized_label": "Private for-profit wage and salary workers"
    },
    "B08128_062M": {
        "label": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:",
        "normalized_label": "Private for-profit wage and salary workers"
    },
    "B08128_063E": {
        "label": "Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
        "normalized_label": "Private for-profit wage and salary workers: employee of private company workers"
    },
    "B08128_063M": {
        "label": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
        "normalized_label": "Private for-profit wage and salary workers: employee of private company workers"
    },
    "B08128_064E": {
        "label": "Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
        "normalized_label": "Private for-profit wage and salary workers: self-employed in own incorporated business workers"
    },
    "B08128_064M": {
        "label": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
        "normalized_label": "Private for-profit wage and salary workers: self-employed in own incorporated business workers"
    },
    "B08128_065E": {
        "label": "Worked at home:!!Private not-for-profit wage and salary workers",
        "normalized_label": "Private not-for-profit wage and salary workers"
    },
    "B08128_065M": {
        "label": "Margin of Error for!!Worked at home:!!Private not-for-profit wage and salary workers",
        "normalized_label": "Private not-for-profit wage and salary workers"
    },
    "B08128_066E": {
        "label": "Worked at home:!!Local government workers",
        "normalized_label": "Local government workers"
    },
    "B08128_066M": {
        "label": "Margin of Error for!!Worked at home:!!Local government workers",
        "normalized_label": "Local government workers"
    },
    "B08128_067E": {
        "label": "Worked at home:!!State government workers",
        "normalized_label": "State government workers"
    },
    "B08128_067M": {
        "label": "Margin of Error for!!Worked at home:!!State government workers",
        "normalized_label": "State government workers"
    },
    "B08128_068E": {
        "label": "Worked at home:!!Federal government workers",
        "normalized_label": "Federal government workers"
    },
    "B08128_068M": {
        "label": "Margin of Error for!!Worked at home:!!Federal government workers",
        "normalized_label": "Federal government workers"
    },
    "B08128_069E": {
        "label": "Worked at home:!!Self-employed in own not incorporated business workers",
        "normalized_label": "Self-employed in own not incorporated business workers"
    },
    "B08128_069M": {
        "label": "Margin of Error for!!Worked at home:!!Self-employed in own not incorporated business workers",
        "normalized_label": "Self-employed in own not incorporated business workers"
    },
    "B08128_070E": {
        "label": "Worked at home:!!Unpaid family workers",
        "normalized_label": "Unpaid family workers"
    },
    "B08128_070M": {
        "label": "Margin of Error for!!Worked at home:!!Unpaid family workers",
        "normalized_label": "Unpaid family workers"
    },
    "B08130_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08130_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08130_031E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08130_031M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08137_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08137_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08137_019E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08137_019M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08137_020E": {
        "label": "Worked at home:!!Householder lived in owner-occupied housing units",
        "normalized_label": "Householder lived in owner-occupied housing units"
    },
    "B08137_020M": {
        "label": "Margin of Error for!!Worked at home:!!Householder lived in owner-occupied housing units",
        "normalized_label": "Householder lived in owner-occupied housing units"
    },
    "B08137_021E": {
        "label": "Worked at home:!!Householder lived in renter-occupied housing units",
        "normalized_label": "Householder lived in renter-occupied housing units"
    },
    "B08137_021M": {
        "label": "Margin of Error for!!Worked at home:!!Householder lived in renter-occupied housing units",
        "normalized_label": "Householder lived in renter-occupied housing units"
    },
    "B08141_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08141_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08141_031E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08141_031M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08141_032E": {
        "label": "Worked at home:!!No vehicle available",
        "normalized_label": "No vehicle available"
    },
    "B08141_032M": {
        "label": "Margin of Error for!!Worked at home:!!No vehicle available",
        "normalized_label": "No vehicle available"
    },
    "B08141_033E": {
        "label": "Worked at home:!!1 vehicle available",
        "normalized_label": "1 vehicle available"
    },
    "B08141_033M": {
        "label": "Margin of Error for!!Worked at home:!!1 vehicle available",
        "normalized_label": "1 vehicle available"
    },
    "B08141_034E": {
        "label": "Worked at home:!!2 vehicles available",
        "normalized_label": "2 vehicles available"
    },
    "B08141_034M": {
        "label": "Margin of Error for!!Worked at home:!!2 vehicles available",
        "normalized_label": "2 vehicles available"
    },
    "B08141_035E": {
        "label": "Worked at home:!!3 or more vehicles available",
        "normalized_label": "3 or more vehicles available"
    },
    "B08141_035M": {
        "label": "Margin of Error for!!Worked at home:!!3 or more vehicles available",
        "normalized_label": "3 or more vehicles available"
    },
    "B08301_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08301_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08301_021E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08301_021M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08406_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08406_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08406_017E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08406_017M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08406_034E": {
        "label": "Male:!!Worked at home",
        "normalized_label": "Male"
    },
    "B08406_034M": {
        "label": "Margin of Error for!!Male:!!Worked at home",
        "normalized_label": "Male"
    },
    "B08406_051E": {
        "label": "Female:!!Worked at home",
        "normalized_label": "Female"
    },
    "B08406_051M": {
        "label": "Margin of Error for!!Female:!!Worked at home",
        "normalized_label": "Female"
    },
    "B08501_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08501_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08501_049E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08501_049M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08501_050E": {
        "label": "Worked at home:!!16 to 19 years",
        "normalized_label": "16 to 19 years"
    },
    "B08501_050M": {
        "label": "Margin of Error for!!Worked at home:!!16 to 19 years",
        "normalized_label": "16 to 19 years"
    },
    "B08501_051E": {
        "label": "Worked at home:!!20 to 24 years",
        "normalized_label": "20 to 24 years"
    },
    "B08501_051M": {
        "label": "Margin of Error for!!Worked at home:!!20 to 24 years",
        "normalized_label": "20 to 24 years"
    },
    "B08501_052E": {
        "label": "Worked at home:!!25 to 44 years",
        "normalized_label": "25 to 44 years"
    },
    "B08501_052M": {
        "label": "Margin of Error for!!Worked at home:!!25 to 44 years",
        "normalized_label": "25 to 44 years"
    },
    "B08501_053E": {
        "label": "Worked at home:!!45 to 54 years",
        "normalized_label": "45 to 54 years"
    },
    "B08501_053M": {
        "label": "Margin of Error for!!Worked at home:!!45 to 54 years",
        "normalized_label": "45 to 54 years"
    },
    "B08501_054E": {
        "label": "Worked at home:!!55 to 59 years",
        "normalized_label": "55 to 59 years"
    },
    "B08501_054M": {
        "label": "Margin of Error for!!Worked at home:!!55 to 59 years",
        "normalized_label": "55 to 59 years"
    },
    "B08501_055E": {
        "label": "Worked at home:!!60 to 64 years",
        "normalized_label": "60 to 64 years"
    },
    "B08501_055M": {
        "label": "Margin of Error for!!Worked at home:!!60 to 64 years",
        "normalized_label": "60 to 64 years"
    },
    "B08501_056E": {
        "label": "Worked at home:!!65 years and over",
        "normalized_label": "65 years and over"
    },
    "B08501_056M": {
        "label": "Margin of Error for!!Worked at home:!!65 years and over",
        "normalized_label": "65 years and over"
    },
    "B08503_001E": {
        "label": "Median age --!!Total:",
        "normalized_label": "Median age"
    },
    "B08503_001M": {
        "label": "Margin of Error for!!Median age --!!Total:",
        "normalized_label": "Median age"
    },
    "B08503_007E": {
        "label": "Median age --!! Worked at home",
        "normalized_label": "Median age"
    },
    "B08503_007M": {
        "label": "Margin of Error for!!Median age --!! Worked at home",
        "normalized_label": "Median age"
    },
    "B08505A_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505A_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505A_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505A_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505B_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505B_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505B_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505B_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505C_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505C_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505C_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505C_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505D_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505D_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505D_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505D_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505E_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505E_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505E_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505E_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505F_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505F_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505F_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505F_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505G_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505G_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505G_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505G_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505H_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505H_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505H_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505H_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505I_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08505I_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08505I_007E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08505I_007M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08511_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08511_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08511_031E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08511_031M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08511_032E": {
        "label": "Worked at home:!!Native",
        "normalized_label": "Native"
    },
    "B08511_032M": {
        "label": "Margin of Error for!!Worked at home:!!Native",
        "normalized_label": "Native"
    },
    "B08511_033E": {
        "label": "Worked at home:!!Foreign born:",
        "normalized_label": "Foreign born"
    },
    "B08511_033M": {
        "label": "Margin of Error for!!Worked at home:!!Foreign born:",
        "normalized_label": "Foreign born"
    },
    "B08511_034E": {
        "label": "Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
        "normalized_label": "Foreign born: naturalized u.s. citizen"
    },
    "B08511_034M": {
        "label": "Margin of Error for!!Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
        "normalized_label": "Foreign born: naturalized u.s. citizen"
    },
    "B08511_035E": {
        "label": "Worked at home:!!Foreign born:!!Not a U.S. citizen",
        "normalized_label": "Foreign born: not a u.s. citizen"
    },
    "B08511_035M": {
        "label": "Margin of Error for!!Worked at home:!!Foreign born:!!Not a U.S. citizen",
        "normalized_label": "Foreign born: not a u.s. citizen"
    },
    "B08513_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08513_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08513_049E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08513_049M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08513_050E": {
        "label": "Worked at home:!!Speak only English",
        "normalized_label": "Speak only english"
    },
    "B08513_050M": {
        "label": "Margin of Error for!!Worked at home:!!Speak only English",
        "normalized_label": "Speak only english"
    },
    "B08513_051E": {
        "label": "Worked at home:!!Speak Spanish:",
        "normalized_label": "Speak spanish"
    },
    "B08513_051M": {
        "label": "Margin of Error for!!Worked at home:!!Speak Spanish:",
        "normalized_label": "Speak spanish"
    },
    "B08513_052E": {
        "label": "Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
        "normalized_label": "Speak spanish: speak english \"very well\""
    },
    "B08513_052M": {
        "label": "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
        "normalized_label": "Speak spanish: speak english \"very well\""
    },
    "B08513_053E": {
        "label": "Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
        "normalized_label": "Speak spanish: speak english less than \"very well\""
    },
    "B08513_053M": {
        "label": "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
        "normalized_label": "Speak spanish: speak english less than \"very well\""
    },
    "B08513_054E": {
        "label": "Worked at home:!!Speak other languages:",
        "normalized_label": "Speak other languages"
    },
    "B08513_054M": {
        "label": "Margin of Error for!!Worked at home:!!Speak other languages:",
        "normalized_label": "Speak other languages"
    },
    "B08513_055E": {
        "label": "Worked at home:!!Speak other languages:!!Speak English \"very well\"",
        "normalized_label": "Speak other languages: speak english \"very well\""
    },
    "B08513_055M": {
        "label": "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English \"very well\"",
        "normalized_label": "Speak other languages: speak english \"very well\""
    },
    "B08513_056E": {
        "label": "Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
        "normalized_label": "Speak other languages: speak english less than \"very well\""
    },
    "B08513_056M": {
        "label": "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
        "normalized_label": "Speak other languages: speak english less than \"very well\""
    },
    "B08519_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08519_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08519_055E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08519_055M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08519_056E": {
        "label": "Worked at home:!!$1 to $9,999 or loss",
        "normalized_label": "$1 to $9,999 or loss"
    },
    "B08519_056M": {
        "label": "Margin of Error for!!Worked at home:!!$1 to $9,999 or loss",
        "normalized_label": "$1 to $9,999 or loss"
    },
    "B08519_057E": {
        "label": "Worked at home:!!$10,000 to $14,999",
        "normalized_label": "$10,000 to $14,999"
    },
    "B08519_057M": {
        "label": "Margin of Error for!!Worked at home:!!$10,000 to $14,999",
        "normalized_label": "$10,000 to $14,999"
    },
    "B08519_058E": {
        "label": "Worked at home:!!$15,000 to $24,999",
        "normalized_label": "$15,000 to $24,999"
    },
    "B08519_058M": {
        "label": "Margin of Error for!!Worked at home:!!$15,000 to $24,999",
        "normalized_label": "$15,000 to $24,999"
    },
    "B08519_059E": {
        "label": "Worked at home:!!$25,000 to $34,999",
        "normalized_label": "$25,000 to $34,999"
    },
    "B08519_059M": {
        "label": "Margin of Error for!!Worked at home:!!$25,000 to $34,999",
        "normalized_label": "$25,000 to $34,999"
    },
    "B08519_060E": {
        "label": "Worked at home:!!$35,000 to $49,999",
        "normalized_label": "$35,000 to $49,999"
    },
    "B08519_060M": {
        "label": "Margin of Error for!!Worked at home:!!$35,000 to $49,999",
        "normalized_label": "$35,000 to $49,999"
    },
    "B08519_061E": {
        "label": "Worked at home:!!$50,000 to $64,999",
        "normalized_label": "$50,000 to $64,999"
    },
    "B08519_061M": {
        "label": "Margin of Error for!!Worked at home:!!$50,000 to $64,999",
        "normalized_label": "$50,000 to $64,999"
    },
    "B08519_062E": {
        "label": "Worked at home:!!$65,000 to $74,999",
        "normalized_label": "$65,000 to $74,999"
    },
    "B08519_062M": {
        "label": "Margin of Error for!!Worked at home:!!$65,000 to $74,999",
        "normalized_label": "$65,000 to $74,999"
    },
    "B08519_063E": {
        "label": "Worked at home:!!$75,000 or more",
        "normalized_label": "$75,000 or more"
    },
    "B08519_063M": {
        "label": "Margin of Error for!!Worked at home:!!$75,000 or more",
        "normalized_label": "$75,000 or more"
    },
    "B08521_001E": {
        "label": "Median earnings in the past 12 months --!!Total:",
        "normalized_label": "Median earnings in the past 12 months"
    },
    "B08521_001M": {
        "label": "Margin of Error for!!Median earnings in the past 12 months --!!Total:",
        "normalized_label": "Median earnings in the past 12 months"
    },
    "B08521_007E": {
        "label": "Median earnings in the past 12 months --!! Worked at home",
        "normalized_label": "Median earnings in the past 12 months"
    },
    "B08521_007M": {
        "label": "Margin of Error for!!Median earnings in the past 12 months --!! Worked at home",
        "normalized_label": "Median earnings in the past 12 months"
    },
    "B08522_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08522_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08522_025E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08522_025M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08522_026E": {
        "label": "Worked at home:!!Below 100 percent of the poverty level",
        "normalized_label": "Below 100 percent of the poverty level"
    },
    "B08522_026M": {
        "label": "Margin of Error for!!Worked at home:!!Below 100 percent of the poverty level",
        "normalized_label": "Below 100 percent of the poverty level"
    },
    "B08522_027E": {
        "label": "Worked at home:!!100 to 149 percent of the poverty level",
        "normalized_label": "100 to 149 percent of the poverty level"
    },
    "B08522_027M": {
        "label": "Margin of Error for!!Worked at home:!!100 to 149 percent of the poverty level",
        "normalized_label": "100 to 149 percent of the poverty level"
    },
    "B08522_028E": {
        "label": "Worked at home:!!At or above 150 percent of the poverty level",
        "normalized_label": "At or above 150 percent of the poverty level"
    },
    "B08522_028M": {
        "label": "Margin of Error for!!Worked at home:!!At or above 150 percent of the poverty level",
        "normalized_label": "At or above 150 percent of the poverty level"
    },
    "B08524_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08524_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08524_043E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08524_043M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08524_044E": {
        "label": "Worked at home:!!Management, business, science, and arts occupations",
        "normalized_label": "Management, business, science, and arts occupations"
    },
    "B08524_044M": {
        "label": "Margin of Error for!!Worked at home:!!Management, business, science, and arts occupations",
        "normalized_label": "Management, business, science, and arts occupations"
    },
    "B08524_045E": {
        "label": "Worked at home:!!Service occupations",
        "normalized_label": "Service occupations"
    },
    "B08524_045M": {
        "label": "Margin of Error for!!Worked at home:!!Service occupations",
        "normalized_label": "Service occupations"
    },
    "B08524_046E": {
        "label": "Worked at home:!!Sales and office occupations",
        "normalized_label": "Sales and office occupations"
    },
    "B08524_046M": {
        "label": "Margin of Error for!!Worked at home:!!Sales and office occupations",
        "normalized_label": "Sales and office occupations"
    },
    "B08524_047E": {
        "label": "Worked at home:!!Natural resources, construction, and maintenance occupations",
        "normalized_label": "Natural resources, construction, and maintenance occupations"
    },
    "B08524_047M": {
        "label": "Margin of Error for!!Worked at home:!!Natural resources, construction, and maintenance occupations",
        "normalized_label": "Natural resources, construction, and maintenance occupations"
    },
    "B08524_048E": {
        "label": "Worked at home:!!Production, transportation, and material moving occupations",
        "normalized_label": "Production, transportation, and material moving occupations"
    },
    "B08524_048M": {
        "label": "Margin of Error for!!Worked at home:!!Production, transportation, and material moving occupations",
        "normalized_label": "Production, transportation, and material moving occupations"
    },
    "B08524_049E": {
        "label": "Worked at home:!!Military specific occupations",
        "normalized_label": "Military specific occupations"
    },
    "B08524_049M": {
        "label": "Margin of Error for!!Worked at home:!!Military specific occupations",
        "normalized_label": "Military specific occupations"
    },
    "B08526_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08526_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08526_091E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08526_091M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08526_092E": {
        "label": "Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
        "normalized_label": "Agriculture, forestry, fishing and hunting, and mining"
    },
    "B08526_092M": {
        "label": "Margin of Error for!!Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
        "normalized_label": "Agriculture, forestry, fishing and hunting, and mining"
    },
    "B08526_093E": {
        "label": "Worked at home:!!Construction",
        "normalized_label": "Construction"
    },
    "B08526_093M": {
        "label": "Margin of Error for!!Worked at home:!!Construction",
        "normalized_label": "Construction"
    },
    "B08526_094E": {
        "label": "Worked at home:!!Manufacturing",
        "normalized_label": "Manufacturing"
    },
    "B08526_094M": {
        "label": "Margin of Error for!!Worked at home:!!Manufacturing",
        "normalized_label": "Manufacturing"
    },
    "B08526_095E": {
        "label": "Worked at home:!!Wholesale trade",
        "normalized_label": "Wholesale trade"
    },
    "B08526_095M": {
        "label": "Margin of Error for!!Worked at home:!!Wholesale trade",
        "normalized_label": "Wholesale trade"
    },
    "B08526_096E": {
        "label": "Worked at home:!!Retail trade",
        "normalized_label": "Retail trade"
    },
    "B08526_096M": {
        "label": "Margin of Error for!!Worked at home:!!Retail trade",
        "normalized_label": "Retail trade"
    },
    "B08526_097E": {
        "label": "Worked at home:!!Transportation and warehousing, and utilities",
        "normalized_label": "Transportation and warehousing, and utilities"
    },
    "B08526_097M": {
        "label": "Margin of Error for!!Worked at home:!!Transportation and warehousing, and utilities",
        "normalized_label": "Transportation and warehousing, and utilities"
    },
    "B08526_098E": {
        "label": "Worked at home:!!Information",
        "normalized_label": "Information"
    },
    "B08526_098M": {
        "label": "Margin of Error for!!Worked at home:!!Information",
        "normalized_label": "Information"
    },
    "B08526_099E": {
        "label": "Worked at home:!!Finance and insurance, and real estate and rental and leasing",
        "normalized_label": "Finance and insurance, and real estate and rental and leasing"
    },
    "B08526_099M": {
        "label": "Margin of Error for!!Worked at home:!!Finance and insurance, and real estate and rental and leasing",
        "normalized_label": "Finance and insurance, and real estate and rental and leasing"
    },
    "B08526_100E": {
        "label": "Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
        "normalized_label": "Professional, scientific, and management, and administrative and waste management services"
    },
    "B08526_100M": {
        "label": "Margin of Error for!!Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
        "normalized_label": "Professional, scientific, and management, and administrative and waste management services"
    },
    "B08526_101E": {
        "label": "Worked at home:!!Educational services, and health care and social assistance",
        "normalized_label": "Educational services, and health care and social assistance"
    },
    "B08526_101M": {
        "label": "Margin of Error for!!Worked at home:!!Educational services, and health care and social assistance",
        "normalized_label": "Educational services, and health care and social assistance"
    },
    "B08526_102E": {
        "label": "Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
        "normalized_label": "Arts, entertainment, and recreation, and accommodation and food services"
    },
    "B08526_102M": {
        "label": "Margin of Error for!!Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
        "normalized_label": "Arts, entertainment, and recreation, and accommodation and food services"
    },
    "B08526_103E": {
        "label": "Worked at home:!!Other services (except public administration)",
        "normalized_label": "Other services (except public administration)"
    },
    "B08526_103M": {
        "label": "Margin of Error for!!Worked at home:!!Other services (except public administration)",
        "normalized_label": "Other services (except public administration)"
    },
    "B08526_104E": {
        "label": "Worked at home:!!Public administration",
        "normalized_label": "Public administration"
    },
    "B08526_104M": {
        "label": "Margin of Error for!!Worked at home:!!Public administration",
        "normalized_label": "Public administration"
    },
    "B08526_105E": {
        "label": "Worked at home:!!Armed forces",
        "normalized_label": "Armed forces"
    },
    "B08526_105M": {
        "label": "Margin of Error for!!Worked at home:!!Armed forces",
        "normalized_label": "Armed forces"
    },
    "B08528_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08528_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08528_061E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08528_061M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08528_062E": {
        "label": "Worked at home:!!Private for-profit wage and salary workers:",
        "normalized_label": "Private for-profit wage and salary workers"
    },
    "B08528_062M": {
        "label": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:",
        "normalized_label": "Private for-profit wage and salary workers"
    },
    "B08528_063E": {
        "label": "Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
        "normalized_label": "Private for-profit wage and salary workers: employee of private company workers"
    },
    "B08528_063M": {
        "label": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
        "normalized_label": "Private for-profit wage and salary workers: employee of private company workers"
    },
    "B08528_064E": {
        "label": "Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
        "normalized_label": "Private for-profit wage and salary workers: self-employed in own incorporated business workers"
    },
    "B08528_064M": {
        "label": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
        "normalized_label": "Private for-profit wage and salary workers: self-employed in own incorporated business workers"
    },
    "B08528_065E": {
        "label": "Worked at home:!!Private not-for-profit wage and salary workers",
        "normalized_label": "Private not-for-profit wage and salary workers"
    },
    "B08528_065M": {
        "label": "Margin of Error for!!Worked at home:!!Private not-for-profit wage and salary workers",
        "normalized_label": "Private not-for-profit wage and salary workers"
    },
    "B08528_066E": {
        "label": "Worked at home:!!Local government workers",
        "normalized_label": "Local government workers"
    },
    "B08528_066M": {
        "label": "Margin of Error for!!Worked at home:!!Local government workers",
        "normalized_label": "Local government workers"
    },
    "B08528_067E": {
        "label": "Worked at home:!!State government workers",
        "normalized_label": "State government workers"
    },
    "B08528_067M": {
        "label": "Margin of Error for!!Worked at home:!!State government workers",
        "normalized_label": "State government workers"
    },
    "B08528_068E": {
        "label": "Worked at home:!!Federal government workers",
        "normalized_label": "Federal government workers"
    },
    "B08528_068M": {
        "label": "Margin of Error for!!Worked at home:!!Federal government workers",
        "normalized_label": "Federal government workers"
    },
    "B08528_069E": {
        "label": "Worked at home:!!Self-employed in own not incorporated business workers",
        "normalized_label": "Self-employed in own not incorporated business workers"
    },
    "B08528_069M": {
        "label": "Margin of Error for!!Worked at home:!!Self-employed in own not incorporated business workers",
        "normalized_label": "Self-employed in own not incorporated business workers"
    },
    "B08528_070E": {
        "label": "Worked at home:!!Unpaid family workers",
        "normalized_label": "Unpaid family workers"
    },
    "B08528_070M": {
        "label": "Margin of Error for!!Worked at home:!!Unpaid family workers",
        "normalized_label": "Unpaid family workers"
    },
    "B08537_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08537_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08537_019E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08537_019M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08537_020E": {
        "label": "Worked at home:!!Householder lived in owner-occupied housing units",
        "normalized_label": "Householder lived in owner-occupied housing units"
    },
    "B08537_020M": {
        "label": "Margin of Error for!!Worked at home:!!Householder lived in owner-occupied housing units",
        "normalized_label": "Householder lived in owner-occupied housing units"
    },
    "B08537_021E": {
        "label": "Worked at home:!!Householder lived in renter-occupied housing units",
        "normalized_label": "Householder lived in renter-occupied housing units"
    },
    "B08537_021M": {
        "label": "Margin of Error for!!Worked at home:!!Householder lived in renter-occupied housing units",
        "normalized_label": "Householder lived in renter-occupied housing units"
    },
    "B08541_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08541_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08541_031E": {
        "label": "Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08541_031M": {
        "label": "Margin of Error for!!Worked at home:",
        "normalized_label": "Worked at home"
    },
    "B08541_032E": {
        "label": "Worked at home:!!No vehicle available",
        "normalized_label": "No vehicle available"
    },
    "B08541_032M": {
        "label": "Margin of Error for!!Worked at home:!!No vehicle available",
        "normalized_label": "No vehicle available"
    },
    "B08541_033E": {
        "label": "Worked at home:!!1 vehicle available",
        "normalized_label": "1 vehicle available"
    },
    "B08541_033M": {
        "label": "Margin of Error for!!Worked at home:!!1 vehicle available",
        "normalized_label": "1 vehicle available"
    },
    "B08541_034E": {
        "label": "Worked at home:!!2 vehicles available",
        "normalized_label": "2 vehicles available"
    },
    "B08541_034M": {
        "label": "Margin of Error for!!Worked at home:!!2 vehicles available",
        "normalized_label": "2 vehicles available"
    },
    "B08541_035E": {
        "label": "Worked at home:!!3 or more vehicles available",
        "normalized_label": "3 or more vehicles available"
    },
    "B08541_035M": {
        "label": "Margin of Error for!!Worked at home:!!3 or more vehicles available",
        "normalized_label": "3 or more vehicles available"
    },
    "B08601_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B08601_001M": {
        "label": "Margin of Error for!!Total:",
        "normalized_label": "Total"
    },
    "B08601_021E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B08601_021M": {
        "label": "Margin of Error for!!Worked at home",
        "normalized_label": "Worked at home"
    },
    "B99083_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B99083_005E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B99084_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B99084_005E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B99087_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B99087_005E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    },
    "B99088_001E": {
        "label": "Total:",
        "normalized_label": "Total"
    },
    "B99088_005E": {
        "label": "Worked at home",
        "normalized_label": "Worked at home"
    }
}
return map[c];
}
function v_to_c (v) {
var map = {
    "Female:!!Worked at home": "B08006_051E",
    "Male:!!Worked at home": "B08006_034E",
    "Margin of Error for!!Female:!!Worked at home": "B08006_051M",
    "Margin of Error for!!Male:!!Worked at home": "B08006_034M",
    "Margin of Error for!!Median age --!! Worked at home": "B08103_007M",
    "Margin of Error for!!Median age --!!Total:": "B08503_001M",
    "Margin of Error for!!Median earnings in the past 12 months --!! Worked at home": "B08121_007M",
    "Margin of Error for!!Median earnings in the past 12 months --!!Total:": "B08521_001M",
    "Margin of Error for!!Total:": "B08601_001M",
    "Margin of Error for!!Worked at home": "B08006_017M",
    "Margin of Error for!!Worked at home:": "B08101_049M",
    "Margin of Error for!!Worked at home:!!$1 to $9,999 or loss": "B08119_056M",
    "Margin of Error for!!Worked at home:!!$10,000 to $14,999": "B08119_057M",
    "Margin of Error for!!Worked at home:!!$15,000 to $24,999": "B08119_058M",
    "Margin of Error for!!Worked at home:!!$25,000 to $34,999": "B08119_059M",
    "Margin of Error for!!Worked at home:!!$35,000 to $49,999": "B08119_060M",
    "Margin of Error for!!Worked at home:!!$50,000 to $64,999": "B08119_061M",
    "Margin of Error for!!Worked at home:!!$65,000 to $74,999": "B08119_062M",
    "Margin of Error for!!Worked at home:!!$75,000 or more": "B08119_063M",
    "Margin of Error for!!Worked at home:!!1 vehicle available": "B08141_033M",
    "Margin of Error for!!Worked at home:!!100 to 149 percent of the poverty level": "B08122_027M",
    "Margin of Error for!!Worked at home:!!16 to 19 years": "B08101_050M",
    "Margin of Error for!!Worked at home:!!2 vehicles available": "B08141_034M",
    "Margin of Error for!!Worked at home:!!20 to 24 years": "B08101_051M",
    "Margin of Error for!!Worked at home:!!25 to 44 years": "B08101_052M",
    "Margin of Error for!!Worked at home:!!3 or more vehicles available": "B08141_035M",
    "Margin of Error for!!Worked at home:!!45 to 54 years": "B08101_053M",
    "Margin of Error for!!Worked at home:!!55 to 59 years": "B08101_054M",
    "Margin of Error for!!Worked at home:!!60 to 64 years": "B08101_055M",
    "Margin of Error for!!Worked at home:!!65 years and over": "B08101_056M",
    "Margin of Error for!!Worked at home:!!Agriculture, forestry, fishing and hunting, and mining": "B08126_092M",
    "Margin of Error for!!Worked at home:!!Armed forces": "B08126_105M",
    "Margin of Error for!!Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services": "B08126_102M",
    "Margin of Error for!!Worked at home:!!At or above 150 percent of the poverty level": "B08122_028M",
    "Margin of Error for!!Worked at home:!!Below 100 percent of the poverty level": "B08122_026M",
    "Margin of Error for!!Worked at home:!!Construction": "B08126_093M",
    "Margin of Error for!!Worked at home:!!Educational services, and health care and social assistance": "B08126_101M",
    "Margin of Error for!!Worked at home:!!Federal government workers": "B08128_068M",
    "Margin of Error for!!Worked at home:!!Finance and insurance, and real estate and rental and leasing": "B08126_099M",
    "Margin of Error for!!Worked at home:!!Foreign born:": "B08111_033M",
    "Margin of Error for!!Worked at home:!!Foreign born:!!Naturalized U.S. citizen": "B08111_034M",
    "Margin of Error for!!Worked at home:!!Foreign born:!!Not a U.S. citizen": "B08111_035M",
    "Margin of Error for!!Worked at home:!!Householder lived in owner-occupied housing units": "B08137_020M",
    "Margin of Error for!!Worked at home:!!Householder lived in renter-occupied housing units": "B08137_021M",
    "Margin of Error for!!Worked at home:!!Information": "B08126_098M",
    "Margin of Error for!!Worked at home:!!Local government workers": "B08128_066M",
    "Margin of Error for!!Worked at home:!!Management, business, science, and arts occupations": "B08124_044M",
    "Margin of Error for!!Worked at home:!!Manufacturing": "B08126_094M",
    "Margin of Error for!!Worked at home:!!Military specific occupations": "B08124_049M",
    "Margin of Error for!!Worked at home:!!Native": "B08111_032M",
    "Margin of Error for!!Worked at home:!!Natural resources, construction, and maintenance occupations": "B08124_047M",
    "Margin of Error for!!Worked at home:!!No vehicle available": "B08141_032M",
    "Margin of Error for!!Worked at home:!!Other services (except public administration)": "B08126_103M",
    "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:": "B08128_062M",
    "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers": "B08128_063M",
    "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers": "B08128_064M",
    "Margin of Error for!!Worked at home:!!Private not-for-profit wage and salary workers": "B08128_065M",
    "Margin of Error for!!Worked at home:!!Production, transportation, and material moving occupations": "B08124_048M",
    "Margin of Error for!!Worked at home:!!Professional, scientific, and management, and administrative and waste management services": "B08126_100M",
    "Margin of Error for!!Worked at home:!!Public administration": "B08126_104M",
    "Margin of Error for!!Worked at home:!!Retail trade": "B08126_096M",
    "Margin of Error for!!Worked at home:!!Sales and office occupations": "B08124_046M",
    "Margin of Error for!!Worked at home:!!Self-employed in own not incorporated business workers": "B08128_069M",
    "Margin of Error for!!Worked at home:!!Service occupations": "B08124_045M",
    "Margin of Error for!!Worked at home:!!Speak Spanish:": "B08113_051M",
    "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English \"very well\"": "B08113_052M",
    "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"": "B08113_053M",
    "Margin of Error for!!Worked at home:!!Speak only English": "B08113_050M",
    "Margin of Error for!!Worked at home:!!Speak other languages:": "B08113_054M",
    "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English \"very well\"": "B08113_055M",
    "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English less than \"very well\"": "B08113_056M",
    "Margin of Error for!!Worked at home:!!State government workers": "B08128_067M",
    "Margin of Error for!!Worked at home:!!Transportation and warehousing, and utilities": "B08126_097M",
    "Margin of Error for!!Worked at home:!!Unpaid family workers": "B08128_070M",
    "Margin of Error for!!Worked at home:!!Wholesale trade": "B08126_095M",
    "Median age --!! Worked at home": "B08103_007E",
    "Median age --!!Total:": "B08503_001E",
    "Median earnings in the past 12 months --!! Worked at home": "B08121_007E",
    "Median earnings in the past 12 months --!!Total:": "B08521_001E",
    "Total:": "B99088_001E",
    "Worked at home": "B99088_005E",
    "Worked at home:": "B08541_031E",
    "Worked at home:!!$1 to $9,999 or loss": "B08119_056E",
    "Worked at home:!!$10,000 to $14,999": "B08119_057E",
    "Worked at home:!!$15,000 to $24,999": "B08119_058E",
    "Worked at home:!!$25,000 to $34,999": "B08119_059E",
    "Worked at home:!!$35,000 to $49,999": "B08119_060E",
    "Worked at home:!!$50,000 to $64,999": "B08119_061E",
    "Worked at home:!!$65,000 to $74,999": "B08119_062E",
    "Worked at home:!!$75,000 or more": "B08119_063E",
    "Worked at home:!!1 vehicle available": "B08141_033E",
    "Worked at home:!!100 to 149 percent of the poverty level": "B08122_027E",
    "Worked at home:!!16 to 19 years": "B08101_050E",
    "Worked at home:!!2 vehicles available": "B08141_034E",
    "Worked at home:!!20 to 24 years": "B08101_051E",
    "Worked at home:!!25 to 44 years": "B08101_052E",
    "Worked at home:!!3 or more vehicles available": "B08141_035E",
    "Worked at home:!!45 to 54 years": "B08101_053E",
    "Worked at home:!!55 to 59 years": "B08101_054E",
    "Worked at home:!!60 to 64 years": "B08101_055E",
    "Worked at home:!!65 years and over": "B08101_056E",
    "Worked at home:!!Agriculture, forestry, fishing and hunting, and mining": "B08126_092E",
    "Worked at home:!!Armed forces": "B08126_105E",
    "Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services": "B08126_102E",
    "Worked at home:!!At or above 150 percent of the poverty level": "B08122_028E",
    "Worked at home:!!Below 100 percent of the poverty level": "B08122_026E",
    "Worked at home:!!Construction": "B08126_093E",
    "Worked at home:!!Educational services, and health care and social assistance": "B08126_101E",
    "Worked at home:!!Federal government workers": "B08128_068E",
    "Worked at home:!!Finance and insurance, and real estate and rental and leasing": "B08126_099E",
    "Worked at home:!!Foreign born:": "B08111_033E",
    "Worked at home:!!Foreign born:!!Naturalized U.S. citizen": "B08111_034E",
    "Worked at home:!!Foreign born:!!Not a U.S. citizen": "B08111_035E",
    "Worked at home:!!Householder lived in owner-occupied housing units": "B08137_020E",
    "Worked at home:!!Householder lived in renter-occupied housing units": "B08137_021E",
    "Worked at home:!!Information": "B08126_098E",
    "Worked at home:!!Local government workers": "B08128_066E",
    "Worked at home:!!Management, business, science, and arts occupations": "B08124_044E",
    "Worked at home:!!Manufacturing": "B08126_094E",
    "Worked at home:!!Military specific occupations": "B08124_049E",
    "Worked at home:!!Native": "B08111_032E",
    "Worked at home:!!Natural resources, construction, and maintenance occupations": "B08124_047E",
    "Worked at home:!!No vehicle available": "B08141_032E",
    "Worked at home:!!Other services (except public administration)": "B08126_103E",
    "Worked at home:!!Private for-profit wage and salary workers:": "B08128_062E",
    "Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers": "B08128_063E",
    "Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers": "B08128_064E",
    "Worked at home:!!Private not-for-profit wage and salary workers": "B08128_065E",
    "Worked at home:!!Production, transportation, and material moving occupations": "B08124_048E",
    "Worked at home:!!Professional, scientific, and management, and administrative and waste management services": "B08126_100E",
    "Worked at home:!!Public administration": "B08126_104E",
    "Worked at home:!!Retail trade": "B08126_096E",
    "Worked at home:!!Sales and office occupations": "B08124_046E",
    "Worked at home:!!Self-employed in own not incorporated business workers": "B08128_069E",
    "Worked at home:!!Service occupations": "B08124_045E",
    "Worked at home:!!Speak Spanish:": "B08113_051E",
    "Worked at home:!!Speak Spanish:!!Speak English \"very well\"": "B08113_052E",
    "Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"": "B08113_053E",
    "Worked at home:!!Speak only English": "B08113_050E",
    "Worked at home:!!Speak other languages:": "B08113_054E",
    "Worked at home:!!Speak other languages:!!Speak English \"very well\"": "B08113_055E",
    "Worked at home:!!Speak other languages:!!Speak English less than \"very well\"": "B08113_056E",
    "Worked at home:!!State government workers": "B08128_067E",
    "Worked at home:!!Transportation and warehousing, and utilities": "B08126_097E",
    "Worked at home:!!Unpaid family workers": "B08128_070E",
    "Worked at home:!!Wholesale trade": "B08126_095E"
}
return map[v];
}
var partition = {
    "": {
        "info": {
            "code": "B08301",
            "desc": "B08301.  Means of Transportation to Work",
            "normalized_desc": "Means of transportation to work"
        },
        "variables": [
            {
                "code": "B08301_021E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08301_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "age": {
        "info": {
            "code": "B08101",
            "desc": "B08101.  MEANS OF TRANSPORTATION TO WORK BY AGE",
            "normalized_desc": "Means of transportation to work by age"
        },
        "variables": [
            {
                "code": "B08101_049E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08101_050E",
                "label": "Worked at home:!!16 to 19 years",
                "normalized_label": "16 to 19 years"
            },
            {
                "code": "B08101_051E",
                "label": "Worked at home:!!20 to 24 years",
                "normalized_label": "20 to 24 years"
            },
            {
                "code": "B08101_052E",
                "label": "Worked at home:!!25 to 44 years",
                "normalized_label": "25 to 44 years"
            },
            {
                "code": "B08101_053E",
                "label": "Worked at home:!!45 to 54 years",
                "normalized_label": "45 to 54 years"
            },
            {
                "code": "B08101_054E",
                "label": "Worked at home:!!55 to 59 years",
                "normalized_label": "55 to 59 years"
            },
            {
                "code": "B08101_055E",
                "label": "Worked at home:!!60 to 64 years",
                "normalized_label": "60 to 64 years"
            },
            {
                "code": "B08101_056E",
                "label": "Worked at home:!!65 years and over",
                "normalized_label": "65 years and over"
            },
            {
                "code": "B08101_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "age: workplace geography": {
        "info": {
            "code": "B08501",
            "desc": "B08501.  MEANS OF TRANSPORTATION TO WORK BY AGE FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by age for workplace geography"
        },
        "variables": [
            {
                "code": "B08501_049E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08501_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "citizenship status": {
        "info": {
            "code": "B08111",
            "desc": "B08111.  MEANS OF TRANSPORTATION TO WORK BY CITIZENSHIP STATUS",
            "normalized_desc": "Means of transportation to work by citizenship status"
        },
        "variables": [
            {
                "code": "B08111_031E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08111_032E",
                "label": "Worked at home:!!Native",
                "normalized_label": "Native"
            },
            {
                "code": "B08111_033E",
                "label": "Worked at home:!!Foreign born:",
                "normalized_label": "Foreign born"
            },
            {
                "code": "B08111_034E",
                "label": "Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
                "normalized_label": "Foreign born: naturalized u.s. citizen"
            },
            {
                "code": "B08111_035E",
                "label": "Worked at home:!!Foreign born:!!Not a U.S. citizen",
                "normalized_label": "Foreign born: not a u.s. citizen"
            },
            {
                "code": "B08111_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "citizenship status: workplace geography": {
        "info": {
            "code": "B08511",
            "desc": "B08511.  MEANS OF TRANSPORTATION TO WORK BY CITIZENSHIP STATUS FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by citizenship status for workplace geography"
        },
        "variables": [
            {
                "code": "B08511_031E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08511_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "class of worker": {
        "info": {
            "code": "B08128",
            "desc": "B08128.  MEANS OF TRANSPORTATION TO WORK BY CLASS OF WORKER",
            "normalized_desc": "Means of transportation to work by class of worker"
        },
        "variables": [
            {
                "code": "B08128_061E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08128_062E",
                "label": "Worked at home:!!Private for-profit wage and salary workers:",
                "normalized_label": "Private for-profit wage and salary workers"
            },
            {
                "code": "B08128_063E",
                "label": "Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
                "normalized_label": "Private for-profit wage and salary workers: employee of private company workers"
            },
            {
                "code": "B08128_064E",
                "label": "Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
                "normalized_label": "Private for-profit wage and salary workers: self-employed in own incorporated business workers"
            },
            {
                "code": "B08128_065E",
                "label": "Worked at home:!!Private not-for-profit wage and salary workers",
                "normalized_label": "Private not-for-profit wage and salary workers"
            },
            {
                "code": "B08128_066E",
                "label": "Worked at home:!!Local government workers",
                "normalized_label": "Local government workers"
            },
            {
                "code": "B08128_067E",
                "label": "Worked at home:!!State government workers",
                "normalized_label": "State government workers"
            },
            {
                "code": "B08128_068E",
                "label": "Worked at home:!!Federal government workers",
                "normalized_label": "Federal government workers"
            },
            {
                "code": "B08128_069E",
                "label": "Worked at home:!!Self-employed in own not incorporated business workers",
                "normalized_label": "Self-employed in own not incorporated business workers"
            },
            {
                "code": "B08128_070E",
                "label": "Worked at home:!!Unpaid family workers",
                "normalized_label": "Unpaid family workers"
            },
            {
                "code": "B08128_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "class of worker: workplace geography": {
        "info": {
            "code": "B08528",
            "desc": "B08528.  MEANS OF TRANSPORTATION TO WORK BY CLASS OF WORKER FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by class of worker for workplace geography"
        },
        "variables": [
            {
                "code": "B08528_061E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08528_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "imputation of time arriving at work from home: workplace geography": {
        "info": {
            "code": "B99087",
            "desc": "B99087.  IMPUTATION OF TIME ARRIVING AT WORK FROM HOME FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Imputation of time arriving at work from home for workplace geography"
        },
        "variables": [
            {
                "code": "B99087_005E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B99087_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "imputation of time leaving home to go to work": {
        "info": {
            "code": "B99083",
            "desc": "B99083.  IMPUTATION OF TIME LEAVING HOME TO GO TO WORK",
            "normalized_desc": "Imputation of time leaving home to go to work"
        },
        "variables": [
            {
                "code": "B99083_005E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B99083_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "imputation of travel time to work": {
        "info": {
            "code": "B99084",
            "desc": "B99084.  IMPUTATION OF TRAVEL TIME TO WORK",
            "normalized_desc": "Imputation of travel time to work"
        },
        "variables": [
            {
                "code": "B99084_005E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B99084_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "imputation of travel time to work: workplace geography": {
        "info": {
            "code": "B99088",
            "desc": "B99088.  IMPUTATION OF TRAVEL TIME TO WORK FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Imputation of travel time to work for workplace geography"
        },
        "variables": [
            {
                "code": "B99088_005E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B99088_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "industry": {
        "info": {
            "code": "B08126",
            "desc": "B08126.  MEANS OF TRANSPORTATION TO WORK BY INDUSTRY",
            "normalized_desc": "Means of transportation to work by industry"
        },
        "variables": [
            {
                "code": "B08126_091E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08126_092E",
                "label": "Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
                "normalized_label": "Agriculture, forestry, fishing and hunting, and mining"
            },
            {
                "code": "B08126_093E",
                "label": "Worked at home:!!Construction",
                "normalized_label": "Construction"
            },
            {
                "code": "B08126_094E",
                "label": "Worked at home:!!Manufacturing",
                "normalized_label": "Manufacturing"
            },
            {
                "code": "B08126_095E",
                "label": "Worked at home:!!Wholesale trade",
                "normalized_label": "Wholesale trade"
            },
            {
                "code": "B08126_096E",
                "label": "Worked at home:!!Retail trade",
                "normalized_label": "Retail trade"
            },
            {
                "code": "B08126_097E",
                "label": "Worked at home:!!Transportation and warehousing, and utilities",
                "normalized_label": "Transportation and warehousing, and utilities"
            },
            {
                "code": "B08126_098E",
                "label": "Worked at home:!!Information",
                "normalized_label": "Information"
            },
            {
                "code": "B08126_099E",
                "label": "Worked at home:!!Finance and insurance, and real estate and rental and leasing",
                "normalized_label": "Finance and insurance, and real estate and rental and leasing"
            },
            {
                "code": "B08126_100E",
                "label": "Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
                "normalized_label": "Professional, scientific, and management, and administrative and waste management services"
            },
            {
                "code": "B08126_101E",
                "label": "Worked at home:!!Educational services, and health care and social assistance",
                "normalized_label": "Educational services, and health care and social assistance"
            },
            {
                "code": "B08126_102E",
                "label": "Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
                "normalized_label": "Arts, entertainment, and recreation, and accommodation and food services"
            },
            {
                "code": "B08126_103E",
                "label": "Worked at home:!!Other services (except public administration)",
                "normalized_label": "Other services (except public administration)"
            },
            {
                "code": "B08126_104E",
                "label": "Worked at home:!!Public administration",
                "normalized_label": "Public administration"
            },
            {
                "code": "B08126_105E",
                "label": "Worked at home:!!Armed forces",
                "normalized_label": "Armed forces"
            },
            {
                "code": "B08126_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "industry: workplace geography": {
        "info": {
            "code": "B08526",
            "desc": "B08526.  MEANS OF TRANSPORTATION TO WORK BY INDUSTRY FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by industry for workplace geography"
        },
        "variables": [
            {
                "code": "B08526_091E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08526_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "language spoken at home and ability to speak english": {
        "info": {
            "code": "B08113",
            "desc": "B08113.  MEANS OF TRANSPORTATION TO WORK BY LANGUAGE SPOKEN AT HOME AND ABILITY TO SPEAK ENGLISH",
            "normalized_desc": "Means of transportation to work by language spoken at home and ability to speak english"
        },
        "variables": [
            {
                "code": "B08113_049E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08113_050E",
                "label": "Worked at home:!!Speak only English",
                "normalized_label": "Speak only english"
            },
            {
                "code": "B08113_051E",
                "label": "Worked at home:!!Speak Spanish:",
                "normalized_label": "Speak spanish"
            },
            {
                "code": "B08113_052E",
                "label": "Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
                "normalized_label": "Speak spanish: speak english \"very well\""
            },
            {
                "code": "B08113_053E",
                "label": "Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
                "normalized_label": "Speak spanish: speak english less than \"very well\""
            },
            {
                "code": "B08113_054E",
                "label": "Worked at home:!!Speak other languages:",
                "normalized_label": "Speak other languages"
            },
            {
                "code": "B08113_055E",
                "label": "Worked at home:!!Speak other languages:!!Speak English \"very well\"",
                "normalized_label": "Speak other languages: speak english \"very well\""
            },
            {
                "code": "B08113_056E",
                "label": "Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
                "normalized_label": "Speak other languages: speak english less than \"very well\""
            },
            {
                "code": "B08113_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "language spoken at home and ability to speak english: workplace geography": {
        "info": {
            "code": "B08513",
            "desc": "B08513.  MEANS OF TRANSPORTATION TO WORK BY LANGUAGE SPOKEN AT HOME AND ABILITY TO SPEAK ENGLISH FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by language spoken at home and ability to speak english for workplace geography"
        },
        "variables": [
            {
                "code": "B08513_049E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08513_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work  (native hawaiian and other pacific islander alone)": {
        "info": {
            "code": "B08105E",
            "desc": "B08105E.  Means of Transportation to Work  (Native Hawaiian and Other Pacific Islander Alone)",
            "normalized_desc": "Means of transportation to work  (native hawaiian and other pacific islander alone)"
        },
        "variables": [
            {
                "code": "B08105E_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105E_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work (american indian and alaska native alone)": {
        "info": {
            "code": "B08105C",
            "desc": "B08105C.  MEANS OF TRANSPORTATION TO WORK (AMERICAN INDIAN AND ALASKA NATIVE ALONE)",
            "normalized_desc": "Means of transportation to work (american indian and alaska native alone)"
        },
        "variables": [
            {
                "code": "B08105C_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105C_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work (asian alone)": {
        "info": {
            "code": "B08105D",
            "desc": "B08105D.  MEANS OF TRANSPORTATION TO WORK (ASIAN ALONE)",
            "normalized_desc": "Means of transportation to work (asian alone)"
        },
        "variables": [
            {
                "code": "B08105D_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105D_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work (black or african american alone)": {
        "info": {
            "code": "B08105B",
            "desc": "B08105B.  MEANS OF TRANSPORTATION TO WORK (BLACK OR AFRICAN AMERICAN ALONE)",
            "normalized_desc": "Means of transportation to work (black or african american alone)"
        },
        "variables": [
            {
                "code": "B08105B_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105B_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work (hispanic or latino)": {
        "info": {
            "code": "B08105I",
            "desc": "B08105I.  MEANS OF TRANSPORTATION TO WORK (HISPANIC OR LATINO)",
            "normalized_desc": "Means of transportation to work (hispanic or latino)"
        },
        "variables": [
            {
                "code": "B08105I_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105I_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work (some other race alone)": {
        "info": {
            "code": "B08105F",
            "desc": "B08105F.  MEANS OF TRANSPORTATION TO WORK (SOME OTHER RACE ALONE)",
            "normalized_desc": "Means of transportation to work (some other race alone)"
        },
        "variables": [
            {
                "code": "B08105F_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105F_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work (two or more races)": {
        "info": {
            "code": "B08105G",
            "desc": "B08105G.  MEANS OF TRANSPORTATION TO WORK (TWO OR MORE RACES)",
            "normalized_desc": "Means of transportation to work (two or more races)"
        },
        "variables": [
            {
                "code": "B08105G_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105G_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work (white alone)": {
        "info": {
            "code": "B08105A",
            "desc": "B08105A.  MEANS OF TRANSPORTATION TO WORK (WHITE ALONE)",
            "normalized_desc": "Means of transportation to work (white alone)"
        },
        "variables": [
            {
                "code": "B08105A_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105A_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "means of transportation to work (white alone, not hispanic or latino)": {
        "info": {
            "code": "B08105H",
            "desc": "B08105H.  MEANS OF TRANSPORTATION TO WORK (WHITE ALONE, NOT HISPANIC OR LATINO)",
            "normalized_desc": "Means of transportation to work (white alone, not hispanic or latino)"
        },
        "variables": [
            {
                "code": "B08105H_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08105H_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "median age": {
        "info": {
            "code": "B08103",
            "desc": "B08103.  MEDIAN AGE BY MEANS OF TRANSPORTATION TO WORK",
            "normalized_desc": "Median age by means of transportation to work"
        },
        "variables": [
            {
                "code": "B08103_007E",
                "label": "Median age --!! Worked at home",
                "normalized_label": "Median age"
            },
            {
                "code": "B08103_001E",
                "label": "Median age --!!Total:",
                "normalized_label": "Median age"
            }
        ]
    },
    "median age: workplace geography": {
        "info": {
            "code": "B08503",
            "desc": "B08503.  MEDIAN AGE BY MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Median age by means of transportation to work for workplace geography"
        },
        "variables": [
            {
                "code": "B08503_001E",
                "label": "Median age --!!Total:",
                "normalized_label": "Median age"
            }
        ]
    },
    "median earnings in the past 12 months (in 2015 inflation-adjusted dollars)": {
        "info": {
            "code": "B08121",
            "desc": "B08121. Median Earnings in the Past 12 Months (in 2015 Inflation-Adjusted Dollars) by Means of Transportation to Work",
            "normalized_desc": "Median earnings in the past 12 months (in 2015 inflation-adjusted dollars) by means of transportation to work"
        },
        "variables": [
            {
                "code": "B08121_007E",
                "label": "Median earnings in the past 12 months --!! Worked at home",
                "normalized_label": "Median earnings in the past 12 months"
            },
            {
                "code": "B08121_001E",
                "label": "Median earnings in the past 12 months --!!Total:",
                "normalized_label": "Median earnings in the past 12 months"
            }
        ]
    },
    "median earnings in the past 12 months (in 2015 inflation-adjusted dollars): workplace geography": {
        "info": {
            "code": "B08521",
            "desc": "B08521. Median Earnings in the Past 12 Months (in 2015 Inflation-Adjusted Dollars) by Means of Transportation to Work for Workplace Geography",
            "normalized_desc": "Median earnings in the past 12 months (in 2015 inflation-adjusted dollars) by means of transportation to work for workplace geography"
        },
        "variables": [
            {
                "code": "B08521_001E",
                "label": "Median earnings in the past 12 months --!!Total:",
                "normalized_label": "Median earnings in the past 12 months"
            }
        ]
    },
    "occupation": {
        "info": {
            "code": "B08124",
            "desc": "B08124.  MEANS OF TRANSPORTATION TO WORK BY OCCUPATION",
            "normalized_desc": "Means of transportation to work by occupation"
        },
        "variables": [
            {
                "code": "B08124_043E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08124_044E",
                "label": "Worked at home:!!Management, business, science, and arts occupations",
                "normalized_label": "Management, business, science, and arts occupations"
            },
            {
                "code": "B08124_045E",
                "label": "Worked at home:!!Service occupations",
                "normalized_label": "Service occupations"
            },
            {
                "code": "B08124_046E",
                "label": "Worked at home:!!Sales and office occupations",
                "normalized_label": "Sales and office occupations"
            },
            {
                "code": "B08124_047E",
                "label": "Worked at home:!!Natural resources, construction, and maintenance occupations",
                "normalized_label": "Natural resources, construction, and maintenance occupations"
            },
            {
                "code": "B08124_048E",
                "label": "Worked at home:!!Production, transportation, and material moving occupations",
                "normalized_label": "Production, transportation, and material moving occupations"
            },
            {
                "code": "B08124_049E",
                "label": "Worked at home:!!Military specific occupations",
                "normalized_label": "Military specific occupations"
            },
            {
                "code": "B08124_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "occupation: workplace geography": {
        "info": {
            "code": "B08524",
            "desc": "B08524.  MEANS OF TRANSPORTATION TO WORK BY OCCUPATION FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by occupation for workplace geography"
        },
        "variables": [
            {
                "code": "B08524_043E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08524_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "place of workstate and county level": {
        "info": {
            "code": "B08130",
            "desc": "B08130.  MEANS OF TRANSPORTATION TO WORK BY PLACE OF WORK--STATE AND COUNTY LEVEL",
            "normalized_desc": "Means of transportation to work by place of work--state and county level"
        },
        "variables": [
            {
                "code": "B08130_031E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08130_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "poverty status in the past 12 months": {
        "info": {
            "code": "B08122",
            "desc": "B08122.  MEANS OF TRANSPORTATION TO WORK BY POVERTY STATUS IN THE PAST 12 MONTHS",
            "normalized_desc": "Means of transportation to work by poverty status in the past 12 months"
        },
        "variables": [
            {
                "code": "B08122_025E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08122_026E",
                "label": "Worked at home:!!Below 100 percent of the poverty level",
                "normalized_label": "Below 100 percent of the poverty level"
            },
            {
                "code": "B08122_027E",
                "label": "Worked at home:!!100 to 149 percent of the poverty level",
                "normalized_label": "100 to 149 percent of the poverty level"
            },
            {
                "code": "B08122_028E",
                "label": "Worked at home:!!At or above 150 percent of the poverty level",
                "normalized_label": "At or above 150 percent of the poverty level"
            },
            {
                "code": "B08122_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "poverty status in the past 12 months: workplace geography": {
        "info": {
            "code": "B08522",
            "desc": "B08522.  MEANS OF TRANSPORTATION TO WORK BY POVERTY STATUS IN THE PAST 12 MONTHS FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by poverty status in the past 12 months for workplace geography"
        },
        "variables": [
            {
                "code": "B08522_025E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08522_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "sex of workers": {
        "info": {
            "code": "B08006",
            "desc": "B08006.  Sex of Workers by Means of Transportation to Work",
            "normalized_desc": "Sex of workers by means of transportation to work"
        },
        "variables": [
            {
                "code": "B08006_017E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08006_034E",
                "label": "Male:!!Worked at home",
                "normalized_label": "Male"
            },
            {
                "code": "B08006_051E",
                "label": "Female:!!Worked at home",
                "normalized_label": "Female"
            },
            {
                "code": "B08006_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "sex of workers: workplace geography": {
        "info": {
            "code": "B08406",
            "desc": "B08406.  Sex of Workers by Means of Transportation to Work for Workplace Geography",
            "normalized_desc": "Sex of workers by means of transportation to work for workplace geography"
        },
        "variables": [
            {
                "code": "B08406_017E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08406_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "tenure": {
        "info": {
            "code": "B08137",
            "desc": "B08137.  MEANS OF TRANSPORTATION TO WORK BY TENURE",
            "normalized_desc": "Means of transportation to work by tenure"
        },
        "variables": [
            {
                "code": "B08137_019E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08137_020E",
                "label": "Worked at home:!!Householder lived in owner-occupied housing units",
                "normalized_label": "Householder lived in owner-occupied housing units"
            },
            {
                "code": "B08137_021E",
                "label": "Worked at home:!!Householder lived in renter-occupied housing units",
                "normalized_label": "Householder lived in renter-occupied housing units"
            },
            {
                "code": "B08137_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "tenure: workplace geography": {
        "info": {
            "code": "B08537",
            "desc": "B08537.  MEANS OF TRANSPORTATION TO WORK BY TENURE FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by tenure for workplace geography"
        },
        "variables": [
            {
                "code": "B08537_019E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08537_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "vehicles available": {
        "info": {
            "code": "B08141",
            "desc": "B08141.  MEANS OF TRANSPORTATION TO WORK BY VEHICLES AVAILABLE",
            "normalized_desc": "Means of transportation to work by vehicles available"
        },
        "variables": [
            {
                "code": "B08141_031E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08141_032E",
                "label": "Worked at home:!!No vehicle available",
                "normalized_label": "No vehicle available"
            },
            {
                "code": "B08141_033E",
                "label": "Worked at home:!!1 vehicle available",
                "normalized_label": "1 vehicle available"
            },
            {
                "code": "B08141_034E",
                "label": "Worked at home:!!2 vehicles available",
                "normalized_label": "2 vehicles available"
            },
            {
                "code": "B08141_035E",
                "label": "Worked at home:!!3 or more vehicles available",
                "normalized_label": "3 or more vehicles available"
            },
            {
                "code": "B08141_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "vehicles available: workplace geography": {
        "info": {
            "code": "B08541",
            "desc": "B08541.  MEANS OF TRANSPORTATION TO WORK BY VEHICLES AVAILABLE FOR WORKPLACE GEOGRAPHY",
            "normalized_desc": "Means of transportation to work by vehicles available for workplace geography"
        },
        "variables": [
            {
                "code": "B08541_031E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08541_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workers' earnings in the past 12 months (in 2015 inflation-adjusted dollars)": {
        "info": {
            "code": "B08119",
            "desc": "B08119. Means of Transportation to Work by Workers' Earnings in the Past 12 Months (in 2015 Inflation-Adjusted Dollars)",
            "normalized_desc": "Means of transportation to work by workers' earnings in the past 12 months (in 2015 inflation-adjusted dollars)"
        },
        "variables": [
            {
                "code": "B08119_055E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08119_056E",
                "label": "Worked at home:!!$1 to $9,999 or loss",
                "normalized_label": "$1 to $9,999 or loss"
            },
            {
                "code": "B08119_057E",
                "label": "Worked at home:!!$10,000 to $14,999",
                "normalized_label": "$10,000 to $14,999"
            },
            {
                "code": "B08119_058E",
                "label": "Worked at home:!!$15,000 to $24,999",
                "normalized_label": "$15,000 to $24,999"
            },
            {
                "code": "B08119_059E",
                "label": "Worked at home:!!$25,000 to $34,999",
                "normalized_label": "$25,000 to $34,999"
            },
            {
                "code": "B08119_060E",
                "label": "Worked at home:!!$35,000 to $49,999",
                "normalized_label": "$35,000 to $49,999"
            },
            {
                "code": "B08119_061E",
                "label": "Worked at home:!!$50,000 to $64,999",
                "normalized_label": "$50,000 to $64,999"
            },
            {
                "code": "B08119_062E",
                "label": "Worked at home:!!$65,000 to $74,999",
                "normalized_label": "$65,000 to $74,999"
            },
            {
                "code": "B08119_063E",
                "label": "Worked at home:!!$75,000 or more",
                "normalized_label": "$75,000 or more"
            },
            {
                "code": "B08119_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workers' earnings in the past 12 months (in 2015 inflation-adjusted dollars): workplace geography": {
        "info": {
            "code": "B08519",
            "desc": "B08519. Means of Transportation to Work by Workers' Earnings in the Past 12 Months (in 2015 Inflation-Adjusted Dollars) for Workplace Geography",
            "normalized_desc": "Means of transportation to work by workers' earnings in the past 12 months (in 2015 inflation-adjusted dollars) for workplace geography"
        },
        "variables": [
            {
                "code": "B08519_055E",
                "label": "Worked at home:",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08519_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography": {
        "info": {
            "code": "B08601",
            "desc": "B08601.  Means of Transportation to Work for Workplace Geography",
            "normalized_desc": "Means of transportation to work for workplace geography"
        },
        "variables": [
            {
                "code": "B08601_021E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08601_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (american indian and alaska native alone)": {
        "info": {
            "code": "B08505C",
            "desc": "B08505C.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (AMERICAN INDIAN AND ALASKA NATIVE ALONE)",
            "normalized_desc": "Means of transportation to work for workplace geography (american indian and alaska native alone)"
        },
        "variables": [
            {
                "code": "B08505C_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505C_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (asian alone)": {
        "info": {
            "code": "B08505D",
            "desc": "B08505D.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (ASIAN ALONE)",
            "normalized_desc": "Means of transportation to work for workplace geography (asian alone)"
        },
        "variables": [
            {
                "code": "B08505D_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505D_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (black or african american alone)": {
        "info": {
            "code": "B08505B",
            "desc": "B08505B.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (BLACK OR AFRICAN AMERICAN ALONE)",
            "normalized_desc": "Means of transportation to work for workplace geography (black or african american alone)"
        },
        "variables": [
            {
                "code": "B08505B_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505B_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (hispanic or latino)": {
        "info": {
            "code": "B08505I",
            "desc": "B08505I.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (HISPANIC OR LATINO)",
            "normalized_desc": "Means of transportation to work for workplace geography (hispanic or latino)"
        },
        "variables": [
            {
                "code": "B08505I_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505I_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (native hawaiian and other pacific islander alone)": {
        "info": {
            "code": "B08505E",
            "desc": "B08505E.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER ALONE)",
            "normalized_desc": "Means of transportation to work for workplace geography (native hawaiian and other pacific islander alone)"
        },
        "variables": [
            {
                "code": "B08505E_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505E_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (some other race alone)": {
        "info": {
            "code": "B08505F",
            "desc": "B08505F.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (SOME OTHER RACE ALONE)",
            "normalized_desc": "Means of transportation to work for workplace geography (some other race alone)"
        },
        "variables": [
            {
                "code": "B08505F_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505F_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (two or more races)": {
        "info": {
            "code": "B08505G",
            "desc": "B08505G.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (TWO OR MORE RACES)",
            "normalized_desc": "Means of transportation to work for workplace geography (two or more races)"
        },
        "variables": [
            {
                "code": "B08505G_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505G_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (white alone)": {
        "info": {
            "code": "B08505A",
            "desc": "B08505A.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (WHITE ALONE)",
            "normalized_desc": "Means of transportation to work for workplace geography (white alone)"
        },
        "variables": [
            {
                "code": "B08505A_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505A_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    },
    "workplace geography (white alone, not hispanic or latino)": {
        "info": {
            "code": "B08505H",
            "desc": "B08505H.  MEANS OF TRANSPORTATION TO WORK FOR WORKPLACE GEOGRAPHY (WHITE ALONE, NOT HISPANIC OR LATINO)",
            "normalized_desc": "Means of transportation to work for workplace geography (white alone, not hispanic or latino)"
        },
        "variables": [
            {
                "code": "B08505H_007E",
                "label": "Worked at home",
                "normalized_label": "Worked at home"
            },
            {
                "code": "B08505H_001E",
                "label": "Total:",
                "normalized_label": "Total"
            }
        ]
    }
}
