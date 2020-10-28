<h1>Simple Password Strength Checker</h1>

Validate passwords and check password strengths with custom parameters.

<h1>Install</h1>
<pre>
npm install simple-password-strength-checker --save
</pre>

<h1>Config</h1>

<h3>Type</h3>
<table>
    <thead>
        <tr>
            <td><b>Setting</b></td>
            <td><b>Default</b></td>
            <td><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>type</td>
            <td><code>validate</code></td>
            <td>Options: <code>validate</code>, <code>strength</code>.<br/><br/><code>validate</code> returns an object.<br/><br/><code>strength</code> returns an number between 0 - 1.</td>
        </tr>
    </tbody>
</table>

<h3>Config</h3>
<table>
    <thead>
        <tr>
            <td><b>Setting</b></td>
            <td><b>Type</b></td>
            <td><b>Default</b></td>
            <td><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>banned.words</td>
            <td>array</td>
            <td><code>[]</code></td>
            <td>Array of banned passwords.</td>
        </tr>
        <tr>
            <td>banned.msg</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password is in banned array.</td>
        </tr>
        <tr>
            <td>strict.dataTypes</td>
            <td>array</td>
            <td><code>[]</code></td>
            <td>Options: <code>string</code>, <code>int</code>, <code>alpha</code>.<br/><br/>Leave blank to accept all data types.</td>
        </tr>
        <tr>
            <td>strict.msg.string</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password is not a string.</td>
        </tr>
        <tr>
            <td>strict.msg.int</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password is not an integer.</td>
        </tr>
        <tr>
            <td>strict.msg.alpha</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password is not only letters.</td>
        </tr>
        <tr>
            <td>size.min</td>
            <td>int</td>
            <td>1</td>
            <td>Minimum password length.</td> 
        </tr>
        <tr>
            <td>size.max</td>
            <td>int</td>
            <td></td>
            <td>Maximum passord length. <br/><br/>Leave blank for unlimited length.</td> 
        </tr>
        <tr>
            <td>size.msg.min</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password is too short.</td> 
        </tr>
        <tr>
            <td>size.msg.max</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password is too long.</td> 
        </tr>
        <tr>
            <td>lowercase.min</td>
            <td>int</td>
            <td></td>
            <td>Minimum lower case characters.</td> 
        </tr>
        <tr>
            <td>lowercase.max</td>
            <td>int</td>
            <td></td>
            <td>Maximum lower case characters. <br/><br/>Leave blank for unlimited.</td> 
        </tr>
        <tr>
            <td>lowercase.msg.min</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password doesn't have at least % lower case characters.</td> 
        </tr>
        <tr>
            <td>lowercase.msg.max</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password has more than % lower case characters.</td> 
        </tr>
        <tr>
            <td>uppercase.min</td>
            <td>int</td>
            <td></td>
            <td>Minimum upper case characters.</td> 
        </tr>
        <tr>
            <td>uppercase.max</td>
            <td>int</td>
            <td></td>
            <td>Maximum upper case characters. <br/><br/>Leave blank for unlimited.</td> 
        </tr>
        <tr>
            <td>uppercase.msg.min</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password doesn't have at least % upper case characters.</td> 
        </tr>
        <tr>
            <td>uppercase.msg.max</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password has more than % upper case characters.</td> 
        </tr>
        <tr>
            <td>number.min</td>
            <td>int</td>
            <td></td>
            <td>Minimum integer characters.</td> 
        </tr>
        <tr>
            <td>number.max</td>
            <td>int</td>
            <td></td>
            <td>Maximum integer characters. <br/><br/>Leave blank for unlimited.</td> 
        </tr>
        <tr>
            <td>number.msg.min</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password doesn't have at least % integer characters.</td> 
        </tr>
        <tr>
            <td>number.msg.max</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password has more than % integer characters.</td> 
        </tr>
        <tr>
            <td>symbol.min</td>
            <td>int</td>
            <td></td>
            <td>Minimum symbol characters.</td> 
        </tr>
        <tr>
            <td>symbol.max</td>
            <td>int</td>
            <td></td>
            <td>Maximum symbol characters. <br/><br/>Leave blank for unlimited.</td> 
        </tr>
        <tr>
            <td>symbol.msg.min</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password doesn't have at least % symbol characters.</td> 
        </tr>
        <tr>
            <td>symbol.msg.max</td>
            <td>string</td>
            <td></td>
            <td>Error message returned if password has more than % symbol characters.</td> 
        </tr>
    </tbody>
</table>


```javascript
const config = {
    banned: {
        words: ['password', 'hello123'], 
        msg: 'Your password is too common'
    },
    strict:  {
        dataTypes: ['string'],
        msg: {
            string: 'Password must be a string',
            int: 'Password can only contain numbers',
            alpha: 'Password can only contain letters',
        }
    },
    size: {
        min: 8,
        max: 24,
        msg: {
            min: 'Password must be at least 8 character long',
            max: 'Password must be at least 24 character long'
        }
    },
    lowercase: {
        min: 1,
        max: 10, 
        msg: {
            min: 'Password must contain at least 1 lower case characters',
            max: 'Password must contain no more than 10 lower case characters',
        }
    },
    uppercase: {
        min: 1,
        max: 5,
        msg: {
            min: 'Password must contain at least 1 upper case characters',
            max: 'Password must contain no more than 5 upper case characters',
        }
    },
    number: {
        min: 1,
        max: 4,
        msg: {
            min: 'Password must contain at least 1 upper case characters',
            max: 'Password must contain no more than 5 upper case characters',
        }
    },
    symbol: {
        min: 1,
        max: 2,
        msg: {
            min: 'Password must contain at least 1 symbol characters', 
            max: 'Password must contain no more than 2 symbol characters', 
        } 
    }
}

const type = 'validate'

spsc('MyPassword', type, config)
```

<h1>Usage</h1>

```javascript
const config = {
    size: {
            min: 8,
            msg: {
                min: 'Password must be at least 8 characters long',
            }
        },
        lowercase: {
            min: 1,
            msg: {
                min: 'Password must contain at least 1 lower case character',
            }
        },
        uppercase: {
            min: 1,
            msg: {
                min: 'Password must contain at least 1 upper case character',
            }
        },
        number: {
            min: 1,
            msg: {
                min: 'Password must contain at least 1 digit',
            }
        },
        symbol: {
            min: 1,
            msg: {
                min: 'Password must contain at least 1 symbol',
            }
        }
    }
}

spsc('MyPassword', 'validate', config) // return { status: 'error', msg: 'Password must be at least 8 characters long' }

spsc('MyPass', 'strength', config) // return 0.6

```

<h1>Return</h1>

<h3>validate</h3>

```javascript
spsc('MyPassword', 'validate', config)

//success
{
    status: 'success'
}

//error
{
    status: 'error',
    msg: 'Password must be at least 8 character long'
}
```

<h3>strength</h3>
<div>Value will be between <code>0</code> and <code>1</code> (0 = weak, 1 = strong). You can add custom password strengths based on the users key press.</div>

```javascript
const res = spsc('MyPassword', 'strength', config)

if(res <= .5){
    return 'Weak password'
}

if(res < 1){
    return 'Average password'
}

if(res == 1){
    return 'Strong password'
}
```