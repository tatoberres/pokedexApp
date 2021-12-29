# Project Pokedex

## Commencer par le commencement

Pour contribuer au projet, deux façons:

1. Soit on demande les **droits de push**, et on peut faire des commits et push. Dans ce cas, AVANT de se mettre au travail, faire toujours un **git pull** pour récupérer tout ce qui aurait pu changer entretemps.

2. Soit on fait **Fork** du projet.

Dans les deux cas, après il faut cloner le projet avec **git clone**.

Faire un **npm install**

Et ne pas oublier le **.env** !

Pour installer la DB dans la VM, suivre instructions dans [sql.md](./sql.md)

## Git them all

Une fois le projet modifié dans la VM, il y a deux façons de soumettre ses contributions.

1. Faire un **git push** (uniquement possible si on a été ajouté comme contributeur).

2. Faire une PR (*Pull Request*). Un peu de doc : 

    1. Vidéos avec le processus: 
        - [en français](https://www.youtube.com/watch?v=U5xYWy6zJGY)
        - [en anglais USA](https://www.youtube.com/watch?v=oFYyTZwMyAg) 
        - [en anglais UK](https://www.youtube.com/watch?v=VkC7O-66n3U) 


## Et si je veux travailler en local ?

### D'abord, git

Si ce n'est déjà fait, [installer git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git).

Ensuite, [configurer l'utilisateur](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Param%C3%A9trage-%C3%A0-la-premi%C3%A8re-utilisation-de-Git) Github dans la machine:

```shell
$ git config --global user.name "nom-de-mon-compte"
$ git config --global user.email mail-associe-a-mon-compte@example.com
```

Créer une clé pour ne pas avoir à rentrer son password lors de chaque commit :
- [doc Git](https://git-scm.com/book/fr/v2/Git-sur-le-serveur-G%C3%A9n%C3%A9ration-des-cl%C3%A9s-publiques-SSH#s_generate_ssh_key)
- [doc GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)

### Ensuite la BDD

Le plus simple est d'installer [Postgres.app](https://postgresapp.com/downloads.html)

*Note: si l'installation est sur Mac, il faut après installer aussi [pgAdmin](https://www.pgadmin.org/download/).*

Une fois Postgres et pgAdmin ouvert, on devrait avoir cette fenêtre. Dérouler "Servers", dedans devrait se trouver un serveur "default" (nommé localhost o Postgres):

<img src="/public/images/screenshot-1.png"
        alt="Screenshot of Servers"
        width="90%">

Si aucun server se trouve dedans, le créer :

<img src="/public/images/screenshot-2.png"
        alt="Create a server"
        width="90%">

Écrire "localhost" dans le champ **Name** de l'onglet **General** et aussi dans le champ **Host name/adress** dans l'onglet **Connection** et puis c'est tout !

On peut maintenant créer un **OWNER** dans Login/Group Roles :

<img src="https://i.gyazo.com/836cf6847c0e3fc1edbb7dc48b39f4db.gif"
        alt="Create a user"
        width="90%">

Et on peut aussi créer une **DATABASE** avec le owner qu'on vient de créer !

On est prêts pour faire des *querys*, notamment celle qui nous permettrait d'importer toutes les données :

<img src="https://i.gyazo.com/4ce362f0d5f954562ac12a8876f8c0b0.gif"
        alt="Import a .SQL"
        width="90%">

### Et on est *go!* pour coder en local 😎
