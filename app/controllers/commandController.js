const Command = require ('../models/commandModel')

exports.addCommand = async (req, res) => {
    try {
        const newCommand = new Command(req.body);
        const savedCommand = await newCommand.save();
        res.status(201).json(savedCommand);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



exports.getAllCommands = async (req, res) => {
    try {
        const commands = await Command.find().populate('products.product'); // Populate product details
        res.status(200).json(commands);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getCommandById = async (req, res) => {
    try {
        const command = await Command.findById(req.params.id).populate('products.product');
        if (!command) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(command);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateCommand = async (req, res) => {
    try {
        const updatedCommand = await Command.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedCommand) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(updatedCommand);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteCommand = async (req, res) => {
    try {
        const deletedCommand = await Command.findByIdAndDelete(req.params.id);
        if (!deletedCommand) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};