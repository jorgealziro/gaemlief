const create2dArray = require('./create2dArray')

test('It creates an array',() => {
    expect(create2dArray()).toBeInstanceOf(Array);
});

test('It creates an array of arrays',() => {
    expect(create2dArray()[0]).toBeInstanceOf(Array);
});
