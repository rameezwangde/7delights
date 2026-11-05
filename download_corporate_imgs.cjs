const https = require('https');
const fs = require('fs');

const images = [
  { url: 'https://www.7delights.in/assets/images/Corporate-Event-service-banner.webp', dest: 'public/assets/corporate-event-banner.webp' },
  { url: 'https://www.7delights.in/assets/images/Music-System.webp', dest: 'public/assets/corp-music-system.webp' },
  { url: 'https://www.7delights.in/assets/images/DJ-Sound-lighting-setup.webp', dest: 'public/assets/corp-dj-sound-lighting.webp' },
  { url: 'https://www.7delights.in/assets/images/Stage-and-Flex-Backdrop.webp', dest: 'public/assets/corp-stage-flex-backdrop.webp' },
  { url: 'https://www.7delights.in/assets/images/Led-Wall.webp', dest: 'public/assets/corp-led-wall.webp' },
  { url: 'https://www.7delights.in/assets/images/Projector-and-screen.webp', dest: 'public/assets/corp-projector-screen.webp' },
  { url: 'https://www.7delights.in/assets/images/MC-Games-Master-of-Ceremony.webp', dest: 'public/assets/corp-mc-games.webp' },
  { url: 'https://www.7delights.in/assets/images/Grand-Entry.webp', dest: 'public/assets/corp-grand-entry.webp' },
  { url: 'https://www.7delights.in/assets/images/Dance-Floor.webp', dest: 'public/assets/corp-dance-floor.webp' },
  { url: 'https://www.7delights.in/assets/images/printing-services.webp', dest: 'public/assets/corp-printing-services.webp' },
  { url: 'https://www.7delights.in/assets/images/Confetti-Blast-Cold-fire.webp', dest: 'public/assets/corp-confetti-coldfire.webp' },
  { url: 'https://www.7delights.in/assets/images/bull-ride.webp', dest: 'public/assets/corp-bull-ride.webp' }
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
