// Program antri pesan makanan dengan callback
const data = [
    {name : "Andi", wait : 3000},
    {name : "Budi", wait : 5000},
    {name : "Citra", wait : 2000},
    {name : "Dewi", wait : 4000},
    {name : "Eka", wait : 1000}
];

function processQueue(index, callback) {
    if (index >= data.length) {
        callback()
        return
    }

    const order = data[index];
    console.log(`Memproses pesanan untuk ${order.name}...`)

    const waiting = setInterval(() => {
        console.log(`Menunggu antrian untuk ${order.name}...`)
    }, 1000)

    setTimeout(() => {
        clearInterval(waiting)
        console.log(`Halo ${order.name}, pesanan sudah selesai!`)
        processQueue(index + 1, callback)
    }, order.wait)
}

processQueue(0, () => {
    console.log("Semua pesanan telah selesai diproses.")
})
