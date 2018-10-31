// 4. Arrays of objects
// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.


myArray = [


objOne = {

    name: 'Joe',
    jobTitle: 'worker' 


},

objTwo = {

    name: 'Fred',
    jobTitle: 'mechanic' 
    
},

objThree = {

    name: 'Sue',
    jobTitle: 'doctor' 
     
}

]

for (let i = 0; i < myArray.length; i++){

    for(let key in myArray[i]){

        console.log(myArray[i][key]);
    }

}

console.log(myArray);
