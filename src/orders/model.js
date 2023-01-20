const { DataTypes } = require('sequelize');
const { newSeq } = require("../configs/db.js");

const Orders = newSeq.define("orders", {
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    total_pay: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
}, {
    paranoid: true //soft-delete, 
});

newSeq.sync().then(() => {
    console.log('Orders table created successfully!~');
}).catch((error) => {
    console.error(`Unable to create table: ${error}~`);
});

const createOrders = (async (dt, st, qt, tp) => {
    const create = await Orders.create({
        date: dt,
        status: st,
        quantity: qt,
        total_pay: tp
    });
    console.log(dt, "'s id : ", create.id);
    return create.id;
});

const getAllOrders = (async () => {
    const allOrders = await Orders.findAll();
    return allOrders;
});

const getOrdersById = async (id) => {
    const allOrders = await Orders.findOne({
        where: {
            id: id,
        },
    });
    return allOrders;
};

module.exports = {
    Orders,
    createOrders,
    getAllOrders,
    getOrdersById
}

