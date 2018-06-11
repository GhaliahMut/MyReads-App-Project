import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class Library extends Component {

	render() {
		const books =this.props.books;

		return (
			<div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
	        <div>

	        // filter books depending on shelves 
		        <Shelf books = {books.filter((book) => (book.shelf === "currentlyReading"))} shelfTitle = "Currently Reading" changeBookShelf={this.props.changeBookShelf}/>
		        <Shelf books = {books.filter((book) => (book.shelf === "wantToRead"))} shelfTitle = "Want To Read" changeBookShelf={this.props.changeBookShelf}/>
		        <Shelf books = {books.filter((book) => (book.shelf === "read"))} shelfTitle = "Read" changeBookShelf={this.props.changeBookShelf}/>
	        </div>
	      </div>

	      <div className="open-search">
	        <Link to = "/Search"> Add a book </Link>
	      </div>
	    </div>  
		)
	}
}

export default Library