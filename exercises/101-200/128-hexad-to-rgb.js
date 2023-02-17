// ejercicio 128: convertir colores en hexadecimal a rgb

let hexARgb = (hexa) => {
  return {
    red: hexa >> 16,
    green: (hexa >> 8) & 255,
    blue: hexa & 255,
  };
};

console.log(hexARgb(0xffffff)); // { red: 255, green: 255, blue: 255 }
