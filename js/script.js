function validar() {
  var ok = true;
  var msg = "Debes escribir algo en los campos:\n";
  if(document.getElementById('name').value == "")
  {
    msg += "- Nombre \n";
    ok = false;
  }

  if(document.getElementById('mail').value == "")
  {
    msg += "- Correo\n";
    ok = false;
  }

  if(document.getElementById('mesage').value == "")
  {
    msg += "- Mensaje\n";
    ok = false;
  }

  if(ok == false)
    alert('ERROR: Debe ingresar la informacion');
  return ok;
}
