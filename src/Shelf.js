import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {
	

	render() {
	const books = this.props.books

		//looping over each book to display it on the proper shelf
		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
            	<li key = {book.id}>
              	<Book book={book} shelf={book.shelf} changeBookShelf={this.props.changeBookShelf}/>
              </li>
            	))}
            </ol>
          </div>
      </div>
		)
	}
}
export default Shelf