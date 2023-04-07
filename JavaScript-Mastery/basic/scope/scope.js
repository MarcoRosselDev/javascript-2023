var gloval = "gloval scope";

function scopeFunc() {
  const constante = "local scope";
  console.log(constante);
  console.log(constante);
  console.log(gloval);
}

console.log(gloval);
scopeFunc();
