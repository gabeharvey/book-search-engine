const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const {User}= require('../models');

const resolvers = {
    Query: {
        // This Function Checks if User is Logged In
        me: async(parents, args, context) => {
            if(!context.user){
                throw new AuthenticationError('User Not Logged In')
            }
            const userData = await User.findById(context.user._id).select('-__v -password');
            return userData;
        }
    }
}