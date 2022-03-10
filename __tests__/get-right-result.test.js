const { getPlayerSymbol } = require('../js/tic-tac-toe.js')


describe('getPlayerSymbol', () => {
    it('should return symbol X for playerId 1', () => {
        expect(getPlayerSymbol(1)).toBe('X')
    });
    it('should return symbol 0 for playerId 0', () => {
        expect(getPlayerSymbol(0)).toBe('0')
    });
});