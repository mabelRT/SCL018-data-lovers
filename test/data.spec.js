import sortData  from '../src/data.js';


/*describe('sortData.sortedCharacters', () => {
  test('sortData.sortedCharacters sea una funcion', () => {
    expect(typeof sortData.sortedCharacters).toBe('function');
  });

  test('Abradolf Lincler > Accountant dog debe dar Abradolf Lincler ', () => {
    expect(sortData.sortedCharacters(Abradolf, Accountant)).toBe(Abradolf);
  });
});*/
describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns sortData', () => {
    expect(sortData('Abradolf Lincler, Accountant dog')).toBe('Abradolf Lincler');
  });
});



/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
