import getUrlSearch from './get-url-search'
describe('url', function () {
  it('getUrlSearch', function () {
    const v1 = getUrlSearch('name', '?name=123')
    const v2 = getUrlSearch('name2', '?name=123')
    const v3 = getUrlSearch('name', '?aname=123')
    expect(v1).to.equal('123')
    expect(v2).to.be.null
    expect(v3).to.be.null

    const reg = /[?&]registered(?==|&|$)/
    expect(reg.test('?registered')).to.equal(true)
    expect(reg.test('?registered=')).to.equal(true)
    expect(reg.test('?registereda')).to.equal(false)
    expect(reg.test('?registered&')).to.equal(true)
    expect(reg.test('?a=&registered')).to.equal(true)
  })
})
