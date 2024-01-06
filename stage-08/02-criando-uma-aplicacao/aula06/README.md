# Introdução ao SQL: Comandos Importantes e Funcionalidades

O SQL (Structured Query Language) é uma linguagem de programação projetada para gerenciar e manipular bancos de dados relacionais. Desenvolvida pela IBM nos anos 70, tornou-se uma linguagem padrão para interação com sistemas de gerenciamento de banco de dados (SGBD). O SQL permite que os usuários realizem diversas operações em bancos de dados, como inserção, atualização, exclusão e consulta de dados. Neste artigo, exploraremos o que é SQL, destacando os comandos mais importantes e suas funcionalidades.

## O que é SQL?

O SQL é uma linguagem declarativa que permite aos usuários interagir com bancos de dados relacionais. Sua principal função é fornecer uma maneira eficaz de consultar e manipular dados armazenados em um SGBD. Diferentemente de linguagens de programação convencionais, o SQL não descreve o "como" realizar uma tarefa, mas sim o "o que" deve ser feito. Ele permite que os usuários expressem consultas e operações de maneira clara e concisa.

### Comandos SQL Importantes e Suas Funcionalidades

#### 1. SELECT:

Funcionalidade: Utilizado para recuperar dados de uma ou mais tabelas.

```sql
SELECT nome, idade FROM clientes WHERE cidade = 'São Paulo';
```

#### 2. INSERT

Funcionalidade: Adiciona novos registros a uma tabela.

```sql
INSERT INTO produtos (nome, preço) VALUES ('Notebook', 2000.00);
```

#### 3. UPDATE

Funcionalidade: Modifica dados existentes em uma tabela.

```sql
UPDATE funcionarios SET salario = salario * 1.1 WHERE cargo = 'Gerente';
```

#### 4. DELETE

Funcionalidade: Remove registros de uma tabela.

```sql
DELETE FROM pedidos WHERE data < '2023-01-01';
```

#### 5. CREATE TABLE

Funcionalidade: Cria uma nova tabela no banco de dados.

````sql
CREATE TABLE clientes (
  i```d INT PRIMARY KEY,
  nome VARCHAR(50),
  email VARCHAR(100)
);

````

#### 6. ALTER TABLE

Funcionalidade: Modifica a estrutura de uma tabela existente.

```sql
ALTER TABLE produtos ADD COLUMN quantidade INT;
```

#### 7. DROP TABLE

Funcionalidade: Remove uma tabela do banco de dados.

```sql
DROP TABLE clientes;
```

#### 8. JOIN

Funcionalidade: Combina linhas de duas ou mais tabelas com base em uma condição.

```sql
SELECT clientes.nome, pedidos.data
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id;
```

#### 9. GROUP BY

Funcionalidade: Agrupa registros com base em valores comuns em uma ou mais colunas.

```sql
SELECT departamento, AVG(salario) as salario_medio
FROM funcionarios
GROUP BY departamento;
```

#### 10. HAVING

Funcionalidade: Filtra resultados de consultas com GROUP BY.

```sql
SELECT departamento, AVG(salario) as salario_medio
FROM funcionarios
GROUP BY departamento
HAVING AVG(salario) > 50000;
```

Esses são apenas alguns dos comandos fundamentais do SQL. A linguagem oferece uma ampla gama de recursos para gerenciar dados de forma eficiente, tornando-se essencial para profissionais de banco de dados e desenvolvedores de software. Ao compreender esses comandos e suas funcionalidades, os usuários podem realizar operações complexas e obter insights valiosos a partir de dados armazenados em bancos de dados relacionais.
