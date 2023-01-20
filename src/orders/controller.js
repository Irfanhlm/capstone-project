const {
    createOrders,
    getAllOrders,
    getOrdersById
} = require("./model.js");

const ordersCreateRest = (async (req, res) => {
    const { date, status, quantity, total_pay } = req.body;
    if (!date && status && quantity && total_pay) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "Some input are required~",
                },
                data: {},
            });
    }
    const resModel = await createOrders(date, status, quantity, total_pay);
    return res.status(201)
        .json({
            meta: {
                code: 200,
                message: "Success add order~",
            },
            data: {
                id: resModel,
            },
        });
});

const ordersAllRest = async (req, res, next) => {
    try {
        const resModel = await getAllOrders();
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

const ordersGetByIdRest = async (req, res) => {
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
    const respModel = await getOrdersById(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success get order by ID~",
        },
        data: respModel,
    });
};

module.exports = {
    ordersCreateRest,
    ordersAllRest,
    ordersGetByIdRest,
};