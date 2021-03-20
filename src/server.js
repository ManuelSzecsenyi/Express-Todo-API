import express from 'express';
import TodoItem from "./controllers/ItemController"

const app = express();

app.use(express.json());

app.get("/", TodoItem.getAll);
app.post("/", TodoItem.create);
app.put("/", TodoItem.updateItem)

app.listen(3000)
console.log('Express API running on port ', 300)