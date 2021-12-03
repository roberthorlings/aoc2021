import {part1, part2} from "../src/day1.js";

describe('day1', () => {
    describe( 'part1', () => {
        test('should return 0 on empty file', () => {
            expect(part1([])).toEqual(0)
        })

        test('should return 0 on single value', () => {
            expect(part1([10])).toEqual(0)
        })

        test('should return 1 on increasing value', () => {
            expect(part1([10, 20])).toEqual(1)
        })

        test('should return 0 on decreasing value', () => {
            expect(part1([20, 10])).toEqual(0)
        })

        test('should return 3 on increasing and decreasing values', () => {
            expect(part1([10, 90, 100, 120, 110, 90])).toEqual(3)
        })

        test('should return 7 on example testcase', () => {
            expect(part1([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toEqual(7)
        })

    })

    describe( 'part2', () => {
        test('should return 0 on empty file', () => {
            expect(part2([])).toEqual(0)
        })

        test('should return 0 on single value', () => {
            expect(part2([10])).toEqual(0)
        })

        test('should return 1 on increasing sliding window', () => {
            expect(part2([10, 20, 30, 40])).toEqual(1)
        })

        test('should return 5 on example testcase', () => {
            expect(part2([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toEqual(5)
        })

    })
});