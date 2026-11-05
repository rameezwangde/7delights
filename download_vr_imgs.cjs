const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/VR-Games-Banner.webp', dest: 'public/assets/vr-games-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/VR-Games.webp', dest: 'public/assets/vr-games-main.webp' },
  { url: 'https://www.7delights.in/assets/images/VR-Games-zone.webp', dest: 'public/assets/vr-games-zone.webp' },
  { url: 'https://www.7delights.in/assets/images/vr-games-2.webp', dest: 'public/assets/vr-games-2.webp' },
  { url: 'https://www.7delights.in/assets/images/vr-games-3.webp', dest: 'public/assets/vr-games-3.webp' },
  { url: 'https://www.7delights.in/assets/images/vr-games-4.webp', dest: 'public/assets/vr-games-4.webp' }
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

