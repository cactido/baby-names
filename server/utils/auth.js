const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    signToken: ({ _id, email }) => {
        const payload = { _id, email };
        return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: '30d' });
    },
    authMiddleware: ({ req }) => {
        let token  = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) { return req; }
        try {
            const { data } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: '30d' });
            req.user = data;
        } catch { console.log('Invalid token.') };
        return req;
    }
}