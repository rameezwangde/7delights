const fs = require('fs');
const html = fs.readFileSync('scratch_balloon_decor.html', 'utf-8');

// Find all elements with class card or service or col
const divRegex = /<div class="col[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi;
// Look for where Balloon-Decoration.webp appears
const idx = html.indexOf('Balloon-Decoration.webp');
if (idx !== -1) {
  console.log('--- SURROUNDING BALLOON DECORATION IMG ---');
  console.log(html.substring(idx - 300, idx + 800));
}

const themeIdx = html.indexOf('Theme-Decoration.webp');
if (themeIdx !== -1) {
  console.log('--- SURROUNDING THEME DECORATION IMG ---');
  console.log(html.substring(themeIdx - 300, themeIdx + 800));
}

