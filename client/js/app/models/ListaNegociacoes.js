class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    return this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    // blindagem do array _negociacoes
    return [].concat(this._negociacoes);
  }
}