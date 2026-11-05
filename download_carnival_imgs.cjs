const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/carnival-games-banner.webp', dest: 'public/assets/carnival-games-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/Ring-the-bottle-carnival-game.webp', dest: 'public/assets/ring-the-bottle.webp' },
  { url: 'https://www.7delights.in/assets/images/Inflatable-Dart-carnival-game.webp', dest: 'public/assets/inflatable-dart.webp' },
  { url: 'https://www.7delights.in/assets/images/Tic-Tac-Toe-carnival-game.webp', dest: 'public/assets/tic-tac-toe.webp' },
  { url: 'https://www.7delights.in/assets/images/cascade-carnival-game.webp', dest: 'public/assets/cascade-carnival.webp' },
  { url: 'https://www.7delights.in/assets/images/balloon-shoot-carnival-game.webp', dest: 'public/assets/balloon-shoot-carnival.webp' },
  { url: 'https://www.7delights.in/assets/images/Mini-Bowling-carnival-game.webp', dest: 'public/assets/mini-bowling.webp' }
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

