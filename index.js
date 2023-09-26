import { getNativeFunction } from "sbffi";
import path from 'path';
import { fileURLToPath } from "url";
import { platform } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let libName = "librust_node.so";
if (platform == "win32") {
    libName = "rust_node.dll";
}

const fibonacci = getNativeFunction(
    path.join(__dirname, '/target/release/rust_node.dll'),
    'fibonacci',
    'int32_t', // return type
    ['int32_t'], // argument types
);

for (let i=1; i<=20; i++) {
    console.log(fibonacci(i));
}