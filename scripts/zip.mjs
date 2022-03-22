import AdmZip from "adm-zip";
import { readdirSync } from 'fs'; 
var zip = new AdmZip();
var uploadDir = readdirSync("./dist/cdn");

for ( var i =0; i < uploadDir.length; i++ ) {
    zip.addLocalFile("./dist/cdn/" + uploadDir[i]);
}

const downloadName = `sketch-icons-cdn.zip`;
const data = zip.toBuffer();
console.log("📁 Created zip: " + downloadName);
zip.writeZip(downloadName); 
