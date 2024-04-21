function knightMoves(start, end) {
    // Define possible moves for the knight
    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Check if a move is valid
    function isValidMove(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    // BFS algorithm to find shortest path
    function bfs(start, end) {
        const queue = [[start, [start]]];
        const visited = new Set();

        while (queue.length) {
            const [current, path] = queue.shift();

            if (current[0] === end[0] && current[1] === end[1]) {
                return path;
            }

            for (const move of moves) {
                const newX = current[0] + move[0];
                const newY = current[1] + move[1];

                if (isValidMove(newX, newY) && !visited.has(`${newX},${newY}`)) {
                    queue.push([[newX, newY], [...path, [newX, newY]]]);
                    visited.add(`${newX},${newY}`);
                }
            }
        }

        return null;
    }

    // Find shortest path using BFS
    const shortestPath = bfs(start, end);

    if (shortestPath) {
        console.log(`You made it in ${shortestPath.length - 1} moves! Here's your path:`);
        shortestPath.forEach(square => console.log(square));
        return shortestPath;
    } else {
        return "No valid path found.";
    }
}