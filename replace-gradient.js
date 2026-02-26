const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src', 'pages');

function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.tsx') && !file.includes('Home')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            content = content.replace(
                /className="(.*?)min-h-screen(.*?)"/g,
                'className="$1min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900$2"'
            );

            content = content.replace(/className="(.*?)\s\s+(.*?)"/g, 'className="$1 $2"');

            fs.writeFileSync(fullPath, content);
            console.log(`Updated gradient in ${file}`);
        }
    });
}

processDirectory(srcDir);
