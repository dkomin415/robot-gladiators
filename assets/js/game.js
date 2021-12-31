window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("Enter Your Robots Name.");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var playerMoneyNew;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked.
    alert(

      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has been defeated!");

      break;
    } else {
      // Subtract the value of 'enemyAttack' form the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
      playerHealth = playerHealth - enemyAttack;

      // Log a resulting message to the console so we know that it worked.
      if (playerHealth <= 0) {
        alert(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining."
        );
        window.alert(playerName + " has been defeated!");
        break;
      } else {
        alert(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining."
        );
      }
    }
  }
};
promptFight()

function promptFight() {
    while(playerHealth > 0) {
    //Asks players to fight or skip battle
    var fightSelector = window.prompt("Do You Want to Start The Match? \n (Enter 'yes' or 'no') ");

    if (fightSelector === "yes" || fightSelector === "YES") {
      for (var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
      }
      // if player selects no it confirms to skip
    }
    else if(fightSelector === "no" || fightSelector === "NO") {
      var confirmSkip = window.confirm("You will be deducted 10 coins, are you sure you'd like to skip this battle?");
      // confirm to skip
      if (confirmSkip) {
        window.alert("You've Decided To Skip The Battle.");
        // subtract money from playerMoney for skipping
        playerMoneyNew = playerMoney - 10;
        window.alert("You will be penalized by losing ten coins \n " + playerMoney + " --> " + playerMoneyNew);
      } else {
        fight(pickedEnemyName);
      }

    }
    else{
      window.alert("That's Not A Valid Response. Try Again!");
    };
  }
}
