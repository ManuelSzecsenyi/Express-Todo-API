import { v4 as uuidv4 } from 'uuid';
import dayjs from "dayjs"

class TodoItems {

    constructor() {
        this.todoItems = [];
        this.create({
            text: "Abwasch machen",
            done: false
        });
        this.create({
            text: "Unterlagen an Chef schicken",
            done: true
        });
        this.create({
            text: "Müll rausbringen",
            done: false
        })
        this.create({
            text: "Installateur anrufen",
            done: false
        })
        this.create({
            text: "Staubsaugen",
            done: false
        })
        this.create({
            text: "Stefan anrufen",
            done: false
        })
    }

    create(item){
        const newItem = {
            id: uuidv4(),
            text: item.text,
            done: item.done,
            createdAt: dayjs()
        }

        this.todoItems.push(newItem);
        return newItem;
    }

    getAll(){
        return this.todoItems;
    }

    update(updatedItem){
        const item = this.todoItems.find(item => item.id === updatedItem.id);
        const index = this.todoItems.indexOf(item);

        this.todoItems[index].text = updatedItem.text;
        this.todoItems[index].done = updatedItem.done;

        return this.todoItems[index];
    }
}

export default new TodoItems();