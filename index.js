for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}
// Code your solutions in this file
function writeCards(array,event) {
    const thankYouNotes = [];
    for (let i = 0; i < array.length; i++){
       const message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
       thankYouNotes.push(message);
    } 
    return thankYouNotes;
}
function countDown(number) {
    let num = number;
    while (number >= 0) {
        console.log(number);
        number--;
    }
}