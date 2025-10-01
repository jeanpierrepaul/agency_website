# ⚡ Déploiement Rapide - 5 Minutes

## 🚀 Étapes Rapides

### 1️⃣ Push sur GitHub (2 min)

```bash
# Si pas encore fait
git init
git add .
git commit -m "Ready for deployment"

# Créer un repo sur github.com puis :
git remote add origin https://github.com/VOTRE_USERNAME/digidesk-website.git
git branch -M main
git push -u origin main
```

### 2️⃣ Déployer sur Render (3 min)

1. **Aller sur** : https://dashboard.render.com
2. **Cliquer** : "New +" → "Static Site"
3. **Connecter** : Votre repository GitHub
4. **Configurer** :
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
5. **Variables d'environnement** (Advanced) :
   ```
   VITE_ADMIN_EMAIL=admin@digidesk.pro
   VITE_ADMIN_PASSWORD=VotreMotDePasseSecurise123!
   VITE_SESSION_TIMEOUT=1800000
   ```
6. **Cliquer** : "Create Static Site"

### 3️⃣ C'est Tout ! ✅

Votre site sera disponible sur : `https://votre-site.onrender.com`

---

## 🔄 Mises à Jour

Pour mettre à jour le site :

```bash
git add .
git commit -m "Update"
git push origin main
```

Render redéploie automatiquement ! 🎉

---

## ⚠️ Important

- ✅ Vérifiez que `.env` est dans `.gitignore`
- ✅ Utilisez un mot de passe FORT en production
- ✅ Testez le site après déploiement

---

## 📞 Besoin d'Aide ?

Consultez `DEPLOYMENT.md` pour le guide complet !
