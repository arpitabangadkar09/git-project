import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function App  ()  {

    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [data, setData] = useState([]);

    const addData = () => {
            setData([...data, {firstname, lastname}])
            setfirstName('');
            setlastName('');

    }
    
    const removeItem = (index) =>{
         let arr = data;
         arr.splice(index,1);
         setData([...arr]);
    }

    return (
        <div className="App">
            <Header />
            <br />
            <div className='form'>
                <Stack spacing={2} direction="row">
                    <TextField 
                         value={firstname} 
                         onChange = {(event) => setfirstName(event.target.value) }
                         id="outlined-basic" 
                         label="First Name" 
                         variant="outlined"
                    />
                    <TextField 
                         value={lastname} 
                         onChange = {(event) => setlastName(event.target.value) }
                         id="outlined-basic" 
                         label="Last Name" 
                         variant="outlined" 
                    />
                    <Button onClick = {addData} color='success' variant="contained">
                        <AddIcon />
                    </Button>
                </Stack>
                <div className='data'>
                      <div className='data-val'>
                            <h4> FirstName </h4>
                            <h4> LastName </h4>
                            <h4> Remove  </h4>
                      </div>
                      {
                    data.map((element, index) => {
                        return(
                            <div key ={index} className='data-val'>
                            <h4> {element.firstName} </h4>
                            <h4> {element.lastName} </h4>
                <Stack>          
                  <Button onClick={() => removeItem(index)} variant="contained" color="error">
                        Remove
                 </Button>
                </Stack> 
               </div>
                        )
                    })
                }
                </div>
              
            </div>
        </div>
    );
}
export default App;
