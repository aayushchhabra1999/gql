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
    render() {
        console.log(this.props)
        return (<h1>li</h1>);
    }
}

export default graphql(getBooksQuery)(BookList);