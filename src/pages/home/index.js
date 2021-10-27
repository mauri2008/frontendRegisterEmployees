import React, { useEffect, useState} from 'react';
import * as C from './styled';

import RenderTable from '../../components/table';
import UseApi from '../../services/api';
import { useFormik } from 'formik';

import { formatDate } from '../../helpers/helpersDate';
import { formatMoney } from '../../helpers/helpersMoney';
import Loading from '../../components/loading';


function Home() {

  const headTable = {
    id:'ident.',
    name:'Nome',
    birthdate:'Data de Nascimento',
    description:'Descrição',
    wage:'Salário',
  }

  const [data, setData] = useState(false);
  const [dataPosition, setDataPosition] = useState(false);
  const [insetdata, setInsetData] = useState(false);
  const [dataEdit, setDataEdit] = useState(false);
  const [loading, setLoading] = useState(false);


  // get value employeer
  useEffect(() => {

    const getData = async () => {
      setLoading(true);
      const API = UseApi();
      let arraydata = [];
      const response = await API.get('employee');
      
      if(response){
        response.data.map(item => {
          arraydata.push({
            id: item.id,
            name: `${item.name} ${item.lastname}`,
            birthdate: formatDate(item.birthdate),
            description: item.description,
            wage: formatMoney(parseFloat(item.wage)),
          }) 
          return '';    
        })
         setData(arraydata);

      }
      setLoading(false);
    }
    getData();
    
  }, []);

  // get value position
  useEffect(() => {
      const getData = async () => { 
        const API = UseApi();
        const response = await API.get('position');
        if(response){
          console.log(response)
          setDataPosition(response.data);
        }
      }
      getData();
  }, []);



  const formik = useFormik({
    initialValues: {
      id: '',
      name:dataEdit.name||'',
      lastname: '',
      birthdate: '',
      id_position: '',
      wage: '',
    },
    

    onSubmit: async (values) => {
      setLoading(true);
      const API = UseApi();
      console.log(values.id)
      if(values.id === ''){
        const response = await API.post('employee', values);
        if(response){
          setLoading(false);
          alert('Cadastrado com sucesso');
          window.location.reload();
        }
      }else{
        const response = await API.put(`employee/${values.id}`, values);
        if(response){
          setLoading(false);
          alert('Editado com sucesso');
          window.location.reload();
        }
      }
      
    }
  });

  
  const handleDelete = async (id) => {
    setLoading(true);
    const API = UseApi();
    const response = await API.del(`employee/${id}`);
    if(response){
      setLoading(false);
      alert('Deletado com sucesso!');
      window.location.reload();
    } else {  
      setLoading(false);
      alert('Erro ao deletar!');
    }
  }

  const handleEditEmployeer = async (id) => { 
    setLoading(true); 
    const API = UseApi();
    const response = await API.get(`employee/${id}`);
    if(response){
      setDataEdit(response.data);
      setInsetData(true);
      formik.setValues({
        id: response.data.id,
        name: response.data.name,
        lastname: response.data.lastname,
        birthdate: response.data.birthdate,
        id_position: response.data.id_position,
        wage: response.data.wage,
      })
      setLoading(false);
    }
  }

  const handleNewEmployeer = () => {
    setInsetData(true);
    formik.resetForm();
  }



  return (
    <C.Container>        
      <C.Content>
        {
          insetdata &&
           <div>
               
              <h1>Cadastro de Funcionário</h1>
              <C.Form onSubmit={formik.handleSubmit}>
                <input type="hidden" name="id" value={formik.values.id} />
                <C.Input name="name" placeholder="Nome" onChange={formik.handleChange} value={formik.values.name} />
                <C.Input name="lastname" placeholder="Sobrenome" onChange={formik.handleChange} value={formik.values.lastname} />
                <C.Input name="birthdate"type='date' placeholder="Data de Nascimento" onChange={formik.handleChange} value={formik.values.birthdate} />
                <C.Select name="id_position" placeholder="Cargo" onChange={formik.handleChange} value={formik.values.id_position}>
                  <option value="">Selecione um cargo</option>
                  {
                    dataPosition && dataPosition.map(item => (
                      <option value={item.id} key={item.id}>{item.description}</option>  
                    ))
                  }
                </C.Select>
                <C.Input name="wage" type="number" step='00.1' placeholder="Salário" onChange={formik.handleChange} value={formik.values.wage} />
                <div>
                    <button type="submit" color='var(--bg-default)'>Salvar</button>
                    <button type="button" onClick={() => setInsetData(false)} color='var(--bg-default)'>Cancelar</button>
                </div>
              </C.Form>
           </div>
        }

        <button type="button" onClick={handleNewEmployeer} color='var(--bg-default)'>Novo Funcionário</button>
        {
          data &&
          <RenderTable 
            data={data} 
            head={headTable} 
            handleDelete={handleDelete.bind()}
            handleUpdate={handleEditEmployeer.bind()}
            />
           
            
        }
        {
          !data &&
           <p>Nenhum Dado encontrado...</p>
        }
        {
          loading &&
            <Loading />
        }
      </C.Content>
    </C.Container>
  );
}

export default Home;