var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true,
    unique: true
  },
  // description is required and of type String
  description: {
    type: String,
    required: true,
    unique: true
  },
  // boolean to flag articles as saved
  saved: {
    type: Boolean,
    required: true,
    default: false
  },
  // This will save an array of comments' ObjectIds
  comments:[{
        type: Schema.ObjectId,
        ref:'Comment'
    }]
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
