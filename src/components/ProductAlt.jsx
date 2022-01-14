import {useState} from 'react';
import { AddCircleOutlined, RemoveCircleOutlined } from "@material-ui/icons"
import {List, ListItem, ListItemText, Box, Avatar, TextField, Autocomplete} from '@mui/material'

const ProductAlt = ({item}) => {

  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (type) => {
    if(type === "decrease"){
      quantity > 0 && setQuantity(quantity-1);
    } else if (type == "increase") {
        // Add maximum stock number to database then change max number here 
        setQuantity(quantity+1);
    } else {
      if (type == "" || parseInt(type) < 0) {type = 0}
      if (type.startsWith("0") ) {type = 0}
      setQuantity(parseInt(type));
    }
  }

  return (
      <ListItem sx= {{pl:'10', pr:'5', m:'0'}}>
          <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
            alt="The house from the offer."
            src={item.image}
          />

          <ListItemText id="999999"/>
          <ListItemText id="15" primary={item.partNo} />
          <ListItemText id="15" primary={item.partName} />
          <ListItemText id="15" primary={item.price} />

          <TextField id="outlined-basic" type="number" label="Sayı" value={quantity} variant="outlined" onChange={(e) => handleQuantity(e.target.value)}/>

          <AddCircleOutlined style={{ height: '30px', width: '30px', "marginLeft": '10px', cursor: 'pointer' }} onClick={() => handleQuantity("increase")}/>
          <RemoveCircleOutlined style={{ height: '30px', width: '30px', "marginLeft": '5px', cursor: 'pointer' }} onClick={() => handleQuantity("decrease")}/>
      </ListItem>

  );
}

export default ProductAlt;

