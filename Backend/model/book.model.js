import mongoose from 'mongoose';

// Define the book schema
const bookSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    title: { type: String, required: true, trim: true },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the Book model
const Book = mongoose.model("Book", bookSchema);

// Export the Book model
export default Book;
