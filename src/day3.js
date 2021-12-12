function computeNumberOfOnesInEachPosition(lines) {
    const numBits = lines[0].length
    const oneCount = Array(numBits).fill(0)

    lines.forEach(line => {
        // Increase the counter for each one found
        [...line].forEach((bit, idx) => {
            if (bit === "1") oneCount[idx]++
        })
    })

    return oneCount;
}

function computeNumberOfOnesInSinglePosition(lines, idx) {
    return lines.filter(line => line[idx] === "1").length
}

export function part1(lines) {
    const numNumbers = lines.length
    const majorityLimit = Math.floor(numNumbers / 2) + 1
    const oneCount = computeNumberOfOnesInEachPosition(lines);

    const gammaRate = oneCount.map(numOnes => numOnes >= majorityLimit ? "1" : "0").join("")
    const epsilonRate = oneCount.map(numOnes => numOnes >= majorityLimit ? "0" : "1").join("")

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

export function part2(lines) {
    function getExpectedForOGR(numbers, idx) {
        return computeNumberOfOnesInSinglePosition(numbers, idx) >= Math.ceil(numbers.length / 2) ? "1" : "0";
    }

    function getExpectedForSCR(numbers, idx) {
        return computeNumberOfOnesInSinglePosition(numbers, idx) >= Math.ceil(numbers.length / 2) ? "0" : "1";
    }

    function computeValue(numbers, expectedValueGenerator) {
        let remainingNumbers = numbers

        for(let idx = 0; idx < numbers[0].length; idx++) {
            if(remainingNumbers.length === 1)
                break;

            const expected = expectedValueGenerator(remainingNumbers, idx)
            const bitCriterium = line => line[idx] === expected;

            remainingNumbers = remainingNumbers.filter(bitCriterium)
            //console.debug("Idx", idx, " / Expected ", expected, " / remaining after this iteration ", remainingNumbers)
        }

        if(remainingNumbers.length !== 1) {
            throw Error("Expected a single remaing value. Got " + remainingNumbers.length)
        }
        return parseInt(remainingNumbers[0], 2)
    }

    const ogr = computeValue(lines, getExpectedForOGR)
    const scr = computeValue(lines, getExpectedForSCR)
    return ogr * scr
}
