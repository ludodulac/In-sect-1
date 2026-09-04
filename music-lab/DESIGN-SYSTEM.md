# Piano Lab — Design System & Game UX

_Mise à jour : 4 septembre 2026_

## Nouvelle intention
Le premier design était élégant mais trop proche d'un catalogue de logiciels : il demandait à l'utilisateur de choisir avant de lui donner envie d'agir.

La nouvelle référence mentale est **une interface de jeu mobile premium appliquée à la pratique musicale** : hiérarchie immédiate, mission principale évidente, progression visible, gratification, déblocages et retour quotidien.

Il ne s'agit pas de copier Clash Royale ou Duolingo visuellement. On emprunte leurs principes d'interaction et de progression pour créer une identité Piano Lab originale.

## Discipline utilisée
Le produit croise :
- UX design — réduire les décisions et rendre l'action évidente ;
- UI design — hiérarchie, lisibilité, tactilité ;
- interaction design — feedback immédiat après chaque action ;
- game design — missions, niveaux, progression, difficulté ;
- behavioral design — donner une raison saine de revenir ;
- learning design — chaque récompense correspond à une vraie compétence musicale.

## Principe n°1 : une action dominante
La home ne dit plus « voici 8 outils ».

Elle dit :

> **Voici ta mission du jour. Joue maintenant.**

Un seul bouton principal doit dominer l'écran. Les autres exercices sont secondaires.

## Boucle centrale
**MISSION → ACTION AU PIANO → FEEDBACK → XP / PROGRESSION → PROCHAINE MISSION**

La récompense ne doit jamais remplacer la musique. Elle rend visible l'effort et la continuité.

## Architecture de la home
1. Identité / niveau du joueur.
2. XP + série de pratique.
3. Mission du jour très dominante.
4. Compétences du pianiste autonome.
5. Route de progression avec étapes terminées, actuelle et verrouillées.
6. Coffre/récompense de pratique.
7. Défis rapides.
8. Navigation mobile persistante.

## Compétences visibles
Le profil doit progressivement agréger de vraies données issues des apps :
- Accords ;
- Rythme ;
- Oreille ;
- Improvisation ;
- Autonomie.

À terme, ces scores ne doivent jamais être décoratifs : ils doivent provenir d'exercices ou diagnostics réels.

## Progression
La carte remplace le catalogue.

Un exercice devient une **étape**. Une app peut être réutilisée dans plusieurs étapes avec une difficulté différente.

Exemple Monde 1 — Fondations :
1. 4 accords ;
2. Le groove ;
3. Intuition harmonique ;
4. Chord Flow ;
5. Oreille → Piano ;
6. Transformer ;
7. Improviser ;
8. déblocage Monde 2.

## Récompenses
Utiliser avec modération :
- XP = volume de pratique / progression ;
- série = continuité de pratique ;
- coffre = récompense pédagogique ou nouveau défi ;
- niveau = étape de développement ;
- déblocage = accès à une nouvelle difficulté ou compétence.

Éviter les monnaies artificielles sans usage réel. Si une monnaie est affichée en prototype, elle devra être supprimée ou recevoir une fonction claire avant production.

## Direction visuelle
Plus tactile, plus profonde et plus énergique que la V1 :
- fond violet nuit / bleu nuit ;
- surfaces épaisses ;
- boutons avec profondeur physique ;
- cartes arrondies ;
- couleurs par compétence ;
- grandes zones de tap ;
- icônes très simples ;
- progression verticale lisible au pouce ;
- effets de pression plutôt que simples hover desktop.

Le résultat doit rester adulte : **jeu premium musical**, pas interface pour enfant.

## Motion
Le mouvement sert le feedback :
- bouton qui s'enfonce au tap ;
- XP qui progresse après une mission ;
- étape qui se déverrouille ;
- réponse correcte avec impulsion courte ;
- coffre qui s'ouvre après une vraie action.

Éviter les animations permanentes qui volent l'attention au piano.

## Règles UX
- action principale identifiable en moins de 2 secondes ;
- première mission jouable en moins de 5 secondes ;
- aucun choix complexe avant la première action ;
- mobile-first ;
- cibles tactiles >= 44 px ;
- texte court ;
- une mission = une compétence claire ;
- la difficulté augmente par étapes ;
- le résultat d'une mission doit modifier un état visible du profil ;
- les scores doivent devenir réels dès que possible ;
- l'écran donne la mission, le vrai piano reste le terrain de jeu.

## Ton
Court, énergique, adulte :
- « À toi de jouer. »
- « Mission du jour »
- « Joue d'abord. Vérifie ensuite. »
- « Débloque la suite. »
- « Garde le groove. »

Éviter la surenchère enfantine ou les félicitations creuses.

## Prochaine étape design
Refondre progressivement les apps elles-mêmes pour qu'elles utilisent la même boucle : **mission → tentative → feedback → résultat → progression** et renvoient au hub avec un état mis à jour.