/*
Importação usando CommonJS, sigla CJS.

var generateName = require("sillyname");
*/

// Importação usando ECMAScript, sigla ESM.
import generateName from "sillyname";
var sillyName = generateName();

console.log(`Meu nome é ${sillyName}`);