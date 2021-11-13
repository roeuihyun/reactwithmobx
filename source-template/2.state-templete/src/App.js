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

  render(){
    return(
      <Container>
        <SearchBar/>
        <Grid container spacing={2}>
            <Grid item>
                <BookList book={this.state.books}></BookList>
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
