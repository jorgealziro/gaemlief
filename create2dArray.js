function create2dArray(n, m){
    const n_row = (n === undefined ? Math.floor(Math.random() * 10) + 1 : n);
    const n_column = (m === undefined ? Math.floor(Math.random() * 10) + 1 : m);
    const grid = Array(n_row).fill(Array(n_column));

    return grid;
}

module.exports = create2dArray;