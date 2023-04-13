export const dummyNotes =[
    { title: "deploy on github", note: `1- npm install gh-pages --save-dev
    2- git init 
    3- git remote add origin "repo-link"
    4- edit package.json 
    ----- add under private 
    "homepage": "https://Hossam-elsheikh.github.io/Expesnse-Tracker",
    ----- add in scripts 
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build"
    5- npm run deploy
    *avoid creating readme.txt while creating your repo to avoid branch mismatch - or fix it after creating it (main - master)
    * if the app using router dom, use firebase and change the homepage to the link created after deployment (ie, redeploy after editing hompage), and don't use github as it dosen't support SPA yet`, id: "sam" },
    { title: "Terminology", note: `Short circuit : "he evaluation of an expression from left to right with || and && operators. If the condition is met and the rest of the conditions won't affect the already evaluated result, the expression will short-circuit and return that result"

    Coercion : "Instead of JavaScript throwing an error, it coerces the type of one value to fit the type of the other value so that the operation can be carried out."
    
    Shadowing : "occurs when a variable declared in a certain scope (e.g. a local variable) has the same name as a variable in an outer scope (e.g. a global variable). "
    
    Hoisting : "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution."
    
    Associative arrays: "re basically objects in JavaScript where indexes are replaced by user defined keys. They do not have a length property like normal array and cannot be traversed using normal for loop."
    
    Function Borrowing : a way for an object to use the methods of another object without redefining that same method. In JavaScript, we can reuse the method of a function on a different object other than the object it was defined on.`, id: "sam2" },
  ]
export const colors = [
 
  '#f3f489',
  '#f9e498',
  '#ffe693',
  '#f7e394',
  '#f7ea85',
  '#f7f594',
  '#f7e76f',
  '#f9e6a4',
  '#f4e786',
  '#fff37a',
  '#f7f08a',
  '#f9eaa4',
  '#f9f4a2',
  '#fff9b2',
  '#fcf88a',
  '#fcf1a6',
  '#fffd89',
  '#f2d576',
  '#fff296',
  '#f4e37f',
  '#fceaa1',
  '#fce8a1',
  '#fff4bf',
  '#fce279',
  '#fcffa5',
  '#fcf892',
  '#f9f289',
  '#f8fc80',
  '#fcecb3',
  
];
