import { Cliente } from './classes.js';
import { salvarCliente, carregarClientes, renderizarLista } from './utils.js';

const form = document.getElementById('cliente-form');

async function inicializarApp() {
  const clientes = await carregarClientes();
  renderizarLista(clientes);
}

inicializarApp();

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!nome || !email) {
    alert('Preencha todos os campos!');
    return;
  }

  const novoCliente = new Cliente(nome, email);
  await salvarCliente(novoCliente);

  const clientesAtualizados = await carregarClientes();
  renderizarLista(clientesAtualizados);
  form.reset();
});
