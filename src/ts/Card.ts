import Buyable from './Buyable';

export default class Cart {
    _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sumPrice(): number {
        let sum: number = 0;
        this._items.forEach(item => { sum = sum + item.price })
        return sum
    }

    discountSum(discount: number): number {
        let sum: number = 0
        this._items.forEach(item => {
            sum = sum + (item.price - item.price * discount / 100)
        })
        return sum
    }

    deleteProduct(id: number): void {
       let num = this._items.findIndex(item => item.id === id)
       this._items.splice(num,1)
    }
}
