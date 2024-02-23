const turnOn = document. getElementById('ligar');
const turnOff = document. getElementById('desligar');
const lamp = document. getElementById('lamp');

function ligar (){
    lamp.src= 'lamp js.jpg'
}

turnOn.addEventListener ('click', ligar);