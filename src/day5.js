import _ from "lodash";

function parseFile(lines) {
   function splitPoint(point) {
       const [x,y] = point.split(",").map(c => parseInt(c.trim()))
       return {x,y}
   }
   return lines.map(line => {
        const [a, b] = line.split("->").map(splitPoint)
        return {
            a,
            b,
            dx: b.x - a.x,
            dy: b.y - a.y
        }
    })
}

function isBetween(val, a, b) {
    return Math.min(a, b) <= val && val <= Math.max(a,b);
}

export function lineCovers({a, b, dx, dy}, {x,y}) {
    if(dx === 0) {
        return x === a.x && isBetween(y, a.y, b.y);
    }
    if(dy === 0) {
        return y === a.y && isBetween(x, a.x, b.x);
    }
    //Handle 45 degrees diagonal
    if(Math.abs(dx) === Math.abs(dy)) {
        // 4,2 -> 1,5

        // dx = -3
        // dy = 3

        // (2,4) -> (x - a.x) / dx (-2 / -3) == (y - a.y) / dy
        // If the point should be on the same line and within the segment
        const diffX = (x - a.x) / dx
        const diffY = (y - a.y) / dy
        return diffX === diffY && diffX >= 0 && diffX <= 1;
    }

    console.warn("Diagonal lines other than 45 degrees are not handled by the lineCovers function")
    return false;
}

function pointsCovered(lines) {
    let pointsCovered = 0;
    const maxX = _.max(lines.flatMap(({a, b}) => [a.x, b.x]))
    const maxY = _.max(lines.flatMap(({a, b}) => [a.y, b.y]))

    for (let x = 0; x <= maxX; x++) {
        for (let y = 0; y <= maxY; y++) {
            let cover = 0;

            // See if this cell has been covered by 2 or more lines
            for (let line of lines) {
                if (lineCovers(line, {x, y})) {
                    cover++;

                    if (cover >= 2) {
                        pointsCovered++;
                        break;
                    }
                }
            }
        }
    }

    return pointsCovered
}

export function part1(file) {
    const lines = parseFile(file)
    return pointsCovered(lines.filter(({dx,dy}) => dx === 0 || dy === 0));
}

export function part2(file) {
    const lines = parseFile(file)
    return pointsCovered(lines);
}
