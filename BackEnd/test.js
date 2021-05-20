var array = [0, 1, null, 2, "", 3, undefined];

// var filtered = array.filter(function (el) {
//   return el != null;
// });

let {mot, hai , ba} = array.filter(Boolean);
console.log(mot);