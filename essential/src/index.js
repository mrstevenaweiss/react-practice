import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Library from './Library'

let bookList = [
  {"title": "Hunger", "author": "Roxane Gay"},
  {"title": "The Sun", "author": "Hemingway", "pages": 250},
  {"title": "Animal Farm", "author": "Orwell", "pages": 120},
  {"title": "Cat's Cradle", "author": "Kurt Von", "pages": 200}
]


ReactDOM.render(
    <Library books={bookList} />,
  document.getElementById('root')
)
