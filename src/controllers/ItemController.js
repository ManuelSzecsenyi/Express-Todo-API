import ItemModel from "../models/Item";

const Item = {
    create(req, res){
        if (!req.body.text && !req.body.done) {
            return res.status(400).send({'message': 'All fields are required'})
        }
        const item = ItemModel.create(req.body);
        return res.status(201).send(item);
    },
    getAll(req, res){
        const items = ItemModel.getAll();
        console.log("Fetched items", items.length, "items.");
        return res.status(200).send(items);
    },
    updateItem(req, res){
        if (!req.body.text && !req.body.done) {
            return res.status(400).send({'message': 'All fields are required'})
        }
        const item = ItemModel.update(req.body);
        return res.status(200).send(item);
    }
}

export default Item;