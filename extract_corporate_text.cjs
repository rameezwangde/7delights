const fs = require('fs');
const html = fs.readFileSync('scratch_corporate.html', 'utf-8');

const sIdx = html.indexOf('CORPORATE EVENT ORGANIZERS A 7DELIGHTS.in SPECIALTY!');
if (sIdx !== -1) {
  console.log('--- CONTENT BELOW CARDS ---');
  console.log(html.substring(sIdx, sIdx + 2500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

const faqIdx = html.indexOf('Event FAQ ?');
if (faqIdx !== -1) {
  console.log('--- FAQ ---');
  console.log(html.substring(faqIdx, faqIdx + 1500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}
