# Notes App

## Introduction
Notes App est une application web moderne et intuitive permettant aux utilisateurs de gérer efficacement leurs notes personnelles ou professionnelles. L'application est construite avec la stack MERN (MongoDB, Express.js, React.js, Node.js).

---

## Fonctionnalités
- **Gestion des Notes** : Ajouter, modifier, supprimer des notes.
- **Organisation** : Catégoriser les notes et marquer celles qui sont importantes.
- **Recherche** : Trouver rapidement des notes avec des mots-clés ou des filtres.
- **Authentification** : Inscription et connexion sécurisées.
- **Interface Responsive** : Compatible avec les ordinateurs, tablettes et smartphones.

---

## Technologies Utilisées
- **Frontend** : React.js, React Router, CSS (ou Tailwind CSS).
- **Backend** : Node.js, Express.js.
- **Base de Données** : MongoDB (hébergé sur MongoDB Atlas).
- **Gestion des Dépendances** : npm.
- **Outils** : Postman pour les tests API, Git pour le contrôle de version.

---

## Installation et Lancement

### Prérequis
- Node.js installé sur votre machine.
- Un compte MongoDB Atlas (ou une instance locale de MongoDB).

### Étapes

#### 1. Cloner le dépôt
```bash
git clone https://github.com/Choubi-Mohammed/Notes-app-v2.git
cd notes-app
```

#### 2. Installer les dépendances
**Backend :**
```bash
cd backend
npm install
```
**Frontend :**
```bash
cd ../frontend
npm install
```

#### 3. Configurer les variables d'environnement
Créer un fichier `.env` dans le dossier `backend` avec les informations suivantes :
```
MONGO_URI=<URL_DE_VOTRE_BASE_DE_DONNÉES>
JWT_SECRET=<VOTRE_CLÉ_SECRÈTE>
PORT=5000
```

#### 4. Lancer l'application
**Backend :**
```bash
cd backend
npm start
```
**Frontend :**
```bash
cd ../frontend
npm start
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000).

---

## Structure du Projet

### Backend (Node.js/Express.js)
- **Routes API** :
  - `GET /api/notes` : Récupérer toutes les notes.
  - `POST /api/notes` : Ajouter une nouvelle note.
  - `PUT /api/notes/:id` : Modifier une note existante.
  - `DELETE /api/notes/:id` : Supprimer une note.
- **Middleware** : Gestion des erreurs et authentification JWT.

### Frontend (React.js)
- **Composants Principaux** :
  - `NoteList` : Affiche la liste des notes.
  - `NoteForm` : Formulaire pour ajouter ou modifier une note.
  - `FilterBar` : Barre de recherche et filtres.
- **Navigation** : React Router pour gérer les routes (Accueil, Connexion, Inscription).

---

## Contribuer
1. Fork le projet.
2. Créez une branche pour vos modifications :
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```
3. Committez vos changements :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Poussez la branche :
   ```bash
   git push origin feature/nouvelle-fonctionnalite
   ```
5. Ouvrez une Pull Request.

---

## Auteurs
- **Choubi Mohammed**

---

## Licence
Ce projet est sous licence [MIT](LICENSE).
