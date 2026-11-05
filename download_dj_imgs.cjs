const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/DJ-banner.webp', dest: 'public/assets/dj-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/DJ.webp', dest: 'public/assets/dj-main.webp' },
  { url: 'https://www.7delights.in/assets/images/DJ-console.webp', dest: 'public/assets/dj-console.webp' },
  { url: 'https://www.7delights.in/assets/images/DJ-mixer.webp', dest: 'public/assets/dj-mixer.webp' },
  { url: 'https://www.7delights.in/assets/images/DJ-setup.webp', dest: 'public/assets/dj-setup.webp' },
  { url: 'https://www.7delights.in/assets/images/DJ-Sound.webp', dest: 'public/assets/dj-sound.webp' },
  { url: 'https://www.7delights.in/assets/images/dj-music.webp', dest: 'public/assets/dj-music.webp' }
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

