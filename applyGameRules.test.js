const applyGameRules = require('./applyGameRules');
const create2DArray = require('./create2dArray');

test('It ensures sum of neighbor cells is a number',() => {
    const grid = [[Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],
    [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],
    [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())]];
    
    expect(applyGameRules.checkNeighborSum(grid)).toEqual(expect.any(Number));
})

test('It sums neighbor cells of the inner cell of a 3x3 grid',() => {
    const grid = [[Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],
    [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],
    [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())]];
    const innerCell = grid[1][1];

    function sum2DArr(grid3x3){
        let sum = 0;
        for (column of grid3x3){
        for (cell of column){
                sum += cell;
        }
    }
 
        return sum;
    }

    expect(applyGameRules.checkNeighborSum(grid)).toEqual(sum2DArr(grid) - innerCell);
})