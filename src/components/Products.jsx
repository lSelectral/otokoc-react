import { useState } from "react";
import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons"
import { productsData } from "../data"
import ProductAlt from "../components/ProductAlt"

import {Stack, Divider, Box, InputLabel, MenuItem, FormControl, Select, Autocomplete, TextField} from "@mui/material"

const Header = styled.div`
  display: flex;
  justify-content: space-around;

  background-color: gray;
`

const Title = styled.h3`

`

import React from 'react'

const Products = () => {

  let partNoArray = ["Hepsi"];
  for (let i = 0; i < productsData.length; i++) {
    partNoArray.push(productsData[i].partNo);
  }

  const [filters, setFilters] = useState({"brand":"Hepsi", "model":"Hepsi", "partNo":"Hepsi"});
  

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
        ...filters,
        [e.target.name]: value,
    });
  };
  if (filters.partNo == "null") {filters["partNo"] = "Hepsi"} // After clicking "X" it changes to null

  const filterData = (f) => {
    // If "Hepsi" selected, remove filter so all elements for category is visible
    var tempFilter = Object.assign({}, f); // Create independent cop of filters
    console.log(tempFilter);
    if (tempFilter.brand == "Hepsi"){tempFilter["brand"] = null; delete tempFilter["brand"]}
    if (tempFilter.model == "Hepsi"){tempFilter["model"] = null; delete tempFilter["model"]}
    if (tempFilter.partNo == "Hepsi"){tempFilter["partNo"] = null; delete tempFilter["partNo"]}

      return productsData.filter(item => Object.entries(tempFilter).every(([key, value]) =>
        item[key].includes(value)
      ))
  }

  let filteredProducts = filterData(filters);


  return (
    <Stack sx={{mb: 5}} >
      <Stack sx={{direction:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', m:2}}>
        <Box>
        <InputLabel id="carbrand-select-label">Araba Markası</InputLabel>
        <Select sx={{width:300}}
          labelId="carbrand-select-label"
          id="carbrand-select"
          name="brand"
          value={filters.brand}
          label="Car Brand"
          onChange={handleFilters}
        >
          <MenuItem value={"Hepsi"}>Hepsi</MenuItem>
          <MenuItem value={"BMW"}>BMW</MenuItem>
          <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
          <MenuItem value={"Fiat"}>Fiat</MenuItem>
          <MenuItem value={"Hyundai"}>Hyundai</MenuItem>
          <MenuItem value={"Renault"}>Renault</MenuItem>
        </Select>
        </Box>
        <Box>
        <InputLabel id="carmodel-select-label">Araba Modeli</InputLabel>
        <Select
          sx={{width:300}}
          labelId="carmodel-select-label"
          id="carmodel-select"
          name="model"
          value={filters.model}
          label="Car Model"
          onChange={handleFilters}
        >
          <MenuItem value={"Hepsi"}>Hepsi</MenuItem>
          <MenuItem value={"A6"}>A6</MenuItem>
          <MenuItem value={"Benz"}>Benz</MenuItem>
          <MenuItem value={"Fiorino"}>Fiorino</MenuItem>
          <MenuItem value={"Civic"}>Civic</MenuItem>
          <MenuItem value={"Megane"}>Megane</MenuItem>
        </Select>
        </Box>
        <Box>
        <InputLabel id="partNo-textbox">Parça No</InputLabel>
        <Autocomplete
          disablePortal
          labelId="partNo-textbox"
          id="partno-search-autocomplete"
          options={partNoArray}
          value={filters.partNo}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params}/>}
          onChange={(e, newValue) => handleFilters({"target":{"value":`${newValue}`, "name":"partNo"}})}
        />
        </Box>
    </Stack>
        
        <Header>
          <Title>Resim</Title>
          <Title>Parça No</Title>
          <Title>Parça Adı</Title>
          <Title>Tutar</Title>
          <Title>Adet</Title>
        </Header>

          {filteredProducts.map(item => (
            <Stack>
            <ProductAlt  item={item} key={item.id}></ProductAlt>
            <Divider></Divider>
            </Stack>

          ))}
          
    </Stack>
  )
}

export default Products
