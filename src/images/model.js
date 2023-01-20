const { DataTypes } = require('sequelize');
const { newSeq } = require("../configs/db.js");

const Images = newSeq.define("images", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    paranoid: true //soft-delete, 
});

newSeq.sync().then(() => {
    console.log('Images table created successfully!~');
}).catch((error) => {
    console.error(`Unable to create table: ${error}~`);
});

const createImages = (async (nm) => {
    const create = await Images.create({
        name: nm
    });
    console.log(nm, "'s id : ", create.id);
    return create.id;
});

const getAllImages = (async () => {
    const allImages = await Images.findAll();
    return allImages;
});

const getImagesById = (async (id) => {
    const allImages = await Images.findOne({
        where: {
            id: id,
        },
    });
    return allImages;
});

const updateImages = async (data, id) => {
    const allImages = await Images.update(data, {
        where: {
            id: id,
        },
    });
    return allImages;
};

const deleteImages = (id) => {
    Images.destroy({
        where: {
            id: id,
        },
    });
};

module.exports = {
    Images,
    createImages,
    getAllImages,
    getImagesById,
    updateImages,
    deleteImages
}

