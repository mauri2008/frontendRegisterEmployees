import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Rows = ({ record, handleDelete, handleUpdate }) =>{

    const keys = Object.keys(record);

    return(
        <tr>
            {keys.map((key, index) => {
                return(
                    <td key={index}>{record[key]}</td>
                )
            })}
            <td>
                {
                    handleUpdate &&
                    <button onClick={() => handleUpdate(record.id||0)} title="Editar"> <FontAwesomeIcon icon={faEdit}/> </button>
                }
                {
                    handleDelete &&
                    <button onClick={() => handleDelete(record.id||0)} title="Remover"><FontAwesomeIcon icon={faTrashAlt}/></button>
                }
            </td>
        </tr>
    )
}

export default Rows;