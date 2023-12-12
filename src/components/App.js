import React,{useEffect, useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import api from '../api/contacts';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetails from './ContactDetails';
import DeleteContact from './DeleteContact';
import EditContact from './EditContact';

function App() {

  const navigation = useNavigate();

  const location = useLocation();

  const retriveData = async ()=>{
      const response = await api.get('/contacts');
      return response.data;
  }
  

  const [contacts, setContacts] = useState([]);
  const [delcontactinfo, setInfo] = useState({name:"",id:""});
  const [search, setSearch] = useState(""); 
  const [searchResult, setSearchResult] = useState("");

  const searchHandler = (search)=>{
    setSearch(search);
    if(search!==""){
        const newContactList = contacts.filter((contact)=>{
          return Object.values(contact).join(" ").toLowerCase().includes(search.toLowerCase());
        })
        setSearchResult(newContactList);
    }
    else{
      setSearchResult(contacts);
    }

  }

  const addContactHandler = async (contact)=>{
    const request = {
        id:uuidv4(),
        ...contact
    }
    const response = await api.post("/contacts",request);
    setContacts([...contacts,response.data]);
  }

  const editContactHandler = async (contact)=>{
    const response = await api.put(`/contacts/${contact.id}`,contact);
    const {id} = contact
    setContacts(contacts.map((contact)=>{
      return contact.id === id? response.data:contact;
    }))
  }

  const setDelContact = (id,name)=> setInfo({name:`${name}`,id:`${id}`});
  
  const removeContactHandler = async (e,id = delcontactinfo.id)=>{
      if(e===1){
        await api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact)=>{
          return contact.id!==id;
        });
  
        setContacts(newContactList);
        setInfo({name:"",id:""});
      }
      else{
        setInfo({name:"",id:""});
      };
  }


  useEffect(()=>{
    const getAllContacts = async ()=>{
      const allContacts = await retriveData();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  },[]);

  return (
    <div className='ui container'>
        <Header/>
        <Routes>
            <Route path='/add' exact element={ <AddContact navigation={navigation} addContactHandler={addContactHandler}/>}/>
            <Route path='/' exact element={<ContactList contacts={search!==""?searchResult:contacts} getDelContactId = {setDelContact} term={search} searchKeyword={searchHandler}/>}/>
            <Route path='/contact/:id' exact element={<ContactDetails location={location}/>}/>
            <Route path='/editcontact' exact element={<EditContact location = {location} navigation={navigation} editContactHandler={editContactHandler}/>}/>
        </Routes>
        {delcontactinfo.id!==""&&<DeleteContact name={delcontactinfo.name} getConfirmation={removeContactHandler}/>}
    </div>
  );
}

export default App;
