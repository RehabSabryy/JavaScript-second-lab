// Question 1

while (true) {
    var userAge = prompt('Please enter your age');
    if (userAge === null) {
        console.log('Goodbye!');
        break;
    }

if (userAge <= 0){
    alert('Please enter positive numbers only')
}
if(userAge <= 10 ){
    alert('You are child');
}
else if(userAge<= 18) {
    alert('Your are teenager');
}
else if(userAge <= 50){
    alert('You are grown up');
}
else {
    alert('You are old');
}
}

// Question 2

const vowels = /[aeiouAEIOU]/g;
var enteredString = prompt('Please enter strings');
if (enteredString.match(vowels)) {
    alert('The count of vowels is' + enteredString.match(vowels).length);
  } else {
    alert("The text you entered doesn't have vowels to count ");
  }


// Question 3


var timeEntered;
function timeConversion(hour) {
    if (hour === 0) {
        return '12AM';
    } else if (hour >= 1 && hour <= 11) {
        return `${hour}AM`;
    } else if (hour === 12) {
        return '12PM';
    } else if (hour >= 13 && hour <= 23) {
        return `${hour - 12}PM`;
    } else {
        return 'Invalid input';
    }
}
timeEntered = prompt('Enter time');
timeEntered = parseInt(timeEntered);
document.write(timeConversion(timeEntered));
