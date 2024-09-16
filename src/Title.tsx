function Title() {
  let nombre = "Chanchito Feliz";
  if (nombre != "") {
    return <h1>Hola {nombre}</h1>;
  } else {
    return <h1>Hola Mundo</h1>;
  }
}

export default Title;
