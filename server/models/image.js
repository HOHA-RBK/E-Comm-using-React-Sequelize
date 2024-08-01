module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
        Url: {
            type: DataTypes.TEXT,
            allowNull: false
        }
       
    })
    return Image
}