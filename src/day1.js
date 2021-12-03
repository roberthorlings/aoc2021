import {windowed} from "./util/array.js";

export function part1(lines) {
    return windowed(lines.map(v => parseInt(v)), 2)
            .filter(([a, b]) => {
                return b > a;
            })
        .length
}

export function part2(lines) {
    return part1(
        windowed(lines.map(v => parseInt(v)), 3)
            .map(window => window.reduce((a, b) => a + b, 0))
    )
}
