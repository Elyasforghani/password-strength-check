# 🔒 Interactive Password Strength Checker & Validator

A sleek, modern, single-page web utility designed to evaluate password security in real time. Built with semantic HTML5, advanced CSS custom layouts, and vanilla JavaScript, this project features an interactive strength meter, a togglable visibility button, and a premium **Glassmorphism** theme complete with animated neon scanning elements.

---

## 🚀 Features

* **Real-Time Strength Evaluation:** Analyzes inputs using regular expressions based on 5 distinct security criteria[cite: 1]:
    * Numbers `[0-9]`[cite: 1]
    * Lowercase letters `[a-z]`[cite: 1]
    * Uppercase letters `[A-Z]`[cite: 1]
    * Special characters `[!@#$%^&*]`[cite: 1]
    * Minimum length requirement (>= 8 characters)[cite: 1]
* **Dynamic Visual Feedback:** A color-coded progress bar shifts dynamically (Red -> Gray -> Orange -> Yellow -> Green -> Blue) and displays a pulsing ambient glow effect as the user types[cite: 1].
* **Smart Action Guard:** The action **Submit** button remains securely disabled and unclickable until the password hits maximum strength (5/5 score, turning the meter blue)[cite: 1].
* **Sneak-Peek Visibility Toggle:** A snappy, continuous-press tracking feature allows users to temporarily view or hide their password input via mouse events (`mousedown` / `mouseup`)[cite: 1].
* **Premium Glassmorphism Design:** Employs background blurs, deep box-shadow layers, and an advanced linear-gradient laser sweep animation tracking the boundaries of the layout[cite: 1].

---

## 🛠️ Tech Stack

* **HTML5:** Structured semantic markup utilizing custom flex containers[cite: 1].
* **CSS3:** Native styling with explicit direct-child combinators (`>`), keyframe animations (`@keyframes`), hardware-accelerated property transitions, and backdrop filters[cite: 1].
* **JavaScript (ES6+):** Pure vanilla DOM manipulation, conditional RegEx checking, and continuous input event listeners[cite: 1].

---

## 📸 UI Design Overview

### Structure & Layout Hierarchy
The application leverages a unified, centralized glass card setup flanked by a matching interactive navigation deck[cite: 1]:

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

1. **Input Detection:** The script binds an immediate listener onto the target input element[cite: 1].
2. **Score Computation:** Each time a character is typed, a structural loop recalculates the current safety points[cite: 1].
3. **UI Syncing:** using javascript switch
.
4.**Validation Unlock:** The final condition instantly intercepts the form guard, setting submitBtn.disabled = false exclusively when the highest tier is reached.
   <br>
