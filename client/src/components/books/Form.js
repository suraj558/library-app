import React from 'react'
import { connect } from 'react-redux'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: props.title || '',
            author: props.author || '',
            status: props.status || ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            author: this.state.author,
            status: this.state.status
        }
        this.props.handleSubmit(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author" placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <input type="text" className="form-control" id="status" placeholder="Status" name="status" value={this.state.status} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

export default connect()(Form)