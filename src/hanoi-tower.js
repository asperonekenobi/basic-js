module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let hanoi ={};
    hanoi.turns = Math.pow(2,disksNumber)-1;
    hanoi.seconds = hanoi.turns / (turnsSpeed/3600);
    return hanoi;
}