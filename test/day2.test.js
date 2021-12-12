import {part1, part2} from "../src/day2.js";

describe('day2', () => {
    const exampleTestcase = [
        "forward 5",
        "down 5",
        "forward 8",
        "up 3",
        "down 8",
        "forward 2"
    ]
    describe( 'part1', () => {
        test('should return 0 on empty file', () => {
            expect(part1([])).toEqual(0)
        })

        test('should throw on invalid input', () => {
            expect(() => part1(["invalid"])).toThrow()
        })

        test('should correctly compute product', () => {
            expect(part1(["forward 1", "down 2", "forward 2"])).toEqual(6)
        })

        test('should handle negative depth', () => {
            expect(part1(["up 4", "forward 1"])).toEqual(-4)
        })

        test('should return the right answer on example testcase', () => {
            expect(part1(exampleTestcase)).toEqual(150)
        })

    })

    describe( 'part2', () => {
        test('should return 0 on empty file', () => {
            expect(part2([])).toEqual(0)
        })

        test('should throw on invalid input', () => {
            expect(() => part2(["invalid"])).toThrow()
        })

        test('should correctly compute product', () => {
            expect(part2(["forward 1", "down 2", "forward 2"])).toEqual(12)
        })
        test('should return the right answer on example testcase', () => {
            expect(part2(exampleTestcase)).toEqual(900)
        })

    })
});