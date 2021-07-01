function create2dArray(n, m){
    const n_row = (n === undefined ? Math.floor(Math.random() * 10) + 10 : n);
    const n_column = (m === undefined ? Math.floor(Math.random() * 10) + 10 : m);
    if (n_row < 10 || n_column < 10){
        throw new Error('Grid must be of at least 10x10');
    }
    const grid = new Array(n_row);
    for (let i = 0; i < grid.length; i++){
        grid[i] = [...Array(n_column)].map(() => {return Math.round(Math.random())});
    }
    return grid;
}

module.exports = create2dArray;