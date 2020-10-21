import React, { useState, useEffect } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DataTabel from './components/DataTabel';
import CompareBarChart from './components/CompareBarChart';
import CompareScatterChart from './components/CompareScatterChart';
import CompareLineChart from './components/CompareLineChart';
import CompareComboChart from './components/CompareComboChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  let dataset = require('./resource/csvjson.json');
  const [selectDataset, setSelectDataset] = useState([]);
  const [selectIndexDataset, setselectIndexDataset] = useState([]);

  useEffect(() => {
    // console.log(selectDataset);
    setSelectDataset([dataset[0], dataset[1], dataset[2], dataset[3], dataset[4]])
    setselectIndexDataset(['0', '1', '2', '3', '4']);
  }, []);


  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <DataTabel data={dataset} selectList={setSelectDataset} indexList={setselectIndexDataset} ></DataTabel>
        </Grid>
        <Grid item xs={4}>
          <CompareLineChart selectList={selectDataset} indexList={selectIndexDataset}></CompareLineChart>
        </Grid>
        <Grid item xs={4}>
          <CompareScatterChart selectList={selectDataset} indexList={selectIndexDataset}></CompareScatterChart>
        </Grid>
        <Grid item xs={4}>
          <CompareComboChart selectList={selectDataset} indexList={selectIndexDataset}></CompareComboChart>
        </Grid>
        <Grid item xs={4}>
          <CompareBarChart selectList={selectDataset} indexList={selectIndexDataset}></CompareBarChart>
        </Grid>
      </Grid>
    </Box>
  );
}
