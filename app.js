let grid = document.getElementById('grid')

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div')
        grid.appendChild(cell).className = "grid-item"
        /*
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = "rgb(46, 72, 156)"
        })
        */
    }
}

makeGrid(16,16)

/*
let btn = document.getElementById('prompt-btn')
btn.addEventListener('click', () => {
    let input = prompt("Wake up, it's time for schoo")

})*/