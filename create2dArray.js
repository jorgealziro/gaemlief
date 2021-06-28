function create2dArray(n, m){
    const n_row = (n === undefined ? Math.floor(Math.random() * 10) + 1 : n);
    const n_column = (m === undefined ? Math.floor(Math.random() * 10) + 1 : m);
    const grid = [];
    for (let i = 0; i < n_row; i++){
        grid.push([])
        for (let j = 0; j < n_column; j++){
            grid[i].push(0);
        }
    }


    return grid;
}

module.exports = create2dArray;
