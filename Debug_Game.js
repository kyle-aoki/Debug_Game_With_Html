
const leftPositions = ['00', '10', '20', '30', '40'];
const rightPositions = ['04', '14', '24', '34', '44'];

let score = 30;
let playerPosition = "22";
let currPos = "22";
let newPos = "";
let oldPos = "";
let index = 0;
let monsterRooms = ['02', '20', '24', '42']
let damage = 1;
let randomDmg = 0;
let attackDmg = 0;
let healAmount = 0;

let monsterHealth = 30;
let playerHealth = 30;

function findsSword(){
    if (damage == 5) return false;
    let randInt = Math.floor(Math.random() * Math.floor(10));
    return randInt == 0;
}

function fightMonster(cp){
    console.log(currPos);
    if (monsterRooms.includes(cp.toString())){
        monsterHealth = 30;
        while (monsterHealth > 0 && playerHealth > 0) {
            let ans = prompt("The Goblin's Health is " + monsterHealth + "\nYour Health is " + playerHealth,
            "enter (a) attack or (h) heal");
            if (ans == 'a') {
                randomDmg = Math.floor(Math.random() * Math.floor(5));
                playerHealth -= randomDmg;
                attackDmg = (Math.floor(Math.random() * Math.floor(2))) == 0 ? damage : 0;
                monsterHealth -= attackDmg;
                alert("You attack for " + attackDmg + " damage!" + "\nYou Take " + randomDmg + " damage.");
            } else if (ans == 'h') {
                randomDmg = Math.floor(Math.random() * Math.floor(5));
                playerHealth -= randomDmg;
                healDmg = (Math.floor(Math.random() * Math.floor(10)));
                playerHealth += healDmg;
                alert("You heal " + healDmg + " health points!" + "\nYou Take " + randomDmg + " damage.");
            } else {
                randomDmg = Math.floor(Math.random() * Math.floor(5));
                playerHealth -= randomDmg;
                alert("You do nothing" + "\nYou Take " + randomDmg + " damage.");
            }
        }
        index = monsterRooms.indexOf(currPos);
        monsterRooms.splice(index, 1);
        if (!(playerHealth > 0)) alert("YOU LOSE");
    }
}

function updatePlayerPosition(moveType){
    score -= 1;
    document.getElementById('Score').innerHTML = 'Score: ' + score;
    switch (moveType){
        case 'UP':
            oldPos = currPos.valueOf();
            if (!(Number(currPos) < 5)){
                newPos = Number(currPos) - 10;
                if (newPos.toString().length < 2) {
                    newPos = '0' + newPos.toString();
                }
                if (currPos.toString().length < 2) {
                    currPos = '0' + currPos.toString();
                }
                document.getElementById(newPos.toString()).innerHTML = "P";
                document.getElementById(oldPos.toString()).innerHTML = "O";
                currPos = newPos.toString();
            }
            fightMonster(currPos);
            break;
        case 'DOWN':
            if (currPos.toString().length < 2) {
                currPos = '0' + currPos;
            }
            oldPos = currPos.valueOf();
            if (!(newPos >= 40)) {
                newPos = Number(currPos) + 10;
                document.getElementById(newPos.toString()).innerHTML = "P";
                document.getElementById(oldPos.toString()).innerHTML = "O";
                currPos = newPos;
            }
            fightMonster(currPos);
            break;
        case 'LEFT':
            if (currPos.toString().length < 2) {
                currPos = '0' + currPos;
            }
            oldPos = currPos.valueOf();
            if (!(leftPositions.includes(currPos.toString()))) {
                newPos = Number(currPos) - 1;
                if (newPos.toString().length < 2) {
                    newPos = '0' + newPos;
                }
                document.getElementById(newPos.toString()).innerHTML = "P";
                document.getElementById(oldPos.toString()).innerHTML = "O";
                currPos = newPos;
            }
            fightMonster(currPos);
            break;
        case 'RIGHT':
            if (currPos.toString().length < 2) {
                currPos = '0' + currPos;
            }
            oldPos = currPos.valueOf();
            if (!(rightPositions.includes(currPos.toString()))) {
                newPos = Number(currPos) + 1;
                if (newPos.toString().length < 2) {
                    newPos = '0' + newPos;
                }
                document.getElementById(newPos.toString()).innerHTML = "P";
                document.getElementById(oldPos.toString()).innerHTML = "O";
                currPos = newPos;
            }
            fightMonster(currPos);
            break;

    }
    if (findsSword()){
        alert("YOU FOUND A SWORD")
        damage = 5;
    }
    if (score == -1) {
        alert("YOU LOSE");
    }
}


