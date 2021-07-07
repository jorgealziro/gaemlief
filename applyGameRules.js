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

    }
}

module.exports = applyGameRules;