import {lineCovers, part1, part2} from "../src/day5.js";
import {readFileToLines} from "../src/util/file.js";

describe('day5', () => {
    const exampleTestcase = readFileToLines("day5.test.txt")

    describe('lineCovers()', () => {
        describe('horizontal lines', () => {
            const line = { a: { x: 3, y: 4 }, b: {x: 7, y: 4}, dx: 4, dy: 0}
            const points = [
                [{x: 2, y: 4}, false],
                [{x: 3, y: 4}, true],
                [{x: 4, y: 4}, true],
                [{x: 5, y: 4}, true],
                [{x: 6, y: 4}, true],
                [{x: 7, y: 4}, true],
                [{x: 8, y: 4}, false],
                [{x: 6, y: 5}, false],
                [{x: 6, y: 3}, false],
            ]
            test.each(points)(
                "given %p as point the lineCover should return %p",
                (point, expectedResult) => {
                    expect(lineCovers(line, point)).toEqual(expectedResult);
                }
            );
        })

        describe('vertical lines', () => {
            const line = { a: { x: 3, y: 5 }, b: {x: 3, y: 1}, dx: 0, dy: -4}
            const points = [
                [{x: 3, y: 1}, true],
                [{x: 3, y: 2}, true],
                [{x: 3, y: 3}, true],
                [{x: 3, y: 4}, true],
                [{x: 3, y: 5}, true],

                [{x: 3, y: 0}, false],
                [{x: 3, y: 6}, false],
                [{x: 4, y: 4}, false],
                [{x: 2, y: 4}, false],
            ]
            test.each(points)(
                "given %p as point the lineCover should return %p",
                (point, expectedResult) => {
                    expect(lineCovers(line, point)).toEqual(expectedResult);
                }
            );
        })

        describe('diagonal lines 45 degrees', () => {
            const line = { a: {x: 4, y: 6}, b: { x: 1, y: 3 }, dx: -3, dy: -3}
            const points = [
                [{x: 1, y: 3}, true],
                [{x: 2, y: 4}, true],
                [{x: 3, y: 5}, true],
                [{x: 4, y: 6}, true],

                [{x: 0, y: 2}, false],
                [{x: 5, y: 7}, false],
                [{x: 1, y: 4}, false],
                [{x: 3, y: 4}, false],
            ]
            test.each(points)(
                "given %p as point the lineCover should return %p",
                (point, expectedResult) => {
                    expect(lineCovers(line, point)).toEqual(expectedResult);
                }
            );
        })


        describe('diagonal lines -45 degrees', () => {
            const line = { a: {x: 4, y: 3}, b: { x: 1, y: 6 }, dx: -3, dy: 3}
            const points = [
                [{x: 1, y: 6}, true],
                [{x: 2, y: 5}, true],
                [{x: 3, y: 4}, true],
                [{x: 4, y: 3}, true],

                [{x: 0, y: 7}, false],
                [{x: 5, y: 2}, false],
                [{x: 2, y: 4}, false],
                [{x: 3, y: 5}, false],
            ]
            test.each(points)(
                "given %p as point the lineCover should return %p",
                (point, expectedResult) => {
                    expect(lineCovers(line, point)).toEqual(expectedResult);
                }
            );
        })

    })

    describe( 'part1', () => {
        test('should return the right answer on example testcase', () => {
            expect(part1(exampleTestcase)).toEqual(5)
        })

    })

    describe( 'part2', () => {
        test('should return the right answer on example testcase', () => {
            expect(part2(exampleTestcase)).toEqual(12)
        })
    });
});