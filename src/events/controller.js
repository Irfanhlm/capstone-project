const { createCategories, Categories } = require("./model.categories.js");

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

// const categoriesAllRest = async (req, res, next) => {
//     try {
//         const respModel = await getAllCategories();
//         if (!respModel) {
//             return res.status(404).json({ message: 'Id name tidak ditemukan~' });
//         }
//         return res.status(200).json({
//             data: resModel,
//         });
//     } catch (err) {
//         next(err);
//     }
// };

const categoriesGetByIdRest = async (req, res) => {
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required",
            },
            data: {},
        });
    }

    const respModel = await getCategoriesById(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success get categories",
        },
        data: respModel,
    });
};

const index = async (req, res, next) => {
    try {
        const result = await Categories.findAll();
        if (!result) {
            return res.status(404).json({ message: 'Id name tidak ditemukan~' });
        }
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

// const find = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await Categories.findOne({
//             where: {
//                 id: id
//             }
//         });
//         if (!result) {
//             return res.status(404).json({ message: 'Id categories tidak ditemukan~' });
//         }
//         res.status(200).json({
//             data: result,
//         });
//     } catch (err) {
//         next(err);
//     }
// };

const categoriesUpdateRest = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!(id && name)) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required",
            },
            data: {},
        });
    }

    const respModel = await updateCategories(id, name);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success update categories~",
        },
        data: {
            id: respModel,
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
    index,
    // find,
    categoriesCreateRest,
    // categoriesAllRest,
    categoriesGetByIdRest,
    categoriesUpdateRest,
    categoriesDeleteRest
};