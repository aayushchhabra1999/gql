import React, { Component } from 'react';
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';

const getBooksQuery = gql`
{
    books {
        name
        id
    }
}
`

class BookList extends Component {
    displayBooks(){
        const data = this.props.data;
        if(data.loading) {
            return (<div>Loading books</div>);
        } else {
            return data.books.map(book => {
                return(
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    }

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