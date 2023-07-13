function convertTemperature(value, type) {
    if (type === 'celsius') {
      // Convert Celsius to Fahrenheit
      const fahrenheit = (value * 9/5) + 32;
      document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else if (type === 'fahrenheit') {
      // Convert Fahrenheit to Celsius
      const celsius = (value - 32) * 5/9;
      document.getElementById('celsius').value = celsius.toFixed(2);
    }
  }
  