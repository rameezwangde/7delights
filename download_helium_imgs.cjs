const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/helium-gas-balloons-banner.webp', dest: 'public/assets/helium-balloons-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/helium-gas-foil-balloon.webp', dest: 'public/assets/helium-gas-foil-balloon.webp' },
  { url: 'https://www.7delights.in/assets/images/helium-floting-balloons.webp', dest: 'public/assets/helium-floating-balloons.webp' },
  { url: 'https://www.7delights.in/assets/images/helium-gas-balloon.webp', dest: 'public/assets/helium-gas-balloon-single.webp' },
  { url: 'https://www.7delights.in/assets/images/helium-gas-balloon-arch.webp', dest: 'public/assets/helium-gas-balloon-arch.webp' },
  { url: 'https://www.7delights.in/assets/images/helium-gas-balloon-arch-background.webp', dest: 'public/assets/helium-arch-background.webp' }
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

