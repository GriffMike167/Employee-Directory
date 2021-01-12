import React, { useContext } from "react";
import "./DataBody.css";
import DataAreaContext from "../../utils/DataAreaContext";

const DataBody = () => {
    const context = useContext(DataAreaContext);


    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month =dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;

    }
    return (
        <tbody>
            {context.developerState.Users !== undefined && context.develpoerState.Users.name !== undefined ? (
                context.developerState.Users.map (({ login, name, picture, phone, email, dob}) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="img align-middle">
                                <img src={picture.medium} alt={"profile img for " + name.first + " " + name.last} className="img-responsive" />
                            </td>
                            <td data-th="Name" className="name align-middle">{name.first}{name.last}</td>
                            <td data-th="Phone" className="phone align-middle">{phone}</td>
                            <td data-th="Email" className="email align-middle"><a href={"mailto:" + email} target="__blank">{email}</a></td>
                            <td data-th="DOB" className="dob align-middle">{formatDate(dob.date)}</td>
                        </tr>
                    )
                })
            ) : (
                <></>
            )}
        </tbody>
    )
}

export default DataBody;