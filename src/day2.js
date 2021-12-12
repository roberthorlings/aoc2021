function parseLine(line) {
    let [command, value] = line.split(" ");
    return {
        command,
        value: parseInt(value)
    }
}
export function part1(lines) {
    let position = 0, depth = 0;

    lines.forEach(line => {
        let {command, value} = parseLine(line);
        switch(command) {
            case "forward":
                position += value;
                break;
            case "down":
                depth += value;
                break;
            case "up":
                depth -= value;
                break;
            default:
                throw Error("Invalid command: "+ command)
        }
    })

    return position * depth;
}

export function part2(lines) {
    let position = 0, depth = 0, aim = 0;

    lines.forEach(line => {
        let {command, value} = parseLine(line);
        switch(command) {
            case "forward":
                position += value;
                depth += aim * value;
                break;
            case "down":
                aim += value;
                break;
            case "up":
                aim -= value;
                break;
            default:
                throw Error("Invalid command: "+ command)
        }
    })

    return position * depth;
}