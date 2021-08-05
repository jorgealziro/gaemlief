const applyGameRules = {
    checkNeighborSum: (grid3x3) => {
        let isolatedGrid = grid3x3;
        const middleCell = grid3x3[1][1];
        let sum = 0;
        for (column of isolatedGrid){
            for (cell of column){
                sum += cell;
            }
        }
        return sum - middleCell;

    },
    cellIterator: (grid) => {
        let count = 0;
        for (let i = 1; i < grid.length - 1; i++ ){
            for (let j = 1; j < grid[0].length - 1; j++ ){
                count += 1;
            }
        }
        return [count];
    }
}

module.exports = applyGameRules;