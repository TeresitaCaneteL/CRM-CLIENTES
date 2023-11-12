import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction } from './pages/NuevoCliente'
import Index, { loader as clientesLoader } from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/EditarCliente'
import { action as eliminarClienteAction } from './components/Cliente'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
      path: '/clientes/nuevo',
      element: <NuevoCliente />,
      action: nuevoClienteAction,
      errorElement: <ErrorPage />
     },
     {
       path: '/clientes/:clienteId/editar',
       element: <EditarCliente/>,
       loader: editarClienteLoader,
       action: editarClienteAction,
       errorElement: <ErrorPage />
     },
     {
       path: '/clientes/:clienteId/eliminar',
       action: eliminarClienteAction

     }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
/*
aca estoy cargando y enrutando
import {createBrowserRouter, RouterProvider } from 'react-router-dom' importo esto para las rutas
con createBrowserRouter  puedo crear los path para las rutas, en element puedo agregar en componente que va a renderizar esa ruta
- en el primer path dirije a la pagina principal y renderiza mi layout comun para todas las paginas,
-a ese path le agrego children que es un arreglo de objetos, asi los siguientes paths renderizaran mi layout
-el primer objeto de mi arreglo es el index, al que le agrego un loader desde el index.
-el loader me permite cargar datos antes de renderizar un componente  como apis, su funcion esta en el index, usé json-server para simular una api
(
  -sudo npm install -g json-server lo instala a nivel global,
  -creo un archivo db.json con los datos de los clientes
  -json-server --watch db.json  debo correr json-server que simula la api
  -en .env cree la variable de entorno para mi api
)
- errorElement: <ErrorPage/> cree una pantalla de error, usando useRouteError de react-router-dom su funcion está en el componente ErrorPage.jsx

-Segundo path (path: '/clientes/nuevo',): Acá usé 'action' su función está en nuevoCliente
-Action me permite describir cambios en el estado de la aplicación, siempre debe llevar recibir un {request} en este caso lo
usé como una función asincrona que hace validaciones de mi formulario de ingreso de clientes


*/