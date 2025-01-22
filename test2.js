let a = true
function knapp(){
    if(a){
        document.getElementById("t1").style.display = "none"
        document.getElementById("hidden").style.display = "block"
        a = false
    }
    else{
        document.getElementById("t1").style.display = "block"
        document.getElementById("hidden").style.display = "none"       
        a = true
    }
    
}