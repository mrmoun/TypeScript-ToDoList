import ListItem from "./ListItem";

interface List{

    list: ListItem[],
    load():void,
    save():void,
    clearList():void,
    addItem(itemObj: ListItem):void,
    removeItem(id:string):void;

}

export default class FullList implements List{

    static instance : FullList = new FullList();

    private constructor(
        private _list:ListItem[] = [],
    ){}

    get list():ListItem[] {
        return this._list;
    }

    load():void{
        const storedList : (string | null) = localStorage.getItem("myList");

        if(typeof storedList !== "string") // check if there is nothing to load
            return;

        const parsedList: { _id:string, _item:string, _checked:boolean}[] = JSON.parse(storedList);//Converts an a js string (already strigified) into a js object

        //each item should be added to the fullList to be rendered afterword
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id , itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        })
    }

    save(): void{
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    clearList():void{
        this._list = [];
        this.save();
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => !(item.id === id)); //Returns the items that meet the condition
        this.save();
    }

}