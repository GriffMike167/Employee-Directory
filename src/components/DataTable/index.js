/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import DataBody from "../DataBody";
import "./DataTable.css";
import DataAreaContext from "../../utils/DataAreaContext";

const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="datatable mt-2">
            <table id="table"
            className="table-hover">
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (<th 
                                className="col"
                                key={name}
                                style ={{ width}}
                                onClick={() => {
                                    context.handleSort(name.toLowerCase());
                                }}
                                >
                                    { name }
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <DataBody />
            </table>
        </div>
    )
}
export default DataTable;