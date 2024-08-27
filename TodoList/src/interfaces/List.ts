import ListItem from "../model/ListItem";


export interface List{

        list: ListItem[],
        load():void,
        save():void,
        clearList():void,
        addItem(itemObj: ListItem):void,
        removeItem(id:string):void;
    
    }