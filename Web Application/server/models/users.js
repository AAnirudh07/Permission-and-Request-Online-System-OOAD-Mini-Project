module.exports = (sequelize, DataTypes) => {
    
    const users = sequelize.define("users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userAppName: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        profilePhoto: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return users
};