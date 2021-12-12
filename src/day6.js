import _ from "lodash";

const NEW_FISH_TIMER = 8;
const RESET_TIMER = 6;

function tick(state) {
    const newFish = []
    return state
        .map(c => {
            if(c > 0) return c - 1;

            newFish.push(NEW_FISH_TIMER)
            return RESET_TIMER;
        })
        .concat(newFish)
}

// 0
// it 1: +1 + num(8, iterations - 1)
// it 8: +1 + num(8, iterations - 8)
// it 15: +1 + num(8, iterations - 15)

// 3
// it 4: +1 -> it 13 + 1
// it 11: +1
// it 18: +1

// 1 ; 18
// it 2 + 1 -> it 11 + 1
// it 9 + 1 -> it 18 + 1
// it 16 + 1

// num(timer, iterations) = ceil((num - x) / 7)
// ceil((num - x) / 7)
const numDescendantsMap = new Map()

export function numDescendants(timer, iterations) {
    if(iterations <= timer) return 0;

    const key = `${timer}/${iterations}`
    if(numDescendantsMap.has(key)) {
        return numDescendantsMap.get(key);
    }

    let total = 0
    for(let iterationsLeft = iterations - (timer + 1); iterationsLeft >= 0; iterationsLeft -= 7) {
        total += 1 + numDescendants(8, iterationsLeft);
    }

    numDescendantsMap.set(key, total);
    return total
}

export function part1(input, iterations = 80) {
    let state = input.split(",").map(v => parseInt(v))

    for(let i = 0; i < iterations; i++) {
        console.log("Iteration", i, state.length)
        state = tick(state)
    }

    return state.length
}

export function part2(input, iterations = 256) {
    let state = input.split(",").map(v => parseInt(v))

    return _.sum(state.map(timer => numDescendants(timer, iterations))) + state.length
}