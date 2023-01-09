import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import RootContext from "../../context/context";

const PriceFilter = () => {
  const { priceRange, priceFilter, handlePriceRangeChange } =
    useContext(RootContext);
  // console.log(priceRange);
  return (
    <Box sx={{ width: 300 }} style={{ padding: "10px" }}>
      {priceRange.length !== 0 && (
        <Slider
          // getAriaLabel={() => "Temperature range"}
          value={priceFilter}
          onChange={(e, value) => handlePriceRangeChange(value)}
          valueLabelDisplay="auto"
          min={priceRange[0]}
          max={priceRange[1]}
          marks={true}
        />
      )}
    </Box>
  );
};

export default PriceFilter;
