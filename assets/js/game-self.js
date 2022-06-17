window.alert("Welcome to Robot Gladiators");
// player information
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy information
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Function Declaration
// function fight() {
//   window.alert("Welcome to Robot Gladiators!");
// }
// // execute function
// fight();

// Function Expression
var fight = function(enemyName) {
  // Alert players that they are starting the round
  for(var i = 0; i < enemyNames.length; i++){
    var round = i;
    window.alert("Round " + round + " Has Begun!!");    
    // check enemy's health
    while(enemyHealth > 0 && playerHealth > 0){
      
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      window.alert(  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." );   
      
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        return 0;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      
      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      window.alert( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." );
      
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        return 0;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }  
  }
};

var prompt = function() {
  
  for(var i = 0; i < enemyNames.length; i++) {
    var enemyRobot = enemyNames[i];
    var confirm = false;
    do{
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
      
      // if player choses to fight, then fight
      if (promptFight.toLowerCase = "fight") {
        fight(enemyRobot);
        
        // if player choses to skip
      } else if (promptFight.toLowerCase = "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
          fight();
        }
      } else {
        window.alert("You need to choose a valid option. Try again!");
        confirm = true;
      }
    } while(confirm);
  }
}
