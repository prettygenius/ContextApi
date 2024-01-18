# BookListApp

Adds new books to booklist using context api including createcontext UseContext, UseState, reducer function, dispatch function, action object, and payload

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)



## Features

-  Adds new books to list off books
-  Deletes books shows books remaining after deletion
-  Use local storage to hold list after refresh of page



## Reducers
reducer function interacts with the state and changes the data

action object describes the change to make in RF {type: 'add book'}
this tells the RF we want to add new book to state of the data

dispatch function sends action to reducer

dispatch has two properties dispatch({type,payload})
dispatch({type: 'add book'})
dispatch({payload:2(bookdata)})
call the dispatch function, call the action that goes to the reducer function which then makes a change to the state 

action object {type: 'change we want',payload: {addnewbook:'name'}}

dispatch this action object to the reducer using a reducer function

reducer(action,state) 
this takes in action and state of data we manipulate

reducer checks the action.type to update the state object 

in this example it updates the state and adds a new book

once state is updated it gets returned to the provider value

then components that consume it when it updates it will get the updated value and re-render with the updated value

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/prettygenius/ContextApi.git
cd contextapp
```
Install dependencies:
```
npm install
```
``` 
npm run dev
```
