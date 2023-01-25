module.exports = function (sequelize, DataTypes) {
    const alias = "Detalle_venta";
    const cols = {
        id: {
            type: DataTypes.INTEGER(200),
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        direccion_destino: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        provincia_destino: {
            type: DataTypes.STRING(255),
            defaultValue: false,
            allowNull: true,
        },
        retiro: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        monto_total: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
    };
    const config = {
        tableName: "Detalle_venta",
        timestamps: false,
    };
    const Detalle_venta = sequelize.define(alias, cols, config);

    Detalle_venta.associate = (models) => {
        Detalle_venta.hasMany(models.Venta, {
            as: "venta",
            foreignKey: "detalle_venta_ID",
        });
    };

    return Detalle_venta;
};
