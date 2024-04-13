# ShopifyInventoryManagement


## Overview
Shopify Inventory Management is a web application designed to help track the different items available for sale in a Shopify store. It provides functionalities for administrators to manage the inventory including adding, modifying, and deleting products. This application is built with Angular for the frontend and Node.js with Express for the backend.

## Frontend
The frontend of the Shopify Inventory Management application is developed using Angular, a popular JavaScript framework for building dynamic web applications. It provides a user-friendly interface for administrators to perform inventory management tasks.

### Components
1. **Product List Component**: Displays a list of products available in the inventory. It includes functionalities for modifying and deleting products.
2. **Add Product Component**: Allows administrators to add new products to the inventory. It collects information such as name, description, image URL, and price from the user.
3. **Modify Product Component**: Enables administrators to modify existing products in the inventory. It retrieves the product details and allows users to update them.
4. **Login Component**: Provides a login form for administrators to authenticate themselves before accessing the inventory management functionalities.

### Services
1. **Product Service**: Handles API requests related to product management. It communicates with the backend server to perform CRUD operations on products.

### Routing
The application uses Angular Router for navigation between different components. Each component is associated with a specific route to enable seamless navigation.

### Styling
Material UI components are used for styling the frontend, providing a modern and responsive design for the application.

## Backend
The backend of the Shopify Inventory Management application is developed using Node.js with Express, a lightweight web framework for building RESTful APIs. It provides endpoints for managing products in the inventory.

### API Endpoints
1. **GET /api/products**: Retrieves all products from the inventory.
2. **GET /api/products/:id**: Retrieves a specific product by its ID.
3. **POST /api/products**: Adds a new product to the inventory.
4. **PUT /api/products/:id**: Updates an existing product in the inventory.
5. **DELETE /api/products/:id**: Deletes a product from the inventory.

### Data Storage
In the backend, product data is stored in memory as an array of objects. Upon receiving requests, the server performs CRUD operations on this data array.

### Middleware
The backend uses middleware such as bodyParser and cors to handle request body parsing and enable cross-origin resource sharing (CORS) respectively.

### Server Configuration
The backend server listens on port 3000 by default. It can be started by running the `server.js` file using Node.js.

## Conclusion
The Shopify Inventory Management application provides a comprehensive solution for managing products in a Shopify store. With its intuitive user interface and robust backend, administrators can easily add, modify, and delete products, helping to streamline inventory management processes.








This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
