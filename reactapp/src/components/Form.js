import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'option1'
        }
    }
    
    handlerUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlerCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }   

    handlerTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }   
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        return (
            <div className='form'>
            <form onSubmit= {this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text'
                    value={this.state.username}
                    onChange={this.handlerUsernameChange} />
                </div>

                <div>
                    <label> Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handlerCommentsChange}>

                    </textarea>
                </div>

                <div>
                    <label>
                        Topic
                    </label>
                    <select
                    value={this.state.topic}
                    onChange={this.handlerTopicChange}>
                        <option value="option1"> option1</option>
                        <option value="option2"> option2</option>
                        <option value="option3"> option3</option>
                    </select>

                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default Form
