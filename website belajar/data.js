const nama = "Reva Videla Adel Panjoro";
let umur = 17;

let biodata = document.getElementById('biodata');
console.log(biodata);

function Biodata() {
    let generasi;

    if(umur > 0 && umur < 10) {
         generasi = "adel termasuk generasi bayi";
    }
    else if(umur > 10 && umur <20){
        generasi ="adel termasuk generasi remaja";
    }
    else if(umur>20 && umur <40){
        generasi ="adel termasuk generasi dewasa"
    }
    else {
        generasi ="adel termasuk generasi tua";
    }

    return biodata.innerHTML = generasi;
}

console.log (`Nama saya adalah ${nama} dan umur saya adalah ${umur} tahun`)
Biodata();