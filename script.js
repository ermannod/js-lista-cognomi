// Names
var names = ["Smith" , "Handerson" , "Jenkins" , "Draper"];
console.log(names);
var addedName = prompt("Insert your name");
console.log(addedName);

var addInArray = names.push(addedName);
names.sort();

var range = 0;
var pos = false;
while ( range < names.length) {
  console.log(names[range]);
  console.log("Place in array " + range);
  range++;
  pos = true;
}

if (pos == true ){
  var turn = names.indexOf(addedName) + 1 ;
  console.log("Your position in alphabetical order is " + turn);
}
