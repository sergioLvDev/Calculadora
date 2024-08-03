const pantalla = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    console.log(boton.textContent);
    const botonApretado = boton.textContent;

    switch (boton.id) {
      case "borrar":
        if (pantalla.value.length === 1 || pantalla.value === "Error!") {
          pantalla.value = "0";
        } else {
          pantalla.value = pantalla.value.slice(0, -1);
        }
        return;
      case "igual":
        try {
          pantalla.value = eval(pantalla.value);
        } catch (error) {
          pantalla.value = "Error!";
        }
        return;
      case "c":
        pantalla.value = "0";
        return;
      default:
        if (pantalla.value === "0" || pantalla.value === "Error!") {
          pantalla.value = botonApretado;
        } else {
          pantalla.value += botonApretado;
        }
    }
  });
});
