const db = require("../db");

async function getItemById(req, res, next) {
    try {
    const { collection, id } = req.params;

    const items = db[collection]

    if(!items) {
        throw new CustomNotFoundError("collection not found");
    }

    const item = await db.getItemById(items, Number(id));

    if(!item) {
        return res.status(404).send("Item not found");
    }

    return res.send(`Item Name: ${item.name}`);
    } catch (err) {
        next(err);
    }
}

function middleWareTest(req, res, next) {
    console.log("Middleware test successful");
    next();
}

module.exports = { getItemById, middleWareTest };