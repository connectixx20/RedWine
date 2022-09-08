import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useFormContext } from 'react-hook-form';

const marks = [
  {
    value: 0,
    label: '[<5k]',
  },
  {
    value: 30,
    label: '[5k-10k]',
  },
  {
    value: 70,
    label: '[50k-500k]',
  },
  {
    value: 100,
    label: '[500k+]',
  },
];

function valuetext(value) {
  return value;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function FollowerCount() {
  const {setValue,getValues}=useFormContext()

  return (
    <Box >
      <Slider
        aria-label="Restricted values"
        defaultValue={getValues("follower") ? getValues("follower") : 0}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        
        onChange={(e,val)=>setValue("follower",val)}
        
        valueLabelDisplay="off"
        marks={marks}
      />
    </Box>
  );
}
