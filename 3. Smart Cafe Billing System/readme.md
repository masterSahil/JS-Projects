# ☕ Smart Café Billing System

A **JavaScript-based** console application for managing a café’s orders, calculating bills, applying discounts, generating sales reports, and handling password changes — all **without arrays or functions for main logic**, using only **do...while loops, variables, and if-else conditions**.

---

## 📌 Features

### 🛒 Ordering System
- Displays menu items with prices.
- Allows multiple orders until the user chooses to exit.
- Tracks:
  - **Total items ordered**
  - **Subtotal**
  - **Lowest priced item**
  - **Highest priced item**
  - **Average item price**

### 💰 Billing & Discounts
- Discounts applied based on subtotal:
  - **20%** discount if total > ₹1000
  - **10%** discount if total > ₹500
  - **No discount** if total ≤ ₹500
- **5% GST** applied after discount.
- Displays:
  - Subtotal
  - Discount amount
  - GST
  - Final bill total

### 📊 Café Sales Report
- Shows:
  - Total items sold
  - Highest item price
  - Lowest item price
  - Average item price

### 🔐 Password Change System
- Verifies old password.
- Prevents setting the same password as the old one.
- Ensures new password matches confirmation.
- Displays appropriate success/error messages.

---

## 🖥️ How It Works

1. **Menu Display**  
   The system shows all available items with prices.
   
2. **Order Taking**  
   - The customer selects items by number.
   - Order continues until `0` is entered to exit.

3. **Billing Process**  
   - Total cost is calculated.
   - Discount rules are applied.
   - GST is added.
   - Final bill is displayed.

4. **Sales Report**  
   Displays complete order summary with highest, lowest, and average prices.

5. **Password Update**  
   - Confirms the old password.
   - Validates and updates the password.

---

## 🛠️ Technologies Used
- **JavaScript** (Vanilla, no frameworks)
- **Console-based input/output** (using `prompt` and `console.log`)

---

## 📜 Example Flow
1. Coffee (₹50)
2. Tea (₹30)
3. Sandwich (₹80)
4. Pastry (₹100)
5. Exit

Enter your choice: 1
You've ordered Coffee. Price: 50
...

✅ The program then applies discounts, GST, and prints the café report.

---

## 🚀 How to Run
1. Copy the script into a `.js` file.
2. Run in a browser console or Node.js environment with a `prompt` package.
3. Follow the on-screen menu options.

---

## 📷 Program Output
![Screen Shot of Program](image.png)
---

**💡 Author**: *Master Sahil*  
**📅 Version**: 1.0  
**⚡ Note**: This project was created as a learning exercise focusing on loops, conditions, and variable handling in JavaScript.
