# Shopping Cart App

A React-based shopping cart application that allows users to browse items, add them to their cart, adjust quantities, and view their total. This project was built as part of [The Odin Project](https://www.theodinproject.com/) curriculum to practice React fundamentals, state management, and routing.

## Table of Contents
1. [Features](#features)
2. [Live Demo](#live-demo)
3. [Technologies Used](#technologies-used)
4. [Usage](#usage)
5. [Future Improvements](#future-improvements)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- **Product Listings**: Displays a list/grid of items with images, descriptions, and prices.  
- **Add to Cart**: Users can add items to their shopping cart and see a running total.  
- **Update Quantities**: Cart items can be incremented/decremented, and the total cost updates accordingly.  
- **React Router**: Provides a multi-page feel (e.g., "Home," "Shop," "Cart").  
- **Responsive Design**: Adapts to various screen sizes using modern CSS techniques.  
- **Data Handling**: In-memory state management (no database).  
- **Clean UI**: Simple, user-friendly interface focused on readability.

---

## Live Demo

**[View Demo on Vercel (Here)](https://mock-shopping-cart-eta.vercel.app/products)**

<img alt="screenshot of project's product page" src="https://github.com/user-attachments/assets/ef878645-beb3-476d-a364-3d60ece421b4" width="400">

---

## Technologies Used

- **React (Hooks)**
- **JavaScript (ES6+)**
- **React Router (v6)**
- **CSS Modules**
- **[FakeStore API](https://fakestoreapi.com/) for Product Data**
- **Webpack**
- **Vite**
- **Vitest**
- **Git & GitHub** for version control

---

## Usage

1. **View Products**: Go to the “Products” page to see a list of available items.
2. **Product Filtering/Searching**: Let users filter items by category or price.  
3. **Adjust Items in Cart**: Use the '+' or '-' to adjust item quantity in your cart. Also, type a number and push the shopping bag icon to add in bulk. Click the trash icon to delete all of that item in your cart.
4. **Cart Management**: View your cart to update quantities or remove items as well. 
5. **Check Out**: The app displays a running total, but the checkout process is a mock/demo only.

---

## Future Improvements

- **Backend Integration**: Connect to a different API or database for persistent and updatable data.  
- **Authentication & Checkout Flow**: Add user login and a real 'fake' payment system.  
- **Testing**: Continue full site testing with Vitest rather than just representative tests for familiarity.

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or issue.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add a cool feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as you see fit.
