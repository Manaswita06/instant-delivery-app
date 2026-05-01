## QuickKart - 10 Minute Grocery Delivery
QuickKart is a modern, responsive React application built with Vite, Tailwind CSS, and React Router. It features a multi-category grocery store with a seamless welcome page, category filtering, a real-time cart system, and a checkout summary.

### Features
- Welcome Landing Page: High-impact hero section with category-based navigation.
- Dynamic Storefront: View all products or filter by Grocery, Fruits, or Vegetables.
- Persistent Cart Logic: Add/Remove items with a sticky checkout bar that tracks your total in real-time.
- Responsive Grid: Optimized product layout that adapts from mobile (2 columns) to desktop (multi-column).
- Checkout Experience: Detailed order summary including delivery fees and delivery detail forms.
- Componentized Architecture: Clean separation of Data, Pages, and Components for easy scaling.

### Getting Started
**Prerequisites**

Make sure you have Node.js (v16 or higher) installed on your machine.

Installation:
1. Clone the repository (or navigate to your project folder):
    ```
    Bash

    cd instant-delivery-prototype
    ```
2. Install dependencies:
    ```
    Bash
    
    npm install
    ```
Install React Router (if not already installed):
    ```
    Bash
    
    npm install react-router-dom
    ```


### Running the App Locally

Start the Vite development server:
```
npm run dev
```
Once the server starts, open your browser and go to:
http://localhost:5173

```
📁 Project Structure
Plaintext
src/
├── components/
│   └── ProductCard.jsx      # Reusable UI for individual product items
├── data/
│   └── products.js         # Centralized database for all inventory
├── pages/
│   ├── WelcomePage.jsx     # Landing page with category links
│   ├── StorePage.jsx       # Main shopping grid with filtering logic
│   └── CheckoutPage.jsx    # Order summary and delivery form
├── App.jsx                 # Main Router and Global Cart State
├── index.css               # Tailwind configurations and global styles
└── main.jsx                # React entry point
```

### Built With
- React - UI Library
- React Router - Single Page Application (SPA) Routing
- Tailwind CSS - Styling and Responsive Design
- Vite - Lightning-fast Build Tool
