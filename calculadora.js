  // Función para calcular la suma de dos números
  function suma(num1, num2) {
    return num1 + num2;
  }
  // Función para calcular la resta de dos números
  function resta(num1, num2) {
    return num1 - num2;
  }
  // Función para calcular la multiplicación de dos números
  function multiplicacion(num1, num2) {
    return num1 * num2;
  }
  // Función para calcular la división de dos números
  function division(num1, num2) {
    if (num2 != 0) {
      return num1 / num2;
    } else {
      return "Error: No se puede dividir por cero";
    }
  }

  function realizarOperacion(num1, num2, operacion) {
    if (operacion === 1) {
      return suma(num1, num2);
    } else if (operacion === 2) {
      return resta(num1, num2);
    } else if (operacion === 3) {
      return multiplicacion(num1, num2);
    } else if (operacion === 4) {
      return division(num1, num2);
    } else if (operacion === 5) {
      return "Saliendo..."; // Indica que el usuario quiere salir
    } else {
      console.log("Operación no válida");
      return "Operación no válida";
    }
  }

  let operacion;
  while (true) {
    operacion = parseInt(
      prompt("Ingrese la operación: 1 (suma), 2 (resta), 3 (multiplicación), 4 (división), 5 (salir)")
    );

    if (operacion < 1 || operacion > 5 || isNaN(operacion)) {
      alert("Operación no válida. Por favor, ingrese un número entre 1 y 5.");
      continue; // Vuelve al inicio del bucle
    }

    if (operacion === 5) {
      alert("Programa terminado, Gracias por usar la Calculadora");
      break; // Sale del bucle
    }

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado = realizarOperacion(num1, num2, operacion);
    alert("Resultado: " + resultado);
  }
