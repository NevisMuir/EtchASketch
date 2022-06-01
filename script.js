const container = document.querySelector('#container');
//Grid creation function
function createGrid(n){
  for(let i=0; i<n;i++){
    const line = document.createElement('div');
    line.classList.add('line')
    container.appendChild(line)
    for (let i=0; i<n;i++){
      const cell = document.createElement('div')
      cell.classList.add('cell')
      line.appendChild(cell)
      cell.addEventListener('mouseenter', ()=>{
          cell.classList.add('activated')
    })
}}}

createGrid(32);
const newGridButton = document.querySelector('#sizeSelector')
newGridButton.addEventListener('click', () =>{
  let length = prompt ("Please enter a length between 4 and 100")
  if (length>100 || length<4 || isNaN(length)){
    alert("Error! Please enter a number between 4 and 100")
  }
  else {
    container.textContent="";
    createGrid(length)
  }
})

