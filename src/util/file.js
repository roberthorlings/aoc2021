import {readFileSync} from "fs";

export function readFileByLine(dayNumber) {
    return readFileSync(`input/day${dayNumber}.txt`).toString().split("\n");
}
