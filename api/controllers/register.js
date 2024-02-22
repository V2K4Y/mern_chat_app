const { userModel } = require("../model/User");

const register = async (req, res) => {
    const {username, password} = req.body;
    await userModel.create({username, password})
}