const fs = require('fs');
const html = fs.readFileSync('scratch_vr.html', 'utf-8');

const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('TITLE:', titleMatch ? titleMatch[1] : 'none');

const headings = [];
const hRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
let m;
while ((m = hRegex.exec(html)) !== null) {
  headings.push('H' + m[1] + ': ' + m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
}
console.log('HEADINGS:\n', headings.join('\n'));

const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
const imgs = [];
while ((m = imgRegex.exec(html)) !== null) {
  imgs.push(m[1]);
}
console.log('\nIMAGES:\n', imgs.filter(i => !i.includes('wp-emoji') && !i.includes('logo') && !i.includes('icon')).join('\n'));

const vidIdx = html.indexOf('Watch Our Video');
if (vidIdx !== -1) {
  console.log('\nVIDEO SECTION:\n', html.substring(vidIdx, vidIdx + 1000));
}

const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
const paragraphs = [];
while ((m = pRegex.exec(html)) !== null) {
  const text = m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text.length > 25 && !text.includes('Copyright') && !text.includes('All Rights Reserved')) {
    paragraphs.push(text);
  }
}
console.log('\nPARAGRAPHS:\n', JSON.stringify(paragraphs, null, 2));

