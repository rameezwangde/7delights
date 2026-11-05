const fs = require('fs');
const html = fs.readFileSync('scratch_ring_toss.html', 'utf-8');

// Extract text between headings and paragraphs
const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
const paragraphs = [];
let m;
while ((m = pRegex.exec(html)) !== null) {
  const text = m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text.length > 25 && !text.includes('Copyright') && !text.includes('All Rights Reserved')) {
    paragraphs.push(text);
  }
}
console.log('PARAGRAPHS:\n', JSON.stringify(paragraphs, null, 2));

// Extract lists
const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
const lis = [];
while ((m = liRegex.exec(html)) !== null) {
  const text = m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text.length > 5) lis.push(text);
}
console.log('LIST ITEMS:\n', JSON.stringify(lis, null, 2));

