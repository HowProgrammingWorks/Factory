'use strict';

const logable = fieldRules => data => {
  var result = {}
  Object.keys(fieldRules).forEach(key => {
    Object.defineProperty(result,key,{
      get: () => {
        console.log('Reading key:', key);
        return data[key];
      },
      set: newValue => {
        console.log('Writing key:', key, newValue);
        const fieldRule = fieldRules[key];
        const valid = typeof newValue === fieldRule.type && fieldRule.validate(newValue);
        if (valid) data[key] = newValue;
        else console.log('Validation failed:', key, newValue);  
      }
    })
  })
  result.toString = () =>
    `Logable\t${
      Object.keys(fieldRules).map(key => data[key] + '\t').join()
    }`;
  return result;
}

// Usage

const Person = logable({
  name: { type: 'string', validate: name => name.length > 0 },
  born: { type: 'number', validate: born => !(born % 1) },
});

const p1 = Person({ name: 'Marcus Aurelius', born: 121 });
console.log(p1.toString());
p1.born = 1923;
console.log(p1.born);
p1.born = 100.5;
p1.name = 'Victor Glushkov';
console.log(p1.toString());
