# Piano Lab — Progression / Passation

_Mise à jour : 5 septembre 2026_

Ce fichier sert de point de reprise pour toute nouvelle session de travail sur le Piano Lab. Il doit permettre de comprendre rapidement ce qui a été décidé, ce qui existe déjà, ce qui est encore du prototype et quelle est la prochaine étape logique.

## Vision actuelle

Piano Lab n'est plus pensé comme une collection de petits outils indépendants.

La direction validée est : **un jeu d'apprentissage du piano orienté autonomie**, avec une expérience inspirée des meilleures interfaces de jeu mobile : hiérarchie immédiate, mission principale évidente, progression visible, gratification, déblocages et retour régulier.

Référence mentale : **Clash Royale / Duolingo dans la logique d'interface et de progression**, sans copier leur identité graphique.

Le produit doit rester adulte, musical et premium.

Principe central :

> **L'écran donne une mission. Le vrai piano fait le reste.**

Philosophie Piano 3D :

> **Faire énormément de musique avec peu de connaissances.**

Mécanisme transversal : **Structure + Rythme + Harmonie**.

## Boucle produit validée

**MISSION → ACTION AU PIANO → FEEDBACK → XP / PROGRESSION → PROCHAINE MISSION**

Le hub ne doit plus demander : « parmi 8 outils, lequel veux-tu ouvrir ? »

Il doit dire :

> **Voici ta mission du jour. Joue maintenant.**

L'objectif est de réduire la flemme et la charge de décision au maximum.

## État actuel du hub

Fichier principal : `music-lab/index.html`

La home a été refondue dans une logique de jeu mobile :

- profil / niveau du joueur ;
- barre d'XP ;
- série de pratique ;
- mission du jour dominante ;
- un seul CTA principal « Jouer maintenant » ;
- 5 compétences affichées : Accords, Rythme, Oreille, Impro, Autonomie ;
- route verticale de progression ;
- étapes terminées / actuelle / verrouillées ;
- coffre de pratique ;
- défis rapides ;
- navigation mobile persistante.

Direction visuelle actuelle : violet nuit, cartes épaisses, boutons tactiles avec profondeur, couleurs par compétence, interface mobile-first.

Important : les chiffres de compétences actuellement visibles sur la home sont encore **des valeurs de prototype**. Ils doivent ensuite être alimentés par de vraies performances dans les exercices.

## Applications existantes

Les mini-apps sont dans `music-lab/apps/`.

### 1. 4 Accords Lab
Chemin : `apps/4-accords/`

Objectif : pratiquer, transposer et exploiter une progression de 4 accords.

Rôle : activation / pratique / accompagnement.

### 2. Quel accord vient ensuite ?
Chemin : `apps/quel-accord/`

Objectif : anticiper la suite d'une progression et développer l'intuition harmonique.

État particulier : l'app a déjà évolué vers un **test de 10 questions avec score et mini-diagnostic final**. Le score est conservé localement.

C'est actuellement l'un des outils les plus intéressants pour devenir un diagnostic d'acquisition.

### 3. Rhythm Gym
Chemin : `apps/rhythm-gym/`

Objectif : transformer des accords en musique avec des patterns rythmiques et un tempo guidé.

### 4. Impro Coach
Chemin : `apps/impro-coach/`

Objectif : improviser avec des contraintes simples, motifs, silences et notes cibles afin d'éviter de jouer une gamme au hasard.

### 5. Practice Coach
Chemin : `apps/practice-coach/`

Objectif : générer une séance de pratique selon le temps disponible et le blocage / objectif du jour.

### 6. Chord Flow
Chemin : `apps/chord-flow/`

Objectif : travailler renversements, notes communes, minimum de mouvement et voice leading.

### 7. Ear → Piano
Chemin : `apps/ear-piano/`

Objectif : écouter, chercher sur le vrai piano, comparer puis corriger.

### 8. Progression Transformer
Chemin : `apps/progression-transformer/`

Objectif : prendre la même grille et la transformer en plusieurs univers musicaux.

## Documents produit déjà présents

- `README.md` — mission, architecture et règles produit.
- `PRODUCT-ROADMAP.md` — priorités produit / business et pipeline.
- `DESIGN-SYSTEM.md` — design system + nouvelle direction game UX.
- `CONTENT-FUNNELS.md` — liens entre apps, hooks Reels / Shorts, YouTube, diagnostic et CTA business.
- `PROGRESSION.md` — ce fichier, point de reprise opérationnel.

## Décisions importantes déjà prises

### 1. Ne pas construire 30 apps maintenant

La prochaine valeur ne vient pas du nombre d'outils. Elle vient de l'intégration des outils existants dans **un système unique de progression**.

### 2. Les apps ne sont plus le niveau principal de navigation

Une app devient le moteur d'une ou plusieurs missions.

La personne doit voir une progression, pas un catalogue.

### 3. Une seule action dominante

À l'ouverture, le joueur doit savoir en moins de 2 secondes quoi faire.

La mission du jour est le CTA principal.

### 4. Les récompenses doivent être reliées à une vraie progression

XP, séries, niveaux, coffres et déblocages sont utiles seulement s'ils rendent visible une vraie pratique musicale.

Éviter les récompenses gratuites ou infantiles.

### 5. Les compétences doivent devenir de vraies données

Les scores Accords / Rythme / Oreille / Impro / Autonomie ne doivent pas rester décoratifs.

À terme, chaque mission doit produire un résultat qui alimente le profil.

### 6. Le vrai piano reste le terrain de jeu

Le logiciel donne les contraintes, le tempo, les questions, les feedbacks et le parcours. Il ne cherche pas à remplacer l'instrument.

