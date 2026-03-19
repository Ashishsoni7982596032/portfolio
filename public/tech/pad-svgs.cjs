const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.svg'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Inject the pristine white bounding box directly onto the SVG root
    if (content.includes('viewBox="-100 -100 328 328"') && !content.includes('<rect x="-100"')) {
        content = content.replace(/(<svg[^>]*>)/i, '$1 <rect x="-100" y="-100" width="328" height="328" fill="#ffffff" />');
        fs.writeFileSync(file, content);
        console.log('Whitewashed ' + file);
    }
});
