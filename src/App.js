import './App.css';
import 'styled-components'
import React, {useState, useEffect} from 'react';
import DataTable , {createTheme} from 'react-data-table-component';

const App = () => {
  //1 - Configurar los hooks
  const [users, setUsers] = useState( [] )

  //2 - Función para mostrar los datos con fetch
  const URL = 'http://scratchya.com.ar/react/datos.php'
  const showData = async () => {
    const response = await fetch(URL)
    const data     = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect( ()=>{
    showData()
  }, [])

  //3 - Configuramos las columns para Datatable
  const columns = [
    {
      name: 'CODIGO',
      selector: row => row.codigo
    },
    {
      name: 'DESCRIPCION',
      selector: row => row.descripcion
    },
    {
      name: 'PRECIO',
      selector: row => row.precio
    },

  ]

  
  
  //4 - Mostramos la data en DataTable
  return (
    <div className="App">
      <h1>React tabla con fetch api Julian Hernandez</h1>
     <DataTable 
      columns={columns}
      data={users}
      
     />
    </div>
  );
}

export default App;