const fs = require('fs');
const html = fs.readFileSync('scratch_balloon_decor.html', 'utf-8');

const sIdx = html.indexOf('7DELIGHTS.in-Home For Exquisite Balloon Decoration');
if (sIdx !== -1) {
  console.log('--- CONTENT BELOW CARDS ---');
  console.log(html.substring(sIdx - 100, sIdx + 3000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

const faqIdx = html.indexOf('Event FAQ ?');
if (faqIdx !== -1) {
  console.log('--- FAQ ---');
  console.log(html.substring(faqIdx, faqIdx + 1500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

