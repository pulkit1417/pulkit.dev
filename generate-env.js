const fs = require('fs');
const path = require('path');

// Read the template file
const templatePath = path.join(__dirname, 'src', 'environments', 'environment.template.ts');
const template = fs.readFileSync(templatePath, 'utf8');

// Replace placeholders with environment variables
const environmentFile = template.replace(/\${(\w+)}/g, (_, key) => process.env[key] || '');

// Write the new environment file
const outputPath = path.join(__dirname, 'src', 'environments', 'environment.ts');
fs.writeFileSync(outputPath, environmentFile);

console.log('Environment file generated successfully.');