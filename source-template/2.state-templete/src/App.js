import React, { Component } from 'react';
import {Container, Grid} from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import Books from "./static_data/Books";
import BookList from "./components/BookList";
import BookListItem from "./components/BookListItem";

class App extends Component {
  render(){
    return(
      <Container>
        <SearchBar/>
        <Grid container spacing={2}>
            <Grid item>
                <BookList book={Books}></BookList>
            </Grid>
        </Grid>
      </Container>
    )
  }
}

export default App;