### 7. Acquisition et business

Chaque app / mission doit avoir au moins un rôle clair :

- acquisition ;
- activation ;
- diagnostic ;
- accompagnement.

Si une nouvelle fonctionnalité ne sert aucun de ces rôles et n'améliore pas nettement l'apprentissage, elle est secondaire.

Le Piano Lab peut devenir une étape du funnel :

**Reel / YouTube → mission ou diagnostic → résultat → prise de conscience du blocage → demande d'accompagnement.**

## Ce qui est encore fragile / prototype

1. Les apps n'ont pas encore toutes la nouvelle identité visuelle « jeu premium » du hub.
2. Chaque app fonctionne encore largement comme une page indépendante.
3. L'XP global n'est pas réellement calculé depuis les apps.
4. La série de pratique n'est pas encore un système fiable de jours consécutifs.
5. Les compétences sont encore des valeurs d'affichage.
6. Les étapes de la route ne se débloquent pas réellement selon les résultats.
7. Il n'existe pas encore de profil cohérent partagé entre les apps.
8. Le stockage repose surtout sur `localStorage` et doit rester simple tant que le concept n'est pas validé.
9. Il n'y a pas encore de compte utilisateur ni de backend ; ce n'est pas une priorité immédiate.
10. Le design des apps est hétérogène : les premières ont encore l'ancien style sombre/minimaliste.

## Prochaine phase recommandée — priorité absolue

### A. Créer un état joueur partagé

Mettre en place un objet local unique, par exemple :

```js
{
  xp: 1280,
  level: 7,
  streak: 4,
  skills: {
    chords: 72,
    rhythm: 61,
    ear: 43,
    improv: 38,
    autonomy: 57
  },
  completedMissions: [],
  unlockedStages: [],
  lastPracticeDate: null
}
```

Toutes les apps doivent lire / écrire dans ce même état.

### B. Transformer chaque app en mission

Chaque mission doit avoir :

1. objectif clair ;
2. consigne ;
3. tentative ;
4. feedback ;
5. résultat ;
6. XP gagné ;
7. compétence mise à jour ;
8. retour au parcours / prochaine mission.

### C. Refaire en priorité 3 apps dans le nouveau design

Ordre recommandé :

1. `quel-accord` — parce qu'elle peut devenir le premier diagnostic fort ;
2. `rhythm-gym` — pour montrer que le produit couvre réellement la pratique physique au piano ;
3. `impro-coach` — très aligné avec la promesse de liberté / autonomie.

Une fois le pattern validé sur ces trois apps, l'appliquer aux autres.

### D. Faire fonctionner la route

La carte de progression doit devenir réelle :

- étape terminée si mission réussie ;
- prochaine étape débloquée ;
- Monde 2 verrouillé tant que les fondations nécessaires ne sont pas faites ;
- possibilité de rejouer une mission pour améliorer son score.

### E. Construire un vrai diagnostic transversal

Objectif à terme :

> **Accords 7/10 · Oreille 4/10 · Rythme 8/10 · Impro 3/10 → voici ce que tu devrais travailler cette semaine.**

C'est potentiellement une des fonctionnalités les plus puissantes du produit pour la pédagogie ET la qualification commerciale.

## Ce qu'il ne faut pas faire maintenant

- créer énormément de nouvelles apps juste pour remplir le hub ;
- ajouter un backend complexe avant d'avoir validé l'usage ;
- ajouter micro / reconnaissance polyphonique trop tôt ;
- ajouter du MIDI partout sans bénéfice pédagogique clair ;
- transformer le produit en plateforme scolaire avec beaucoup de menus ;
- afficher des monnaies ou scores qui n'ont aucune fonction ;
- copier graphiquement Clash Royale ;
- rendre le jeu plus intéressant que le vrai piano.

## Technologies actuelles

Phase actuelle :

- HTML ;
- CSS ;
- JavaScript vanilla ;
- client-side ;
- `localStorage` pour les premiers états persistants ;
- Web Audio uniquement quand utile.

Plus tard, seulement si la validation le justifie :

- Web MIDI pour vérifier les notes jouées ;
- backend / compte pour synchroniser la progression ;
- analytics d'usage ;
- éventuellement micro, avec prudence pour la polyphonie.

## URL publique

Hub prévu / publié via GitHub Pages :

`https://ludodulac.github.io/bizpiano/music-lab/`

## Business / positionnement à garder en tête

Le produit n'est pas une fin en soi. Le business principal reste l'accompagnement piano à distance.

Positionnement général : aider les adultes à comprendre ce qu'ils jouent pour devenir progressivement autonomes au piano.

Les accords sont un point d'entrée pédagogique fort ; l'autonomie est la destination.

Piano Lab doit donc :

- créer de petites victoires ;
- rendre les compétences visibles ;
- montrer à l'élève ses zones de blocage ;
- donner envie de progresser ;
- éventuellement révéler quand un accompagnement personnalisé accélérerait fortement sa progression.

## Consigne pour la prochaine session

Avant de modifier le produit :

1. lire ce fichier ;
2. lire `DESIGN-SYSTEM.md` ;
3. lire `PRODUCT-ROADMAP.md` ;
4. inspecter `index.html` et l'app concernée ;
5. ne pas repartir sur une nouvelle direction esthétique sans raison ;
6. privilégier l'intégration et la progression réelle plutôt que le nombre de fonctionnalités.

### Prochaine tâche idéale

**Mettre en place l'état joueur partagé + refondre `Quel accord vient ensuite ?` dans la nouvelle boucle de jeu, puis faire remonter son résultat réel sur la home.**

C'est le meilleur point de reprise.