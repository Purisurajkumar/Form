function submithandler(){
    let form=document.getElementById("form")
  let Table=document.getElementById('mytable')
  let length=Table.rows.length 
  console.log(length)
  let row=Table.insertRow(length)
  row.className='rowbox'
  let button=document.createElement('button')
  button.addEventListener('click',()=>remove(length))
  let buttontext=document.createTextNode('x')
  button.appendChild(buttontext)
  for(i=0;i<form.elements.length-1;i++){
  let rowdata=row.insertCell(i)
  rowdata.className='data'
  rowdata.innerHTML=form.elements[i].value 
  form.elements[i].value=''
} row.appendChild(button)
    return false
}
function remove(index){
  let Table=document.getElementById('mytable')
   Table.deleteRow(index) 
}