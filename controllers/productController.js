const db = require("../database/models");

//cantidad de productos por marca

const controller = {
    getAllProducts: async (req, res) => {
        try {
            let response = await db.Producto.findAll({ include: "marca" });

            //response = { response, count: response.length };
            res.json(response);

            if (response.length === 0)
                return res.status(404).json({ message: "Task not found" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    },

    getAllBrands: async (req, res) => {
        try {
            const response = await db.Marca.findAll();

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    },
    getProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const response = await db.Producto.findByPk(id, {
                include: "marca",
            });
            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    },
    getLastProduct: async (req, res) => {
        try {
            const response = await db.Producto.findOne({
                order: [["id", "DESC"]],
            });
            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    },

    getVentas: async (req, res) => {
        try {
            const ventas = await db.Venta.findAll({
                include: "detalle_venta",
            });

            res.json({ ventas });
        } catch (error) {
            res.json({ error: error.message });
        }

        // const detalle_venta = await db.Detalle_venta.findAll();
    },
};

module.exports = controller;
