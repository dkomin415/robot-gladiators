window.alert("Welcome to Robot Gladiators")


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  // if player choses to fight, then fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if (promptFight === "fight" || promptFight === "FIGHT") {
      while(enemyHealth > 0 && playerHealth > 0) {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
      // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      // if yes (true), leave fight
      if (confirmSkip) {
        // subtract money from playerMoney for skipping
        if(playerMoney >= 10){
          playerMoney = playerMoney - 10;
          window.alert(playerName + " has decided to skip this fight. 10 coins will be deducted for skipping, Goodbye! You now have " + playerMoney + " coins");
        } else {
          window.alert("Not enough coins to skip, minimum of 10 needed, you have " + playerMoney);
          fight();
        }
        return 0;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
  var enemyRobot = enemyNames[i];
  enemyHealth = 50;
  fight(enemyRobot);
}
