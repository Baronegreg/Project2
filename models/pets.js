module.exports = function(sequelize, DataTypes) {
    var pets = sequelize.define("adoptablePets", {
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.ENUM,
            values: ["M", "F"],
            defaultValue: false,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: false

        },
        size: {
            type: DataTypes.ENUM,
            values: ['S', "M", "L"],
            defaultValue: false,
            allowNull: false

        },
        animal: {
            type: DataTypes.ENUM,
            values: ["cat", "dog"],
            defaultValue: false,
            allowNull: false

        },
        contact: {
            type: DataTypes.STRING,
            defaultValue: false,
            allowNull: false

        },
        breeds: {
            type: DataTypes.STRING,
            defaultValue: false,
            allowNull: false

        },
        media: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: false

        },
        description: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: false
        }
    }, {
        timestamps: false




    });
    return pets;
}
