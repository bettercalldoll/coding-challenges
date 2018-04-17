let solutions = require('./4-16-2018.solution.js');

describe('Challenge 1.1 - Pounds to Kilograms', () => {
  it('9 lb - 4.082 kg', () => {
    expect(solutions.poundsToKilograms(9)).toBe(4.082);
  })
  it('0.1 lb - 0.045 kg', () => {
    expect(solutions.poundsToKilograms(0.1)).toBe(0.045);
  })
});

describe('Challenge 1.2 - Kilograms to Pounds', () => {
  it('27.216 kg - 60 lb', () => {
    expect(solutions.kilogramsToPounds(27.216)).toBe(60);
  })
  it('453.592 kg - 1000 lb', () => {
    expect(solutions.kilogramsToPounds(453.592)).toBe(1000);
  })
});

describe('Challenge 1.3 - Palindrome', () => {
  it('racecar - TRUE', () => {
    expect(solutions.palindrome('racecar')).toBe(true);
  })
  it('Eva, Can I Stab Bats In A Cave? - TRUE', () => {
    expect(solutions.palindrome('Eva, Can I Stab Bats In A Cave?')).toBe(true);
  })
  it('bettercalldoll - FALSE', () => {
    expect(solutions.palindrome('bettercalldoll')).toBe(false);
  })
  it('YAAAS - FALSE', () => {
    expect(solutions.palindrome('YAAAS')).toBe(false);
  })
});

describe('Challenge 1.4 - Coin Counter', () => {
  it('$0.27', () => {
    expect(solutions.coinCounter(.27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
      coins: 3
    });
  })
  it('$1.25', () => {
    expect(solutions.coinCounter(1.25)).toEqual({
      quarters: 5,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      coins: 5
    });
  })
  it('$2.37', () => {
    expect(solutions.coinCounter(2.37)).toEqual({
      quarters: 9,
      dimes: 1,
      nickels: 0,
      pennies: 2,
      coins: 12
    });
  })
  it('$1.91', () => {
    expect(solutions.coinCounter(1.91)).toEqual({
      quarters: 7,
      dimes: 1,
      nickels: 1,
      pennies: 1,
      coins: 10
    });
  })
});
