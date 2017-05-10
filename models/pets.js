module.exports = function(sequelize, DataTypes) {
    var pets = sequelize.define("adoptablePets", {
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        sex: {
            type: DataTypes.ENUM,
            values: ["M", "F"],
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        size: {
            type: DataTypes.ENUM,
            values: ["S", "M", "L"],
            allowNull: false

        },
        animal: {
            type: DataTypes.ENUM,
            values: ["cat", "dog"],
            allowNull: false

        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false

        },
        breeds: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        media: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        adopted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false




    });
    return pets;
}
