import React, { useState, useEffect } from "react";
import * as C from './style';
import { insert, useFormik } from "formik";

import RenderTable from '../../components/table';
import UseApi from '../../services/api'; 

import Loading from "../../components/loading";

const Position = () => {

    

    const [position, setPosition] = useState(false);
    const [inputdata, setInputdata] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPosition = async () => {
            setLoading(true);
            const Api = UseApi();
            let array = [];
            const response = await Api.get('position');
            if(response){
                response.data.map(item => {
                    array.push({
                        id: item.id,
                        description: item.description,
                    })
                })
                setPosition(array);
            }
            setLoading(false);
        }
        getPosition();
    }, []);

    const formik = useFormik({
        initialValues: {
            id: '',
            description: '',
        },
        onSubmit: async (values) => {
            setLoading(true);
            const Api = UseApi();

            if(values.id !==''){
                const response = await Api.put(`position/${values.id}`, values);
                if(response){
                    setLoading(false);
                    alert('Atualizado com sucesso');
                    window.location.reload();
                }else{
                    setLoading(false);
                    alert('Erro ao atualizar');
                }
            }else{  

            const response = await Api.post('position', values);
            if(response){
                setLoading(false);
                alert('Cadastrado com sucesso');
                window.location.reload();
            }else{
                setLoading(false);
                alert('Erro ao cadastrar');
            }
        }
        }   
    });

    const handleDelete = async (id) => {
        setLoading(true);
        const Api = UseApi();
        const response = await Api.del(`position/${id}`);
        if(response){
            setLoading(false);
            alert('Cargo removido com sucesso!');
            window.location.reload();
        }else{
            setLoading(false);
            alert('Erro ao deletar!');
        }

    }

    const handleEditPosition = async (id) => {  
        setLoading(true);
        const Api = UseApi();   
        const response = await Api.get(`position/${id}`);
        if(response){
            const {data} = response;

            formik.setValues({
                id: data.id,
                description: data.description,
            });
            setInputdata(true);
            setLoading(false);
        }
    }               

    const handleNewPosition = () => {
        setInputdata(true);
        formik.resetForm();
    }



    return (
        <C.PositionWrapper>
            {
                inputdata &&
                <C.Form onSubmit={formik.handleSubmit}>
                    <h1>Cadastro de Cargos</h1>
                    <input type="hidden" name="id" value={formik.values.id} />
                    <C.Input name="description" placeholder="Informe nome do cargo" onChange={formik.handleChange} value={formik.values.description} />
                    <div>
                        <button type="submit" color='var(--bg-default)'>Salvar</button>
                        <button type="button" onClick={() => setInputdata(false)} color='var(--bg-default)'>Cancelar</button>
                    </div>
                </C.Form>
            }
            <button type="button" onClick={handleNewPosition} color='var(--bg-default)'>Novo Cargo</button>
            {
                position &&
                    <RenderTable
                        data={position}
                        head={{id: 'Ident.',description: 'Descrição'}}
                        handleUpdate={handleEditPosition.bind()}
                        handleDelete={handleDelete.bind()}
                        />
            }
            {
                loading &&
                <Loading />
            }
        </C.PositionWrapper>
    );
};

export default Position;

