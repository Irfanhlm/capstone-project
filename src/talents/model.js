const { DataTypes } = require('sequelize');
const { newSeq } = require("../configs/db.js");

const Events = newSeq.define("events", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    venue: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING(20),
    }
}, {
    paranoid: true //soft-delete, 
});

newSeq.sync().then(() => {
    console.log('Events table created successfully!~');
}).catch((error) => {
    console.error(`Unable to create table: ${error}~`);
});

const createEvents = (async (tl, dt, ab, vn, pc) => {
    const create = await Events.create({
        title: tl,
        date: dt,
        about: ab,
        venue: vn,
        price: pc
    });
    console.log(tl, "'s id : ", create.id);
    return create.id;
});

const getAllEvents = (async () => {
    const allEvents = await Events.findAll();
    return allEvents;
});

const getEventsById = async (id) => {
    const allEvents = await Events.findOne({
        where: {
            id: id,
        },
    });
    return allEvents;
};

const updateEvents = async (data, id) => {
    const allEvents = await Events.update(data, {
        where: {
            id: id,
        },
    });
    return allEvents;
};

const deleteEvents = (id) => {
    Events.destroy({
        where: {
            id: id,
        },
    });
};

module.exports = {
    Events,
    createEvents,
    getAllEvents,
    getEventsById,
    updateEvents,
    deleteEvents
}

