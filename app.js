import {Cliente} from './classes.js';
import { salvarClientes, carregarClientes, renderizarLista } from './utils';

let clientes = carregarClientes();
renderizarLista(clientes);

document.getElementById('cliente-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nome || !email){
        alert('Preencha todos os campos.');
        return;
    }

    const novoCliente = new Cliente(nome, email);
    clientes.push(novoCliente);
    salvarClientes(clientes);
    renderizarLista(clientes);

    e.target.reset();
});