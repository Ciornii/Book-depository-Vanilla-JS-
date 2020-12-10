export default class LocalStorage {
    constructor() {
        this.keyName = 'books';
    }
    getBooks() {
        const booksLocalStorage = localStorage.getItem(this.keyName);
        if (booksLocalStorage !== null) {
            return JSON.parse(booksLocalStorage);
        }
        return [];
    }
    putBooks(id) {
        let books = this.getBooks();
        let pushProduct = false;
        const index = books.indexOf(id);

        if (index === -1) {
            books.push(id);
            pushProduct = true;
        } else {
            books.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(books));

        return { pushProduct, books };
    }
}
