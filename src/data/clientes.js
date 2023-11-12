export async function obtenerClientes(){
  const respuesta = await fetch(import.meta.env.VITE_API_URL) // POR DEAFAULT EL METODO DE FETCH ES GET
  const resultado = await respuesta.json()
  return resultado;

}
export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`) // POR DEAFAULT EL METODO DE FETCH ES GET
  const resultado = await respuesta.json()
  return resultado;

}

export async function agregarCliente(datos){
  try{
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers:{
        'Content-Type':'application/json'
      }
    })
    await respuesta.json()
  }catch (error){
    console.log(error)
  }
}

export async function actualizarCliente(id, datos){
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}

export async function eliminarCliente(id){
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE'
    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}
/*
-Primera funcion asincrona hace el fetch a mi api provisoria, importa la url desde .env
-Segunda función asincrona agrega clientes a mi api provisoria
*/
//error boundry son componentes de react que obtienen errores de codigo de cualquier parte del proyecto y se muestran en pantalla