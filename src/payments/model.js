const { DataTypes } = require('sequelize');
const { newSeq } = require("../configs/db.js");

const Payments = newSeq.define("payments", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    paranoid: true //soft-delete, 
});

newSeq.sync().then(() => {
    console.log('Payments table created successfully!~');
}).catch((error) => {
    console.error(`Unable to create table: ${error}~`);
});

const createPayments = (async (nm, st) => {
    const create = await Payments.create({
        name: nm,
        status: st
    });
    console.log(nm, "'s id : ", create.id);
    return create.id;
});

const getAllPayments = (async () => {
    const allPayments = await Payments.findAll();
    return allPayments;
});

const getPaymentsById = (async (id) => {
    const allPayments = await Payments.findOne({
        where: {
            id: id,
        },
    });
    return allPayments;
});

const updatePayments = async (data, id) => {
    const allPayments = await Payments.update(data, {
        where: {
            id: id,
        },
    });
    return allPayments;
};

const deletePayments = (id) => {
    Payments.destroy({
        where: {
            id: id,
        },
    });
};

module.exports = {
    Payments,
    createPayments,
    getAllPayments,
    getPaymentsById,
    updatePayments,
    deletePayments
}

