function create2dArray(n, m){
    const n_row = (n === undefined ? Math.floor(Math.random() * 10) + 1 : n);
    const n_column = (m === undefined ? Math.floor(Math.random() * 10) + 1 : m);
    const grid = new Array(n_row);
    for (let i = 0; i < grid.length; i++){
        grid[i] = [...Array(n_column)].map(() => {return Math.round(Math.random())});
    }
    return grid;
}

module.exports = create2dArray;