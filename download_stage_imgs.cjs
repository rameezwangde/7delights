const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/Stage-flex-backdrop-banner.webp', dest: 'public/assets/stage-flex-backdrop-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/Stage.webp', dest: 'public/assets/stage-main.webp' },
  { url: 'https://www.7delights.in/assets/images/stage-podium.webp', dest: 'public/assets/stage-podium.webp' },
  { url: 'https://www.7delights.in/assets/images/Stage-Flex-Backdrop.webp', dest: 'public/assets/stage-flex-siemens.webp' },
  { url: 'https://www.7delights.in/assets/images/Stage-Lighting.webp', dest: 'public/assets/stage-lighting-setup.webp' }
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

