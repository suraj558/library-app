import axios from "../config/axios"

export const setBooks = (books) => {
    return {
        type: 'SET_BOOKS',
        payload: books
    }
}

export const startSetBooks = () => {
    return (dispatch) => {
        axios.get('/books', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                const books = response.data
                dispatch(setBooks(books))
            })
            .catch((err) => {
                window.alert(err)
            })
    }   
}

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book
    }
}

export const startAddBook = (formData, props) => {
    return (dispatch) => {
        axios.post('/books', formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.errmsg) {
                    window.alert(response.data.errmsg)
                } else {
                    dispatch(addBook(response.data))
                    props.history.push('/books')
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }   
}

export const editBook = (book) => {
    return {
        type: 'EDIT_BOOK', 
        payload: book
    }
}

export const startEditBook = (formData, props) => {
    return (dispatch) => {
        axios.put(`/books/${props.match.params.id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                if(response.data.errmsg) {
                    window.alert(response.data.errmsg)
                } else {
                    dispatch(editBook(response.data))
                    props.history.push('/books')
                }
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}

export const removeBook = (id) => {
    return {
        type: 'REMOVE_BOOK',
        payload: id
    }
}

export const startRemoveBook = (id) => {
    return (dispatch) => {
        axios.delete(`/books/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
            .then((response) => {
                dispatch(removeBook(id))
            })
            .catch((err) => {
                window.alert(err)
            })
    }
}