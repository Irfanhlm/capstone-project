const { DataTypes } = require('sequelize');
const { newSeq } = require("../configs/db.js");

const Talents = newSeq.define("talents", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    paranoid: true //soft-delete, 
});

newSeq.sync().then(() => {
    console.log('Talents table created successfully!~');
}).catch((error) => {
    console.error(`Unable to create table: ${error}~`);
});

const createTalents = (async (nm) => {
    const create = await Talents.create({
        name: nm
    });
    console.log(nm, "'s id : ", create.id);
    return create.id;
});

const getAllTalents = (async () => {
    const allTalents = await Talents.findAll();
    return allTalents;
});

const getTalentsById = async (id) => {
    const allTalents = await Talents.findOne({
        where: {
            id: id,
        },
    });
    return allTalents;
};

const updateTalents = async (data, id) => {
    const allTalents = await Talents.update(data, {
        where: {
            id: id,
        },
    });
    return allTalents;
};

const deleteTalents = (id) => {
    Talents.destroy({
        where: {
            id: id,
        },
    });
};

module.exports = {
    Talents,
    createTalents,
    getAllTalents,
    getTalentsById,
    updateTalents,
    deleteTalents
}

