// Names
var names = ["Smith" , "Handerson" , "Jenkins" , "Draper"];
console.log(names);

// Get new name
var addedName = prompt("Insert your name");
console.log(addedName);

var addInArray = names.push(addedName);

// Sort in alphabetical order
names.sort();

// Name list
var range = 0;
var pos = false;
while ( range < names.length) {
  console.log(names[range]);
  console.log("Place in array " + range);
  range++;
  pos = true;
}


// Position of new name in alphabetical order
if (pos == true ){
  var turn = names.indexOf(addedName);
  console.log("Your position in alphabetical order is " + turn);
}
