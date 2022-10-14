import React from "react";

import { BookItems } from "./bookItems";

export class Books extends React.Component {
    render() {
        return this.props.books.map(
            (book) => {
                // each movie item gets an individual book
                return <BookItems book = {book} key = {book.isbn}></BookItems>
            }
        );
    }
}