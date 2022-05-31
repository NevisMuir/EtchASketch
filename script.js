const container = document.querySelector('#container');
for(let i=0; i<16;i++){const line = document.createElement('div');
line.classList.add('line')
container.appendChild(line)
for (let i=0; i<16;i++){
const cell = document.createElement('div')
cell.classList.add('cell')
line.appendChild(cell)
}}