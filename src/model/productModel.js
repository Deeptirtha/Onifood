const mongoose = require("mongoose")


const productSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        shopId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shop"
        },
        image: String,
        catogary: String
    }
)
module.exports = mongoose.model("Product", productSchema)