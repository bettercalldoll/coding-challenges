module.exports = {
  /**
   * Test whether or not the incoming string is a palindrome
   */
  
  palindrome: (string) => {
    var cleanText = string.replace(/\W/g, '');
    var halfPoint = Math.round(cleanText.length / 2);
    var splits = [
      cleanText.substr(0, halfPoint),
      cleanText.substr(halfPoint, cleanText.length)
    ];

    if (splits[0].length === splits[1].length + 1) {
      splits[0] = splits[0].substr(0, splits[0].length - 1);
    }

    return splits[0].toLowerCase() === splits[1].split('').reverse().join('').toLowerCase();
  },
  
  /**
   * Convert Pounds to Kilograms
   */
  
  poundsToKilograms: (number) => {
    return Math.round(number * (1 / 2.2046) * 1000) / 1000;
  },

  /**
   * Convert Kilograms to Pounds
   */

  kilogramsToPounds: (number) => {
    return Math.round(number * 2.2046);
  },

  /**
   * Take in a dollar amount and return back exact change with the least amount of coins in this format:
   * { 
   *   quarters: 0, 
   *   dimes: 0, 
   *   nickels: 0, 
   *   pennies: 0, 
   *   coins: 0 
   *  }
   */
  
  coinCounter: (number) => {
    number = number * 100;
    var results = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      coins: 0
    };

    var start = 0;
    while (start < number) {
      if (start + 25 <= number) {
        results.quarters++;
        start += 25;
      } else if (start + 10 <= number) {
        results.dimes++;
        start += 10
      } else if (start + 5 <= number) {
        results.nickels++;
        start += 5
      } else if (start + 1 <= number) {
        results.pennies++;
        start += 1
      }
    }

    results.coins = results.quarters + results.dimes + results.nickels + results.pennies;
    return results;
  }
}

