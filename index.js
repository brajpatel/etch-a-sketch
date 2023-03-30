const colorPicker = document.getElementById('color-picker');
const currentGridSize = document.getElementById('current-grid-size');
const gridRange = document.getElementById('grid-range');
let currentColor = 'black';
let updatedSize;

colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
})

gridRange.addEventListener('input', () => {
    currentGridSize.textContent = gridRange.value;
    updatedSize = gridRange.value;
    createGrid(updatedSize);
})

function createGrid(size) {
    let gridSize = size * size;
    const grid = document.getElementById('grid');
    grid.textContent = '';
    grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;

    for(let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.background = currentColor;
        });

        grid.appendChild(cell);
    }
}

window.onload = createGrid(35);