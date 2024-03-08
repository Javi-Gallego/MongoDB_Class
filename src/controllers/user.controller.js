import Book from "../models/Book.js"
import User from "../models/User.js"

const addBookToFavourites = async ( { body, tokenData }, res) => {
    try {
        const bookId = body.bookId
        const userId = tokenData.userId

        const user = await User.findOne(
            { _id: userId }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const book = await Book.findOne(
            { _id: bookId }
        )

        user.favouriteBooks.push(bookId)

        await user.save()

        res.status(200).json({
            success: true,
            message: `Book ${book.title} added to favourites`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Book can't be added to favourites",
            error: error.message
        })
    }
}

const removeBookFromFavourites = async ( { body, tokenData }, res) => {
    try {
        const bookId = body.bookId
        const userId = tokenData.userId

        const user = await User.findOne(
            { _id: userId }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        user.favouriteBooks.pull(bookId)
        await user.save()

        res.status(200).json({
            success: true,
            message: `Book removed from favourites`
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Book can't be removed from favourites",
            error: error.message
        })
    }
}

export { addBookToFavourites, removeBookFromFavourites}