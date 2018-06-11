import React, {Component} from 'react'

class Book extends Component {

	render() {
		const book = this.props.book
		const coverImage = book.imageLinks ? book.imageLinks.thumbnail : null
		const style = {
           width: 128, 
           height: 192, 
           backgroundImage: `url("${coverImage}")`};

		return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={style}>
          </div>
          <div className="book-shelf-changer">
            <select id="Category" value={book.shelf} onChange={(event) => this.props.changeBookShelf(book,event.target.value)}>
			      <option value="move to" disabled>Move to...</option>
		          <option value="currentlyReading">Currently Reading</option>
		          <option value="wantToRead">Want to Read</option>
		          <option value="read">Read</option>
		          <option value="none">None</option>
				    </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
        
			)
	}
}

export default Book