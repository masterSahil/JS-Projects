alert("Welcome to Smart Life Assistant");
console.log(" --------------------------------- ");
console.log("| Welcome to Smart Life Assistant |");
console.log(" --------------------------------- ");

const age = parseFloat(prompt("Please Enter your Age in Years: "));
const weight = parseFloat(prompt("Please Enter Your Weight in KGs: "));
let mini, max;

console.log(`Age is: ${age}`);
console.log(`Weight is: ${weight}`);

if (age < 0 || age > 150) {
    alert(`You have Entered Invalid Age (${age})`);
    console.log("Invalid Age");
} else if (weight < 0 || weight > 200) {
    alert(`You have Entered Invalid Weight (${weight})`);
    console.log("Invalid Weight");
} else {
    if (age <= 10) {
        mini = 3;
        max = 30;
    } else if (age > 10 && age <= 20) {
        mini = 40;
        max = 55;
    } else if (age > 20 && age <= 30) {
        mini = 50;
        max = 60;
    } else if (age > 30 && age <= 40) {
        mini = 55;
        max = 82;
    } 
    else if (age > 40 && age <= 50) {
        mini = 65;
        max = 80;
    }
    else if (age > 50 && age <= 60) {
        mini = 60;
        max = 78;
    }
    else if (age > 60 && age <= 70) {
        mini = 55;
        max = 75;
    } else {
        mini = 50;
        max = 72;
    }

    if (weight <= mini) {
        console.log("You are underweight for your age. Consider a healthy diet.")
    } else if (weight >= max) {
        console.log("You are overweight for your age. Suggest losing weight.")
    } else {
        console.log("Your Weight is Ideal for your age. You are Fit");
    }
}

alert("Welcome to Monthly Budget Planner");
console.log("\n ----------------------------------- ");
console.log("| Welcome to Monthly Budget Planner |");
console.log(" ----------------------------------- ");

const income = parseFloat(prompt("Please Enter Monthly Income: "));
if (income < 0) {
    alert(`You can't enter income in negative value like ${income}`);
    console.log(`Invalid Income Value Passed ${income}`);
} else {
    console.log(`Your Monthly Income is : ${income}`);
    if (income < 10000) {
        alert("Spend cautiously and save more!");
        console.log("Spend cautiously and save more!");
    } else if (income >= 10000 && income < 30000) {
        alert("Balanced budget!");
        console.log("Balanced budget!");
    } else {
        alert("You can consider investing.");
        console.log("You can consider investing.");
    }
}

alert("Welcome to Mobile Data Usage System");
console.log("\n ------------------------------------- ");
console.log("| Welcome to Mobile Data Usage System |");
console.log(" ------------------------------------- ");

const data = parseFloat(prompt("Please Enter Data Usage for a Month in GB: "));

if (data < 0) {
    alert("Please Enter a Valid Value");
    console.log(`Invalid Data Usage Value ${data}`);
} else {
    if (data < 5) {
        alert("You are a Low Data User");
        console.log(`You are a Low Data User with ${data}GB Usage`);
    } else if (data >= 5 && data < 15) {
        alert("You are a Normal Data User");
        console.log(`You are a Normal Data User with ${data}GB Usage`);
    } else {
        alert("You are a Heavy Data User");
        console.log(`You are a Heavy Data User with ${data}GB Usage.\nUpgrade your plan.`);
    }
}

alert("Welcome to Change Password Logic");
console.log("\n ------------------------------------- ");
console.log("| Welcome to Change Password Logic |");
console.log(" ------------------------------------- ");

let old_pwd = prompt("Enter your Old Password: ");
let new_pwd = prompt("Enter your New Password: ");
const confirm_pwd = prompt("Confirm Your New Password: ");

console.log(`Old Password: ${old_pwd}`);

if (old_pwd === new_pwd) {
    alert("New Password Can't be same to Old Password");
    console.log("New Password Can't be same to Old Password");
} else {
    if (new_pwd !== confirm_pwd) {
        alert("New Password Doesn't Match with Confirm Password");
        console.log("New Password Doesn't Match with Confirm Password");
    } else {
        if (new_pwd === confirm_pwd) {
            old_pwd = new_pwd;
            alert("Password Updated Successfully");
            console.log(`Your Password Successfully Updated to ${old_pwd}`);
        } else {
            alert("Password Doesn't Confirmed Successfully");
            console.log("Password Doesn't Confirmed Successfully");
        }
    }
}

alert("Please Check Console For Your Smart Assistant Report");