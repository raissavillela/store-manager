const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const salesModel = require('../../../src/models/sales.model');
const { saleDB, salesDB } = require('../../mocks/sales.mock');

describe('Testa a camada salesModel', function () {
  it('Testa o retorno na lista de vendas', async function () {
    sinon.stub(connection, 'execute').resolves([salesDB]);
    const salesArr = await salesModel.findAllModel();
    expect(salesArr).to.be.an('array');
    expect(salesArr).to.be.deep.equal(salesDB);
  });

  it('Testa o retorno de uma venda apenas', async function () {
    sinon.stub(connection, 'execute').resolves([saleDB]);
    const saleUnic = await salesModel.findByIdModel(1);
    expect(saleUnic[0]).to.be.an('object');
    expect(saleUnic).to.be.deep.equal(saleDB);
  });
  afterEach(function () {
    sinon.restore();
  });
});
