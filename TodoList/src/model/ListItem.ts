import { Item } from "../interfaces/Item";

// Item Implementation
export default class ListItem implements Item {

    // put underscores to avoids conflicts with the interface
    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean= false
    ){}

    // add getters and setters

    get id(): string{
        return this._id;
    }

    set id(id: string){
        this._id = id;
    }

    get item(): string{
        return this._item;
    }

    set item(item: string){
        this._item = item;
    }

    get checked(): boolean{
        return this._checked;
    }

    set checked(checked: boolean){
        this._checked = checked;
    }
   

}