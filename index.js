var number = Math.floor(10*Math.random()) + 1; //a number is generated from 10 to 1
console.log(number);

document.getElementById('check').onclick = function (){
    var usernume = document.getElementById('mynume').value;
    usernume = parseInt(usernume);
    var out = document.getElementById('out');

    if (usernume == number){
       out.innerHTML = 'you guessed';
    }
    else if (usernume > number){
        out.innerHTML = "Missed";
    } 
    else if (usernume<number){
        out.innerHTML = "not at all"
        
    
    }
}

