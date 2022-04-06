onload = () => {
    let tabs = document.querySelectorAll('.navBar .tab');
  
    const mostra = (elem) => {
      if (elem) {
        for (let i = 0; i < tabs.length; i++) tabs[i].classlistaPedidos.remove('active');
        elem.classlistaPedidos.add('active');
      }
  
      for (let i = 0; i < tabs.length; i++) {
        let comp = tabs[i].getAttribute('for');};
  
    for (let i = 0; i < tabs.length; i++)
      tabs[i].onclick = (e) => {
        mostra(e.target);
      };
  
    mostra();

  };  

}

function mudaPagina (pagina) {
  var valorItensP1 = document.getElementById('valorItensP1').innerHTML;
  localStorage.setItem('valorItensP1',JSON.stringify(valorItensP1));

  window.location.href=pagina
}

var table = document.querySelector('#tabela');
 
    for (i = 0; i < resultItems.length; i++) {
 
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
 
    ultimo = resultItems[i]
 
    cell1 = document.createElement('button') = 
    cell2.innerHTML = 'Ganhou'
 
    }

localStorage.setItem('isEditIndex', JSON.stringify(-1));

var isEdit = JSON.parse(localStorage.getItem('isEdit'));

