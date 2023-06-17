# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
-install all project dependencies with npm install
-start the development server with npm start
### `npm install`
### `npm start`
Application
├── .gitignore
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css # Styles for book app
    ├── App.js # This is the root of book app.
    ├── BookItem.js # Details for explit book. Shown in the list book with type of shelf
    ├── BooksAPI.js # All function for book
    ├── DetailsBook.js # Detailpage if clicked Details button on BookItem. Shows some information about the book selected
    ├── icons # Helpful images for book app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js 
    ├── ListBook.js # Updates and get all the books in the shelf.
    ├── SearchBooks.js # Search book and add them to the shelf or view details.
    ├── BookShelf.js # default type for bookshelf
