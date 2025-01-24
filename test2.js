let a = true
function knapp(){
    if(a){
        document.getElementById("t1").style.display = "none"
        document.getElementById("hidden").style.display = "block"
        document.getElementById("button").innerHTML = "Byt till sämre text"
        a = false
    }
    else{
        document.getElementById("t1").style.display = "block"
        document.getElementById("hidden").style.display = "none"
        document.getElementById("button").innerHTML = "Byt till bättre text"

        a = true
    }
}

let b = 1;
function Läggtill(){
    document.getElementById("lägg").innerHTML += "<p>\n</p>"+b+"<h3> Hej hur mår du idag </h3>"
    b+=1
}

