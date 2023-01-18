const { DataTypes } = require('sequelize');
const { newSeq } = require("../configs/db.js");

const categorySchema = newSeq.define("categories", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    paranoid: true //soft-delete, 
});

module.exports = ('Category', categorySchema);