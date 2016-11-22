function c_to_v (c) {
var map = {
    "B08006_017E": "Worked at home",
    "B08006_017M": "Margin of Error for!!Worked at home",
    "B08006_034E": "Male:!!Worked at home",
    "B08006_034M": "Margin of Error for!!Male:!!Worked at home",
    "B08006_051E": "Female:!!Worked at home",
    "B08006_051M": "Margin of Error for!!Female:!!Worked at home",
    "B08101_049E": "Worked at home:",
    "B08101_049M": "Margin of Error for!!Worked at home:",
    "B08101_050E": "Worked at home:!!16 to 19 years",
    "B08101_050M": "Margin of Error for!!Worked at home:!!16 to 19 years",
    "B08101_051E": "Worked at home:!!20 to 24 years",
    "B08101_051M": "Margin of Error for!!Worked at home:!!20 to 24 years",
    "B08101_052E": "Worked at home:!!25 to 44 years",
    "B08101_052M": "Margin of Error for!!Worked at home:!!25 to 44 years",
    "B08101_053E": "Worked at home:!!45 to 54 years",
    "B08101_053M": "Margin of Error for!!Worked at home:!!45 to 54 years",
    "B08101_054E": "Worked at home:!!55 to 59 years",
    "B08101_054M": "Margin of Error for!!Worked at home:!!55 to 59 years",
    "B08101_055E": "Worked at home:!!60 to 64 years",
    "B08101_055M": "Margin of Error for!!Worked at home:!!60 to 64 years",
    "B08101_056E": "Worked at home:!!65 years and over",
    "B08101_056M": "Margin of Error for!!Worked at home:!!65 years and over",
    "B08103_007E": "Median age --!! Worked at home",
    "B08103_007M": "Margin of Error for!!Median age --!! Worked at home",
    "B08105A_007E": "Worked at home",
    "B08105A_007M": "Margin of Error for!!Worked at home",
    "B08105B_007E": "Worked at home",
    "B08105B_007M": "Margin of Error for!!Worked at home",
    "B08105C_007E": "Worked at home",
    "B08105C_007M": "Margin of Error for!!Worked at home",
    "B08105D_007E": "Worked at home",
    "B08105D_007M": "Margin of Error for!!Worked at home",
    "B08105E_007E": "Worked at home",
    "B08105E_007M": "Margin of Error for!!Worked at home",
    "B08105F_007E": "Worked at home",
    "B08105F_007M": "Margin of Error for!!Worked at home",
    "B08105G_007E": "Worked at home",
    "B08105G_007M": "Margin of Error for!!Worked at home",
    "B08105H_007E": "Worked at home",
    "B08105H_007M": "Margin of Error for!!Worked at home",
    "B08105I_007E": "Worked at home",
    "B08105I_007M": "Margin of Error for!!Worked at home",
    "B08111_031E": "Worked at home:",
    "B08111_031M": "Margin of Error for!!Worked at home:",
    "B08111_032E": "Worked at home:!!Native",
    "B08111_032M": "Margin of Error for!!Worked at home:!!Native",
    "B08111_033E": "Worked at home:!!Foreign born:",
    "B08111_033M": "Margin of Error for!!Worked at home:!!Foreign born:",
    "B08111_034E": "Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
    "B08111_034M": "Margin of Error for!!Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
    "B08111_035E": "Worked at home:!!Foreign born:!!Not a U.S. citizen",
    "B08111_035M": "Margin of Error for!!Worked at home:!!Foreign born:!!Not a U.S. citizen",
    "B08113_049E": "Worked at home:",
    "B08113_049M": "Margin of Error for!!Worked at home:",
    "B08113_050E": "Worked at home:!!Speak only English",
    "B08113_050M": "Margin of Error for!!Worked at home:!!Speak only English",
    "B08113_051E": "Worked at home:!!Speak Spanish:",
    "B08113_051M": "Margin of Error for!!Worked at home:!!Speak Spanish:",
    "B08113_052E": "Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
    "B08113_052M": "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
    "B08113_053E": "Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
    "B08113_053M": "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
    "B08113_054E": "Worked at home:!!Speak other languages:",
    "B08113_054M": "Margin of Error for!!Worked at home:!!Speak other languages:",
    "B08113_055E": "Worked at home:!!Speak other languages:!!Speak English \"very well\"",
    "B08113_055M": "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English \"very well\"",
    "B08113_056E": "Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
    "B08113_056M": "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
    "B08119_055E": "Worked at home:",
    "B08119_055M": "Margin of Error for!!Worked at home:",
    "B08119_056E": "Worked at home:!!$1 to $9,999 or loss",
    "B08119_056M": "Margin of Error for!!Worked at home:!!$1 to $9,999 or loss",
    "B08119_057E": "Worked at home:!!$10,000 to $14,999",
    "B08119_057M": "Margin of Error for!!Worked at home:!!$10,000 to $14,999",
    "B08119_058E": "Worked at home:!!$15,000 to $24,999",
    "B08119_058M": "Margin of Error for!!Worked at home:!!$15,000 to $24,999",
    "B08119_059E": "Worked at home:!!$25,000 to $34,999",
    "B08119_059M": "Margin of Error for!!Worked at home:!!$25,000 to $34,999",
    "B08119_060E": "Worked at home:!!$35,000 to $49,999",
    "B08119_060M": "Margin of Error for!!Worked at home:!!$35,000 to $49,999",
    "B08119_061E": "Worked at home:!!$50,000 to $64,999",
    "B08119_061M": "Margin of Error for!!Worked at home:!!$50,000 to $64,999",
    "B08119_062E": "Worked at home:!!$65,000 to $74,999",
    "B08119_062M": "Margin of Error for!!Worked at home:!!$65,000 to $74,999",
    "B08119_063E": "Worked at home:!!$75,000 or more",
    "B08119_063M": "Margin of Error for!!Worked at home:!!$75,000 or more",
    "B08121_007E": "Median earnings in the past 12 months --!! Worked at home",
    "B08121_007M": "Margin of Error for!!Median earnings in the past 12 months --!! Worked at home",
    "B08122_025E": "Worked at home:",
    "B08122_025M": "Margin of Error for!!Worked at home:",
    "B08122_026E": "Worked at home:!!Below 100 percent of the poverty level",
    "B08122_026M": "Margin of Error for!!Worked at home:!!Below 100 percent of the poverty level",
    "B08122_027E": "Worked at home:!!100 to 149 percent of the poverty level",
    "B08122_027M": "Margin of Error for!!Worked at home:!!100 to 149 percent of the poverty level",
    "B08122_028E": "Worked at home:!!At or above 150 percent of the poverty level",
    "B08122_028M": "Margin of Error for!!Worked at home:!!At or above 150 percent of the poverty level",
    "B08124_043E": "Worked at home:",
    "B08124_043M": "Margin of Error for!!Worked at home:",
    "B08124_044E": "Worked at home:!!Management, business, science, and arts occupations",
    "B08124_044M": "Margin of Error for!!Worked at home:!!Management, business, science, and arts occupations",
    "B08124_045E": "Worked at home:!!Service occupations",
    "B08124_045M": "Margin of Error for!!Worked at home:!!Service occupations",
    "B08124_046E": "Worked at home:!!Sales and office occupations",
    "B08124_046M": "Margin of Error for!!Worked at home:!!Sales and office occupations",
    "B08124_047E": "Worked at home:!!Natural resources, construction, and maintenance occupations",
    "B08124_047M": "Margin of Error for!!Worked at home:!!Natural resources, construction, and maintenance occupations",
    "B08124_048E": "Worked at home:!!Production, transportation, and material moving occupations",
    "B08124_048M": "Margin of Error for!!Worked at home:!!Production, transportation, and material moving occupations",
    "B08124_049E": "Worked at home:!!Military specific occupations",
    "B08124_049M": "Margin of Error for!!Worked at home:!!Military specific occupations",
    "B08126_091E": "Worked at home:",
    "B08126_091M": "Margin of Error for!!Worked at home:",
    "B08126_092E": "Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
    "B08126_092M": "Margin of Error for!!Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
    "B08126_093E": "Worked at home:!!Construction",
    "B08126_093M": "Margin of Error for!!Worked at home:!!Construction",
    "B08126_094E": "Worked at home:!!Manufacturing",
    "B08126_094M": "Margin of Error for!!Worked at home:!!Manufacturing",
    "B08126_095E": "Worked at home:!!Wholesale trade",
    "B08126_095M": "Margin of Error for!!Worked at home:!!Wholesale trade",
    "B08126_096E": "Worked at home:!!Retail trade",
    "B08126_096M": "Margin of Error for!!Worked at home:!!Retail trade",
    "B08126_097E": "Worked at home:!!Transportation and warehousing, and utilities",
    "B08126_097M": "Margin of Error for!!Worked at home:!!Transportation and warehousing, and utilities",
    "B08126_098E": "Worked at home:!!Information",
    "B08126_098M": "Margin of Error for!!Worked at home:!!Information",
    "B08126_099E": "Worked at home:!!Finance and insurance, and real estate and rental and leasing",
    "B08126_099M": "Margin of Error for!!Worked at home:!!Finance and insurance, and real estate and rental and leasing",
    "B08126_100E": "Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
    "B08126_100M": "Margin of Error for!!Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
    "B08126_101E": "Worked at home:!!Educational services, and health care and social assistance",
    "B08126_101M": "Margin of Error for!!Worked at home:!!Educational services, and health care and social assistance",
    "B08126_102E": "Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
    "B08126_102M": "Margin of Error for!!Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
    "B08126_103E": "Worked at home:!!Other services (except public administration)",
    "B08126_103M": "Margin of Error for!!Worked at home:!!Other services (except public administration)",
    "B08126_104E": "Worked at home:!!Public administration",
    "B08126_104M": "Margin of Error for!!Worked at home:!!Public administration",
    "B08126_105E": "Worked at home:!!Armed forces",
    "B08126_105M": "Margin of Error for!!Worked at home:!!Armed forces",
    "B08128_061E": "Worked at home:",
    "B08128_061M": "Margin of Error for!!Worked at home:",
    "B08128_062E": "Worked at home:!!Private for-profit wage and salary workers:",
    "B08128_062M": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:",
    "B08128_063E": "Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
    "B08128_063M": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
    "B08128_064E": "Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
    "B08128_064M": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
    "B08128_065E": "Worked at home:!!Private not-for-profit wage and salary workers",
    "B08128_065M": "Margin of Error for!!Worked at home:!!Private not-for-profit wage and salary workers",
    "B08128_066E": "Worked at home:!!Local government workers",
    "B08128_066M": "Margin of Error for!!Worked at home:!!Local government workers",
    "B08128_067E": "Worked at home:!!State government workers",
    "B08128_067M": "Margin of Error for!!Worked at home:!!State government workers",
    "B08128_068E": "Worked at home:!!Federal government workers",
    "B08128_068M": "Margin of Error for!!Worked at home:!!Federal government workers",
    "B08128_069E": "Worked at home:!!Self-employed in own not incorporated business workers",
    "B08128_069M": "Margin of Error for!!Worked at home:!!Self-employed in own not incorporated business workers",
    "B08128_070E": "Worked at home:!!Unpaid family workers",
    "B08128_070M": "Margin of Error for!!Worked at home:!!Unpaid family workers",
    "B08130_031E": "Worked at home",
    "B08130_031M": "Margin of Error for!!Worked at home",
    "B08137_019E": "Worked at home:",
    "B08137_019M": "Margin of Error for!!Worked at home:",
    "B08137_020E": "Worked at home:!!Householder lived in owner-occupied housing units",
    "B08137_020M": "Margin of Error for!!Worked at home:!!Householder lived in owner-occupied housing units",
    "B08137_021E": "Worked at home:!!Householder lived in renter-occupied housing units",
    "B08137_021M": "Margin of Error for!!Worked at home:!!Householder lived in renter-occupied housing units",
    "B08141_031E": "Worked at home:",
    "B08141_031M": "Margin of Error for!!Worked at home:",
    "B08141_032E": "Worked at home:!!No vehicle available",
    "B08141_032M": "Margin of Error for!!Worked at home:!!No vehicle available",
    "B08141_033E": "Worked at home:!!1 vehicle available",
    "B08141_033M": "Margin of Error for!!Worked at home:!!1 vehicle available",
    "B08141_034E": "Worked at home:!!2 vehicles available",
    "B08141_034M": "Margin of Error for!!Worked at home:!!2 vehicles available",
    "B08141_035E": "Worked at home:!!3 or more vehicles available",
    "B08141_035M": "Margin of Error for!!Worked at home:!!3 or more vehicles available",
    "B08301_021E": "Worked at home",
    "B08301_021M": "Margin of Error for!!Worked at home",
    "B08406_017E": "Worked at home",
    "B08406_017M": "Margin of Error for!!Worked at home",
    "B08406_034E": "Male:!!Worked at home",
    "B08406_034M": "Margin of Error for!!Male:!!Worked at home",
    "B08406_051E": "Female:!!Worked at home",
    "B08406_051M": "Margin of Error for!!Female:!!Worked at home",
    "B08501_049E": "Worked at home:",
    "B08501_049M": "Margin of Error for!!Worked at home:",
    "B08501_050E": "Worked at home:!!16 to 19 years",
    "B08501_050M": "Margin of Error for!!Worked at home:!!16 to 19 years",
    "B08501_051E": "Worked at home:!!20 to 24 years",
    "B08501_051M": "Margin of Error for!!Worked at home:!!20 to 24 years",
    "B08501_052E": "Worked at home:!!25 to 44 years",
    "B08501_052M": "Margin of Error for!!Worked at home:!!25 to 44 years",
    "B08501_053E": "Worked at home:!!45 to 54 years",
    "B08501_053M": "Margin of Error for!!Worked at home:!!45 to 54 years",
    "B08501_054E": "Worked at home:!!55 to 59 years",
    "B08501_054M": "Margin of Error for!!Worked at home:!!55 to 59 years",
    "B08501_055E": "Worked at home:!!60 to 64 years",
    "B08501_055M": "Margin of Error for!!Worked at home:!!60 to 64 years",
    "B08501_056E": "Worked at home:!!65 years and over",
    "B08501_056M": "Margin of Error for!!Worked at home:!!65 years and over",
    "B08503_007E": "Median age --!! Worked at home",
    "B08503_007M": "Margin of Error for!!Median age --!! Worked at home",
    "B08505A_007E": "Worked at home",
    "B08505A_007M": "Margin of Error for!!Worked at home",
    "B08505B_007E": "Worked at home",
    "B08505B_007M": "Margin of Error for!!Worked at home",
    "B08505C_007E": "Worked at home",
    "B08505C_007M": "Margin of Error for!!Worked at home",
    "B08505D_007E": "Worked at home",
    "B08505D_007M": "Margin of Error for!!Worked at home",
    "B08505E_007E": "Worked at home",
    "B08505E_007M": "Margin of Error for!!Worked at home",
    "B08505F_007E": "Worked at home",
    "B08505F_007M": "Margin of Error for!!Worked at home",
    "B08505G_007E": "Worked at home",
    "B08505G_007M": "Margin of Error for!!Worked at home",
    "B08505H_007E": "Worked at home",
    "B08505H_007M": "Margin of Error for!!Worked at home",
    "B08505I_007E": "Worked at home",
    "B08505I_007M": "Margin of Error for!!Worked at home",
    "B08511_031E": "Worked at home:",
    "B08511_031M": "Margin of Error for!!Worked at home:",
    "B08511_032E": "Worked at home:!!Native",
    "B08511_032M": "Margin of Error for!!Worked at home:!!Native",
    "B08511_033E": "Worked at home:!!Foreign born:",
    "B08511_033M": "Margin of Error for!!Worked at home:!!Foreign born:",
    "B08511_034E": "Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
    "B08511_034M": "Margin of Error for!!Worked at home:!!Foreign born:!!Naturalized U.S. citizen",
    "B08511_035E": "Worked at home:!!Foreign born:!!Not a U.S. citizen",
    "B08511_035M": "Margin of Error for!!Worked at home:!!Foreign born:!!Not a U.S. citizen",
    "B08513_049E": "Worked at home:",
    "B08513_049M": "Margin of Error for!!Worked at home:",
    "B08513_050E": "Worked at home:!!Speak only English",
    "B08513_050M": "Margin of Error for!!Worked at home:!!Speak only English",
    "B08513_051E": "Worked at home:!!Speak Spanish:",
    "B08513_051M": "Margin of Error for!!Worked at home:!!Speak Spanish:",
    "B08513_052E": "Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
    "B08513_052M": "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English \"very well\"",
    "B08513_053E": "Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
    "B08513_053M": "Margin of Error for!!Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
    "B08513_054E": "Worked at home:!!Speak other languages:",
    "B08513_054M": "Margin of Error for!!Worked at home:!!Speak other languages:",
    "B08513_055E": "Worked at home:!!Speak other languages:!!Speak English \"very well\"",
    "B08513_055M": "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English \"very well\"",
    "B08513_056E": "Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
    "B08513_056M": "Margin of Error for!!Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
    "B08519_055E": "Worked at home:",
    "B08519_055M": "Margin of Error for!!Worked at home:",
    "B08519_056E": "Worked at home:!!$1 to $9,999 or loss",
    "B08519_056M": "Margin of Error for!!Worked at home:!!$1 to $9,999 or loss",
    "B08519_057E": "Worked at home:!!$10,000 to $14,999",
    "B08519_057M": "Margin of Error for!!Worked at home:!!$10,000 to $14,999",
    "B08519_058E": "Worked at home:!!$15,000 to $24,999",
    "B08519_058M": "Margin of Error for!!Worked at home:!!$15,000 to $24,999",
    "B08519_059E": "Worked at home:!!$25,000 to $34,999",
    "B08519_059M": "Margin of Error for!!Worked at home:!!$25,000 to $34,999",
    "B08519_060E": "Worked at home:!!$35,000 to $49,999",
    "B08519_060M": "Margin of Error for!!Worked at home:!!$35,000 to $49,999",
    "B08519_061E": "Worked at home:!!$50,000 to $64,999",
    "B08519_061M": "Margin of Error for!!Worked at home:!!$50,000 to $64,999",
    "B08519_062E": "Worked at home:!!$65,000 to $74,999",
    "B08519_062M": "Margin of Error for!!Worked at home:!!$65,000 to $74,999",
    "B08519_063E": "Worked at home:!!$75,000 or more",
    "B08519_063M": "Margin of Error for!!Worked at home:!!$75,000 or more",
    "B08521_007E": "Median earnings in the past 12 months --!! Worked at home",
    "B08521_007M": "Margin of Error for!!Median earnings in the past 12 months --!! Worked at home",
    "B08522_025E": "Worked at home:",
    "B08522_025M": "Margin of Error for!!Worked at home:",
    "B08522_026E": "Worked at home:!!Below 100 percent of the poverty level",
    "B08522_026M": "Margin of Error for!!Worked at home:!!Below 100 percent of the poverty level",
    "B08522_027E": "Worked at home:!!100 to 149 percent of the poverty level",
    "B08522_027M": "Margin of Error for!!Worked at home:!!100 to 149 percent of the poverty level",
    "B08522_028E": "Worked at home:!!At or above 150 percent of the poverty level",
    "B08522_028M": "Margin of Error for!!Worked at home:!!At or above 150 percent of the poverty level",
    "B08524_043E": "Worked at home:",
    "B08524_043M": "Margin of Error for!!Worked at home:",
    "B08524_044E": "Worked at home:!!Management, business, science, and arts occupations",
    "B08524_044M": "Margin of Error for!!Worked at home:!!Management, business, science, and arts occupations",
    "B08524_045E": "Worked at home:!!Service occupations",
    "B08524_045M": "Margin of Error for!!Worked at home:!!Service occupations",
    "B08524_046E": "Worked at home:!!Sales and office occupations",
    "B08524_046M": "Margin of Error for!!Worked at home:!!Sales and office occupations",
    "B08524_047E": "Worked at home:!!Natural resources, construction, and maintenance occupations",
    "B08524_047M": "Margin of Error for!!Worked at home:!!Natural resources, construction, and maintenance occupations",
    "B08524_048E": "Worked at home:!!Production, transportation, and material moving occupations",
    "B08524_048M": "Margin of Error for!!Worked at home:!!Production, transportation, and material moving occupations",
    "B08524_049E": "Worked at home:!!Military specific occupations",
    "B08524_049M": "Margin of Error for!!Worked at home:!!Military specific occupations",
    "B08526_091E": "Worked at home:",
    "B08526_091M": "Margin of Error for!!Worked at home:",
    "B08526_092E": "Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
    "B08526_092M": "Margin of Error for!!Worked at home:!!Agriculture, forestry, fishing and hunting, and mining",
    "B08526_093E": "Worked at home:!!Construction",
    "B08526_093M": "Margin of Error for!!Worked at home:!!Construction",
    "B08526_094E": "Worked at home:!!Manufacturing",
    "B08526_094M": "Margin of Error for!!Worked at home:!!Manufacturing",
    "B08526_095E": "Worked at home:!!Wholesale trade",
    "B08526_095M": "Margin of Error for!!Worked at home:!!Wholesale trade",
    "B08526_096E": "Worked at home:!!Retail trade",
    "B08526_096M": "Margin of Error for!!Worked at home:!!Retail trade",
    "B08526_097E": "Worked at home:!!Transportation and warehousing, and utilities",
    "B08526_097M": "Margin of Error for!!Worked at home:!!Transportation and warehousing, and utilities",
    "B08526_098E": "Worked at home:!!Information",
    "B08526_098M": "Margin of Error for!!Worked at home:!!Information",
    "B08526_099E": "Worked at home:!!Finance and insurance, and real estate and rental and leasing",
    "B08526_099M": "Margin of Error for!!Worked at home:!!Finance and insurance, and real estate and rental and leasing",
    "B08526_100E": "Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
    "B08526_100M": "Margin of Error for!!Worked at home:!!Professional, scientific, and management, and administrative and waste management services",
    "B08526_101E": "Worked at home:!!Educational services, and health care and social assistance",
    "B08526_101M": "Margin of Error for!!Worked at home:!!Educational services, and health care and social assistance",
    "B08526_102E": "Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
    "B08526_102M": "Margin of Error for!!Worked at home:!!Arts, entertainment, and recreation, and accommodation and food services",
    "B08526_103E": "Worked at home:!!Other services (except public administration)",
    "B08526_103M": "Margin of Error for!!Worked at home:!!Other services (except public administration)",
    "B08526_104E": "Worked at home:!!Public administration",
    "B08526_104M": "Margin of Error for!!Worked at home:!!Public administration",
    "B08526_105E": "Worked at home:!!Armed forces",
    "B08526_105M": "Margin of Error for!!Worked at home:!!Armed forces",
    "B08528_061E": "Worked at home:",
    "B08528_061M": "Margin of Error for!!Worked at home:",
    "B08528_062E": "Worked at home:!!Private for-profit wage and salary workers:",
    "B08528_062M": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:",
    "B08528_063E": "Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
    "B08528_063M": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
    "B08528_064E": "Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
    "B08528_064M": "Margin of Error for!!Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
    "B08528_065E": "Worked at home:!!Private not-for-profit wage and salary workers",
    "B08528_065M": "Margin of Error for!!Worked at home:!!Private not-for-profit wage and salary workers",
    "B08528_066E": "Worked at home:!!Local government workers",
    "B08528_066M": "Margin of Error for!!Worked at home:!!Local government workers",
    "B08528_067E": "Worked at home:!!State government workers",
    "B08528_067M": "Margin of Error for!!Worked at home:!!State government workers",
    "B08528_068E": "Worked at home:!!Federal government workers",
    "B08528_068M": "Margin of Error for!!Worked at home:!!Federal government workers",
    "B08528_069E": "Worked at home:!!Self-employed in own not incorporated business workers",
    "B08528_069M": "Margin of Error for!!Worked at home:!!Self-employed in own not incorporated business workers",
    "B08528_070E": "Worked at home:!!Unpaid family workers",
    "B08528_070M": "Margin of Error for!!Worked at home:!!Unpaid family workers",
    "B08537_019E": "Worked at home:",
    "B08537_019M": "Margin of Error for!!Worked at home:",
    "B08537_020E": "Worked at home:!!Householder lived in owner-occupied housing units",
    "B08537_020M": "Margin of Error for!!Worked at home:!!Householder lived in owner-occupied housing units",
    "B08537_021E": "Worked at home:!!Householder lived in renter-occupied housing units",
    "B08537_021M": "Margin of Error for!!Worked at home:!!Householder lived in renter-occupied housing units",
    "B08541_031E": "Worked at home:",
    "B08541_031M": "Margin of Error for!!Worked at home:",
    "B08541_032E": "Worked at home:!!No vehicle available",
    "B08541_032M": "Margin of Error for!!Worked at home:!!No vehicle available",
    "B08541_033E": "Worked at home:!!1 vehicle available",
    "B08541_033M": "Margin of Error for!!Worked at home:!!1 vehicle available",
    "B08541_034E": "Worked at home:!!2 vehicles available",
    "B08541_034M": "Margin of Error for!!Worked at home:!!2 vehicles available",
    "B08541_035E": "Worked at home:!!3 or more vehicles available",
    "B08541_035M": "Margin of Error for!!Worked at home:!!3 or more vehicles available",
    "B08601_021E": "Worked at home",
    "B08601_021M": "Margin of Error for!!Worked at home",
    "B99083_005E": "Worked at home",
    "B99084_005E": "Worked at home",
    "B99087_005E": "Worked at home",
    "B99088_005E": "Worked at home"
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
    "Margin of Error for!!Median earnings in the past 12 months --!! Worked at home": "B08121_007M",
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
    "Median earnings in the past 12 months --!! Worked at home": "B08121_007E",
    "Worked at home": "B08006_017E",
    "Worked at home:": "B08101_049E",
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
    "age": {
        "categories": [
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
            }
        ],
        "info": {
            "code": "B08101",
            "desc": "B08101.  MEANS OF TRANSPORTATION TO WORK BY AGE",
            "normalized_desc": "Means of transportation to work by age"
        }
    },
    "citizenship status": {
        "categories": [
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
                "normalized_label": "Foreign born"
            },
            {
                "code": "B08111_035E",
                "label": "Worked at home:!!Foreign born:!!Not a U.S. citizen",
                "normalized_label": "Foreign born"
            }
        ],
        "info": {
            "code": "B08111",
            "desc": "B08111.  MEANS OF TRANSPORTATION TO WORK BY CITIZENSHIP STATUS",
            "normalized_desc": "Means of transportation to work by citizenship status"
        }
    },
    "class of worker": {
        "categories": [
            {
                "code": "B08128_062E",
                "label": "Worked at home:!!Private for-profit wage and salary workers:",
                "normalized_label": "Private for-profit wage and salary workers"
            },
            {
                "code": "B08128_063E",
                "label": "Worked at home:!!Private for-profit wage and salary workers:!!Employee of private company workers",
                "normalized_label": "Private for-profit wage and salary workers"
            },
            {
                "code": "B08128_064E",
                "label": "Worked at home:!!Private for-profit wage and salary workers:!!Self-employed in own incorporated business workers",
                "normalized_label": "Private for-profit wage and salary workers"
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
            }
        ],
        "info": {
            "code": "B08128",
            "desc": "B08128.  MEANS OF TRANSPORTATION TO WORK BY CLASS OF WORKER",
            "normalized_desc": "Means of transportation to work by class of worker"
        }
    },
    "industry": {
        "categories": [
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
            }
        ],
        "info": {
            "code": "B08126",
            "desc": "B08126.  MEANS OF TRANSPORTATION TO WORK BY INDUSTRY",
            "normalized_desc": "Means of transportation to work by industry"
        }
    },
    "language spoken at home and ability to speak english": {
        "categories": [
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
                "normalized_label": "Speak spanish"
            },
            {
                "code": "B08113_053E",
                "label": "Worked at home:!!Speak Spanish:!!Speak English less than \"very well\"",
                "normalized_label": "Speak spanish"
            },
            {
                "code": "B08113_054E",
                "label": "Worked at home:!!Speak other languages:",
                "normalized_label": "Speak other languages"
            },
            {
                "code": "B08113_055E",
                "label": "Worked at home:!!Speak other languages:!!Speak English \"very well\"",
                "normalized_label": "Speak other languages"
            },
            {
                "code": "B08113_056E",
                "label": "Worked at home:!!Speak other languages:!!Speak English less than \"very well\"",
                "normalized_label": "Speak other languages"
            }
        ],
        "info": {
            "code": "B08113",
            "desc": "B08113.  MEANS OF TRANSPORTATION TO WORK BY LANGUAGE SPOKEN AT HOME AND ABILITY TO SPEAK ENGLISH",
            "normalized_desc": "Means of transportation to work by language spoken at home and ability to speak english"
        }
    },
    "median age": {
        "categories": [
            {
                "code": "B08103_007E",
                "label": "Median age --!! Worked at home",
                "normalized_label": "Median age"
            }
        ],
        "info": {
            "code": "B08103",
            "desc": "B08103.  MEDIAN AGE BY MEANS OF TRANSPORTATION TO WORK",
            "normalized_desc": "Median age by means of transportation to work"
        }
    },
    "median earnings in the past 12 months (in 2015 inflation-adjusted dollars)": {
        "categories": [
            {
                "code": "B08121_007E",
                "label": "Median earnings in the past 12 months --!! Worked at home",
                "normalized_label": "Median earnings in the past 12 months"
            }
        ],
        "info": {
            "code": "B08121",
            "desc": "B08121. Median Earnings in the Past 12 Months (in 2015 Inflation-Adjusted Dollars) by Means of Transportation to Work",
            "normalized_desc": "Median earnings in the past 12 months (in 2015 inflation-adjusted dollars) by means of transportation to work"
        }
    },
    "occupation": {
        "categories": [
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
            }
        ],
        "info": {
            "code": "B08124",
            "desc": "B08124.  MEANS OF TRANSPORTATION TO WORK BY OCCUPATION",
            "normalized_desc": "Means of transportation to work by occupation"
        }
    },
    "poverty status in the past 12 months": {
        "categories": [
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
            }
        ],
        "info": {
            "code": "B08122",
            "desc": "B08122.  MEANS OF TRANSPORTATION TO WORK BY POVERTY STATUS IN THE PAST 12 MONTHS",
            "normalized_desc": "Means of transportation to work by poverty status in the past 12 months"
        }
    },
    "sex of workers": {
        "categories": [
            {
                "code": "B08006_034E",
                "label": "Male:!!Worked at home",
                "normalized_label": "Male"
            },
            {
                "code": "B08006_051E",
                "label": "Female:!!Worked at home",
                "normalized_label": "Female"
            }
        ],
        "info": {
            "code": "B08006",
            "desc": "B08006.  Sex of Workers by Means of Transportation to Work",
            "normalized_desc": "Sex of workers by means of transportation to work"
        }
    },
    "tenure": {
        "categories": [
            {
                "code": "B08137_020E",
                "label": "Worked at home:!!Householder lived in owner-occupied housing units",
                "normalized_label": "Householder lived in owner-occupied housing units"
            },
            {
                "code": "B08137_021E",
                "label": "Worked at home:!!Householder lived in renter-occupied housing units",
                "normalized_label": "Householder lived in renter-occupied housing units"
            }
        ],
        "info": {
            "code": "B08137",
            "desc": "B08137.  MEANS OF TRANSPORTATION TO WORK BY TENURE",
            "normalized_desc": "Means of transportation to work by tenure"
        }
    },
    "vehicles available": {
        "categories": [
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
            }
        ],
        "info": {
            "code": "B08141",
            "desc": "B08141.  MEANS OF TRANSPORTATION TO WORK BY VEHICLES AVAILABLE",
            "normalized_desc": "Means of transportation to work by vehicles available"
        }
    },
    "workers' earnings in the past 12 months (in 2015 inflation-adjusted dollars)": {
        "categories": [
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
            }
        ],
        "info": {
            "code": "B08119",
            "desc": "B08119. Means of Transportation to Work by Workers' Earnings in the Past 12 Months (in 2015 Inflation-Adjusted Dollars)",
            "normalized_desc": "Means of transportation to work by workers' earnings in the past 12 months (in 2015 inflation-adjusted dollars)"
        }
    }
}
