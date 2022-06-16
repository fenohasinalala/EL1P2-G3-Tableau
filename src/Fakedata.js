import { faker } from '@faker-js/faker';

function Fakedata() {

    let users = []

    for (let id = 1; id <= 500; id++) {

        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let age = faker.datatype.number({
            'min': 18,
            'max': 66
        });
        let position = faker.name.jobType();
        let office = faker.address.country();
        let sdate = faker.datatype.number({
            'min': 1,
            'max': 27
        });
        let smois = faker.datatype.number({
            'min': 1,
            'max': 12
        });
        if (sdate<10) {
            sdate="0"+sdate
        };
        if (smois<10) {
            smois="0"+smois
        };
        let sannee = faker.datatype.number({
            'min': 2005,
            'max': 2021
        });
        let salary = faker.finance.amount(1000000, 9500000, 0);

        
            users.push({
                "id": id,
                "name": firstName + " " + lastName,
                "position": position,
                "office": office,
                "age": age,
                "date": sannee +"/" +smois +"/" +sdate,
                "salary": "Ar " +Number(salary).toLocaleString(),
            });

        

        
    }

    return users ;
}

export default Fakedata;