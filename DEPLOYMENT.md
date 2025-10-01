# 🚀 Guide de Déploiement sur Render

## Prérequis

1. **Compte GitHub** : Votre code doit être sur GitHub
2. **Compte Render** : Créer un compte sur [render.com](https://render.com)
3. **Repository Git** : Votre projet doit être dans un repo Git

---

## 📋 Étape 1 : Préparer le Repository GitHub

### 1.1 Initialiser Git (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit - DigiDesk Website"
```

### 1.2 Créer un Repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **"New repository"**
3. Nom : `digidesk-website` (ou autre)
4. Visibilité : **Public** ou **Private**
5. Cliquez sur **"Create repository"**

### 1.3 Pousser le Code sur GitHub

```bash
git remote add origin https://github.com/VOTRE_USERNAME/digidesk-website.git
git branch -M main
git push -u origin main
```

⚠️ **IMPORTANT** : Vérifiez que le fichier `.env` n'est PAS poussé (il doit être dans `.gitignore`)

---

## 🌐 Étape 2 : Déployer sur Render

### 2.1 Créer un Nouveau Service

1. Connectez-vous sur [render.com](https://dashboard.render.com)
2. Cliquez sur **"New +"** → **"Static Site"**
3. Connectez votre compte GitHub si demandé

### 2.2 Configurer le Déploiement

**Repository** :
- Sélectionnez votre repository `digidesk-website`

**Configuration** :
- **Name** : `digidesk-website` (ou votre choix)
- **Branch** : `main`
- **Build Command** : `npm install && npm run build`
- **Publish Directory** : `dist`

### 2.3 Variables d'Environnement

Cliquez sur **"Advanced"** puis **"Add Environment Variable"** :

```
VITE_ADMIN_EMAIL=admin@digidesk.pro
VITE_ADMIN_PASSWORD=VotreMotDePasseSecurise123!
VITE_SESSION_TIMEOUT=1800000
```

⚠️ **Utilisez un mot de passe FORT pour la production !**

### 2.4 Déployer

1. Cliquez sur **"Create Static Site"**
2. Render va automatiquement :
   - Cloner votre repository
   - Installer les dépendances
   - Builder le projet
   - Déployer le site

⏱️ Le premier déploiement prend ~3-5 minutes

---

## ✅ Étape 3 : Vérification

### 3.1 URL du Site

Une fois déployé, vous aurez une URL comme :
```
https://digidesk-website.onrender.com
```

### 3.2 Tester le Site

1. **Page d'accueil** : `https://votre-site.onrender.com/`
2. **Admin** : `https://votre-site.onrender.com/admin`
3. **Services** : `https://votre-site.onrender.com/services`
4. **Contact** : `https://votre-site.onrender.com/contact`

### 3.3 Tester l'Admin

1. Allez sur `/admin`
2. Connectez-vous avec les credentials de `.env`
3. Vérifiez que tout fonctionne

---

## 🔄 Mises à Jour Automatiques

### Déploiement Automatique

Render redéploie automatiquement à chaque push sur `main` :

```bash
# Faire des modifications
git add .
git commit -m "Update: description des changements"
git push origin main
```

Render détectera le push et redéploiera automatiquement ! 🎉

---

## 🔧 Configuration Avancée

### Domaine Personnalisé

1. Dans Render Dashboard → Votre site → **"Settings"**
2. Section **"Custom Domain"**
3. Ajoutez votre domaine : `www.digidesk.pro`
4. Suivez les instructions DNS

### Headers de Sécurité

Créez un fichier `public/_headers` :

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Redirection HTTPS

Render force automatiquement HTTPS ✅

---

## 📊 Monitoring

### Logs

1. Dashboard Render → Votre site → **"Logs"**
2. Voir les logs de build et runtime

### Métriques

1. Dashboard → **"Metrics"**
2. Voir le trafic, les requêtes, etc.

---

## 🐛 Dépannage

### Erreur de Build

**Problème** : Build échoue

**Solutions** :
```bash
# Tester localement
npm install
npm run build

# Vérifier les logs Render
# Corriger les erreurs
# Push les corrections
```

### Page 404 sur Refresh

**Problème** : 404 quand on rafraîchit une page

**Solution** : Le fichier `public/_redirects` doit contenir :
```
/*    /index.html   200
```

### Variables d'Environnement

**Problème** : Admin ne fonctionne pas

**Solution** :
1. Vérifier les variables dans Render Dashboard
2. Les variables doivent commencer par `VITE_`
3. Redéployer après modification

---

## 💰 Coûts

### Plan Gratuit Render

✅ **Inclus** :
- 750 heures/mois
- Déploiements illimités
- SSL gratuit
- Domaine personnalisé gratuit

⚠️ **Limitations** :
- Le site peut "dormir" après 15 min d'inactivité
- Premier chargement peut être lent (cold start)

### Plan Payant (7$/mois)

✅ **Avantages** :
- Pas de "sleep"
- Toujours actif
- Plus rapide

---

## 🔐 Sécurité en Production

### Checklist

- [ ] Mot de passe admin FORT dans les variables d'environnement
- [ ] `.env` dans `.gitignore`
- [ ] HTTPS activé (automatique sur Render)
- [ ] Headers de sécurité configurés
- [ ] Domaine personnalisé avec SSL

### Recommandations

1. **Changez le mot de passe admin** régulièrement
2. **Surveillez les logs** pour détecter des tentatives d'intrusion
3. **Mettez à jour** les dépendances régulièrement
4. **Sauvegardez** les données importantes

---

## 📞 Support

### Render Support

- Documentation : [render.com/docs](https://render.com/docs)
- Community : [community.render.com](https://community.render.com)
- Status : [status.render.com](https://status.render.com)

### Problèmes Courants

**Site lent au premier chargement** :
- Normal sur plan gratuit (cold start)
- Solution : Plan payant ou ping régulier

**Build échoue** :
- Vérifier les logs
- Tester `npm run build` localement
- Vérifier les dépendances dans `package.json`

---

## ✨ Prochaines Étapes

Après le déploiement :

1. [ ] Configurer un domaine personnalisé
2. [ ] Ajouter Google Analytics
3. [ ] Configurer un backend API (si nécessaire)
4. [ ] Mettre en place un monitoring
5. [ ] Optimiser les performances

---

## 🎉 Félicitations !

Votre site DigiDesk est maintenant en ligne ! 🚀

URL de production : `https://votre-site.onrender.com`

**Partagez votre site et profitez ! 🎊**
