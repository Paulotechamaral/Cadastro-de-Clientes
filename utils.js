const STORAGE_KEY = 'clientes';
export function salvarClientes(clientes){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));
}

export function carregarClientes(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function renderizarLista(clientes){
    const lista = document.getElementById('lista-clientes');
    lista.innerHTML = '';

    clientes.map(cliente => {
        const li = document.createElement('li');
        li.textContent = `${cliente.nome} - ${cliente.email}`;
        lista.appendChild(li);
    });

}