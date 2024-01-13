"use strict";

let dugme = document.getElementById("procitaJos");
dugme.addEventListener("click", ispisati);

function ispisati(){
    let noviElm = document.createElement("p");
    noviElm.innerHTML = '"Kada želimo pružiti hitno potrebnu potporu, od vitalnog je značaja da razmotrimo i pružanje dugoročne podrške kako bismo pomogli stanovništvu da si pomogne”, rekao je Yousef."';
    noviElm.className = "fw-light";
    document.getElementById("head-col").appendChild(noviElm);
}

function ispisiRijec(rijec){
    let r = document.createElement("t");
    r.innerHTML = "Vasa rijec za pretragu je: "+rijec;
    document.getElementById("head-col").appendChild(r);
}