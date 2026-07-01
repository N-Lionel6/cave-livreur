# Cave Manager Livreur — Guide d'installation

## Méthode 1 : GitHub Pages (HTTPS gratuit — recommandé)

### Étapes :
1. Créez un compte gratuit sur https://github.com
2. Cliquez "New repository" → nommez-le `cave-livreur` → Public → Create
3. Dans le repo, cliquez "Add file" → "Upload files" → glissez les 5 fichiers du ZIP
4. Allez dans Settings → Pages → Source : "main" branch → Save
5. Votre lien sera : `https://VOTRE_NOM.github.io/cave-livreur/livreur.html`

### Installer sur Android (Chrome) :
1. Ouvrez le lien dans Chrome
2. Menu ⋮ → "Ajouter à l'écran d'accueil" ou bannière "Installer l'application"
3. Confirmer → l'icône apparaît sur l'écran d'accueil

### Installer sur iPhone (Safari) :
1. Ouvrez le lien dans Safari (PAS Chrome sur iOS)
2. Bouton Partager ↑ → "Sur l'écran d'accueil"
3. Confirmer → icône installée

---

## Méthode 2 : ngrok (test rapide, temporaire)

### Prérequis : avoir Cave Manager bureau lancé sur un PC

1. Téléchargez ngrok : https://ngrok.com/download
2. Copiez les fichiers PWA dans un dossier `livreur/`
3. Dans un terminal :
   ```
   cd livreur
   python -m http.server 8080
   ```
4. Dans un autre terminal :
   ```
   ngrok http 8080
   ```
5. Ngrok affiche un lien HTTPS du type `https://abc123.ngrok.io`
6. Partagez ce lien via WhatsApp au livreur → il ouvre dans Chrome → installe

> ⚠ Le lien ngrok gratuit change à chaque redémarrage.
> Pour un lien fixe, utilisez GitHub Pages (méthode 1).

---

## Méthode 3 : APK Android (fichier .apk à installer directement)

### Option A — Via WebIntoApp (sans code, gratuit)
1. Mettez d'abord les fichiers en ligne (GitHub Pages)
2. Allez sur https://www.webintoapp.com
3. Entrez l'URL GitHub Pages → Generate APK
4. Téléchargez le .apk → envoyez-le au livreur via WhatsApp
5. Le livreur active "Sources inconnues" dans ses paramètres et installe

### Option B — Via CapacitorJS (développeur)
```bash
npm install -g @capacitor/cli
npx cap init CaveLivreur com.cave.livreur
npx cap add android
# Copier livreur.html dans www/
npx cap sync
npx cap open android
# Compiler via Android Studio
```

---

## Imprimante Bluetooth thermique — Compatibilité

| Marque | Modèle | Compatible |
|--------|--------|-----------|
| Goojprt | PT-210, PT-280 | ✅ |
| Peripage | A6, A9 | ✅ |
| Munbyn | ITPP130 | ✅ |
| Xprinter | XP-365B | ✅ |
| Rongta | RPP02N | ✅ |
| Générique | 58mm BT | ✅ (la plupart) |

> Assurez-vous que l'imprimante est **appairée** dans les paramètres Bluetooth du téléphone avant de connecter depuis l'app.
> 
> Web Bluetooth fonctionne sur **Android + Chrome uniquement**.
> Sur iPhone, utilisez le mode "Impression Écran/PDF" (aperçu 58mm).

---

## Synchronisation avec Cave Manager bureau

1. À la fin de la journée, le livreur exporte ses ventes :
   - Profil → Données → **Exporter les ventes (JSON)**
   
2. Il envoie le fichier JSON par WhatsApp / USB au bureau

3. Le bureau importe dans Cave Manager (fonctionnalité à venir)

Pour mettre à jour les produits sur le téléphone :
- Profil → Données → **Importer produits depuis Cave Manager**
- Sélectionner le fichier JSON exporté depuis Cave Manager bureau
