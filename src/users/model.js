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

const updateUser = async (data, id) => {
    await Users.update(data, {
        where: {
            id: id,
        },
    });
};

const deleteUser = ((id) => {
    Users.destroy({
        where: {
            id: id
        }
    });
});

module.exports = { Users, createUser, getUsers, updateUser, deleteUser };