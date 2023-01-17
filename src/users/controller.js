const { createUser, getUserbyId } = require("./users.model.js");

const userCreateRest = (async (req, res) => {
    const { username, password, address, day_of_birth, phone, gender, education } = req.body;

    if (!(username && password && gender && education)) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "Some input are required"
                },
                data: {}
            });
    }

    const respModel = await createUser(username, password, day_of_birth, address, gender, education, phone);
    return res.status(200)
        .json({
            meta: {
                code: 200,
                message: "Success add user"
            },
            data: {
                id: respModel
            }
        });
});

const userGetByIDRest = (async (req, res) => {
    const { id } = req.query;

    if (!(id)) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "Some input are required"
                },
                data: {}
            });
    }

    const respModel = await getUserbyId(id);
    return res.status(200)
        .json({
            meta: {
                code: 200,
                message: "Success add user"
            },
            data: respModel
        });
});

module.exports = { userCreateRest, userGetByIDRest };