/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0) {
        return 0;
    }

    var max = 0;
    var diff = 0;
    var min = Number.MAX_VALUE;

    for (var i = 0; i < prices.length; i++) {
        var val = prices[i];

        if (val < min) {
            min = val;
        }

        diff = val - min;

        if (max < diff) {
            max = diff;
        }
    }

    return max;
};