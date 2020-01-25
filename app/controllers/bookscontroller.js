const Book = require('../modals/book')

module.exports.list = (req, res) => {
    const {user} = req
    Book.find({user: user._id}).select('title author status')
        .then((book) => {
            res.json(book)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.show = (req,res) => {
    const id = req.params.id
    const {user} = req
   Book.findOne({_id: id,user: user._id}).select('title author status createdAt')
        .then((book) => {
            if(book){
                res.json(book)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req,res) => {
   
    const { body,user} = req
    body.user=user._id
    const book = new Book(body)
    book.save()
        .then((book) => {
            res.json(book)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const {body,user}=req
    Book.findOneAndUpdate({_id: id,user:user._id}, body, {new: true, runValidators: true}).select('title author status createdAt')
        .then((book) => {
            res.json(book)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    const {user} = req
    Book.findOneAndDelete({_id: id,user:user._id})
        .then((book) => {
            if(book){
                res.json(book)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}