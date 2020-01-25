import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { startAddBook } from '../../actions/books'

function New(props) {
    const handleSubmit = (book) => {
        props.dispatch(startAddBook(book, props))
    }
    return (
        <div className="container mt-5">
            <h2>Add Book</h2>
            <Form handleSubmit={handleSubmit} />
        </div>
    )
}

export default connect()(New)