const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    signToken: ({ _id, email }) => {
        const payload = { _id, email };
        return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: '30d' });
    }
}