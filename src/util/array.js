export function* windowGenerator(inputArray, size) {
    for(let index = 0; index+size <= inputArray.length; index++) {
        yield inputArray.slice(index, index+size);
    }
}

export function windowed(inputArray, size) {
    return Array.from(windowGenerator(inputArray, size))
}

/**
 * Transposes a given 2d array
 * @param array
 * @returns {*}
 * @see https://stackoverflow.com/a/17428705
 */
export function transpose(array) {
    return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
}