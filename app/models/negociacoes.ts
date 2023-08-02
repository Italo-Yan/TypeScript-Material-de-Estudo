// Importando a classe Negociacao do módulo "./negociacao.js" para que possamos utilizar suas funcionalidades neste arquivo.
import { Negociacao } from "./negociacao.js";

// Definindo a classe Negociacoes, que é responsável por armazenar uma lista de negociações.
export class Negociacoes {
    // Declaração da propriedade privada 'negociacoes', que é um array de Negociacao.
    // A lista de negociações é inicializada como um array vazio.
    private negociacoes: Negociacao[] = [];

    // Método 'adiciona', que recebe uma negociação (do tipo Negociacao) como parâmetro e adiciona essa negociação à lista de negociações do objeto.
    adiciona(negociacao: Negociacao) {
        // Utiliza o método 'push' para adicionar a negociação ao array de 'negociacoes'.
        this.negociacoes.push(negociacao);
    }

    // Método 'lista', que retorna uma cópia somente leitura (readonly) do array de negociações.
    // O uso de 'readonly' impede que a lista de negociações seja modificada diretamente fora da classe Negociacoes, protegendo-a contra alterações indesejadas.
    lista(): readonly Negociacao[] {
        // Retorna a lista de negociações como uma cópia somente leitura.
        return this.negociacoes;
    }
}
