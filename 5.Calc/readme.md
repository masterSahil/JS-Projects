# Modern Calculator 🧮

A simple **modern calculator** built with **HTML, Tailwind CSS, and JavaScript**.  
It supports basic arithmetic operations like addition, subtraction, multiplication, division, percentage, and decimals.  

---

## 🚀 Features
- Beautiful modern **UI design** using Tailwind CSS  
- Responsive layout that works on desktop and mobile  
- Supports:  
  - `+` Addition  
  - `-` Subtraction  
  - `*` Multiplication  
  - `/` Division  
  - `%` Percentage  
  - Decimal numbers  
- **Clear button** to reset the input  
- Smooth hover effects and shadows  

---

## 📸 Screenshot
> Add your program screenshot here 👇  

![Calculator Screenshot](screenshots/image.png)

---

## 🛠️ How to Run
1. Clone this repository or download the project files.
2. Open the `index.html` file in any browser.
3. Start calculating!

---

## 📂 File Structure
├── index.html # Main calculator UI and logic <br>
├── README.md # Project documentation <br>
└── screenshot.png # (Optional) Your app screenshot <br>

---

## 📚 How It Works
- Buttons append values into the display input using JavaScript.  
- `calculate()` function evaluates the expression inside the display.  
- `clearDisplay()` resets the display.  

⚠️ **Note:** Right now, this calculator uses `eval()` to compute expressions.  
While `eval()` works fine for learning projects, it can be unsafe if user input is not controlled.  
In production, a safer parser (without `eval()`) should be used.

---

## 💡 Future Improvements
- Replace `eval()` with a custom math expression parser  
- Add scientific calculator functions (sin, cos, log, etc.)  
- Add keyboard input support  

---

## 🏷️ License
This project is open-source and free to use.