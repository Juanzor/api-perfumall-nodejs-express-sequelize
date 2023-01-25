const db = require("../database/models");

const controller = {
    getAllUsers: async (req, res) => {
        try {
            let response = await db.User.findAll();
            //response = { data: response, count: response.length };
            res.json(response);

            if (response.length === 0)
                return res.status(404).json({ message: "Task not found" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    },
    getUser: async (req, res) => {
        const { id } = req.params;

        try {
            const response = await db.User.findByPk(id);

            const data = {
                nombre: response.nombre,
                apellido: response.apellido,
                imagenPerfil: response.imagenPerfil,
                provincia: response.provincia,
                admin: response.admin,
                local_id: response.local_id,
            };
            console.log(data);
            return res.json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    },
    getLastUser: async (req, res) => {
        try {
            const response = await db.User.findOne({
                order: [["id", "DESC"]],
            });
            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    },
};

module.exports = controller;
