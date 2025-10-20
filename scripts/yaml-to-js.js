#!/usr/bin/env node

// Script to convert YAML files to JavaScript for Gatsby compatibility
// Usage: node scripts/yaml-to-js.js

const fs = require('fs')
const path = require('path')
const YAML = require('yaml')

function convertYamlToJs(yamlPath, jsPath) {
    try {
        // Read YAML file
        const yamlContent = fs.readFileSync(yamlPath, 'utf8')
        const data = YAML.parse(yamlContent)
        
        // Generate JavaScript file
        const jsContent = `// This file is auto-generated from ${path.basename(yamlPath)}
// Edit the YAML file, then run: node scripts/yaml-to-js.js

export const funnelData = ${JSON.stringify(data, null, 4)}`

        // Write JavaScript file
        fs.writeFileSync(jsPath, jsContent)
        console.log(`✅ Converted ${yamlPath} → ${jsPath}`)
        
    } catch (error) {
        console.error(`❌ Error converting ${yamlPath}:`, error.message)
    }
}

// Convert ai-test funnel
convertYamlToJs(
    'src/funnels/ai-test/index.yaml',
    'src/funnels/ai-test/data.js'
)

console.log('🎉 YAML to JS conversion complete!')
console.log('💡 To update content: Edit YAML files, then run this script again')