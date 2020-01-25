import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

function Show(props) {
    return (
        <div className="container mt-5">
<h2>{ props.book.title } - { props.book.author } - {String(props.book.status)}</h2>
            <hr/>
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        book: state.books.find(book => book._id === props.match.params.id) || {},
        
    }
}

export default connect(mapStateToProps)(Show)