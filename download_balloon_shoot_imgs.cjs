const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/balloon-shooting-banner.webp', dest: 'public/assets/balloon-shooting-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/Balloon-shooting-scaled.webp', dest: 'public/assets/balloon-shooting-main.webp' },
  { url: 'https://www.7delights.in/assets/images/Balloon-Shooting-for-Events-scaled.webp', dest: 'public/assets/balloon-shooting-events.webp' },
  { url: 'https://www.7delights.in/assets/images/balloon-shooting-1.webp', dest: 'public/assets/balloon-shooting-1.webp' },
  { url: 'https://www.7delights.in/assets/images/balloon-shooting-2.webp', dest: 'public/assets/balloon-shooting-2.webp' },
  { url: 'https://www.7delights.in/assets/images/balloon-shooting-3.webp', dest: 'public/assets/balloon-shooting-3.webp' }
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

