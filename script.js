function drop(e) {
  const id = e.dataTransfer.getData('id');
  const valueDropped = e.dataTransfer.getData('value');
  const currentDropexpectation = e.target.getAttribute('data-value');
  if (valueDropped === currentDropexpectation) {
    e.target.appendChild(document.getElementById(id));
  }else{
    alert('Invalid object dropped')
  }
}
function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData('id', e.target.id);
  e.dataTransfer.setData('value', e.target.getAttribute('data-value'));
}
