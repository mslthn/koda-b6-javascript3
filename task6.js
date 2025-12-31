const persons = [
    {name : "Andi", wait : 3},
    {name : "", wait: 2},
    {name : "Budi", wait : 5},
    {name : "Citra", wait : 2},
    {name : "Dewi", wait : 4},
    {name : "Eka", wait : 1},
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

queue(persons).then((hasil)=>{
    console.log("berhasil")
}).catch((err)=>{
    console.log("nama tidka valid")
})