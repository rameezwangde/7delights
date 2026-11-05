const fs = require('fs');
const html = fs.readFileSync('scratch_balloon_decor.html', 'utf-8');

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

// Find service/sub-service cards or links
const links = [];
const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
while ((m = aRegex.exec(html)) !== null) {
  const href = m[1];
  const text = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (href.includes('/birthday-balloon-decorations/') && href !== 'https://www.7delights.in/birthday-balloon-decorations/') {
    links.push({ href, text });
  }
}
console.log('\nSUB-SERVICE LINKS:\n', JSON.stringify(links, null, 2));

// Extract all images
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
const imgs = [];
while ((m = imgRegex.exec(html)) !== null) {
  imgs.push(m[1]);
}
console.log('\nIMAGES:\n', imgs.filter(i => !i.includes('wp-emoji') && !i.includes('logo') && !i.includes('icon') && !i.includes('badge')).slice(0, 30).join('\n'));

