import styled from "styled-components";

export const Container = styled.div``;

export const ContainerTable = styled.table`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #ddd;
    border-radius: 4px;     /* border-radius: 4px; */
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #fff;

    thead {
        background: #fff;
        color: #444;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px ;
        border-bottom: 1px solid #ddd;

        tr th{
            padding: 15px 10px;
        }
    }

    tbody {

        tr {
            background: #fff;
            color: #444;
            font-size: 14px;
            text-transform: uppercase;
            padding: 10px;

            td {
                padding: 10px;
                border-bottom: 1px solid #ddd;

                button{
                    background: none;
                    border :none;
                    cursor: pointer;
                    color: var(--bg-base-dark);
                    transition: all ease .2s;
                    &:hover{
                        color: var(--bg-base-light);

                    }
                }
            }
        }


`;