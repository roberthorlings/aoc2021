import {part1, part2} from "../src/day3.js";

describe('day3', () => {
    const exampleTestcase = [
        "00100",
        "11110",
        "10110",
        "10111",
        "10101",
        "01111",
        "00111",
        "11100",
        "10000",
        "11001",
        "00010",
        "01010"
    ]
    describe( 'part1', () => {
        test('should return the right answer on example testcase', () => {
            expect(part1(exampleTestcase)).toEqual(198)
        })

    })

    describe( 'part2', () => {
        test('should return the right answer on example testcase', () => {
            expect(part2(exampleTestcase)).toEqual(230)
        })
    });
});