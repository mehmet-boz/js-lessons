const kupon = []
const sonuclar = []

function kaydet() {
    const sayilar = document.getElementsByClassName("kupon-input")

    for (let i = 0; i < sayilar.length; i++) {
        kupon.push(sayilar[i].value)
        sayilar[i].setAttribute("disabled", true)
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
        sonuclar.push(Math.floor(Math.random() * 49) + 1)
        sonucP.innerHTML += sonuclar[i] + " "
    }
}

