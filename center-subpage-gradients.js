const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src', 'pages');

const replacement = `      {/* Centered Organic Gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div
              animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 45, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[80vw] h-[60vh] max-w-[800px] max-h-[600px] bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40 blur-[120px] rounded-[60%_40%_30%_70%]"
          />
      </div>
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>`;

function processDirectory() {
    const files = fs.readdirSync(srcDir);

    files.forEach(file => {
        if (file.endsWith('.tsx') && !file.includes('Home') && !file.includes('Detail')) {
            const fullPath = path.join(srcDir, file);
            let content = fs.readFileSync(fullPath, 'utf8');

            const regex = /<div className="absolute inset-0">\s*<div className="absolute top-0 left-1\/4.*?<\/div>\s*<\/div>/s;

            if (regex.test(content)) {
                content = content.replace(regex, replacement);
                fs.writeFileSync(fullPath, content);
                console.log(`Updated gradients in ${file}`);
            }
        }
    });
}

processDirectory();
