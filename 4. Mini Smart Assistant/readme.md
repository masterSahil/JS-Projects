# Smart Life Assistant

Welcome to **Smart Life Assistant** — a simple interactive JavaScript program that helps users with multiple daily life utilities including health check, budgeting advice, data usage analysis, and password management.

---

## Features

1. **Age and Weight Health Check**  
   Helps you check if your weight is underweight, ideal, or overweight based on your age.

2. **Monthly Budget Planner**  
   Provides budget advice based on your monthly income.

3. **Mobile Data Usage System**  
   Categorizes your mobile data usage as low, normal, or heavy user.

4. **Change Password Logic**  
   Allows you to update your password with validation for confirmation and difference from the old password.

---

## How to Use

1. Open your browser console (press F12 or right-click and choose "Inspect", then go to the Console tab).
2. Copy and paste the entire JavaScript code into the console or run it in any JavaScript environment.
3. The program will show alert prompts asking for inputs step-by-step:
   - Your Age and Weight.
   - Your Monthly Income.
   - Your Mobile Data Usage.
   - Your Old Password and New Password details.
4. After each step, relevant feedback will be displayed in the console and via alert pop-ups.
5. At the end, check your browser console for the full Smart Assistant report.

---

## Input Validations

- **Age:** Must be between 0 and 150.
- **Weight:** Must be between 0 and 200 kilograms.
- **Monthly Income:** Cannot be negative.
- **Mobile Data Usage:** Cannot be negative.
- **Password:** New password must not be the same as the old one and must match the confirmation password.

---

## Example Outputs

- Age: 25, Weight: 55  
  Output: "Your Weight is Ideal for your age. You are Fit"

- Monthly Income: 5000  
  Output: "Spend cautiously and save more!"

- Data Usage: 10 GB  
  Output: "You are a Normal Data User"

- Password Change:  
  - Old password: `1234`  
  - New password: `abcd`  
  - Confirm password: `abcd`  
  Output: "Password Updated Successfully"

---

## Technologies Used

- Plain JavaScript (ES6)
- Browser `alert`, `prompt`, and `console` for user interaction and output

---

## Notes

- This program uses simple prompts and alerts for interaction and is intended for learning or basic utility purposes.
- All input data is handled via `prompt()` and output is shown both in alerts and in the browser console.
- No data is saved or sent anywhere; this is a local, client-side program.

---

## License

This project is open for personal and educational use. Feel free to modify or expand it as per your needs.

---

*Developed by Smart Life Assistant Team*