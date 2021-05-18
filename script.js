const melee_div = document.getElementById("melee");
const magic_div = document.getElementById("magic");
const ranged_div = document.getElementById("ranged");
let userHealth = 10;
let opponentHealth = 10;
const userHealth_span = document.getElementById("userHealthNum");
const opponentHealth_span = document.getElementById("opponentHealthNum");
const result_div = document.querySelector(".result");
const reset_btn = document.getElementById("reset");

function main() {
    melee_div.addEventListener('click', function() {
        playRound("melee");
    });
    
    magic_div.addEventListener('click', function() {
        playRound("magic");
    });
    
    ranged_div.addEventListener('click', function() {
        playRound("ranged");
    });

    reset_btn.addEventListener('click', function() {
        resetGame();
    });

}

function resetGame() {
    location.reload();
}

function computerPlay() {
    //create array of melee, magic, and ranged
    let hand = ["melee", "magic", "ranged"]
    //generate a random number between 0 and 2
    let random = Math.floor(Math.random() * hand.length);
    //take the string at that numbers location in the array
    let response = hand[random];

    //print melee, magic, or ranged
    return response;
}

function win(playerSelection) {
    if (opponentHealth > 1) {
        opponentHealth--;
        switch(playerSelection) {
            case "melee":
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "Your sword slices right through the ranger's feeble leather armour, destroying her quiver.<br><br>(Melee beats ranged)";
                break;
            case "magic": 
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "The warrior's metal armour conducts your spell. Making it more potent!<br><br>(Magic beats melee)";
                    break;
            case "ranged":
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "Your arrow pierces the mage's simple cloth, hitting him in the knee.<br><br>(Ranged beats magic)";
        }
    } else if (opponentHealth === 1) {
        opponentHealth--;
        switch(playerSelection) {
            case "melee":
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "Your final strike brings the ranged to her knees. She surrenders, and returns to her homeworld battered and bruised. Zamorak's adept ranger has fallen. You have won! Gielnor is saved!<br><br>(Melee beats ranged)";
                break;
            case "magic": 
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "Combining all of the runes in your inventory, you create the most devestating spell in history. The warrior is blasted back through the portal, leaving only his chestplate. Zamorak's mightiest fighter has fallen. You have won! Gielnor is saved!<br><br>(Magic beats melee)";
                break;
            case "ranged":
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "Drawing the last arrow from your quiver, the mage conjures a fireblast in your direction. You shoot the arrow through the oncoming fireball, and see the mage teleport away in fear. He will not be back. Zamorak's most formidable mage has fallen. You have won! Gielnor is saved!<br><br>(Ranged beats magic)";
                break;
        }
    }
    
}


function lose(playerSelection) {
    if (userHealth > 1) {
        userHealth--;
        switch(playerSelection) {
            case "melee":
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "The spell power is increased due to your armour choice. Dazing you.<br><br>(Magic beats melee)"
                break;
            case "magic": 
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "The archer's arrow penetrates your soft mystic armour.<br><br>(Ranged beats magic)"
                break;
            case "ranged":
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "The warrior charges at you, making you panic and miss all of your arrow. The sword slashes through your dragonhide.<br><br>(Melee beats ranged)"
                break;
            }
    } else if (userHealth === 1) { 
        userHealth--;
        switch(playerSelection) {
            case "melee":
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "The mages spell shatters your armour, making it useless. As you gain the strength to regain your ground, the mage casts ice barrage. Just before it hits you, Guthix appears and drags you to safety. You live to fight another day.<br><br>(Magic beats melee)"
                break;
            case "magic": 
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "Your low level batwing gear is no match for the rangers stolen Seren Godbow. As he readies his arrow, you find enough runes to cast a teleport to Trollheim. You are far from civilization, but alive nonetheless.<br><br>(Ranged beats magic)"
                break;
            case "ranged":
                userHealth_span.innerHTML = userHealth;
                opponentHealth_span.innerHTML = opponentHealth;
                result_div.innerHTML = "Panicking as you run out of arrows, the warrior moves closer to you for the final blow. On your knees you surrender to him... As you bow your head, accepting death...<br><strong>POCKET SAND!</strong><br>You run away to heal at a nearby village.<br><br>(Melee beats ranged)"
                break;
            }
    }
}

function tie(playerSelection) {
    switch(playerSelection) {
        case "melee":
            userHealth_span.innerHTML = userHealth;
            opponentHealth_span.innerHTML = opponentHealth;
            result_div.innerHTML = "Your swords clash together, but you are both still standing."
            break;
        case "magic": 
            userHealth_span.innerHTML = userHealth;
            opponentHealth_span.innerHTML = opponentHealth;
            result_div.innerHTML = "You both drop your runes trying to cast a powerful spell. Nothing happens."
            break;
        case "ranged":
            userHealth_span.innerHTML = userHealth;
            opponentHealth_span.innerHTML = opponentHealth;
            result_div.innerHTML = "The arrows collide in mid-air, both of them crashing to the ground."
            break;
        }
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    console.log("Computer: " + computerSelection);

    if ((userHealth > 0) && (opponentHealth > 0))
    switch(playerSelection+computerSelection) {
        case "meleemelee":
            tie("melee");
            break;
        case "magicmagic":
            tie("magic");
            break;
        case "rangedranged":
            tie("ranged");
            break;
        case "meleeranged":
            win("melee");
            break;
        case "magicmelee":
            win("magic");
            break;
        case "rangedmagic":
            win("ranged");
            break;
        case "meleemagic":
            lose("melee");
            break;
        case "magicranged":
            lose("magic");
            break;
        case "rangedmelee":
            lose("ranged");
            break;
    }
}


main();

