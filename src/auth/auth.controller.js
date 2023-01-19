const jwtController = require("jsonwebtoken");
const { getUserbyUsername } = require("../users/model");

const authLogin = (async (req, res) => {
    const { username, password } = req.body;
    if (!username && !password) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "some input are required~"
                },
                data: {}
            });
    }
    const user = await getUserbyUsername(username);
    if (!user) {
        return res.status(404)
            .json({
                meta: {
                    code: 404,
                    message: "username not found~"
                },
                data: {}
            });
    }
    if (user.password === password) {
        const token = jwtController.sign(
            {
                role: user.role,
                id: user.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2d"
            }
        );
        return res.status(200)
            .json({
                meta: {
                    code: 200,
                    message: "Success Login~"
                },
                data: {
                    token: token
                }
            });
    }
    return res.status(400)
        .json({
            meta: {
                code: 400,
                message: "Wrong Password~"
            },
            data: {}
        });
});

module.exports = authLogin;