// Write a program that calculates the ticket price based on age with the following conditions:  
// if the age is below 12, the ticket price is 5; if the age is below 18, the ticket price is 10; 
// if the age is below 60, the ticket price is 20; and if the age is over 60, the ticket price is 15.
// solution
function calculateTicketPrice(age) {
    let price;
    if (age < 12) {
        price = 5;
    } else if (age < 18) {
        price = 10;
    } else if (age < 60) {
        price = 20;
    } else {
        price = 15;
    }
    return price;
}

