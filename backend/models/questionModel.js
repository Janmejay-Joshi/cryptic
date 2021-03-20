import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    difficulty: {
      type: Number,
      required: true,
    },
    hints: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sollution: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
