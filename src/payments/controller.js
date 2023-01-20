const {
    createPayments,
    getAllPayments,
    getPaymentsById,
    updatePayments,
    deletePayments
} = require("./model.js");

const paymentsCreateRest = (async (req, res) => {
    const { name, status } = req.body;
    if (!name && status) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "Some input are required~",
                },
                data: {},
            });
    }
    const resModel = await createPayments(name, status);
    return res.status(201)
        .json({
            meta: {
                code: 200,
                message: "Success add payment~",
            },
            data: {
                id: resModel,
            },
        });
});

const paymentsAllRest = async (req, res, next) => {
    try {
        const resModel = await getAllPayments();
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

const paymentsGetByIdRest = async (req, res) => {
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

    const respModel = await getPaymentsById(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success get payment~",
        },
        data: respModel,
    });
};

const paymentsUpdateRest = async (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    if (!(id && name)) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required~",
            },
            data: {},
        });
    }
    const resModel = await updatePayments({ name, status }, id);
    console.log(resModel);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success update payment~",
        },
        data: {
            id: resModel,
        },
    });
};

const paymentsDeleteRest = async (req, res) => {
    const { id } = req.params;
    const respModel = await deletePayments(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success delete payment~",
        },
        data: respModel,
    });
};

module.exports = {
    paymentsCreateRest,
    paymentsAllRest,
    paymentsGetByIdRest,
    paymentsUpdateRest,
    paymentsDeleteRest
};