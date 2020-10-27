'use strict';

module.exports = function validate(password, check, setup) {

    var tmp

    if(check === 'strict-dataType-string'){
        if(setup.strict.dataTypes.includes('string')){
            if(typeof password !== 'string' || !password instanceof String){
                return false
            }
        }
    }

    if(check === 'strict-dataType-int'){
        if(setup.strict.dataTypes.includes('int')){
            if(password < 0 || !Number.isInteger(password) || (/\s/.test(password))){
                return false
            }
        }
    }

    if(check === 'strict-dataType-alpha'){
        if(setup.strict.dataTypes.includes('alpha')){
            if(!/^[a-zA-Z]+$/.test(password)){
                return false
            }
        }
    }

    if(check === 'size-min'){
        if(password.length < setup.size.min){
            return false;
        }
    }

    if(check === 'size-max'){
        if(password.length > setup.size.max && setup.size.max !== ''){
            console.log(123)
            return false;
        }
    }

    if(check === 'lowercase-min'){
        if(setup.lowercase.min > 0 && !setup.strict.dataTypes.includes('int')){
            tmp = (password.match(/[a-z]/g) || []).length
            if(tmp < setup.lowercase.min){
                return false;
            }
        }
    }

    if(check === 'lowercase-max'){
        if(setup.lowercase.max > 0 && !setup.strict.dataTypes.includes('int')){
            tmp = (password.match(/[a-z]/g) || []).length
            if(tmp > setup.lowercase.max){
                return false;
            }
        }
    }

    if(check === 'uppercase-min'){
        if(setup.uppercase.min > 0 && !setup.strict.dataTypes.includes('int')){
            tmp = (password.match(/[A-Z]/g) || []).length
            if(tmp < setup.uppercase.min){
                return false;
            }
        }
    }

    if(check === 'uppercase-max'){
        if(setup.uppercase.max > 0 && !setup.strict.dataTypes.includes('int')){
            tmp = (password.match(/[A-Z]/g) || []).length
            if(tmp > setup.uppercase.max){
                return false;
            }
        }
    }

    if(check === 'number-min'){        
        if(setup.number.min > 0 && !setup.strict.dataTypes.includes('int') && !setup.strict.dataTypes.includes('alpha')){
            tmp = (password.match(/[0-9]/g) || []).length
            if(tmp < setup.number.min){
                return false;
            }
        }
    }

    if(check === 'number-max'){    
        if(setup.number.max > 0 && !setup.strict.dataTypes.includes('int') && !setup.strict.dataTypes.includes('alpha')){
            tmp = (password.match(/[0-9]/g) || []).length
            if(tmp > setup.number.max){
                return false;
            }
        }
    }

    if(check === 'symbol-min'){
        if(setup.symbol.min > 0 && !setup.strict.dataTypes.includes('int') && !setup.strict.dataTypes.includes('alpha')){
            tmp = (password.match(/[~!@#$%^&*()_+{}|:\"<>?]/g, "") || []).length
            if(tmp < setup.symbol.min){
                return false;
            }
        }
    }

    if(check === 'symbol-max'){        
        if(setup.symbol.max > 0 && !setup.strict.dataTypes.includes('int') && !setup.strict.dataTypes.includes('alpha')){
            tmp = (password.match(/[~!@#$%^&*()_+{}|:\"<>?]/g, "") || []).length
            if(tmp > setup.symbol.max){
                return false;
            }
        }
    }

    return true

}