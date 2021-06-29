const create2dArray = require('./create2dArray')

test('It creates an array',() => {
    expect(create2dArray()).toBeInstanceOf(Array);
});

test('It creates an array of arrays',() => {
    expect(create2dArray()[0]).toBeInstanceOf(Array);
});

test('It creates a 2D array of n rows',() => {
    const n = 10;
    expect(create2dArray(n)).toHaveLength(n);
});

test('It creates a 2D array of n rows and m columns',() => {
    const n = 10;
    const m = 20;
    expect(create2dArray(n, m)[0]).toHaveLength(m);
});

test('It populates columns with random zeros and ones',() => {
    for (column of create2dArray()){
        for (cell of column){
            try {
                expect(cell).toBe(1);
            } catch {
                expect(cell).toBe(0);
            }
        }
    }
});