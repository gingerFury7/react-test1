import React from "react";
import "./Home.css";
import axios from "axios"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem  from "@material-ui/core/MenuItem";
import Select  from "@material-ui/core/Select";
import FormControl  from "@material-ui/core/FormControl";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';
import { BaseURL, IGetGasStations, IGetInitPlusLogs } from "../Models/ApiModels";
import TextField from "@mui/material/TextField";

import Logs from './Logs';


export default function Home() {
    let [azsNumber, setAzsNumber] = React.useState<IGetGasStations[]>([])
    let [selectedAzs, setSelectedAzs] = React.useState<string>()
    let [startDate, setStartDate] = React.useState<Date | null>(new Date())
    let [endDate, setEndDate] = React.useState<Date | null>(new Date())

    const handleChange = (event: any) => {
        setSelectedAzs(event.target.value);
        console.log(selectedAzs)
    }
    
    async function GetGasStations() {
        const getGasStationsUrl = BaseURL + 'Directory/GetGasStations';
        axios.get(getGasStationsUrl)
            .then(res => {
                const azsNumbers = res.data;
                setAzsNumber( azsNumbers )
            })
    }

    let test = [
        {
            gasStationNumberInt: 1,
            gasStationName: 'test'
        },
        {
            gasStationNumberInt: 2,
            gasStationName: 'asdf'
        }

    ]


    return(
        <div className="Home">
            <div className="lander">
                <div className="Dropdown">
                    {/* <FormControl variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">Номер АЗС</InputLabel>
                        <Select
                            value={ azsNumber }
                            onChange={ handleChange }
                            defaultValue=" "
                        >
                            {azsNumber.map((azs) => (
                                <MenuItem>
                                    {azs.gasStationName}
                                </MenuItem>
                            ))}
                        </Select>  
                    </FormControl> */}
                    <div className="GetAzsButton">
                        <Button onClick={ GetGasStations }>Get Azs</Button>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DesktopDateTimePicker
                                value={ startDate }
                                onChange={ (newValue) => {
                                    setStartDate(newValue);
                                    console.log(startDate)
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DesktopDateTimePicker
                                    value={ endDate }
                                    onChange={ (newValue) => {
                                        setEndDate(newValue);
                                        console.log(endDate)
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </div>
                </div>
                
                <div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { test.map((row) => (
                                    <TableRow >
                                        <TableCell>{ row.gasStationNumberInt }</TableCell>
                                        <TableCell>{ row.gasStationName }</TableCell>
                                        <TableCell>
                                            <Logs 
                                                gasStationName={ row.gasStationNumberInt.toString() }
                                                startDate={ startDate?.toISOString() }
                                                endDate={ endDate?.toISOString() }
                                             />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}