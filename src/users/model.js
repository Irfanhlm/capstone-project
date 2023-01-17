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
    }
}, {
    paranoid: true //soft-delete, 
});

newSeq.sync({ alter: true }).then(() => {
    console.log('Users table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});


module.exports = Users;