# Carnet de maths

Site de révision en français pour les équations, les inéquations et le second degré. Pour le consulter en local, ouvre `index.html` dans ton navigateur. Le site fonctionne directement en HTML, CSS et JavaScript.

## Publier sur GitHub Pages

1. Décompresse l’archive. Crée un dépôt GitHub, par exemple `carnet-de-maths`. Avec GitHub Free, choisis un dépôt public.
2. Ajoute le contenu de l’archive à la racine de la branche `main`. À côté du dossier `src/`, tu dois voir `index.html`, `.nojekyll` et ce fichier `README.md`.
3. Dans **Settings → Pages**, choisis **Deploy from a branch**, puis **main** et **/ (root)**. Clique sur **Save**.
4. Une fois le déploiement terminé, ouvre le lien affiché dans **Settings → Pages**. Tes prochains changements sur `main` mettront le site à jour.

[Documentation officielle de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Modifier le carnet

| Fichier | Contenu |
| --- | --- |
| `index.html` | Page d’entrée, en-tête et chargement des sources |
| `src/chapters.js` | Notions, formules, méthodes, exemples guidés et QCM |
| `src/revisions.js` | Cours, mémos complémentaires, exemples avancés, exercices rédigés, indices et corrigés |
| `src/app.js` | Thématiques, navigation, affichage des cartes et suivi des révisions |
| `src/art.js` | Dessins des icônes et illustrations mathématiques |
| `src/style.css` | Couleurs pastel, typographie et mise en page mobile |

Pour enrichir une notion existante, retrouve son identifiant dans les deux fichiers de contenu. Par exemple, les exercices sur la forme canonique se trouvent dans `src/revisions.js`, sous `canonique`, dans la liste `practice`. Chaque exercice contient son niveau, son énoncé, son indice, ses étapes de résolution et son résultat.
