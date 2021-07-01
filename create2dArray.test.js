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

test('It generates a grid of at least 10 rows when number of rows is undefined',() => {
    expect(create2dArray().length).toBeGreaterThan(9);
});

test('It generates a grid of at least 10 columns when number of columns is undefined',() => {
    expect(create2dArray()[0].length).toBeGreaterThan(9);
});

test('It throws an error if user tries to define a number of rows of less than 10',() => {
    expect(() => create2dArray(5)).toThrow('Grid must be of at least 10x10');
});

test('It throws an error if user tries to define a number of columns of less than 10',() => {
    expect(() => create2dArray(undefined, 5)).toThrow('Grid must be of at least 10x10');
});