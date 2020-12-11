export default class LocalStorage {
    constructor() {
        this.keyName = 'items';
    }
    getItems() {
        const itemsLocalStorage = localStorage.getItem(this.keyName);
        if (itemsLocalStorage !== null) {
            return JSON.parse(itemsLocalStorage);
        }
        return [];
    }
    putItems(id) {
        let items = this.getItems();
        let pushItem = false;
        const index = items.indexOf(id);

        if (index === -1) {
            items.push(id);
            pushItem = true;
        } else {
            items.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(items));

        return { pushItem, items };
    }
}
