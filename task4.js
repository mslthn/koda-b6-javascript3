// Program antri pesan makanan
const data = [
    {name : "Andi",
     wait : 3000
    },
    {name : "Budi",
     wait : 5000
    },
    {name : "Citra",
     wait : 2000
    },
    {name : "Dewi",
     wait : 4000
    },
    {name : "Eka",
     wait : 1000
    }
]

for (let i = 0; i < data.length; i++) {
        // console.log(data[i].name)
        setInterval( () => {
            console.log("menunggu antrian")
            console.log(data[i].name)
        }, 1000)
        
        setTimeout( () => {
            console.log(`halo ${data[i].name} pesanan sudah selesai`)
        }, data[i].wait)
}

// function orderFood(data) {
//     for (i = 0; i < data.length; i++) {
//         console.log(data[i].name)
//         // setTimeout( () => {
//         //     console.log(`halo ${data[i].name} pesanan sudah selesai`)
//         // }, data[i].wait)
//     }
// }

// setInterval( () => {
//     console.log("menunggu antrian")
//     console.log(data[i].name)
// }, 1000)
