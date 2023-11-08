CREATE DATABASE DYbraids; -- Criar um novo banco 
USE DYbraids; -- Usar o banco 

-- Criar tabela de produtos
CREATE TABLE Produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

-- Inserir dados
INSERT INTO Produtos (nome, preco) VALUES
('Lace Ondulada', 300.00),
('Lace Morena Beyonce', 250.00),
('Lace Boxeadora', 315.00),
('Lace Ariel', 210.00),
('Lace Tasha', 250.00),
('Lace Cardi B', 150.00),
('Rabo Ondulado', 100.00),
('Lace Rihanna', 130.00),
('Rabo Liso', 150.00);