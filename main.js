let buttons = document.querySelectorAll("button");
let calculate = document.getElementById("calculator");
let display = document.getElementById("display");
let moveDirect = document.getElementById("center");
let submitBtn = document.getElementById("submit")
buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        let value = e.target.textContent;
        switch (value){
            case "+":                
                display.value += "+";
                break;
            case "-":
                display.value += "-";
                break;
            case "/":
                display.value += "/"
                break;
            case "x":
                display.value += "*"
                break;                
            case "CE":
                display.value = display.value.toString().slice(0, -1);
                break;
            case "C":
                display.value = "";
                break;
            case "=":
                try{
                    let expression = display.value
                    expression = expression
                    const result = eval(expression);
                    display.value = result;
                }catch{
                    display.value = "Error";
                }
                break;
            default: 
                display.value += value;
                break;
        }
    
    })
})

moveDirect.addEventListener('click', ()=>{
    display.classList.toggle("active");   
    document.getElementById("center").classList.toggle("active");
    document.getElementById("buttons").classList.toggle("active");
    document.getElementById("background").classList.toggle("active");
    document.getElementById("calc").classList.toggle("active");
    document.getElementById("left").classList.toggle("active");
    document.getElementById("next").classList.toggle("active");
    buttons.forEach(one =>{
        one.classList.toggle("active");
    });    
});

function toRadians(deg){
        return deg * (Math.PI / 180);
}

function sin(){
    display.value = Math.round(Math.sin(toRadians(display.value)) *1000) / 1000;
}
function cos(){
    display.value = Math.round(Math.cos(toRadians(display.value)) * 1000 ) / 1000;
}
function tan(){
    display.value = Math.round(Math.tan(toRadians(display.value)) *1000) / 1000;
}
function log(){
    display.value = Math.log10(display.value);
}

function sqrt(){
    display.value = Math.round(Math.sqrt((display.value)));
}
function pow(){
    display.value = Math.pow(display.value, 2);
}

function pi(){
    display.value = Math.PI*display.value;
}
function expo(){
    display.value = Math.pow(display.value, display.value);
}