import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { startEditBook } from '../../actions/books'
import _ from 'lodash'

function Edit(props) {
    const handleSubmit = (book) => {
        props.dispatch(startEditBook(book, props))
    }
    return (
        <div className="container mt-5">
            <h2>Edit Book</h2>
            {!_.isEmpty(props.book) && <Form handleSubmit={handleSubmit} {...props.book} />}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        book: state.books.find(book => book._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(Edit)