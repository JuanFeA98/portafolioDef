import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

import '../styles/components/about.css'

import {db} from '../db'

export default function About() {

    const initialValues = {
        Titulo: '',
        Url: ''
    }
  
    const [values, setValues] = useState(initialValues);
    const [links, setLinks] = useState([]);
    
    const agregar = async (linkObject)=>{
        console.log(linkObject)
        await db.collection('pruebas').doc().set(linkObject);
    }

    const llamar = async()=>{
        db.collection('pruebas').onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id})
            });
            setLinks(docs)
            console.log(docs)
        });
    }

    
    useEffect (()=>{
        console.log(links)
        llamar()
        console.log(links)
    }, [])

    const handleInputChange = e =>{
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const handleSubmmit = e =>{
        e.preventDefault();
        agregar(values)
    }

    return (
        <Layout>
        <React.Fragment>
            <div className="About">
                <form onSubmit={handleSubmmit}>
                    <input type="text" placeholder="Titulo" name="Titulo" onChange={handleInputChange}/>
                    <input type="text" placeholder="Url" name="Url" onChange={handleInputChange}/>
                    <button>Go</button>
                </form>
            </div>
            <div className="prueba">
                {links.map((link)=>(
                    <div key={link.id}>
                        <h2>{link.Titulo}</h2>
                        <h4>{link.Url}</h4>
                        <img src={link.Url} alt=""/>
                    </div>
                ))}
            </div>
        </React.Fragment>
    </Layout>
    )
}
