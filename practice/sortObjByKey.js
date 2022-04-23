let data = [{
    firstName:'john',
    lastName:'doe',
    Age: 25,
    subject:['hindi','english']
    },
    {
    firstName: 'matt',
    lastName:'lathrop',
    Age: 23,
    subject:['math','english']
    },
    {
    firstName: 'chris',
    lastName:'igoe',
    Age: 25,
    subject:['science']
    }];

    data.sort( (a,b) =>{
        let A = a.firstName;
        let B = b.firstName;
        if(A > B) return 1;
        if(A < B) return -1;
        return 0;
    })
    console.log("🚀 ~ file: sortObjByKey.js ~ line 26 ~ data.sort ~ data", data)
