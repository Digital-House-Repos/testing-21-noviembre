const { generateText, validateInput } = require('../util');

describe('generateText', () => {
  test('Nombre correct, edad en rango, level en opcion', () => {
    const text = generateText('Max', '30', 'Licenciatura');
    expect(text).toBe('Registro OK de Max en: Licenciatura.');
  });

  test('Nombre correct, edad fuera de rango superior, level en opcion', () => {
    const text = generateText('Laura', '150', 'Doctorado');
    expect(text).toBe('No pudimos registrar a: Laura. Por favor contactá a soporte@dh.com para más información.');
  });

  test('Nombre correct, edad fuera de rango inferior, level en opcion', () => {
    const text = generateText('Pepe', '15', 'Maestría');
    expect(text).toBe('Edad ingresada no válida. Por favor intentá nuevamente.');
  });
});

describe('validateInput', () => {
  test('nombre completo, notEmpty false', () => {
    const text = validateInput('Max', false);
    expect(text).toBe(true);
  });

  test('edad valida, notEmpty false', () => {
    const text = validateInput('30', false);
    expect(text).toBe(true);
  });

  test('nombre con espacios, notEmpty false', () => {
    const text = validateInput('   ', true);
    expect(text).toBe(false);
  });

  test('nombre vacio, notEmpty false', () => {
    const text = validateInput('', true);
    expect(text).toBe(false);
  });
});

