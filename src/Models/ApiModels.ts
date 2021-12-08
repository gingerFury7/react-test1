export const BaseURL = "http://dev.ekagroup.local:7473/";

export interface IGetGasStations { 
    gasStationNumberInt: number,
    gasStationName: string
}

export interface IGetInitPlusLogs {
    id: string,
    groupLogId: string,
    createDate: string,
    logTypeId: number,
    moduleName: string | null,
    logMessage: string | null
}

export interface ILogsProps {
    gasStationName: string
    startDate?: string | null;
    endDate?: string | null;
}