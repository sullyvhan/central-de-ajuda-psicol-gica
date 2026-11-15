--cria um banco novo
CREATE DATABASE IF NOT EXISTS central_de_ajuda

  -- qual conjubto de letras o banco entende, se tem ou n acento etc
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

--usa o banco criado
USE central_de_ajuda;

--cria a tabela de conquistas
CREATE TABLE IF NOT EXISTS conquistas (

  --numero de identificação de cada item
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,

  -- VARCHAR(80) = texto de até 80 letras
  -- NOT NULL    = obrigatório, não aceita item sem texto
  texto      VARCHAR(80)  NOT NULL,

  -- TINYINT(1) = número bem pequeno, usado como "sim ou não"
  -- DEFAULT 0  = se ninguém disser nada, o valor é 0
  --              0 = pendente, 1 = concluído basicamnete isso
  concluido  TINYINT(1)   NOT NULL DEFAULT 0,

--guarda data e hora que o itemm foi salvi
  criado_em  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
--chave primaria, faz com que n existam dois itens com o mesmo id
  PRIMARY KEY (id)


) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
