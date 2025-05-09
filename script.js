//site do crudcrud
const API_BASE = 'https://crudcrud.com/apia8ec2197408f46289ac8c1705c5a1ede/clientes';
const form = document.getElementById('cliente-form');
const listaClientes = document.getElementById('lista-clientes');

//cadastrar clientes
form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    try{
        const res = await fetch(API_BASE, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({nome, email})
        });
        if(!res.ok) throw new Error('Erro ao cadastrar');
        form.reset();
        carregarClientes();

    } catch (err){
        console.error(err);
    }
    
});
//carregar todos os clientes
async function carregarClientes() {
    listaClientes.innerHTML = '';
    try{
        const res = await fetch(API_BASE);
        const clientes = await res.json();

        clientes.forEach(cliente => {
            const li = document.createElement('li');
            li.textContent = `${cliente.nome} - ${cliente.email}`;

            const btn = document.createElement('button');
            btn.textContent = 'Excluir';
            btn.onclick = () => excluirCliente(cliente._id);
            li.appendChild(btn);
            listaClientes.appendChild(li);
        });
    }catch (err){
        console.error('Erro ao carregar cliente', err);
    }
    
}
//excluir cliente
async function excluirCliente(id) {
    try{
        await fetch(`${API_BASE}/${id}`, {method:'DELETE'});
        carregarClientes();
    }catch(err){
        console.error('Erro ao excluir cliente', err);
    }
    
}
//carregar clientes ao abrir
carregarClientes();