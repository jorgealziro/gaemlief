const applyGameRules = require('./applyGameRules');
const create2DArray = require('./create2dArray');

test('It ensures sum of neighbor cells is a number',() => {
    const grid = create2DArray();
    for (column of grid){
        for (cell of column){
            expect(applyGameRules.checkNeighborSum(cell)).toBe(expect.any(number));
        }
    }
})