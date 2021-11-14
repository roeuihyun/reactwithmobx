import React, { Component } from 'react';
import {Container, Grid} from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import Books from "./static_data/Books";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import BookListItem from "./components/BookListItem";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          books : Books,
          selectedBook : Books[0],
      }
  }

  onSearchTitle(title){
      let updateList = Books;
      updateList = updateList.filter( book => {
          return book.title.toLowerCase().search(title.toLowerCase()) !== -1
      })
      this.setState({
          books : updateList,
      })
  }

  onSelectedBook(book){
      this.setState({
          selectedBook : book,
      })
  }

  render(){
    return(
      <Container>
        <SearchBar onSearchTitle = {this.onSearchTitle.bind(this)} />
        <Grid container spacing={2}>
            <Grid item>
                <BookList book={this.state.books} onSelectedBook={this.onSelectedBook.bind(this)} ></BookList>
            </Grid>
            <Grid item>
                <BookDetail book={this.state.selectedBook}></BookDetail>
            </Grid>
        </Grid>
      </Container>
    )
  }
}

export default App;
