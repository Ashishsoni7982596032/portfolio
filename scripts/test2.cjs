const fs = require('fs');
const glb = fs.readFileSync('/Users/ashishsoni/Desktop/portf/ashish-portfolio/public/models/decrypted_character.glb');
const chunkLength = glb.readUInt32LE(12);
const jsonString = glb.toString('utf8', 20, 20 + chunkLength);
const gltf = JSON.parse(jsonString);
gltf.nodes.forEach(n => { if (n.name) console.log(n.name); });
