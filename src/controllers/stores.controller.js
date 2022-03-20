import Store from '../models/Stores'

export const createStore = async (req,res) => {
    const { name, img } = req.body

    const newStore = new Store({name, img});

    const storeSaved = await newStore.save()

    res.status(201).json(storeSaved)
}

export const getStores = async (req,res) => {
    const stores = await Store.find();
    res.json(stores)
}