let totalAmount = 0, itemCount = 0, discountAmount = 0, lowestPrice = Number.MAX_VALUE, highestPrice = 0;

const menuItems = {
    1: { name: "Coffee", cost: 50 },
    2: { name: "Tea", cost: 30 },
    3: { name: "Sandwich", cost: 80 },
    4: { name: "Pastry", cost: 100 }
};

let userChoice;
do {
    console.log('1. Coffee (₹50)');
    console.log('2. Tea (₹30)');
    console.log('3. Sandwich (₹80)');
    console.log('4. Pastry (₹100)');
    console.log('0. Exit');
    
    userChoice = parseInt(prompt('Enter your choice: '));
    
    if (userChoice >= 1 && userChoice <= 4) {
        let selectedItem = menuItems[userChoice];
        let itemPrice = selectedItem.cost;
        
        console.log(`You've ordered ${selectedItem.name}. Price: ${itemPrice}`);
        
        totalAmount += itemPrice;
        itemCount++;
        
        if (itemPrice < lowestPrice) {
            lowestPrice = itemPrice;
        }
        if (itemPrice > highestPrice) {
            highestPrice = itemPrice;
        }
    } else if (userChoice === 0) {
        console.log('Thank you, visit again');
    } else {
        console.log('Invalid choice');
    }
} while (userChoice !== 0);

function calculateDiscount(amount) {
    if (amount > 1000) {
        return amount * 0.20;
    } else if (amount > 500) {
        return amount * 0.10;
    } else {
        console.log('No discount');
        return 0;
    }
}

discountAmount = calculateDiscount(totalAmount);

console.log(`\nYou've ordered ${itemCount} items`);
console.log(`Subtotal: ₹${totalAmount}`);
console.log(`Discount: ₹${discountAmount}`);

let afterDiscountAmount = totalAmount - discountAmount;
let gstAmount = afterDiscountAmount * 0.05;
console.log(`GST: ₹${gstAmount.toFixed(2)}`);

let finalBill = afterDiscountAmount + gstAmount;
console.log(`Your total bill is: ₹${finalBill.toFixed(2)}`);

console.log("\n Cafe Report");
if (itemCount > 0) {
    let avgPrice = totalAmount / itemCount;
    console.log(`Total Items Sold: ${itemCount}`);
    console.log(`Highest Price Item: ₹${highestPrice}`);
    console.log(`Lowest Price Item: ₹${lowestPrice}`);
    console.log(`Average Price: ₹${avgPrice.toFixed(2)}`);
} else {
    console.log("No sales made.");
}

let existingPassword = prompt('Enter your old password: ');
let userInput = prompt('Enter your current password: ');

if (userInput === existingPassword) {
    let newPassword = prompt('Enter your new password: ');
    let passwordConfirmation = prompt('Confirm your new password: ');
    
    if (newPassword === userInput) {
        console.log("New Password Can't be same to Old Password");
    } else {
        if (newPassword === passwordConfirmation) {
            existingPassword = newPassword;
            console.log('New password set successfully');
        } else {
            console.log('New password and confirmation password do not match');
        }
    }
} else {
    console.log("Your current password doesn't match");
}