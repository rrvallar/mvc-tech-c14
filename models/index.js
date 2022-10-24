const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Create relationship ( 1 to 1, 1 to many, many to many )
User.hasMany(Post, {
    foreignKey: 'user_id'
});


Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};