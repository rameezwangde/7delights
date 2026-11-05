const fs = require('fs');
const html = fs.readFileSync('scratch_corporate.html', 'utf-8');

const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('TITLE:', titleMatch ? titleMatch[1] : 'none');

// Find all headings
const headings = [];
const hRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
let m;
while ((m = hRegex.exec(html)) !== null) {
  headings.push('H' + m[1] + ': ' + m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
}
console.log('HEADINGS:\n', headings.join('\n'));

// Find all service cards in serviceOneDiv or similar
const cardRegex = /<div class="serviceOneDiv"[\s\S]*?<\/div>\s*<\/div>/gi;
// Or let's find all H2 inside serviceOne
const h2Regex = /<h2>(.*?)<\/h2>([\s\S]*?)(?=<div class="col|<h2>|$)/gi;
console.log('\n--- CARDS IN SERVICE ONE ---');
while ((m = h2Regex.exec(html)) !== null) {
  const title = m[1].replace(/<[^>]+>/g, '').trim();
  const content = m[2];
  const imgM = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  const linkM = content.match(/<a[^>]+href=["']([^"']+)["']/i);
  const pM = content.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  console.log('CARD:', title);
  console.log('Img:', imgM ? imgM[1] : 'none');
  console.log('Link:', linkM ? linkM[1] : 'none');
  console.log('Desc:', pM ? pM[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : 'none');
}

// Find all images
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
const imgs = [];
while ((m = imgRegex.exec(html)) !== null) {
  imgs.push(m[1]);
}
console.log('\nIMAGES:\n', imgs.filter(i => !i.includes('wp-emoji') && !i.includes('logo') && !i.includes('icon') && !i.includes('badge')).slice(0, 30).join('\n'));
