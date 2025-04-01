const AnaliseDeDados = require('../src/analiseDeDados');

describe('Testes da classe AnaliseDeDados', () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test('Deve adicionar novos dados corretamente', () => {
    analise.adicionarDados([6, 7]);
    expect(analise.dados).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('Deve lançar erro ao adicionar dados que não sejam array', () => {
    expect(() => analise.adicionarDados(6)).toThrow("Os dados devem ser um array.");
  });

  test('Deve limpar os dados corretamente', () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test('Deve ordenar os dados corretamente', () => {
    analise.adicionarDados([10, -1]);
    expect(analise.ordenarDados()).toEqual([-1, 1, 2, 3, 4, 5, 10]);
  });

  test('Deve calcular a média corretamente', () => {
    expect(analise.calcularMedia()).toBe(3);
  });

  test('Deve calcular a mediana corretamente', () => {
    expect(analise.calcularMediana()).toBe(3);
  });

  test('Deve calcular a moda corretamente', () => {
    analise.adicionarDados([2, 2, 3]);
    expect(analise.calcularModa()).toEqual([2]);
  });

  test('Deve calcular a variância corretamente', () => {
    expect(analise.calcularVariancia()).toBe(2);
  });

  test('Deve calcular o desvio padrão corretamente', () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(1.414, 3);
  });

  test('Deve encontrar o valor mínimo corretamente', () => {
    expect(analise.encontrarMinimo()).toBe(1);
  });

  test('Deve encontrar o valor máximo corretamente', () => {
    expect(analise.encontrarMaximo()).toBe(5);
  });

  test('Deve normalizar os dados corretamente', () => {
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });

  test('Deve calcular o percentil corretamente', () => {
    expect(analise.calcularPercentil(50)).toBe(3);
  });

  test('Deve calcular a soma corretamente', () => {
    expect(analise.calcularSoma()).toBe(15);
  });

  test('Deve calcular o produto corretamente', () => {
    expect(analise.calcularProduto()).toBe(120);
  });

  test('Deve calcular a amplitude corretamente', () => {
    expect(analise.calcularAmplitude()).toBe(4);
  });

  test('Deve calcular o coeficiente de variação corretamente', () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.14, 2);
  });

  test('Deve remover outliers corretamente', () => {
    analise.adicionarDados([100]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
  });

  test('Deve calcular a correlação corretamente', () => {
    const outroConjunto = [2, 4, 6, 8, 10];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeCloseTo(1, 3);
  });

  test('Deve retornar null para correlação com conjuntos de tamanhos diferentes', () => {
    const outroConjunto = [2, 4, 6];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeNull();
  });
});