sudo -i -u postgres psql

CREATE ROLE pokemon LOGIN PASSWORD '123456';

CREATE DATABASE pokemon OWNER pokemon;

Pour se connecter:
psql localhost -U pokemon -d pokemon

Pour refaire la BDD a nouveau:
psql -h localhost -U pokemon -d pokemon -f app/data/create_db.sql

Pour exporter un json dans un fichier SQL:
https://www.convertjson.com/json-to-sql.htm

CREATE TABLE "pokedex" ("id" INT PRIMARY KEY, "name_en" VARCHAR, "name_ja" VARCHAR, "name_ch" VARCHAR, "name_fr" VARCHAR);

<!-- 
tapper:
\d pokedex

Donne ca:
Table « public.pokedex »
 Colonne |       Type        | Collationnement | NULL-able | Par défaut 
---------+-------------------+-----------------+-----------+------------
 id      | integer           |                 | not null  | 
 name_en | character varying |                 |           | 
 name_ja | character varying |                 |           | 
 name_ch | character varying |                 |           | 
 name_fr | character varying |                 |           | 
Index : "pokedex_pkey" PRIMARY KEY, btree (id) 
-->
