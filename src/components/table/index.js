import React from "react";
import * as C from './style';

import Head from './head';
import Rows from './rows';

const RenderTable = ({data, head, handleDelete=false, handleUpdate=false}) => {
    
    const keys = Object.keys(data[0]);


    
    return (
        <C.Container>
            <C.ContainerTable>
                <Head head={head} keys={keys} />
                <tbody>
                    {data.map((item, index) => (
                        <Rows key={index} record={item}  handleDelete={handleDelete} handleUpdate={handleUpdate} />
                    )
                    )}
                    
                </tbody>


            </C.ContainerTable>
        </C.Container>
        
    )
}

export default RenderTable;