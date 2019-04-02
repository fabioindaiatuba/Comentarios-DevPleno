import React, { Component } from 'react';

class NewComment extends Component {
    state = {
        newComment: ''
    }

    handleChange = event => {
        this.setState({ newComment: event.target.value })
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComment)
        this.setState({ newComment: '' })
    }
    
    render() {
        return (
            <div>
                { /* NewComment */ }
                <div>
                    <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
                    <button onClick={this.sendComment}>Enviar</button>
                </div>
            </div>
        );
    }
}

export default NewComment;