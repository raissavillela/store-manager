const sinon = require('sinon');
const { expect } = require('chai');

const { validateName } = require('../../../../src/services/validations/validation.products');

describe('Testa a validação de produtos', function () {
  it('Testa se retorna Erro 400', function () {
    const req = { body: { name: '' } };
    const res = { status: sinon.stub().returns({ json: sinon.spy() }) };
    const next = sinon.spy();
    validateName(req, res, next);

    expect(res.status.calledWith(400)).to.be.equal(true);
  });
  it('Testa se retorna Erro 422 se name < 5', function () {
    const req = { body: { name: 'flam' } };
    const res = { status: sinon.stub().returns({ json: sinon.spy() }) };
    const next = sinon.spy;
    validateName(req, res, next);

    expect(res.status.calledWith(422)).to.be.equal(true);
  });
});
