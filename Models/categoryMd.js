import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Category name is required'],
    unique: [true, 'Category name must be unique'],
  },
  icon: {
    type: String,
  },
}, { timestamps: true });

const Category = mongoose.model('category', categorySchema);
export default Category;