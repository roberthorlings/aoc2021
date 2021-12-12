import {readFileSync} from "fs";

export function readFileToLines(file) {
    return readFileSync(`input/${file}`).toString().split("\n");
}
