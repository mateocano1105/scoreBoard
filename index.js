let hcount = 0 
let gcount = 0

homeCount = document.getElementById("home-count")
guestCount = document.getElementById("guest-count")

function gAdd1(){
    gcount += 1
    guestCount.textContent = gcount
    console.log(gcount)
}

function gAdd2(){
    gcount += 2
    guestCount.textContent = gcount
    console.log(gcount)
}
function gAdd3(){
    gcount += 3
    guestCount.textContent = gcount
    console.log(gcount)
}

function hAdd1(){
    hcount += 1
    homeCount.textContent = hcount
    console.log(hcount)
}

function hAdd2(){
    hcount += 2
    homeCount.textContent = hcount
    console.log(hcount)
}
function hAdd3(){
    hcount += 3
    homeCount.textContent = hcount
    console.log(hcount)
}
