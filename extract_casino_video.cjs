const fs = require('fs');
const html = fs.readFileSync('scratch_casino.html', 'utf-8');

const vidIdx = html.indexOf('Watch Our Video');
if (vidIdx !== -1) {
  console.log('--- VIDEO SECTION ---');
  console.log(html.substring(vidIdx, vidIdx + 1200));
}

