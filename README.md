# Abusing Center (abusingcenter.com)

Static marketing landing page for Abusing Center – NBA 2K26 packet cheat. Deployed at `abusingcenter.com`.

## Local usage

Open `index.html` directly in your browser or serve the folder with any simple HTTP server (e.g. `npx serve .`) to test locally.

## Deploying to GitHub Pages

1. Create a new GitHub repository (public or private) and initialize it with no files.
2. On your PC, from the `AbusingCenter` folder:
   - `git init`
   - `git add .`
   - `git commit -m "Initial Secret 2K landing"`
   - `git branch -M main`
   - `git remote add origin git@github.com:<your-username>/<repo-name>.git`
   - `git push -u origin main`
3. In GitHub, open **Settings → Pages**:
   - Under **Source**, choose **Deploy from a branch**.
   - Select branch `main` and folder `/ (root)`.
   - Save. GitHub will build and give you a `https://<username>.github.io/<repo>/` URL.

## Connecting abusingcenter.com

1. In **Settings → Pages → Custom domain**, enter `abusingcenter.com` and save.
2. In your domain registrar's DNS settings:
   - Add `A` records pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - Add a `CNAME` for `www` pointing to `<username>.github.io`.
3. Wait for DNS to propagate (can take up to a few hours). GitHub should automatically provision HTTPS.

