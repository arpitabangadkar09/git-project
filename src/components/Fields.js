import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Fields = ({firstname, lastname,email,Domain, index, data }) => {
        console.log(data);
    return(
            
              <div  className='data-val'>
                           <h4> {firstname} </h4>
                           <h4> {lastname} </h4>
                           <h4> {email} </h4>
                           <h4> {Domain} </h4>
               <Stack>          
                 <Button variant="contained" color="error">
                       Remove
                </Button>
               </Stack> 
              </div>
           
    );
};

export default Fields;

