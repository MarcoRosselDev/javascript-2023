// ejercicio 307 --> realizar una solicitud Get con la API Fetch.

const url = 'https://randomuser.me/api/?results=4'

fetch(url)
.then((response) => response.json())
.then((data) =>{
    console.log(data);
}).catch((error) => {
    console.error(error);
})

console.log('test if successful');

/*
test if successful
{
    results: [
    {
        gender: 'female',
        name: [Object],
        location: [Object],
        email: 'juliette.bergeron@example.com',
        login: [Object],
        dob: [Object],
        registered: [Object],
        phone: 'X60 N21-4142',
        cell: 'T61 A26-8017',
        id: [Object],
        picture: [Object],
        nat: 'CA'
    },
    {
        gender: 'female',
        name: [Object],
        location: [Object],
        email: 'noelle.pai@example.com',
        login: [Object],
        dob: [Object],
        registered: [Object],
        phone: '7629025802',
        cell: '8184286772',
        id: [Object],
        picture: [Object],
        nat: 'IN'
    },
    {
        gender: 'female',
        name: [Object],
        location: [Object],
        email: 'radoslava.atroshenko@example.com',
        login: [Object],
        dob: [Object],
        registered: [Object],
        phone: '(099) D70-0891',
        cell: '(068) W42-1181',
        id: [Object],
        picture: [Object],
        nat: 'UA'
    },
    {
        gender: 'female',
        name: [Object],
        location: [Object],
        email: 'tanja.zivojinovic@example.com',
        login: [Object],
        dob: [Object],
        registered: [Object],
        phone: '010-6712-972',
        cell: '060-7635-208',
        id: [Object],
        picture: [Object],
        nat: 'RS'
    }
    ],
    info: { seed: '2174884e55680c95', results: 4, page: 1, version: '1.4' }
}

*/