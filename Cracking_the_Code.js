
// 6. Cracking the code 2
// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. Additionally, create a decodeWords function
// that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

//Cracking the code

let myMessage = 'craft block argon meter bells brown croon droop';

const myCipherObj = {

    a: 1,
    b: 2,
    c: 3,
    d: 4


}

decode(myMessage);

function decode(codedMessage){

    let wordArray = codedMessage.split(' ');

    let decodedMessage = "";
    
    let compareValue = Object.keys(myCipherObj);

    for(let i = 0; i < wordArray.length; i ++){
        
         
        if(wordArray[i][0] === compareValue[0]){decodedMessage += wordArray[i][1];}
        if(wordArray[i][0] === compareValue[1]){decodedMessage += wordArray[i][2];}
        if(wordArray[i][0] === compareValue[2]){decodedMessage += wordArray[i][3];}
        if(wordArray[i][0] === compareValue[3]){decodedMessage += wordArray[i][4];}
        else if(wordArray[i][0] !== 'a' && wordArray[i][0] !== 'b' && wordArray[i][0] !== 'c' && wordArray[i][0] !== 'd'){

            decodedMessage += " ";

        }

 
    }

    console.log(decodedMessage);
    return decodedMessage;

}