import React from "react";
import { Card } from "react-bootstrap";

export class BookItems extends React.Component {
    render() {
        return (
            <div>
                {/* this.props.book.x calls variables from the API and displays them */}
                <Card>
                    <Card.Header><h3>{this.props.book.title}</h3></Card.Header>
                    <Card.Body>
                        <img src={this.props.book.thumbnailUrl}></img>
                        <footer>
                            {this.props.book.authors[0]}
                        </footer>

                    </Card.Body>
                </Card>

            </div>
        );
    }
}