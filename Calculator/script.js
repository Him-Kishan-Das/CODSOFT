let clr = () =>{
    document.getElementById("screen").value = ""
}

let display = (val) => {
    document.getElementById("screen").value += val + " ";
}

function solve() { 
    let x = document.getElementById("screen").value 
    let y = math.evaluate(x) 
    document.getElementById("screen").value = y 
} 