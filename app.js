const classFive=[
    { 
    id: 111,
    name: 'Abu Bakkar Siddik',
    father: 'Amirul Islam',
    mother: 'Anowara Begum',
    location: 'Dinajpur',
    bn: 55,
    en: 69,
    mt: 90,
    s: 66,
    ss: 80,
    ict: 00 
    },
    { 
    id: 112,
    name: 'Delwer Hossain',
    father: 'Torikul Islam',
    mother: 'Josna Begum',
    location: 'Thakurgaon',
    bn: 80,
    en: 99,
    mt: 60,
    s: 60,
    ss: 70,
    ict: 70 
    },
    { 
    id: 113,
    name: 'Jillur Rahman',
    father: 'Ansarul Haque',
    mother: 'Jinnatun',
    location: 'Uttara',
    bn: 45,
    en: 59,
    mt: 69,
    s: 40,
    ss: 90,
    ict: 60 
    },
    { 
    id: 114,
    name: 'Khalekujjaman Akash',
    father: 'Imran Khan',
    mother: 'Kohinur Akter',
    location: 'Birol',
    bn: 85,
    en: 90,
    mt: 90,
    s: 100,
    ss: 89,
    ict: 95 
    },
    { 
    id: 115,
    name: 'Pijus Kormokar',
    father: 'Roni Kormokar',
    mother: 'Hira Lal',
    location: 'Nougaon',
    bn: 12,
    en: 40,
    mt: 50,
    s: 06,
    ss: 45,
    ict: 38 
    },
    { 
    id: 116,
    name: 'Ridam Pal',
    father: 'Ronojit Pal',
    mother: 'Kisku Pal',
    location: 'Adabor',
    bn: 55,
    en: 49,
    mt: 90,
    s: 60,
    ss: 80,
    ict: 70 
    }
]
let result= new Result();

classFive.map(data=>(
    console.log(`
    ID: ${data.id}
    Name: ${data.name}
    Father Name: ${data.father}
    Mother Name: ${data.mother}
    Location: ${data.location}
    MarkSheet
    Subject     Mark        GPA         Grade
    Bangla      ${data.bn}      ${result.gpa(data.bn)}          ${result.grade(result.gpa(data.bn))}
    English     ${data.en}      ${result.gpa(data.en)}          ${result.grade(result.gpa(data.en))} 
    Math        ${data.mt}      ${result.gpa(data.mt)}          ${result.grade(result.gpa(data.mt))} 
    Science     ${data.s}       ${result.gpa(data.s)}           ${result.grade(result.gpa(data.s))} 
    S Science   ${data.ss}      ${result.gpa(data.ss)}          ${result.grade(result.gpa(data.ss))} 
    ICT         ${data.ict}     ${result.gpa(data.ict)}         ${result.grade(result.gpa(data.ict))}
    --------------------------------------------------------------------------------------
    ${result.cgpa((result.gpa(data.bn)), (result.gpa(data.en)), (result.gpa(data.mt)), (result.gpa(data.s)), (result.gpa(data.ss)), (result.gpa(data.ict)) )}
    `)
))


