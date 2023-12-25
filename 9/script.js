let kupon = []
const sonuclar = []

function kaydet() {
    const sayilar = document.getElementsByClassName("kupon-input")
    kupon = []

    for (let i = 0; i < sayilar.length; i++) {
        const value = Number(sayilar[i].value)
        if (!kupon.includes(value)) {
            kupon.push(Number(sayilar[i].value))
        } else {
            alert("Sayılar tekrar edemez!")
            return;
        }
    }

    for (let k = 0; k < sayilar.length; k++) {
        sayilar[k].setAttribute("disabled", true)
    }

    const kaydetButton = document.getElementById("btnKaydet")
    const cekilisButton = document.getElementById("btnCekilisYap")

    kaydetButton.setAttribute("style", "display:none;")
    cekilisButton.setAttribute("style", "")

}

function cekilisYap() {
    const sonucP = document.getElementById("sonuc")
    const cekilisButton = document.getElementById("btnCekilisYap")
    const karsilastirButton = document.getElementById("btnKarsilastir")

    cekilisButton.setAttribute("style", "display:none;")
    karsilastirButton.setAttribute("style", "")

    for (let i = 0; i < 6; i++) {
        const newNumber = Math.floor(Math.random() * 49) + 1;
        if (!sonuclar.includes(newNumber)) {
            sonuclar.push(newNumber)
            sonucP.innerHTML += sonuclar[i] + " "
        }
        else {
            i--;
        }
    }
}

function karsilastir() {

    console.log(kupon);
    console.log(sonuclar);
    const tutanlar = []

    for (let i = 0; i < kupon.length; i++) {
        for (let k = 0; k < sonuclar.length; k++) {
            if (kupon[i] === sonuclar[k]) {
                tutanlar.push(kupon[i])
            }
        }
    }

    console.log(tutanlar);

}


