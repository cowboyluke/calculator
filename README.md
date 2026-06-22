# 🧮 Odin Foundations: Browser Calculator

A fully functional, responsive web calculator built from scratch as part of The Odin Project curriculum. This project implements custom math logic, state tracking, and sequential evaluation while handling classic user experience edge cases like decimal precision and division by zero.

---

## 🚀 Live Demo
🔗 **[Launch the Live Application](YOUR_LIVE_DEMO_URL_HERE)**

---

## ✨ Features Implemented

### 🧱 Core Foundations
* **Mathematical Operations:** Independent logic modules handling basic arithmetic: `add`, `subtract`, `multiply`, and `divide`.
* **Dynamic Logic Engine:** A unified `operate()` function that takes an operator and two numbers, routing inputs seamlessly to their respective math functions.
* **State Management:** Uses distinct tracking variables to store the first number, the active operator, and the second number behind the scenes.
* **Dynamic Display:** A clean digital display area that updates in real-time as digits are clicked or calculated.

### 🧠 Advanced Logic & Edge Cases ("Gotchas")
* **Single-Pair Evaluation:** The calculator evaluates equations one pair at a time. Pressing a second consecutive operator immediately processes the previous pair (e.g., entering `12 + 7 -` instantly updates the display to `19` and prepares for the next subtraction step).
* **Smart Operator Overwriting:** If you accidentally click consecutive operators (like `+` followed by `*`), the engine handles it safely without crashing or calculating prematurely—it simply adopts the last operator entered.
* **Display Overflow Protection:** Automatically rounds long floating-point decimal results so numbers never break or overflow past the display container boundaries.
* **Zero-Division Shield:** Features a built-in snarky error message that displays when a user attempts to divide by zero, preventing the app from crashing.
* **Fresh Starts:** Pressing the `Clear` button wipes out all memory variables completely. Additionally, typing a new digit immediately following an `=` result wipes the old screen and starts a brand new calculation.

### ⭐ Extra Credit Features
* **Decimal Intelligence (`.` Button):** Enables decimal inputs for floating-point calculations, but dynamically disables the button if a decimal point is already present in the active number string (preventing broken strings like `12.3.56`).
* **Backspace / Undo Utility:** A dedicated button that allows users to delete their last entered digit to correct mistakes.
* **Full Keyboard Support:** Maps physical keyboard and numpad keys directly to screen buttons for an efficient, hardware-driven experience.

---

## 🛠️ Built With

* **HTML5:** Semantic layout structuring the calculator grid and display panel.
* **CSS3:** Modern grid layout configurations and clean, tactile button designs.
* **Vanilla JavaScript (ES6+):** Complete DOM manipulation, state-machine tracking, and event-driven keyboard listeners.

---

🎯 **Project Lessons & Acknowledgments**
Built to satisfy the core milestones of The Odin Project Foundations Course. Development focused heavily on splitting complex multi-step logic into manageable atomic functions, debugging UX edge cases, and adhering to the best practice of committing early and often.