const JSONtoken = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const jwt = req.headers["authorization"];

    if (!jwt) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Missing JWT",
            },
            data: {},
        });
    }

    const bearer = jwt.split(" ");
    const token = bearer[1];

    try {
        const decoded = JSONtoken.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json({
            meta: {
                code: 401,
                message: "Invalid Token",
            },
            data: {},
        });
    }
    return next();
};

module.exports = verifyToken;