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
