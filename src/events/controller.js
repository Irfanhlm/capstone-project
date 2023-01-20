const {
    createEvents,
    getAllEvents,
    getEventsById,
    updateEvents,
    deleteEvents
} = require("./model.js");

const eventsCreateRest = (async (req, res) => {
    const { title, date, about, venue, price } = req.body;
    if (!title && date && about && venue) {
        return res.status(400)
            .json({
                meta: {
                    code: 400,
                    message: "Some input are required~",
                },
                data: {},
            });
    }
    const resModel = await createEvents(title, date, about, venue, price);
    return res.status(201)
        .json({
            meta: {
                code: 200,
                message: "Success add events~",
            },
            data: {
                id: resModel,
            },
        });
});

const eventsAllRest = async (req, res, next) => {
    try {
        const resModel = await getAllEvents();
        if (!resModel) {
            return res.status(404).json({ message: 'Id name tidak ditemukan~' });
        }
        return res.status(200).json({
            data: resModel,
        });
    } catch (err) {
        next(err);
    }
};

const eventsGetByIdRest = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required~",
            },
            data: {},
        });
    }

    const respModel = await getEventsById(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success get events by ID~",
        },
        data: respModel,
    });
};

const eventsUpdateRest = async (req, res) => {
    const { id } = req.params;
    const { title, date, about, venue, price } = req.body;
    if (!(id && title && date && about && venue)) {
        return res.status(400).json({
            meta: {
                code: 400,
                message: "Some input are required~",
            },
            data: {},
        });
    }
    const resModel = await updateEvents({ title, date, about, venue, price }, id);
    console.log(resModel);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success update events~",
        },
        data: {
            id: resModel,
        },
    });
};

const eventsDeleteRest = async (req, res) => {
    const { id } = req.params;
    const respModel = await deleteEvents(id);
    return res.status(200).json({
        meta: {
            code: 200,
            message: "Success delete events~",
        },
        data: respModel,
    });
};

module.exports = {
    eventsCreateRest,
    eventsAllRest,
    eventsGetByIdRest,
    eventsUpdateRest,
    eventsDeleteRest
};