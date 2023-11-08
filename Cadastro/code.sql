create database DY_Braids;
use DY_Braids;

create table clientes(
id int auto_increment primary key,
nome varchar(70) not null,
email varchar(255) not null,
senha varchar(20) not null
);

