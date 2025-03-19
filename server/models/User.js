const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, match: [/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email!'] },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    toJSON: { virtuals: true },
    id: false
});

// Virtual to get friend count
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);
module.exports = User;
