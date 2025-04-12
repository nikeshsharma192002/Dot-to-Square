# 🎯 Dot-to-Square Drawing Webpage [Live Demo](https://dot-to-square.netlify.app/)

An interactive React-based drawing application where users can create dots on a canvas by clicking, and lines are drawn between them to form a square.

---

## 🚀 Project Overview

This app allows users to:
- Click anywhere inside a drawing area to create a dot.
- Automatically draw a line connecting each new dot to the previous one.
- After four dots, a final line is drawn back to the first dot, forming a square.
- Reset the canvas to start over (bonus feature).
- Works seamlessly on both desktop and mobile devices.

---

## 🛠️ Setup & Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/dot-to-square.git
   cd dot-to-square
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Visit:
   http://localhost:5173 in your browser.

## ⚙️Architecture

  - React Functional Components used for modularity and reusability:
    - App.jsx: Main component.
    - DrawingArea.jsx: Handles canvas logic.
    - Dot.jsx: Renders each dot (SVG).
    - Line.jsx: Renders lines connecting the dots.
  - Hooks:
    - useState for state management (dots).
  - SVG: Used for flexible drawing without managing pixel positions manually.
  - CSS: Responsive styling, square completion animation.

##  ✨Features
  
  - ✅ Dot placement on click.
  - ✅ Line drawing between dots.
  - ✅ Square formation with animation.
  - ✅ Reset button to clear drawing.
  - ✅ Responsive UI for mobile and desktop.
  - ✅ Message shown on square completion.
  - 🚫 Error prevented by restricting clicks to the drawing area only.

## 🧼Reset Functionality
  - A Reset button is shown once dots exist.
  - Resets the drawing canvas without needing a refresh.

