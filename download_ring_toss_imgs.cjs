const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://www.7delights.in/assets/images/ring-games-banner.webp', dest: 'public/assets/ring-games-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/Ring-Game-scaled.webp', dest: 'public/assets/ring-game-main.webp' },
  { url: 'https://www.7delights.in/assets/images/Ring-game-with-gifts.webp', dest: 'public/assets/ring-game-gifts.webp' },
  { url: 'https://www.7delights.in/assets/images/ring-games-2.webp', dest: 'public/assets/ring-games-2.webp' },
  { url: 'https://www.7delights.in/assets/images/ring-games-3.webp', dest: 'public/assets/ring-games-3.webp' }
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

