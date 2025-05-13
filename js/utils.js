const API_URL = 'https://crudcrud.com/api/fef591326c6849b397d223edc3fea4b5/clientes/';

// Salva um novo cliente via POST
export async function salvarCliente(cliente) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });

    if (!response.ok) throw new Error('Erro ao salvar cliente');
    return await response.json();
  } catch (error) {
    console.error('Erro ao salvar cliente:', error);
  }
}

// Carrega todos os clientes via GET
export async function carregarClientes() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erro ao carregar clientes');
    return await response.json();
  } catch (error) {
    console.error('Erro ao carregar clientes:', error);
    return [];
  }
}

// Renderiza a lista no DOM
export function renderizarLista(clientes) {
  const lista = document.getElementById('lista-clientes');
  lista.innerHTML = '';

  clientes.map(cliente => {
    const li = document.createElement('li');
    li.textContent = `${cliente.nome} - ${cliente.email}`;
    lista.appendChild(li);
  });
}
