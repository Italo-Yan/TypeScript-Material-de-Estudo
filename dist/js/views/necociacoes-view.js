export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
        <table class="table table-hover table-bordered"
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
                <tbody>
                </tbody>
            </thead>
        </table>
        `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
