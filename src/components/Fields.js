import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const fields = ({firstName, lastName, index , data }) => {
        console.log(data);
    return(
            
              <div className='data-val'>
                           <h4> {firstName} </h4>
                           <h4> {lastName} </h4>
               <Stack>          
                 <Button variant="contained" color="error">
                       Remove
                </Button>
               </Stack> 
              </div>
           
    );
};

export default fields;

