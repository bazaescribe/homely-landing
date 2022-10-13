const scriptURL =
  "https://script.google.com/macros/s/AKfycbx_lJPUoOfkUJOOzFigs8Q4ms_P18fa-4ytFRRvXolFiUjdLARlWeyMl7NkiB7lQVrZ0Q/exec";

function handleSubmit() {
  const inputName = document.getElementById("name").value;
  const inputPhone = document.getElementById("phone").value;
  const inputYearOfBirth = document.getElementById("yearOfBirth").value;
  const inputCity = document.getElementById("city").value;

  const form = document.forms["dataForm"];
  const info = document.getElementById("info");
  const icon = `<img class='icon-info' src='../images/icons/info.svg' alt='icon-info' />`;

  form.addEventListener("submit", (e) => {
    e.preventDefault();    
    if (
      inputName === "" ||
      inputPhone === "" ||
      inputYearOfBirth === "" ||
      inputCity === ""
    ) {
      return (info.innerHTML = `${icon} Todos los datos deben estar completos.`);
    }
    info.innerHTML = `${icon} Tus datos estan siendo enviados...`;

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(() => {
        window.location.href = "/thanks";
        form.reset();
      })
      .catch(
        () =>
          (info.innerHTML = `${icon} Sucedió un error al intentar contactar, puedes comunicar via telefono.`)
      );
  });
}
