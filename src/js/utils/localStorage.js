export default class LocalStorage {
    constructor() {
        this.keyName = 'books';
    }
    getBooks() {
        const itemsLocalStorage = localStorage.getItem(this.keyName);
        if (itemsLocalStorage !== null) {
            return JSON.parse(itemsLocalStorage);
        }
        return [];
    }
    putBooks(id) {
        let books = this.getBooks();
        let pushItem = false;
        const index = books.indexOf(id);

        if (index === -1) {
            books.push(id);
            pushItem = true;
        } else {
            books.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(books));

        return { pushItem, books };
    }
}
