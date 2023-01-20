const {
    createImages,
    getAllImages, getImagesById,
    updateImages,
    deleteImages
} = require("./model.js");

const imagesCreateRest = (async (req, res) => {
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
    const resModel = await createImages(name);
    return res.status(201)
        .json({
            meta: {
                code: 200,
                message: "Success add images~",
            },
            data: {
                id: resModel,
            },
        });
});

const imagesAllRest = async (req, res, next) => {
    try {
        const resModel = await getAllImages();
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

const imagesGetByIdRest = async (req, res) => {
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

    const respModel = await getImagesById(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success get images~",
        },
        data: respModel,
    });
};

const imagesUpdateRest = async (req, res) => {
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
    const resModel = await updateImages({ name }, id);
    console.log(resModel);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success update images~",
        },
        data: {
            id: resModel,
        },
    });
};

const imagesDeleteRest = async (req, res) => {
    const { id } = req.params;
    const respModel = await deleteImages(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success delete images~",
        },
        data: respModel,
    });
};

module.exports = {
    imagesCreateRest,
    imagesAllRest,
    imagesGetByIdRest,
    imagesUpdateRest,
    imagesDeleteRest
};