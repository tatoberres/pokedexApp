# Créer une BDD pour le Projet Pokedex

Depuis le terminal, se connecter à **Postgres** :

```shell
sudo -i -u postgres psql
```

Créer un **Role** et une **Base des Données** :

```psql
CREATE ROLE pokemon LOGIN PASSWORD '123456';

CREATE DATABASE pokemon OWNER pokemon;
```

Pour **insérer les données** (ou les écraser en cas d'erreur) :

```shell
psql -h localhost -U pokemon -d pokemon -f app/data/create_db.sql
```

Pour **se connecter** :

```shell
psql localhost -U pokemon -d pokemon
```
## Et si je veux ma BDD en local ?

Revenir à la [page principal](./readme.md) et suivre les pas pour travailler en local.