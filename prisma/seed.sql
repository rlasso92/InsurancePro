CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS usuario(
     id      UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY, 
    ,nombre  VARCHAR(50)
    ,apellido VARCHAR(50)
    ,edad VARCHAR(50)
    ,correo VARCHAR(50)
    ,perfil VARCHAR(50)
    ,departamento VARCHAR(50)
    ,rol VARCHAR(50)
);