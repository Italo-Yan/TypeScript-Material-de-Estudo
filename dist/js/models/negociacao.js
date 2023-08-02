// Definindo a classe Negociacao, que representa uma negociação contendo data, quantidade e valor.
export class Negociacao {
    // O construtor da classe, que recebe os valores de data (privado), quantidade e valor (públicos).
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // Método get para a propriedade 'data', que permite obter a data da negociação.
    // O uso do método get cria uma propriedade virtual, ou seja, a data será calculada sempre que for acessada, não sendo possível modificar diretamente o valor original.
    get data() {
        // Cria uma nova instância de Date baseada na data original, garantindo que o valor da data não será modificado caso o usuário acesse o valor retornado.
        const data = new Date(this._data.getTime());
        // Retorna a data calculada.
        return this._data;
    }
    // Método get para a propriedade 'volume', que calcula o volume total da negociação multiplicando a quantidade pelo valor unitário.
    get volume() {
        // Retorna o resultado do cálculo do volume.
        return this.quantidade * this.valor;
    }
}
