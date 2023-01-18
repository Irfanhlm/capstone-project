const { createUser, getUserbyId, getUsers } = require("./model.js");

const userCreateAPI = (async (req, res) => {
    const { username, email, password, phone } = req.body;
    if (!(username && email && password)) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "Some input are required~"
                },
                data: {}
            });
    }

    const resModel = await createUser(username, email, password, phone);
    return res.status(201)
        .json({
            meta: {
                code: 200,
                message: "Success add user~"
            },
            data: {
                id: resModel
            }
        });
});

const usersAPI = async (req, res, next) => {
    try {
        const resModel = await getUsers();
        if (!resModel) {
            return res.status(404).json({ message: 'Id name tidak ditemukan~' });
        }
        res.status(200).json({
            data: resModel,
        });
    } catch (err) {
        next(err);
    }
};

const userGetbyIdAPI = (async (req, res) => {
    const { id } = req.query;
    if (!(id)) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "Some input are required~"
                },
                data: {}
            });
    }

    const resModel = await getUserbyId(id);
    return res.status(200)
        .json({
            meta: {
                code: 200,
                message: "Success add user~"
            },
            data: resModel
        });
});

module.exports = { userCreateAPI, usersAPI, userGetbyIdAPI };