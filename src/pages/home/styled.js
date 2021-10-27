import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main`

`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;  
    border-spacing: 0;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    text-align: left;
    & thead tr th{
        padding: 10px;
    }
    & tbody tr td{
        padding: 10px;
    }
`;

export const Button = styled.button.attrs(()=>({
    type: props=>props.type || 'button',
}))`
    background-color: ${props=>props.color};
    border: none;   
    border-radius: 4px;
    color: #fff;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
        background-color: ${props=>props.color};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

`;

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    flex: 1;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    text-align: left;
`;

export const Select = styled.select`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    flex: 1;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    text-align: left;
`;


