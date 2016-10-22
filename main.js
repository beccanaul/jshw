// var data = require('./data.json');
//
// for (i=0; i < data.length; i+=3){
//   console.log(data[i].name, data[i].gender);
// }


// 1) print the name of each person
// var data = require('./data.json');
// for(i=0; i<data.length; i++){
//   console.log(data[i].name);
// }


// 2) Print the name of the first 20 people
// var setOfInfo = require('./data.json');
// for (i = 0; i < 20; i++){
//   console.log(setOfInfo[i].name);
// }


// 3) Print the name and gender of every 3rd person
// var data = require('./data.json');
// for (i = 0; i<data.length; i+=3){
//   console.log(data[i].name);
// }


// 4) Count how many people of each gender are in the collection
// var data = require('./data.json');
// var ladies = 0;
// var men = 0;
// for (i=0; i < data.length; i++){
//   if(data[i].gender ==='female'){
//       ladies++
//   }
//   if(data[i].gender ==='male'){
//       men++
//   }
// }
// console.log(ladies);
// console.log(men);

// 5) Print the names of all the friends listed for each person in the collection
// var list = require('./data.json');
// for (i = 0; i<list.length; i++){
//   for (n = 0; n<list[i].friends.length; n++){
//     console.log(list[i].friends[n].name);
//   }
// }

// 6) Create a new collection of women over the age of 30
// var list = require('./data.json');
// for (i = 0; i < list.length; i++){
//   if (list[i].gender == "female" && list[i].age > 30) {
//     console.log(list[i].name);
//   }
// }

// 7) Print the 2nd friend of every person with brown eyes
var list = require('./data.json');
for (i = 0; i <list.length; i++){
  if (list[i].eyeColor == "brown"){
    console.log(list[i].friends[2].name)
  }
}
