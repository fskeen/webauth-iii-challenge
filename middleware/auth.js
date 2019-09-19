const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')

module.exports = {
    restricted,
}

function restricted(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({message: 'Nice try!!'})
            } else {
                req.user = { username: decodedToken.username };
            }
        })
        next();
    } else {
        res.status(401).json({message: "You shall not pass!"})
    }
}