// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

'use strict';

const objOne = {
  name: 'Joe',
  jobTitle: 'worker',
  boss: 'Rich'
};

const objTwo = {
  name: 'Fred',
  jobTitle: 'mechanic',
  boss: 'Rich'
};

const objThree = {
  name: 'Sue',
  jobTitle: 'doctor',
  boss: 'Rich'
};

const objFour = {
  name: 'Rich',
  jobTitle: 'owner'
};

const myArray = [objOne, objTwo, objThree, objFour];

function bossName(arr){
  for (let i = 0; i < arr.length; i++){
    let valuesArray = Object.values(arr[i]);
    if (valuesArray[2]){
      console.log(`${valuesArray[1]} ${valuesArray[0]} reports to ${valuesArray[2]}.`);
    } else {
      console.log(`${valuesArray[1]} ${valuesArray[0]} reports to NO ONE.`);
    }
    // for(let key in arr[i]){
    //   console.log(arr[i][key]);

  }
}

//console.log(myArray);
console.log(bossName(myArray));
