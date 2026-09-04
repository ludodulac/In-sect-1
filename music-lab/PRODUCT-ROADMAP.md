# Piano Lab — Product Roadmap

_Mise à jour : 4 septembre 2026_

## Vision
Piano Lab n'est pas une collection de gadgets musicaux. C'est une couche pratique entre le contenu gratuit et l'accompagnement : de petits logiciels qui transforment une idée pédagogique en action immédiate au vrai piano.

Promesse produit :

> Une petite idée musicale → un exercice concret → quelques minutes au piano → une compétence plus autonome.

## Rôle business
Les apps doivent servir au moins un de ces quatre rôles :
1. **Acquisition** — donner une raison forte de cliquer depuis un Reel ou une vidéo YouTube.
2. **Activation** — faire réellement pratiquer au lieu de consommer du contenu passivement.
3. **Diagnostic** — faire prendre conscience d'un manque précis : oreille, harmonie, rythme, méthode de travail.
4. **Accompagnement** — devenir des exercices réutilisables dans le coaching 3 mois.

Une app qui ne sert aucun de ces rôles est probablement une distraction.

## Outils disponibles
### 01 — 4 Accords Lab
Compétence : enchaîner et exploiter une progression.
Rôle : activation + accompagnement.

### 02 — Quel accord vient ensuite ?
Compétence : anticipation harmonique.
Rôle : acquisition + diagnostic.
Priorité business : **très haute**.

### 03 — Rhythm Gym
Compétence : transformer des accords en accompagnement musical.
Rôle : activation + accompagnement.

### 04 — Impro Coach
Compétence : improviser avec intention, motifs et contraintes.
Rôle : acquisition + activation.

### 05 — Practice Coach
Compétence : savoir quoi travailler avec un temps limité.
Rôle : diagnostic + accompagnement.
Priorité business : **très haute**, car directement reliée à la promesse d'autonomie.

### 06 — Chord Flow
Compétence : renversements, notes communes et voice leading.
Rôle : expertise + accompagnement.

### 07 — Ear → Piano
Compétence : transformer l'écoute en décisions sur le clavier.
Rôle : diagnostic + accompagnement.

### 08 — Progression Transformer
Compétence : créer plusieurs musiques avec la même matière harmonique.
Rôle : acquisition + activation + démonstration de la philosophie « beaucoup de musique avec peu ».

## Priorité de développement suivante
### A. Rendre les 8 prototypes plus profonds
Avant de multiplier les apps, améliorer :
- sauvegarde locale des scores et séries ;
- progression en niveaux ;
- onboarding en une phrase ;
- bouton « recommencer » clair ;
- partage d'un résultat ;
- pages mobile réellement confortables ;
- instrumentation analytics si nécessaire ;
- liens contextuels vers vidéos YouTube ;
- CTA diagnostic uniquement aux moments pertinents.

### B. Construire un système de profils / parcours léger
Sans compte utilisateur au départ : `localStorage` suffit pour tester.
Données utiles :
- apps utilisées ;
- niveau atteint ;
- score oreille/harmonie ;
- temps de pratique déclaré ;
- blocage principal choisi ;
- dernière séance Practice Coach.

Ces données peuvent ensuite alimenter une page « Mon Piano Lab ».

### C. Applications suivantes
#### Song Decoder
Entrée : une chanson / grille.
Sortie : structure + rythme + harmonie + missions de pratique.

#### One Progression — 10 Levels
Même progression, difficulté progressive : accords → rythme → renversements → basse → mélodie → oreille → transposition → impro.
Très cohérent avec la promesse d'autonomie.

#### Left Hand Gym
Patterns de main gauche classés par difficulté et fonction musicale.
Potentiel SEO/YouTube élevé car la main gauche est déjà un sujet fort de la chaîne.

#### Melody → Chords
Une mini-mélodie est donnée ; l'élève doit proposer une harmonie puis comparer plusieurs solutions.

#### Chord Color Lab
Même accord enrichi progressivement : triade, 7e, 9e, sus, add9, renversements.
Objectif : couleur avant théorie.

## Le funnel idéal avec une app
Exemple « Quel accord vient ensuite ? » :

Reel : « Tu connais tes accords, mais peux-tu deviner lequel vient ensuite ? »
→ lien vers l'app gratuite
→ 10 questions
→ score / profil
→ mini-explication personnalisée
→ « ton problème n'est pas de connaître plus d'accords ; c'est de mieux entendre leurs fonctions »
→ vidéo YouTube dédiée
→ CTA vers diagnostic si le blocage est plus large.

## Ce qu'il ne faut pas construire trop tôt
- reconnaissance polyphonique au microphone ;
- système de compte complexe ;
- abonnement logiciel indépendant ;
- bibliothèque énorme de partitions ;
- clone de Simply Piano / Flowkey ;
- gamification enfantine ;
- moteur IA coûteux sans usage validé ;
- MIDI obligatoire pour une app qui fonctionne très bien sans.

## North Star
L'indicateur le plus important n'est pas le nombre d'apps. C'est :

> Combien de personnes les outils font-ils réellement jouer, comprendre leur blocage et avancer vers davantage d'autonomie ?

Pour le business, mesurer ensuite : visites → démarrages → exercices terminés → clics vers contenu → formulaires → appels → ventes.