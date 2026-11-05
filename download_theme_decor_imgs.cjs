const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/theme-decorations-banner.webp', dest: 'public/assets/theme-decorations-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/theme-decorations.webp', dest: 'public/assets/theme-decorations-main.webp' },
  { url: 'https://www.7delights.in/assets/images/butterfly-theme-decoration.webp', dest: 'public/assets/butterfly-theme-decor.webp' },
  { url: 'https://www.7delights.in/assets/images/cocomelon-theme-decoration.webp', dest: 'public/assets/cocomelon-theme-decor.webp' },
  { url: 'https://www.7delights.in/assets/images/football-theme-decorations.webp', dest: 'public/assets/football-theme-decor.webp' },
  { url: 'https://www.7delights.in/assets/images/Lightning-McQueen-Car-theme-decoration.webp', dest: 'public/assets/lightning-mcqueen-decor.webp' },
  { url: 'https://www.7delights.in/assets/images/theme-decorations-1.webp', dest: 'public/assets/theme-decorations-1.webp' },
  { url: 'https://www.7delights.in/assets/images/theme-decorations-2.webp', dest: 'public/assets/theme-decorations-2.webp' },
  { url: 'https://www.7delights.in/assets/images/theme-decorations-3.webp', dest: 'public/assets/theme-decorations-3.webp' },
  { url: 'https://www.7delights.in/assets/images/theme-decorations-4.webp', dest: 'public/assets/theme-decorations-4.webp' }
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

