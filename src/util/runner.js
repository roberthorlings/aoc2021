import {readFileSync} from "fs";

function runWithTiming(func, description) {
    const start = new Date().getTime();
    const result = func();
    const end = new Date().getTime();

    console.log(`Executing ${description} took ${end - start} ms. Result: ${result}`)
}

export async function run(dayNumber, inputType) {
    const {part1, part2} = await import(`../day${args[0]}.js`)

    console.log(`Running advent of code day ${dayNumber}`)
    const fileContents = readFileSync(`../input/day${dayNumber}.txt`).toString()
    const input =
        inputType === "string" ? fileContents : fileContents.trim().split("\n")

    part1 && runWithTiming(() => part1(input), "part 1", )
    part2 && runWithTiming(() => part2(input), "part 3", )
}

// Parse day parameter
const args = process.argv.slice(2);
const dayNumber = args[0];
const inputType = args[1] || "array"

if(!dayNumber) {
    console.error("No day number given");
    process.exit()
}

run(args[0], inputType)
