import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class Search extends Component {

  state= {
    query: '',
    searchedBookList: []
  }

// update query with user inputs
  updateQuery(value) {
    this.setState({
      query: value
    }, () => this.searchBooks(this.state.query))
  }

// empty the searched books array
  clearSearchedBookList() {
    this.setState({
      searchedBookList: []
    })
  }

// search for books
  searchBooks(searchTerm){
    if(searchTerm){
      this.props.onSearchResults(searchTerm).then((book)=> {
        if(typeof book === "undefined" || book.error){
          this.clearSearchedBookList()
        }
        else {
          this.setState({
            searchedBookList: this.appendBookShelfStatus(book)
          })
        }
      })
    }
    else {
      this.clearSearchedBookList()
    }
  }

// add shelf category to searched books
  appendBookShelfStatus(searchBooks){
    let currentBookList = this.props.currentBookList;
    let updatedBookList = searchBooks.map((searchedBook) => {
      searchedBook.shelf = "none";
      currentBookList.forEach((currentBook) => {
        if(currentBook.id === searchedBook.id){
          searchedBook.shelf = currentBook.shelf;
          return;
        }
      })
    return searchedBook
    })
  return updatedBookList
  }

// update shelf category and add searched book to the library
  updateSearchedBookShelf = (searchbook, updatedShelf) => {
    this.props.appendCurrentBookToList(searchbook, updatedShelf)
  }
    
  render() {
   

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            
            <input
              type="text" placeholder="Search by title or author"
              value= {this.state.query} onChange= {(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
        <Shelf books={this.state.searchedBookList} shelfTitle= "Search Results" changeBookShelf= {this.updateSearchedBookShelf} />
       
        </div>
      </div>
    )
  }
}

export default Search