// Importando as classes Negociacao e Negociacoes do módulo '../models/negociacao.js' para que possamos utilizá-las neste arquivo.
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/necociacoes-view.js';

// Definindo a classe NegociacaoController, responsável por controlar a interação entre a interface do usuário (HTML) e as ações relacionadas a negociações.
export class NegociacaoController {
    // Declaração das propriedades privadas que irão armazenar os elementos HTML que serão utilizados para capturar os dados da negociação.
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    
    // Criação de uma instância da classe Negociacoes, que será utilizada para armazenar as negociações adicionadas pelo usuário.
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView') 

    // O construtor da classe, que é executado ao criar uma instância de NegociacaoController.
    // Aqui, realizamos a busca pelos elementos HTML utilizando seus IDs e atribuímos esses elementos às propriedades do objeto.
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update();
    }

    // Método chamado quando o usuário adiciona uma nova negociação.
    adiciona(): void {
        // Cria uma nova instância de Negociacao, com base nos dados informados pelo usuário.
        const negociacao = this.criaNegociacao();

        // Adiciona a negociação criada à lista de negociações armazenada em negociacoes.
        this.negociacoes.adiciona(negociacao);

        // Exibe a lista de negociações no console (apenas para fins de depuração).
        console.log(this.negociacoes.lista());

        // Limpa os campos do formulário após a adição da negociação.
        this.limparFormulario();
    }

    // Método responsável por criar uma instância de Negociacao com base nos dados preenchidos pelo usuário no formulário HTML.
    criaNegociacao(): Negociacao {
        // Expressão regular para substituir o caractere "-" (hífen) por "," (vírgula) na string da data informada pelo usuário.
        const exp = /-/g;

        // Cria um objeto Date com base na string da data e aplica a substituição definida anteriormente.
        const date = new Date(this.inputData.value.replace(exp, ','));

        // Converte a string da quantidade para um número inteiro.
        const quantidade = parseInt(this.inputQuantidade.value);

        // Converte a string do valor para um número decimal.
        const valor = parseFloat(this.inputValor.value);

        // Retorna uma nova instância de Negociacao com os dados obtidos do formulário.
        return new Negociacao(date, quantidade, valor);
    }

    // Método para limpar os campos do formulário após a adição de uma negociação.
    limparFormulario(): void {
        // Limpa o campo de data.
        this.inputData.value = '';
        
        // Limpa o campo de quantidade.
        this.inputQuantidade.value = '';
        
        // Limpa o campo de valor.
        this.inputValor.value = '';
        
        // Coloca o foco de volta no campo de data para facilitar novas inserções.
        this.inputData.focus();
    }
}
