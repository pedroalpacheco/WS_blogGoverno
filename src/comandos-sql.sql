#Criando base dados blog;
#create database blog;

#Mostra as bases dados
#show databases;

#Determinar a base dados que vamos manipular
use blog;

#Criar a nossa tabela chamada noticias;
#create table `noticias`(
#`id` int not null auto_increment,
#`titulo` varchar(200) not null,
#`linkimg` varchar(2048) not null,
#`texto` TEXT,
#primary key(`id`) 
#);

#Descrever a nossa tabela
#describe noticias;

#Adicionar dados na nossa tabela
#insert into noticias(titulo,linkimg,texto)values('A noticia','https://www.gooogle.com','çsansahdosadfjnsa sdçfsnfnasdfçsd');

#Ver os dados adicionado na nossa tabela - Consulta
#select * from noticias;

#Criando o usuário admin
#CREATE USER 'admin'@'localhost' IDENTIFIED BY '123456';

#Concedendo permissão
#GRANT ALL PRIVILEGES ON * . * TO 'admin'@'localhost';

#Atualizando a base de dados
#FLUSH PRIVILEGES;

#Apagar dados da tabela
#truncate table noticias;
select * from noticias;
#select * from noticias where titulo ='Estados e Distrito Federal recebem novos equipamentos de segurança';



