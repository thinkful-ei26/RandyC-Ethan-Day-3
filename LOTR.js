// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
'use strict';


function createCharacter(name, nickname, race, origin, attack, defense, weapon){
  return {
    name, nickname, race, origin, attack, defense, weapon,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`;
    },
    evaluateFight: function(character){
      if (character.attack - this.attack > 0){
        return `Your opponent takes ${this.attack - character.defense} damage and you receive ${character.attack - this.attack} damage`;
      } else {
        return `Your opponent takes ${this.attack - character.defense} damage and you receive 0 damage`;
      }
    }
  };
}

// const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
// const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
// const frodo =  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
// const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
// const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);


// console.log(gandalf.evaluateFight(bilbo));
// console.log(bilbo);

const characters =
[createCharacter('Arwen Undomiel', 'arwen', 'Half Elf', 'Rivendell', 5, 5, 'the Hadhafang'),
createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6,'a wizard staff'),
createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'a Bow and Arrow'),
createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'the Anduril'),
createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'a String and Barrow Blade'),
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'), ]



function findAragorn(arr) {
  return arr.find(obj => obj.nickname === 'aragorn');
}

function filterHobbit(arr) {

  return arr.filter(obj => obj.race === 'Hobbit');
 
}

function filterAttackAboveFive(arr) {

  return arr.filter(obj => obj.attack > 5);

}




//console.log(filterAttackAboveFive(characters));

console.log(characters[1].describe());