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
    }
  }
  cellColor('black'); //figure out way to keep and change colors
}

//changes color on hover, color variable lets us use this for different colors
function cellColor(color){
  const cells = document.querySelectorAll('.cell')
  cells.forEach((cell)=>{
    cell.addEventListener('mouseenter',()=>{
      cell.className='';
      cell.classList.add('cell',color)
    })
  })
}
//-------------------------------------------
//intitial Grid
createGrid(32);
//initial color
const newGridButton = document.querySelector('#sizeSelector')
newGridButton.addEventListener('click', () =>{
  let length = prompt ("How many squares per side? Must be between 4 and 100")
  if (length>100 || length<4 || isNaN(length)){
    alert("Error! Please enter a number between 4 and 100")
  }
  else {
    container.textContent="";
    createGrid(length)
  }
})


