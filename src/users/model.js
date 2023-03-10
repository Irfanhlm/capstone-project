const { DataTypes } = require('sequelize');
const { newSeq } = require("../configs/db.js");

const Users = newSeq.define("users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
    },
}, {
    paranoid: true //soft-delete, 
});

newSeq.sync().then(() => {
    console.log('Users table created successfully!~');
}).catch((error) => {
    console.error(`Unable to create table: ${error}~`);
});

const createUser = (async (un, em, pw, ph) => {
    const create = await Users.create({
        username: un,
        email: em,
        password: pw,
        phone: ph
    });
    console.log(un, "'s id : ", create.id);
    return create.id;
});

const getUsers = (async () => {
    const dataUser = await Users.findAll();
    return dataUser;
});

const getUserbyId = async (id) => {
    const allUser = await Users.findOne({
        where: {
            id: id,
        },
    });
    return allUser;
};

const updateUser = async (data, id) => {
    const dataUser = await Users.update(data, {
        where: {
            id: id,
        },
    });
    return dataUser;
};

const deleteUser = ((id) => {
    Users.destroy({
        where: {
            id: id
        }
    });
});

const getUserbyUsername = (async (un) => {
    const allUser = await Users.findOne({
        where: {
            username: un
        }
    });
    return allUser;
});

module.exports = {
    Users,
    createUser,
    getUsers,
    getUserbyId,
    updateUser,
    deleteUser,
    getUserbyUsername
};