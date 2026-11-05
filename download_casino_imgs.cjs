const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/Casino-Games-banner.webp', dest: 'public/assets/casino-games-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/casino-lucky-7.webp', dest: 'public/assets/casino-lucky-7.webp' },
  { url: 'https://www.7delights.in/assets/images/casino-black-jack.webp', dest: 'public/assets/casino-black-jack.webp' },
  { url: 'https://www.7delights.in/assets/images/casino-roulette.webp', dest: 'public/assets/casino-roulette.webp' },
  { url: 'https://www.7delights.in/assets/images/roulette.webp', dest: 'public/assets/roulette.webp' }
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

