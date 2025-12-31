const persons = [
    {name : "Arif", wait : 1},
    {name : "", wait: 3},
    {name : "Hilal", wait : 3},
]

function queue (data) {
    let index = 0
    function start(){
        return new Promise ((resolve, reject)=>{
            const person = data[index]
            if (!person.name) {
                reject()
                return
            }
            if (person){
                console.log("Menunggu antrian...")
                setTimeout(function(){
                    console.log(`Pesanan "${person.name}" sudah siap`)
                    index +=1
                    resolve(start())
                }, person.wait*1000)
            }else {
                reject()
            }
        })
    }
    return start()
}

queue(persons).then().catch((err)=>{
    console.log("nama tidka valid")
})