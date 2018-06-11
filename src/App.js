import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Library from './Library'
import Search from './Search'
import './App.css'

class BooksApp extends Component {

  state = {
    books: []
  }

// get books data from BooksAPI
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

// update book shelf category
  onChangeShelves = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
          book.shelf = newShelf
          this.setState(prevState => ({
            books: prevState.books.filter((b) => b.id !== book.id).concat([book])
          }))
    })
  }

//search for books in BooksAPI
  searchBook = (searchQuery) => {
    return BooksAPI.search(searchQuery,20)
  }

  render() {
  	return (
  		<div className = "app">

      <Route exact path = "/" render = { () => (
          <Library books = {this.state.books} changeBookShelf={this.onChangeShelves} />
        )}/>

        <Route path = "/Search" render = { () => (
          <Search onSearchResults= {this.searchBook} currentBookList= {this.state.books}  appendCurrentBookToList={this.onChangeShelves} />
        )}/> 

        
      </div>
    ) 	
  }
}
export default BooksApp
