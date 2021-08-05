const applyGameRules = require('./applyGameRules');
const create2DArray = require('./create2dArray');
const singleCellGrid = [[Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],
[Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],
[Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())]];

test('It ensures sum of neighbor cells is a number',() => {
    expect(applyGameRules.checkNeighborSum(singleCellGrid)).toEqual(expect.any(Number));
})

test('It sums neighbor cells of the inner cell of a 3x3 grid',() => {
    const innerCell = singleCellGrid[1][1];

    function sum2DArr(grid3x3){
        let sum = 0;
        for (column of grid3x3){
            for (cell of column){
                sum += cell;
            }
        }
 
        return sum;
    }

    expect(applyGameRules.checkNeighborSum(singleCellGrid)).toEqual(sum2DArr(singleCellGrid) - innerCell);
})

test('Iterator function counts number of inner cells of a 2d array',() => {
    const testGrid = create2DArray();

    function elementCounter(grid){
        let count = 0;
        for (let i = 1; i < grid.length - 1; i++ ){
            for (let j = 1; j < grid[0].length - 1; j++ ){
                count += 1;
            }
        }
        return count;
    }

    expect(applyGameRules.cellIterator(testGrid)[0]).toEqual(elementCounter(testGrid));
})

