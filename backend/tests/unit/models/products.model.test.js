const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/product.model');
const { productDB, productFromModel, productsDB, productsFromModel } = require('../../mocks/products.mocks');

describe('Testa a camada productModel', function () {
  it('Testa o retorno na lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsDB]);
    const productsArr = await productsModel.findAllModel();
    expect(productsArr).to.be.an('array');
    expect(productsArr).to.be.deep.equal(productsFromModel);
  });
  it('Testa o retorno de um produto apenas', async function () {
    sinon.stub(connection, 'execute').resolves([productDB]);
    const productUnic = await productsModel.findByIdModel(1);
    expect(productUnic).to.be.an('object');
    expect(productUnic).to.be.deep.equal(productFromModel);
  });
  it('Testa se dá pra inserir apenas um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 2 }]);
    const product = await productsModel.insertModel('manopola do thanos');
    expect(product).to.be.an('object');
  });
  it('Testa se o produto é detalhado', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const product = await productsModel.deleteModel(1);
    expect(product).to.be.an('object');
  });
  afterEach(function () {
    sinon.restore();
  });
});
