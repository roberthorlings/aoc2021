import {numDescendants, part1, part2} from "../src/day6.js";
import {lineCovers} from "../src/day5.js";

describe('day6', () => {
    const exampleTestcase = "3,4,3,1,2"

    describe( 'numDescendants', () => {
        // timer, numIterations, numDescendants
        const values = [
            [1, 1, 0],
            [0, 1, 1],
            [1, 2, 1],
            [0, 7, 1],
            [0, 8, 2],
            [0, 10, 3],
            [1, 18, 6]
        ]
        test.each(values)(
            "given timer %p and %p iterations, there should be %p descendants",
            (timer, numIterations, expectedResult) => {
                expect(numDescendants(timer, numIterations)).toEqual(expectedResult);
            }
        );
    })

    describe( 'part1', () => {
        test('should return the right answer on example testcase', () => {
            expect(part1(exampleTestcase, 18)).toEqual(26)
            expect(part1(exampleTestcase)).toEqual(5934)
        })

    })

    describe( 'part2', () => {
        test('should return the right answer on example testcase', () => {
            expect(part2(exampleTestcase)).toEqual(26984457539)
        })
    });
});