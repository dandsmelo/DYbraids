const database = require("../config/index");
const { DataTypes } = require("sequelize");

const User = database.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Senha: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

// Sincronizar o modelo com o banco de dados (isso cria a tabela se ela não existir)
// database.sync(); -> Esta linha pode ser removida ou ajustada, dependendo da necessidade

module.exports = User;
