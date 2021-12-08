import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import IconButton from "@material-ui/core/IconButton";
import BuildIcon from '@material-ui/icons/Build';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { BaseURL, IGetInitPlusLogs, ILogsProps } from "../Models/ApiModels";
import axios from "axios";
import "./Logs.css";

export default function Logs(props: ILogsProps) {
    const [show, setShow] = useState(false)
    const [logs, setLogs] = useState<IGetInitPlusLogs[]>([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getInitPlusLog(getGasStation: string, getStartDate: string | null | undefined, getEndDate: string | null | undefined) {
        const getInitPlusLogUrl = BaseURL + 'InitPlusLog/GetInitPlusLogs'
        const body = {
            gasStation: getGasStation,
            startDate: getStartDate,
            endDate: getEndDate,
        }
        axios.get(getInitPlusLogUrl, {
            params: body
        })
            .then(res => {
                const logs = res.data;
                setLogs(logs);
            })
        setShow(true);
        console.log(logs);
    }

    async function test() {
        // const getInitPlusLogUrl = BaseURL + 'InitPlusLog/GetInitPlusLogs';
        // const body = {
        //     gasStation: props.gasStationName,
        //     startDate: props.startDate,
        //     endDate: props.endDate,
        // }
        // axios.get(getInitPlusLogUrl, {
        //     params: body
        // })
        //     .then(res => {
        //         const logs = res.data;
        //         setLogs(logs);
        //     })
        setShow(true);
        console.log(logs);
    }

    let testLogs = [
        {
            id: "1",
            groupLogId: "1",
            createDate: "1",
            logTypeId: 1,
            moduleName: "1",
            logMessage: 1,
        },
        {
            id: "2",
            groupLogId: "2",
            createDate: "2",
            logTypeId: 2,
            moduleName: "2",
            logMessage: "2"
        }
    ]

    return (
        <>
            <Tooltip title="Нажмите для открытия логов">
                <IconButton size="small" color="primary" onClick={ handleShow }>
                    <BuildIcon />
                </IconButton>
            </Tooltip>
            
            <Modal
                show={ show }
                keyboard={ true }
                size="lg"
                dialogClassName="modal-90w"
            >
                <Modal.Header>
                    <Modal.Title>Logs</Modal.Title>
                    <Tooltip title="Закрыть" enterDelay={1000}>
                        <IconButton size="small" color="secondary" onClick={ handleClose }>
                            <CloseIcon />
                        </IconButton>
                    </Tooltip>
                </Modal.Header>

                <Modal.Body>
                    {/* <p>{ props.gasStationName }</p>
                    <p>{ props.startDate }</p>
                    <p>{ props.endDate }</p> */}
                    <Button onClick={ test }>test</Button>
                    <div>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">ID</TableCell>
                                        <TableCell>Group Log Id</TableCell>
                                        <TableCell>Create Date</TableCell>
                                        <TableCell>Log Type Id</TableCell>
                                        <TableCell>Module Name</TableCell>
                                        <TableCell>Log Message</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { testLogs.map((row) => (
                                        <TableRow >
                                            <TableCell>{ row.id }</TableCell>
                                            <TableCell>{ row.groupLogId }</TableCell>
                                            <TableCell>{ row.createDate }</TableCell>
                                            <TableCell>{ row.logTypeId }</TableCell>
                                            <TableCell>{ row.moduleName }</TableCell>
                                            <TableCell>{ row.logMessage }</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}


