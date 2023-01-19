const { DataTypes } = require('sequelize');
const { newSeq } = require("../configs/db.js");

const Categories = newSeq.define("categories", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    paranoid: true //soft-delete, 
});

newSeq.sync().then(() => {
    console.log('Categories table created successfully!~');
}).catch((error) => {
    console.error(`Unable to create table: ${error}~`);
});

const createCategories = (async (nm) => {
    const create = await Categories.create({
        name: nm
    });
    console.log(nm, "'s id : ", create.id);
    return create.id;
});

// const getAllCategories = (async () => {
//     const dataCategories = await Categories.findAll();
//     return dataCategories;
// });

const getCategoriesById = (async (id) => {
    const allCategories = await Categories.findOne({
        where: {
            id: id,
        },
    });
    return allCategories;
});

const updateCategories = async (data, id) => {
    await Favourites.update(data, {
        where: {
            id: id,
        },
    });
};

const deleteCategories = (id) => {
    Favourites.destroy({
        where: {
            id: id,
        },
    });
};

module.exports = {
    Categories,
    createCategories,
    // getAllCategories,
    getCategoriesById,
    updateCategories,
    deleteCategories
}

