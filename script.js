const findForm = document.getElementById('findForm');
findForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const find = Number(document.getElementById('find').value);
  let listOfValues = [10, 20, 30, 40, 50, 60, 70];
  findValue(find, listOfValues)

})

function findIndicatorMValue(indicator1, indicator2) {
  const result = (indicator1 + indicator2) / 2;
  return Number(result.toFixed());
}

function findValue(find, listOfValues) {
  let finded = false;

  let indicator1 = listOfValues[0];
  let indicator2 = listOfValues[listOfValues.length -1];


  while(finded === false) {
    let indicatorM = findIndicatorMValue(indicator1, indicator2)
    console.log(find, indicatorM)
    if(find === indicatorM) {
      console.log('valor encontrado en la posicion', listOfValues.indexOf(indicatorM));
      finded = true;

    }else if(find > indicatorM) {
      console.log('mayor')
      indicator1 = indicatorM + 1;

    }else if(find < indicatorM) {
      console.log('menor')
      indicator2 = indicatorM - 1;
    
    }
    
  }

}
