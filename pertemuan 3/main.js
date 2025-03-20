let nama = 'Flavia' //string
let umur = 20 //integer
let TinggiBadan = 159.4 //float
let pacar = 1
let NamaPanggilan =[
    "flav",
    "via",
    "fla"
]

BeratBadan = 53
// if (pacar == null){
//     pacar = 'tidak ada'
// } else {
//     pacar = 'sudah ada' 
// }

let UangAwal = 800000
let Uangtambahan = 1200000
const uangakhir = UangAwal + Uangtambahan

switch(pacar){
    case 1:
        pacar = 'ada pokoknya'
        break
    case 2:
        pacar = 'si itu'
        break
    default:
        pacar = 'belum ada'
        break
}

alert (`nama akuu ${nama} umur ${umur} Tinggi Badan ${TinggiBadan}cm berat badan ${BeratBadan} pacar ${pacar}`)
console.log(nama)
console.log(NamaPanggilan[0])
NamaPanggilan[2] = "hana";
console.log(NamaPanggilan[2])
NamaPanggilan[1] = 22;
console.log(NamaPanggilan[1])
alert (`uang awalku sebesar Rp. ${UangAwal} di kasih uang tambahan Rp. ${Uangtambahan} jadi uang akhir aku adalah ${uangakhir}`)
