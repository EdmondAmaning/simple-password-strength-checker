'use strict';

const strength = require('./strength.js');
const validate = require('./validate.js')

module.exports = function spsc(password, type = 'validate', options) {

    let defaultOptions = {
        banned: {
            words: [],
            msg: ''
        },
        strict:  {
            dataTypes: [],
            msg: {
                string: 'Password must be a string',
                int: 'Password can only contain numbers',
                alpha: 'Password can only contain letters',
            }
        },
        size: {
            min: 1,
            max: '',
            msg: {
                min: 'Password must be at least 1 character long',
                max: ''
            }
        },
        lowercase: {
            min: 0,
            max: '',
            msg: {
                min: '',
                max: ''
            }
        },
        uppercase: {
            min: 0,
            max: '',
            msg: {
                min: '',
                max: ''
            }
        },
        number: {
            min: 0,
            max: '',
            msg: {
                min: '',
                max: ''
            }
        },
        symbol: {
            min: 0,
            max: '',
            msg: {
                min: '',
                max: ''
            }
        }
    };

    let setup = options ? { ...defaultOptions, ...options } : defaultOptions;

    if(type === 'strength'){
        let strengthStep = strength(setup)
        let _strength = 0;

        if(setup.banned.words.includes(password)){return 0}
        if(setup.strict.dataTypes.includes('string')){if(validate(password, 'strict-dataType-string', setup)){ _strength = (_strength + strengthStep)}}
        if(setup.strict.dataTypes.includes('int')){if(validate(password, 'strict-dataType-int', setup)){_strength = (_strength + strengthStep)}}
        if(setup.strict.dataTypes.includes('alpha')){if(validate(password, 'strict-dataType-alpha', setup)){_strength = (_strength + strengthStep)}}
        if(validate(password, 'size-min', setup)){_strength = (_strength + strengthStep)}
        if(setup.lowercase.min > 0 && !setup.strict.dataTypes.includes('int')){if(validate(password, 'lowercase-min', setup)){_strength = (_strength + strengthStep)}}
        if(setup.uppercase.min > 0 && !setup.strict.dataTypes.includes('int')){if(validate(password, 'uppercase-min', setup)){_strength = (_strength + strengthStep)}}
        if(setup.number.min > 0 && !setup.strict.dataTypes.includes('int') && !setup.strict.dataTypes.includes('alpha')){if(validate(password, 'number-min', setup)){_strength = (_strength + strengthStep)}}
        if(setup.symbol.min > 0 && !setup.strict.dataTypes.includes('int') && !setup.strict.dataTypes.includes('alpha')){if(validate(password, 'symbol-min', setup)){_strength = (_strength + strengthStep)}}
        return _strength
    }

    if(setup.banned.words.includes(password)){return {status: 'error', msg: setup.banned.msg}}
    if(!validate(password, 'strict-dataType-string', setup)){return {status: 'error', msg: setup.strict.msg.string}}
    if(!validate(password, 'strict-dataType-int', setup)){return {status: 'error', msg: setup.strict.msg.int}}
    if(!validate(password, 'strict-dataType-alpha', setup)){return {status: 'error', msg: setup.strict.msg.alpha}}
    if(!validate(password, 'size-min', setup)){return {status: 'error', msg: setup.size.msg.min}}
    if(!validate(password, 'size-max', setup)){return {status: 'error', msg: setup.size.msg.max}}
    if(!validate(password, 'lowercase-min', setup)){return {status: 'error', msg: setup.lowercase.msg.min}}
    if(!validate(password, 'lowercase-max', setup)){return {status: 'error', msg: setup.lowercase.msg.max}}
    if(!validate(password, 'uppercase-min', setup)){return {status: 'error', msg: setup.uppercase.msg.min}}
    if(!validate(password, 'uppercase-max', setup)){return {status: 'error', msg: setup.uppercase.msg.max}}
    if(!validate(password, 'number-min', setup)){return {status: 'error', msg: setup.number.msg.min}}
    if(!validate(password, 'number-max', setup)){return {status: 'error', msg: setup.number.msg.max}}
    if(!validate(password, 'symbol-min', setup)){return {status: 'error', msg: setup.symbol.msg.min}}
    if(!validate(password, 'symbol-max', setup)){return {status: 'error', msg: setup.symbol.msg.max}}
    
    return {status: 'success'}

}