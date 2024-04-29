const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const {User}= require('../models');

const resolvers = {
    Query: {
        // This Function Fetches User Data if User is Logged In
        me: async(parents, args, context) => {
            if(!context.user){
                throw new AuthenticationError('User Not Logged In')
            }
            const userData = await User.findById(context.user._id).select('-__v -password');
            return userData;
        },
    },
    Mutation: {
        // This Function Allows User to Log In
        login: async(parent, {email, password}) => {
            const user = await User.findOne({email});
            if(!user || !(await user.isCorrectPassword(password))) {
                throw new AuthenticationError('Email or Password is Invalid');
            }
            const token = signToken(user);
            return {token, user}
        },
        // This Function Allows Creation of New User
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },
        // This Function Allows User to Save Book
        saveBook: async(parent, {input}, context) => {
            if(!context.user) {
                throw new AuthenticationError('User Must Log In to Perform Function');
            }
            const updatedUser = await User.findByIdAndUpdate(context.user._id, {$addToSet: {savedBooks: input}}, {new: true, runValidators: true});
            return updatedUser;
        },
        // This Function Allows User to Remove Book
        removeBook: async(parent, {bookId}, context) => {
            if(!context.user) {
                throw new AuthenticationError('User Must Log In to Perform Function');
            }
            const updatedUser = await User.findByIdAndUpdate(context.user._id, {$pull: {savedBooks: {bookId}}}, {new: true});
            return updatedUser;
        },
    },
};

// Export Resolvers
module.exports = resolvers;