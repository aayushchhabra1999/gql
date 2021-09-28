import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

    render() {
        return(
            <div>
                Ho
            </div>
        );
    }
}

export default graphql(getBookQuery)(BookDetails);