'use strict';


const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];


function findOne (arr, query) {
  //console.log(query.map(obj => Object.values(obj)));
  let queryTransform = Object.values(query);
  //let queryArray = query.map(obj => Object.values(obj));
  let valueArray = arr.map(obj => Object.values(obj));
  //return arr.find(obj => obj.name === query);
  //return arr;
  // if (queryTransform === toString(valueArray[0][0])){
  //   return arr[0];
  // }
  // console.log(valueArray[0][0]);
  for (let i = 0; i < valueArray.length; i++){
    if (((valueArray[i][0] === queryTransform[0]) && 
      (!queryTransform[1] || valueArray[i][1] === queryTransform[1] || valueArray[i][2] === queryTransform[1]) && 
      (!queryTransform[2] || valueArray[i][2] === queryTransform[2])) || 

      (queryTransform[0] === valueArray[i][1] && 
      (!queryTransform[1] ||  valueArray[i][2] === queryTransform[1])) ||

      (queryTransform[0] === valueArray[i][2])) {
      return arr[i];
    }
  }
  console.log(valueArray);
  console.log(queryTransform);
}


console.log(findOne(HEROES, {squad: 'Justice League'}));

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));

console.log(findOne(HEROES, { id: 4, name: 'Superman', squad: 'Justice League' }));

