import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Fields from './components/Fields';

function App  ()  {

    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [Domain, setDomain] = useState('');
    const [data, setData] = useState([]);

    const addData = () => {
            setData([...data, {firstname, lastname,email,Domain}])
            setfirstName('');
            setlastName('');
            setemail('');
            setDomain('');

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
                    
                    <TextField 
                         value={email} 
                         onChange = {(event) => setemail(event.target.value) }
                         id="outlined-basic" 
                         label="Email" 
                         variant="outlined" 
                    />

                    <TextField 
                         value={Domain} 
                         onChange = {(event) => setDomain(event.target.value) }
                         id="outlined-basic" 
                         label="Domain" 
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
                            <h4> email </h4>
                            <h4> Domain </h4>
                            <h4> Remove  </h4>
                      </div>
                {
                    data.map((element, index) => {
                        return(
                            <div key={index} className='data-val'>
                            <h4> {element.firstname} </h4>
                            <h4> {element.lastname} </h4>
                            <h4> {element.email} </h4>
                            <h4> {element.Domain} </h4>
                <Stack>          
                  <Button onClick={removeItem} variant="contained" color="error">
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
