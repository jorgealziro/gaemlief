const applyGameRules = require('./applyGameRules');
const create2DArray = require('./create2dArray');

test('It ensures sum of neighbor cells is a number',() => {
    const grid = [[Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],
    [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],
    [Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())]];
    
    expect(applyGameRules.checkNeighborSum(grid)).toEqual(expect.any(Number));
})
        for (cell of column){
            expect(applyGameRules.checkNeighborSum(cell)).toBe(expect.any(number));
        }
    }
})