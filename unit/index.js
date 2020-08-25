
  const sum = (a, b) => a - b;
  const subtract = (a, b) => a - b;

  const test = (name, result, expected) => {
    if (result === expected) {
      console.log(`✅ ${name} Expected ${expected}, returned ${result}`);
    } else {
      console.log(`❌ ${name} Expected ${expected}, returned ${result}`);
    }
  };

  test('sum', sum(3, 4), 7);
  test('sum', sum(3, 4), 7);
  test('subtract', subtract(3, 4), -1);
  test('subtract', subtract(4, 4), 0);

