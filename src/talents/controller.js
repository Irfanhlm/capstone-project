const {
    createTalents,
    getAllTalents,
    getTalentsById,
    updateTalents,
    deleteTalents
} = require("./model.js");

const talentsCreateRest = (async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "Some input are required~",
                },
                data: {},
            });
    }
    const resModel = await createTalents(name);
    return res.status(201)
        .json({
            meta: {
                code: 200,
                message: "Success add talent~",
            },
            data: {
                id: resModel,
            },
        });
});

const talentsAllRest = async (req, res, next) => {
    try {
        const resModel = await getAllTalents();
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

const talentsGetByIdRest = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required~",
            },
            data: {},
        });
    }

    const respModel = await getTalentsById(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success get talent by ID~",
        },
        data: respModel,
    });
};

const talentsUpdateRest = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!(name)) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required~",
            },
            data: {},
        });
    }
    const resModel = await updateTalents({ name }, id);
    console.log(resModel);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success update talent~",
        },
        data: {
            id: resModel,
        },
    });
};

const talentsDeleteRest = async (req, res) => {
    const { id } = req.params;
    const respModel = await deleteTalents(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success delete talent~",
        },
        data: respModel,
    });
};

module.exports = {
    talentsCreateRest,
    talentsAllRest,
    talentsGetByIdRest,
    talentsUpdateRest,
    talentsDeleteRest
};