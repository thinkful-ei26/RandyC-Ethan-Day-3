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
  let queryTransform = Object.values(query).join(',');
  //let queryArray = query.map(obj => Object.values(obj));
  let valueArray = arr.map(obj => Object.values(obj));
  //return arr.find(obj => obj.name === query);
  //return arr;
  if (queryTransform === toString(valueArray[0][0])){
    return arr[0];
  }
  console.log(valueArray[0][0]);
  console.log(valueArray);
  console.log(queryTransform);
}


console.log(findOne(HEROES, {id: 1}));