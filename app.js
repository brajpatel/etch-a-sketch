const DEFAULT_SIZE  = 16

let currentSize = DEFAULT_SIZE

function setCurrSize(newSize) {
    currentSize = newSize
}

let gridSizeVal = document.getElementById('grid-size')
let gridSlider = document.getElementById('grid-slider')
let grid = document.getElementById('grid')

gridSlider.onmousemove = (e) => updateSizeValue(e.target.value)
gridSlider.onchange = (e) => changeSize(e.target.value)

function changeSize(value) {
    setCurrSize(value)
    updateSizeValue(value)
    reloadGrid()
}

function updateSizeValue(value) {
    gridSizeVal.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
    clearGrid.innerHTML = ''
    makeGrid(currentSize)
}

function clearGrid() {
    grid.innerHTML = ''
}

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i = 0; i < (size * size); i++) {
        let cell = document.createElement('div')
        cell.classList.add('grid-item')

        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = "rgb(0,0,0,0.37)"
        })

        grid.appendChild(cell)
    }
}

window.onload = () => {
    makeGrid(DEFAULT_SIZE)
}