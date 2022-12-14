import React from "react";

export class Create extends React.Component {
    constructor() {
        super();
        // Binding to events
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }
    // Updates State
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title}, 
        ${this.state.cover} 
        ${this.state.author}`);

        this.setState({
            title: '', 
            cover: '', 
            author: ''
        })
    }


    // Updates State
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>My Create in another Component</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* // Divs creating the text boxes for user input */}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>


                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    {/* // Button - Add Book */}
                    <input type="submit" value="Add Book" />

                </form>
            </div>
        );
    }
}