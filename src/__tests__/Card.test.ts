import { createReadStream } from "graceful-fs"
import Cart from "../ts/Card"

const cart = new Cart()
cart.add({
    id: 1,
    name: "dress",
    price: 100,
})
cart.add({
    id: 2,
    name: "pants",
    price: 200,
})
cart.add({
    id: 3,
    name: "skirt",
    price: 300,
})

test("arr items", () => {
    expect(cart.items).toEqual(
        [
            {
                id: 1,
                name: "dress",
                price: 100,
            },
            {
                id: 2,
                name: "pants",
                price: 200,
            },
             {
                id: 3,
                name: "skirt",
                price: 300,
            }
        ])
})

test("amount without discount", () => {
    expect(cart.sumPrice()).toEqual(600)
})

test("amount including discount", () => {
    expect(cart.discountSum(50)).toEqual(300)
})

test("delete item product", () => {
    cart.deleteProduct(2)
    expect(cart._items).toEqual(
        [
            {
                id: 1,
                name: "dress",
                price: 100,
            }, {
                id: 3,
                name: "skirt",
                price: 300,
            }
        ])
})
