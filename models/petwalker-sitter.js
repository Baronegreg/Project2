module.exports = function(sequelize, DataTypes) {
    var walker = sequelize.define("dogWalker", {
        workingCurrently: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validage: {
                min: 0,
                max: 24
            }
        },
        endTime: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        largestDogWillingToWalk: {
            type: DataTypes.ENUM,
            values: ["s", "m", "l"],
            defaultValue: "s"
        },  
        // medium: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // },
        // small: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
             
            }
        }
        },
       		{
            timestamps: false
    });
    return walker;
}


