export function* windowGenerator(inputArray, size) {
    for(let index = 0; index+size <= inputArray.length; index++) {
        yield inputArray.slice(index, index+size);
    }
}

export function windowed(inputArray, size) {
    return Array.from(windowGenerator(inputArray, size))
}