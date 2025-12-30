let namaSiswa = ["Ana", "Andi", "Anto", "Antok", "Ani", "Anti", "Adi", "Adit", "Acil", "Anandita",
    // "Budi", "Badu", "Badul", "Badui", "Baba",
    // "Cici", "Cila", "Cico", "Chika", "Cicut", "Cicil", "Cicui"
]

let hasil = []

const countNamaSiswa = (hasilMatch) => {
    console.log("Jumlah nama siswa yang mengandung kata kunci adalah:", hasilMatch);
}

const searchNamaSiswa = (keyword, callbackFunction) => {
    let count = 0
    for (let i = 0; i < namaSiswa.length; i++) {
        const lowercaseName = namaSiswa[i].toLowerCase()
        const keywordLower = keyword.toLowerCase()
        if (lowercaseName.includes(keywordLower)) {
            hasil.push(namaSiswa[i])
            count++
        }
    }
    console.log(hasil);
    callbackFunction(count)
}

searchNamaSiswa("An", (countNamaSiswa))