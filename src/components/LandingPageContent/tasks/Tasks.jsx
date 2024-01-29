import { Task } from '@mui/icons-material'
import React from 'react'

import { useState } from 'react';
import { Tab, Skeleton, Box } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { TabContext, TabList, TabPanel } from '@mui/lab';


export const Tasks = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };


  return (
    
    <Box className=''>
      
      Tasks

    </Box>
  )
}

export default Tasks