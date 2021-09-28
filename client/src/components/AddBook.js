import React, { Component } from 'react';
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';

const getAuthorsQuery = gql`
{
    authors {
        name
        id
    }
}
`

class AddBook extends Component {
    

    render() {
        return(
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);