import { useLoaderData, useLocation } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from '../data/clientes'

export function loader(){
 const clientes = obtenerClientes()
 return clientes;

}

const Index = () => {
  const clientes = useLoaderData();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className='p-2'>Clientes</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente
                cliente = {cliente}
                key = {cliente.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay Clientes aún</p>
      )}
    </>
  )
}

export default Index

/*
-la primera función es el loader, importé  useLoaderData desde react-router-dom
en la función loader creo una variable que recibe la funcion obtenerClientes() que está en la carpeta data/clientes.jsx
esta función hace el fetch de mi api provisoria para la que estoy usando json-server como simulador, loader siempre debe tener un return
-Dentro de la función de index creo una variable clientes a la que le paso useLoaderData();
-En el return de esta función hago el map sobre clientes y envío los datos de los clientes y su key al componente de Cliente como props
*/