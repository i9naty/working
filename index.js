var number = Match.floor(10*Math.random()) + 1; //a number is generated from 10 to 1
console.log(number);

document.getElementById(check).onlick = function (){
    var username = document.getElementById(mynume).value;
    username = parseInt(username);
    var out = document.getElementById('out');

    if (username == number){
       out.innerHTML = 'you guessed';
    }

}
