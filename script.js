const container = document.querySelector('#container');
//Grid creation
for(let i=0; i<64;i++){
  const line = document.createElement('div');
  line.classList.add('line')
  container.appendChild(line)
  for (let i=0; i<64;i++){
    const cell = document.createElement('div')
    cell.classList.add('cell')
    line.appendChild(cell)
    cell.addEventListener('mouseenter', ()=>{
        cell.classList.add('activated')
    })
}}

