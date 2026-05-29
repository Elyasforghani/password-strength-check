# 🔒 Interactive Password Strength Checker & Validator

A sleek, modern, single-page web utility designed to evaluate password security in real time. Built with semantic HTML5, advanced CSS custom layouts, and vanilla JavaScript, this project features an interactive strength meter, a togglable visibility button, and a premium **Glassmorphism** theme complete with animated neon scanning elements.

---
<img width="1570" height="764" alt="Image" src="https://github.com/user-attachments/assets/d9f339c3-7025-4812-ab17-70faec5f6121" />

 <br>
## 🚀 Features

* **Real-Time Strength Evaluation:** Analyzes inputs using regular expressions based on 5 distinct security criteria:
    * Numbers `[0-9]`
    * Lowercase letters `[a-z]`
    * Uppercase letters `[A-Z]`
    * Special characters `[!@#$%^&*]`
    * Minimum length requirement (>= 8 characters)
* **Dynamic Visual Feedback:** A color-coded progress bar shifts dynamically (Red -> Gray -> Orange -> Yellow -> Green -> Blue) and displays a pulsing ambient glow effect as the user types.
* **Smart Action Guard:** The action **Submit** button remains securely disabled and unclickable until the password hits maximum strength (5/5 score, turning the meter blue).
* **Sneak-Peek Visibility Toggle:** A snappy, continuous-press tracking feature allows users to temporarily view or hide their password input via mouse events (`mousedown` / `mouseup`).
* **Premium Glassmorphism Design:** Employs background blurs, deep box-shadow layers, and an advanced linear-gradient laser sweep animation tracking the boundaries of the layout.

---

## 🛠️ Tech Stack

* **HTML5:** Structured semantic markup utilizing custom flex containers.
* **CSS3:** Native styling with explicit direct-child combinators (`>`), keyframe animations (`@keyframes`), hardware-accelerated property transitions, and backdrop filters.
* **JavaScript (ES6+):** Pure vanilla DOM manipulation, conditional RegEx checking, and continuous input event listeners.

---

## 📸 UI Design Overview

### Structure & Layout Hierarchy
The application leverages a unified, centralized glass card setup flanked by a matching interactive navigation deck:

    ┌────────────────────────────────────────────────────────┐
    │                      MAIN WINDOW                       │
    │  ┌──────────────────────────────────────────────────┐  │
    │  │          Password Strength Input Box             │  │
    │  └──────────────────────────────────────────────────┘  │
    │                                                        │
    │  ┌──────────────────────────────────────────────────┐  │
    │  │        Animated Glassmorphic Footer Deck         │  │
    │  └──────────────────────────────────────────────────┘  │
    └────────────────────────────────────────────────────────┘

---

## ⚙️ How It Works

1. **Input Detection:** The script binds an immediate listener onto the target input element.
2. **Score Computation:** Each time a character is typed, a structural loop recalculates the current safety points.
3. **UI Syncing:** using javascript switch
.
4.**Validation Unlock:** The final condition instantly intercepts the form guard, setting submitBtn.disabled = false exclusively when the highest tier is reached.
   <br>
