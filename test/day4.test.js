import {part1, part2} from "../src/day4.js";
import {readFileToLines} from "../src/util/file.js";

describe('day4', () => {
    const exampleTestcase = readFileToLines("day4.test.txt")

    describe( 'part1', () => {
        test('should return the right answer on example testcase', () => {
            expect(part1(exampleTestcase)).toEqual(4512)
        })

    })

    describe( 'part2', () => {
        test('should return the right answer on example testcase', () => {
            expect(part2(exampleTestcase)).toEqual(1924)
        })
    });
});