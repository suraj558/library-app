import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveBook } from '../../actions/books'

function List(props) {
    const handleRemove = (id) => {
        if(window.confirm('Are you Sure?')) {
            props.dispatch(startRemoveBook(id))
        }
    }

    return (
        <div className="container mt-5">
            <h2>Books - {props.books.length} </h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Available</th>
                    <th scope="col">Show</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.books.map((book, index) => {
                            return (
                                <tr key={book._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ book.title }</td>
                                    <td>{ book.author }</td>
                                    <td>{ book.status.toString() }</td>
                                    <td><Link to={`/books/show/${book._id}`} className="btn btn-primary">Show</Link></td>
                                    <td><Link to={`/books/${book._id}`} className="btn btn-secondary">Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={ () => {
                                        handleRemove(book._id)
                                    }} >Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/books/new">Add Book</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(List)