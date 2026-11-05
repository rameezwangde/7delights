const fs = require('fs');
const html = fs.readFileSync('scratch_ring_toss.html', 'utf-8');

// Search for Specialties of Ring Game section
const specIdx = html.indexOf('Specialties of Ring Game');
if (specIdx !== -1) {
  console.log('--- SPECIALTIES SECTION ---');
  console.log(html.substring(specIdx, specIdx + 2000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// Search for Ring Game With Gifts section
const giftsIdx = html.indexOf('Ring Game With Gifts');
if (giftsIdx !== -1) {
  console.log('--- GIFTS SECTION ---');
  console.log(html.substring(giftsIdx, giftsIdx + 2000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// Search for youtube or video
const vidIdx = html.indexOf('Watch Our Video');
if (vidIdx !== -1) {
  console.log('--- VIDEO SECTION ---');
  console.log(html.substring(vidIdx, vidIdx + 1500));
}

