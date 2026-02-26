const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./src', function (filePath) {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Remove dark backgrounds
        content = content.replace(/\bbg-dark-[0-9]+(?:\/[0-9]+)?\b/g, '');

        // Remove border utility classes
        content = content.replace(/\bborder-white\/[0-9]+\b/g, '');
        content = content.replace(/\bborder-[a-z]+\b/g, (match) => {
            // preserve border-radius (border-none, etc won't usually match this pattern anyway but let's be careful)
            const toRemove = ['border-b', 'border-t', 'border-l', 'border-r', 'border-transparent'];
            if (toRemove.includes(match)) return '';
            return match;
        });

        // Remove standalone 'border' class to eliminate the 1px border width
        content = content.replace(/(?<=^| |"|')border(?= |"|'|$)/g, '');

        // Cleanup extra spaces in className="..."
        content = content.replace(/className="([^"]*)"/g, (match, p1) => {
            let cleaned = p1.replace(/\s+/g, ' ').trim();
            return `className="${cleaned}"`;
        });

        // Cleanup extra spaces in className={`...`}
        content = content.replace(/className=\{`([^`]*)`\}/g, (match, p1) => {
            let cleaned = p1.replace(/ +/g, ' ').trim();
            return `className={\`${cleaned}\`}`;
        });

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
