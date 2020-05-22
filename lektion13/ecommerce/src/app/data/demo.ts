import { IProduct } from '../models/iproduct.model'

export const productCatalog: Array<IProduct> = [
    { id: '1', name: 'Demo Product 1' , desc: 'This is only a demo product', price: 100 },
    { id: '2', name: 'Demo Product 2' , desc: 'This is only a demo product', price: 200 },
    { id: '3', name: 'Demo Product 3' , desc: 'This is only a demo product', price: 300 },
    { id: '4', name: 'Demo Product 4' , desc: 'This is only a demo product', price: 400 },

]

export const users: Array<IUser> = [
    { id: '1', firstName: 'Hans', lastName: 'Mattin-Lassei', email: 'hans@ml.com', password: 'BytMig123', role: 'admin' },
    { id: '2', firstName: 'Anna', lastName: 'Nyman', email: 'anna@nyman.com', password: 'BytMig456', role: 'user' }
]