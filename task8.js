const url = "https://jsonplaceholder.typicode.com/users";
let email = [];

fetch(url).then(obj => {
    obj.text().then(value => {
        const body = JSON.parse(value)
        for (let x in body) {
            email.push(body[x].email) //.toLowerCase()
        }        
        // console.log(email[0])
        console.log("Email asal :", email)

// konversi lwecase

    })
})

async function getData(){
    const res = await fetch(url)
    const data = await res.json()
    const emails = data.map(user => user.email.toLowerCase())
    // console.log("Email tolowercase : ", emails)
}
getData()

