# Piano Lab — espace applications

Cet espace contient les mini-logiciels musicaux publics de BizPiano / Piano 3D.

## Rôle
Construire des outils courts à utiliser devant le vrai piano pour développer des compétences transférables : accords, rythme, oreille, accompagnement, improvisation, compréhension et autonomie.

Principe produit : **faire énormément de musique avec peu de connaissances**.

## Architecture
- `index.html` : hub public des applications.
- `apps/` : une sous-arborescence par mini-app.
- `apps/4-accords/` : premier prototype fonctionnel.

Chaque application doit être accessible directement par URL et fonctionner sur ordinateur, tablette et mobile sans installation.

## Règles produit
1. Compréhensible en moins de 5 secondes.
2. Une session utile doit pouvoir durer 2 à 10 minutes.
3. L'écran sert le piano réel, il ne le remplace pas.
4. Une app = une compétence ou une transformation claire.
5. Éviter les outils génériques déjà très répandus si BizPiano n'apporte pas un angle pédagogique distinctif.
6. Commencer sans micro/MIDI quand l'idée peut être validée plus simplement.
7. Le MIDI pourra être ajouté ensuite pour vérifier ce que joue l'élève.
8. Chaque outil doit pouvoir être relié à une vidéo YouTube, un Reel, un diagnostic ou l'accompagnement.

## Pipeline d'applications envisagé
- 4 Accords Lab — exploiter profondément une seule progression.
- Chord Flow — renversements et minimum de mouvement.
- Quel accord vient ensuite ? — prédiction harmonique + oreille.
- Rhythm Gym — patterns d'accompagnement.
- Ear → Piano — écouter puis reproduire sur le vrai piano.
- Impro Coach — improviser avec contraintes, motifs et notes cibles.
- Progression Transformer — transformer la même grille en plusieurs styles.
- Practice Coach — générer une séance courte selon le temps et le blocage.
- Song Decoder — structure + rythme + harmonie d'un morceau.

## Direction visuelle
Premium, sobre, musicale et adulte : fond sombre, typographie forte, accent lumineux, peu d'éléments, grandes zones respirantes. Éviter l'esthétique “application éducative pour enfant”.

## Déploiement
Le workflow GitHub Pages publie le contenu de `music-lab/`. Toute modification poussée sur `main` déclenche une nouvelle publication.
