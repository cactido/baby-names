const Name = require('../models/Name');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-errors');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const current = await User.findOne({ _id: context.user._id}).select('-__v -password')
                return current;
            }

            throw new AuthenticationError('Not logged in.');
        },
        getAllUsers: async () => { return await User.find(); },
        getUser: async (_, { id }) => {
            return await User.findById(id);
        },
        getProvidedNames: async (_, { id }) => {
            const current = await User.findById(id);
            return current.provided_names;
        },
        getSelectedNames: async (_, { id }) => {
            const current = await User.findById(id);
            return current.selected_names;
        },
        getTotalResponses: async (_, { id }) => {
            const current = await User.findById(id);
            return current.selected_names.length;
        }        
    },
    Mutation: {
        createUser: async (_, args) => {
            const hashedPassword = await bcrypt.hash(args.password, 10);

            const user = new User({
                email: args.email,
                password: hashedPassword,
                display_name: args.display_name,
                partner: args.partner
            });
            const token = signToken(user);
            await user.save();
            return { token, user };
        },
        deleteUser: async (_, { id }) => {
            await User.findByIdAndDelete(id);
            return `Deleted user ${id}`;
        },
        updateDisplayName: async (_, { id, display_name }) => {
            return await User.findByIdAndUpdate(id, { display_name: display_name }, { new: true });
        },
        addProvidedName: async (_, { name, rating,  gender, user_id }) => {
            const newName = { name, rating, gender, user_id };
            return await User.findByIdAndUpdate(user_id, { $push: { provided_names: newName } }, { new: true });
        },
        addSelectedName: async (_, { name, rating, gender, user_id }) => {
            const newName = { name, rating, gender };
            return await User.findByIdAndUpdate(user_id, { $push: { selected_names: newName } }, { new: true })
        },
        getAuth: async (_, { email, password }) => {
            const current = await User.findOne({ email }).exec();
            const validPassword = bcrypt.compare(password, current.password)
            if (!current || !validPassword) { throw new AuthenticationError('Invalid login credentials.'); };
            const token = signToken(current);
            return { token, current };
        }
    }
}

module.exports = resolvers;