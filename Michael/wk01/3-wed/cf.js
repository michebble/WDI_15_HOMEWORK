console.log('Control Flow Examples');
console.log('For "The even/odd reporter" type: q1();');
console.log('For "Multiplication Tables" type: q2();');
console.log('For "My Top Icecreams" type: q3();');
console.log('For a "Bouns" type: bonus();');

function q1() {
  console.log('\nThe even/odd reporter');
  for (i = 0; i <= 20; i++) {
    if (i == 0) {
      console.log(i + ' is even?')
    } else if (i % 2 == 0) {
      console.log(i + ' is even.')
    } else {
      console.log(i + ' is odd.')
    }
  }
}

function q2() {
  console.log('\nMultiplication Tables');
  for (factor = 1; factor <= 10; factor++) {
    console.log('* The ' + factor + ' times table *')
    for (i = 1; i <= 10; i++) {
     var multiple = i * factor;
    console.log(i + ' * ' + factor +' = ' + multiple);
    }
  }
}

favIceCreams = ['rum raisin', 'vanilla', 'mint chocolate chip', 'caramel swirl', 'strawberry'];

function q3() {
  console.log('\nMy top icecreams');
  for (i = 0; i < favIceCreams.length; i++) {
    var choice = i + 1;
    console.log('My #' + choice + ' choice is ' + favIceCreams[i]);
  }
}

function bonus() {
  console.log('\nBonus')
  for (i = 0; i < favIceCreams.length; i++) {
    choice = i + 1;
    var place = ''
    if (choice == 1) {
      place = choice + 'st';
    } else if (choice == 2) {
      place = choice + 'nd';
    } else if (choice == 3) {
      place = choice + 'rd';
    } else {
      place = choice + 'th';
    }
    console.log('My ' + place + ' choice is ' + favIceCreams[i]);
  }
}