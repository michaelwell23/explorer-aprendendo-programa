var listaDeCompras = ['Maçãs', 'Leite', 'Pão', 'Ovos'];

listaDeCompras.push('Cereal');

// Removendo um item da lista
var itemRemovido = listaDeCompras.pop();

// Iterando pela lista de compras e exibindo cada item
for (var i = 0; i < listaDeCompras.length; i++) {
  console.log('Item ' + (i + 1) + ': ' + listaDeCompras[i]);
}
