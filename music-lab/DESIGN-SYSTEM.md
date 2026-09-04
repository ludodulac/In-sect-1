# Piano Lab — Design System

## Intention
Le produit doit ressembler à un **petit instrument numérique premium pour adulte**, pas à une plateforme scolaire ni à un jeu pour enfant.

Mots-clés : sobre, musical, précis, calme, respirant, tactile, élégant.

## Couleurs
Base :
- fond : `#090909`
- panneau : `#111111`
- surface secondaire : `#171717` à `#181818`
- ligne : `#292929` à `#303030`
- texte : `#f4f0e8`
- texte secondaire : `#9f9991`

Accent principal du hub : `#d8ff72`.

Chaque app peut avoir un accent secondaire propre pour aider à identifier la compétence :
- harmonie / progression : vert acide `#d8ff72`
- rythme : lavande `#d7c2ff`
- improvisation : ambre `#ffcf70`
- autonomie / pratique : cyan `#8fe7ff`
- voice leading : vert doux `#b6ffcf`
- oreille : rose `#ff9fd4`

## Typographie
Police système / Inter si disponible.

Hiérarchie :
- hero très grand, graisse 850–900, tracking négatif ;
- titres de cartes 20–24 px ;
- texte courant 13–17 px ;
- labels / kicker 10–11 px uppercase avec tracking large.

Éviter :
- trop de tailles différentes ;
- paragraphes trop larges ;
- capitales partout ;
- effets “gaming” agressifs.

## Formes
- grandes cartes : rayon 22–28 px ;
- boutons : 14 px ;
- chips : pilule ;
- bordures 1 px discrètes ;
- pas d'ombres lourdes ;
- contraste obtenu surtout par surface + espace + accent.

## Motion
Micro-interactions seulement :
- hover `translateY(-2px)` ;
- transitions 150–300 ms ;
- beat/réponse pouvant pulser brièvement ;
- éviter les animations décoratives permanentes.

Le mouvement doit signaler un état musical ou une action.

## Structure d'une mini-app
1. Navigation minimale : Piano Lab + retour.
2. Kicker : compétence / type d'exercice.
3. Titre très clair.
4. Une phrase expliquant le bénéfice.
5. Le laboratoire / exercice principal.
6. Une seule consigne pédagogique importante.
7. Optionnel : prochaine app logique.

## Règles UX
- action possible sans compte ;
- première interaction en moins de 10 secondes ;
- les réglages avancés restent secondaires ;
- sur mobile, aucune action principale ne doit nécessiter un scroll horizontal ;
- boutons tactiles minimum ~44 px de hauteur quand possible ;
- l'app doit rester compréhensible sans son, sauf exercice explicitement auditif ;
- la réponse ne doit pas être révélée avant que l'élève ait eu le temps d'essayer.

## Ton rédactionnel
Court, adulte, direct, non scolaire.

Préférer :
- « Joue d'abord ta réponse. Vérifie ensuite. »
- « Garde le même rythme pendant quatre tours. »
- « Cherche le mouvement le plus court. »

Éviter :
- « Bravo champion ! »
- systèmes de points infantiles ;
- sur-explication théorique dans l'interface.

## Philosophie
L'interface ne doit jamais devenir plus intéressante que le piano.

> L'écran donne une mission. Le piano fait le reste.