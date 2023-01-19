const {
    createUser,
    getUsers,
    getUserbyId,
    deleteUser,
    updateUser
} = require("./model.js");

const userCreateRest = (async (req, res) => {
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
                id: resModel,
            }
        });
});

const usersRest = async (req, res, next) => {
    try {
        const resModel = await getUsers();
        if (!resModel) {
            return res.status(404).json({ message: 'Id name tidak ditemukan~' });
        }
        return res.status(200).json({
            data: resModel,
        });
    } catch (err) {
        next(err);
    }
};

const userGetbyIdRest = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required",
            },
            data: {},
        });
    }

    const respModel = await getUserbyId(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success get user",
        },
        data: respModel,
    });
};

const userUpdateRest = async (req, res) => {
    const { id } = req.params;
    const { username, email, password, phone } = req.body;
    if (!(id && username && password && email && phone)) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required~",
            },
            data: {},
        });
    }
    const resModel = await updateUser({ username, email, password, phone }, id);
    console.log(resModel);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success update user~",
        },
        data: {
            id: resModel,
        },
    });
};

const userDeleteRest = async (req, res) => {
    const { id } = req.params;
    const respModel = await deleteUser(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success delete user",
        },
        data: respModel,
    });
};

module.exports = {
    userCreateRest,
    usersRest,
    userGetbyIdRest,
    userUpdateRest,
    userDeleteRest
};