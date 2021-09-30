const Name = require('../models/Name');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {
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
        },
        getAuth: async (_, { email, password }) => {
            const current = await User.findOne({ email: email }).exec();
            const valid = bcrypt.compare(password, current.password)
            return { token:'weeeeee', valid }
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            let hashedPassword = await bcrypt.hash(args.password, 10);

            let user = new User({
                email: args.email,
                password: hashedPassword,
                display_name: args.display_name,
                partner: args.partner
            })
            return await user.save();
        },
        deleteUser: async (_, {id}) => {
            await User.findByIdAndDelete(id);
            return `Deleted user ${id}`;
        },
        updateDisplayName: async (_, { id, display_name }) => {
            return await User.findByIdAndUpdate(id, {display_name: display_name}, { new: true });
        },
        addProvidedName: async (_, { name, rating, user_id }) => {
            const newName = { name, rating, user_id };
            return await User.findByIdAndUpdate(user_id, { $push: { provided_names: newName } }, { new: true });
        },
        addSelectedName: async (_, { name, rating, user_id }) => {
            const newName = { name, rating };
            return await User.findByIdAndUpdate(user_id, { $push: { selected_names: newName } }, { new: true })
        }
    }
}

module.exports = resolvers;