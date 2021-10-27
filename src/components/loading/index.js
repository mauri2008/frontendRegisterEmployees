import React from "react";

import * as C from './style';
import icons from '../../assets/images/loading.gif';


const Loading = () => {
    return (
        <C.Loading>
            <img src={icons} alt="loading" />
        </C.Loading>
    );
    }


export default Loading;