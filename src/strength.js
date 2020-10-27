'use strict';

module.exports = function strength(options) {
    let total = 0;

    if(options.strict.dataTypes.includes('string')){total++}
    if(options.strict.dataTypes.includes('int')){total++}
    if(options.strict.dataTypes.includes('alpha')){total++}
    if(parseInt(options.size.min) > 0){total++}
    if(parseInt(options.lowercase.min) > 0){total++}
    if(parseInt(options.uppercase.min) > 0){total++}
    if(parseInt(options.number.min) > 0){total++}
    if(parseInt(options.symbol.min) > 0){total++}

    return (1/total)
};