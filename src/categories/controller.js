const {
    createCategories,
    getAllCategories, getCategoriesById,
    updateCategories,
    deleteCategories
} = require("./model.js");

const categoriesCreateRest = (async (req, res) => {
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
    const resModel = await createCategories(name);
    return res.status(201)
        .json({
            meta: {
                code: 200,
                message: "Success add categories~",
            },
            data: {
                id: resModel,
            },
        });
});

const categoriesAllRest = async (req, res, next) => {
    try {
        const resModel = await getAllCategories();
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

const categoriesGetByIdRest = async (req, res) => {
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

    const respModel = await getCategoriesById(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success get categories~",
        },
        data: respModel,
    });
};

const categoriesUpdateRest = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!(id && name)) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required~",
            },
            data: {},
        });
    }
    const resModel = await updateCategories({ name }, id);
    console.log(resModel);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success update categories~",
        },
        data: {
            id: resModel,
        },
    });
};

const categoriesDeleteRest = async (req, res) => {
    const { id } = req.params;
    const respModel = await deleteCategories(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success delete categories~",
        },
        data: respModel,
    });
};

module.exports = {
    categoriesCreateRest,
    categoriesAllRest,
    categoriesGetByIdRest,
    categoriesUpdateRest,
    categoriesDeleteRest
};