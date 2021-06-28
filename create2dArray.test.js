const create2dArray = require('./create2dArray')

test('It creates an Array',() => {
    expect(create2dArray()).toBeInstanceOf(Array);
});

test('It creates an Array of Arrays',() => {
    expect(create2dArray()[0]).toBeInstanceOf(Array);
});
