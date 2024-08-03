const pantalla = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    console.log(boton.textContent);
    const botonApretado = boton.textContent;

    if (boton.id === "borrar") {
      if (pantalla.value.length === 1 || pantalla.value === "Error!") {
        pantalla.value = "0";
      } else {
        pantalla.value = pantalla.value.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.value = eval(pantalla.value);
      } catch (error) {
        pantalla.value = "Error!";
      }
      return;
    }

    if (boton.id === "c") {
      pantalla.value = "0";
      return;
    }
    if (pantalla.value === "0" || pantalla.value === "Error!") {
      pantalla.value = botonApretado;
    } else {
      pantalla.value += botonApretado;
    }
  });
});
