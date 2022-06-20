const sum = require('./exercicio1');

describe("Função Sum" , () => {
    it('se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    }
    )
    it('se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
      })
    
    it('se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () =>{
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers')
    })
}
)

const myRemove = require('./exercicio2')

describe('Funlçao Remove', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4]) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })

})