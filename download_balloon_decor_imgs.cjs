const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/service7.webp', dest: 'public/assets/balloon-decor-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/Balloon-Decoration.webp', dest: 'public/assets/balloon-decoration-card.webp' },
  { url: 'https://www.7delights.in/assets/images/Theme-Decoration.webp', dest: 'public/assets/theme-decoration-card.webp' },
  { url: 'https://www.7delights.in/assets/images/Birthday-Decorations.webp', dest: 'public/assets/birthday-decorations-card.webp' },
  { url: 'https://www.7delights.in/assets/images/Helium-Balloons.webp', dest: 'public/assets/helium-balloons-card.webp' },
  { url: 'https://www.7delights.in/assets/images/birthday-space-theme-service_sec2.webp', dest: 'public/assets/birthday-space-theme.webp' },
  { url: 'https://www.7delights.in/assets/images/birthday-theme-decoration-service_sec4.webp', dest: 'public/assets/birthday-theme-decor-sec4.webp' }
];

async function download(item) {
  return new Promise((resolve) => {
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(item.dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const sz = fs.statSync(item.dest).size;
          console.log(`Saved ${item.dest} (${sz} bytes)`);
          resolve(true);
        });
      } else {
        console.log(`Failed ${item.url} -> status ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (e) => {
      console.log(`Error ${item.url}: ${e.message}`);
      resolve(false);
    });
  });
}

async function run() {
  for (const img of images) {
    await download(img);
  }
}
run();

