import mongoose from "mongoose";

export const create = async (req, res) => {
    try {
        const product = await
    } catch (error) {
        
    }
};
export const list = (req, res) => {
    res.json(data);
};
export const get = (req, res) => {
    res.json(data.find(item => item.id == req.params.id));
};
export const remove = (req, res) => {
    res.json(data.filter(item => item.id != req.params.id));
};
export const update = (req, res) => {
    const result = data.map(item => item.id == req.params.id ? req.body : item)
    res.json(result);
};