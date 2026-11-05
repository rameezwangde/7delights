const fs = require('fs');
const html = fs.readFileSync('scratch_balloon_decor.html', 'utf-8');

// Find sections containing H2
const h2Regex = /<h2[^>]*>(.*?)<\/h2>([\s\S]*?)(?=<h2|<h3|$)/gi;
let m;
while ((m = h2Regex.exec(html)) !== null) {
  const title = m[1].replace(/<[^>]+>/g, '').trim();
  const content = m[2];
  
  // Find img
  const imgM = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  // Find link
  const linkM = content.match(/<a[^>]+href=["']([^"']+)["']/i);
  // Find description / paragraph
  const pM = content.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  
  console.log('=== CARD ===');
  console.log('Title:', title);
  console.log('Img:', imgM ? imgM[1] : 'none');
  console.log('Link:', linkM ? linkM[1] : 'none');
  console.log('Desc:', pM ? pM[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : 'none');
}

