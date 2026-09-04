# Piano Lab — espace applications

_Mise à jour : 4 septembre 2026_

Cet espace contient les mini-logiciels musicaux publics de BizPiano / Piano 3D.

## Mission
Construire des outils courts à utiliser devant le vrai piano pour développer des compétences transférables : accords, rythme, oreille, accompagnement, improvisation, compréhension et autonomie.

Principe produit : **faire énormément de musique avec peu de connaissances**.

Formule :

> une petite idée musicale → un exercice concret → quelques minutes au piano → une compétence plus autonome.

## Architecture
- `index.html` : hub public des applications.
- `apps/` : une sous-arborescence par mini-app.
- `PRODUCT-ROADMAP.md` : stratégie produit, priorités et prochaines applications.

Chaque application est une petite web-app indépendante accessible directement par URL et doit fonctionner sur ordinateur, tablette et mobile sans installation.

## Applications existantes
1. `apps/4-accords/` — **4 Accords Lab** : pratiquer et transposer une progression.
2. `apps/quel-accord/` — **Quel accord vient ensuite ?** : anticipation harmonique et diagnostic.
3. `apps/rhythm-gym/` — **Rhythm Gym** : patterns rythmiques et accompagnement.
4. `apps/impro-coach/` — **Impro Coach** : improviser avec contraintes, motifs et silences.
5. `apps/practice-coach/` — **Practice Coach** : générer une séance selon le temps et l'objectif.
6. `apps/chord-flow/` — **Chord Flow** : renversements, notes communes et voice leading.
7. `apps/ear-piano/` — **Ear → Piano** : écouter, chercher, comparer, corriger.
8. `apps/progression-transformer/` — **Progression Transformer** : transformer la même grille en plusieurs univers.

## Règles produit
1. Compréhensible en moins de 5 secondes.
2. Une session utile doit pouvoir durer 2 à 15 minutes.
3. L'écran sert le piano réel, il ne le remplace pas.
4. Une app = une compétence ou une transformation claire.
5. Une action physique au piano doit arriver rapidement.
6. Éviter les outils génériques déjà très répandus si BizPiano n'apporte pas un angle pédagogique distinctif.
7. Commencer sans micro/MIDI quand l'idée peut être validée plus simplement.
8. Le MIDI pourra être ajouté ensuite quand il augmente réellement la valeur pédagogique.
9. Chaque outil doit pouvoir être relié à une vidéo YouTube, un Reel, un diagnostic ou l'accompagnement.
10. Avant d'ajouter une app, demander quel rôle elle joue : acquisition, activation, diagnostic ou accompagnement.

## Direction pédagogique
Le parcours global est :

**JOUER → ENTENDRE → COMPRENDRE → TRANSFORMER → SAVOIR TRAVAILLER SEUL**

Piano 3D reste le mécanisme transversal : **Structure + Rythme + Harmonie**.

## Direction visuelle
Premium, sobre, musicale et adulte : fond sombre, typographie forte, accent lumineux, peu d'éléments, grandes zones respirantes. Éviter l'esthétique « application éducative pour enfant ».

Le produit doit donner l'impression d'un petit instrument numérique / laboratoire, pas d'une plateforme scolaire.

## Technologie — phase actuelle
- HTML / CSS / JavaScript sans framework ;
- fonctionnement client-side ;
- Web Audio seulement lorsque nécessaire ;
- `localStorage` recommandé pour la prochaine phase de progression personnelle ;
- Web MIDI plus tard pour les exercices qui gagnent réellement à vérifier les notes jouées ;
- microphone/polyphonie seulement après validation de l'usage.

## Publication
Le dépôt possède déjà GitHub Pages. `music-lab/` est publié comme sous-espace du site BizPiano existant ; il n'a pas besoin d'un workflow Pages séparé.

URL du hub : `https://ludodulac.github.io/bizpiano/music-lab/`

## Prochaine phase
Ne pas chercher immédiatement 30 nouvelles apps. Approfondir les outils existants : niveaux, progression locale, scores, onboarding, résultats partageables, liens contextuels vers le contenu, mesure d'usage et moments de CTA cohérents.