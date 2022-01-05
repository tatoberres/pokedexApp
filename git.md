# Commandes git pour ajouter un upstream, fetch depuis cet upstream et enfin merge le fetch

## Pour ajouter un "upstream": c'est le repos principal duquel on veut pouvoir faire des pull pour récupéré le projet à l'état actuel

- ici, upstream est juste un nom donné pour "identifier" le repos (c'est une convention, on aurait pu l'appeler "banane" ça marchait aussi)
- l'adresse github du repos en question, ici le pokedex de Mme tatoberres

```bash
git remote add upstream git@github.com:tatoberres/pokedexApp.git
```

## Pour "fetch": récupéré l'état actuel du projet

- ici on fetch "upstream" car c'est le nom qu'on lui a donné précédemment

```bash
git fetch upstream
```

## Enfin pour merge les modifications: appliquer les modifications récupérées avec fetch à notre dossier de projet

- là, on précise la branche de l'upstream puis notre branche sur laquelle on veut appliquer les modifications

```bash
git merge upstream/main main
```
