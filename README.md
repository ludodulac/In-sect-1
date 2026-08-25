# BizPiano — Bibliothèque stratégique Piano 3D

Ce dépôt est le cerveau externe du projet Piano 3D. Il stocke les décisions, analyses, offres, hooks, idées de contenus, avatars clients, plans d'action et comptes rendus de travail.

Le site est conçu pour être consulté facilement, enrichi au fil des conversations ChatGPT et imprimé proprement en PDF depuis le navigateur.

## Principes
- Un sujet = une fiche.
- Les décisions validées sont distinguées des hypothèses à tester.
- Le dossier `compte-rendu/` sert de contexte de reprise pour les futures conversations.
- Les contenus marketing sont organisés en bibliothèques réutilisables.
- La mise en page `print.css` est pensée pour imprimer lisiblement sans gaspiller de papier.

## Structure
- `index.html` : interface principale.
- `content/` : bibliothèque de fiches.
- `compte-rendu/` : contexte, état du projet, décisions et prochaines actions.
- `assets/` : style et scripts.

## Utilisation avec ChatGPT
Dans une future conversation, demander par exemple :
> Lis le dépôt GitHub `ludodulac/bizpiano`, en particulier `compte-rendu/ETAT-DU-PROJET.md`, puis mets à jour la fiche concernée avec ce qu'on vient de décider.

Le fichier `compte-rendu/ETAT-DU-PROJET.md` doit rester court et à jour : il sert de point d'entrée au projet.
