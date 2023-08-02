// Importando a classe NegociacaoController do módulo './controllers/negociacao-controller.js' para que possamos utilizar suas funcionalidades neste arquivo.
import { NegociacaoController } from './controllers/negociacao-controller.js';
// Criando uma instância da classe NegociacaoController e armazenando-a na variável 'controller'.
const controller = new NegociacaoController();
// Buscando o elemento HTML com a classe 'form' e armazenando-o na variável 'form'.
const form = document.querySelector('.form');
// Adicionando um ouvinte de evento para o evento 'submit' (envio do formulário) do elemento 'form'.
form.addEventListener('submit', event => {
    // Prevenindo o comportamento padrão do envio do formulário, que é recarregar a página.
    event.preventDefault();
    // Chamando o método 'adiciona' do objeto 'controller' (instância de NegociacaoController).
    // Esse método é responsável por adicionar uma nova negociação com base nos dados do formulário.
    controller.adiciona();
});
