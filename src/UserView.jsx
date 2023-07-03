import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {useState} from "react";

function Userview() {

  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(...searchParams);

  const [userData, setUserData] = useState({})

  useEffect(() => {
    loadUser();
  }, [])

  let loadUser = async () => {
    try {
    let user = await axios.get(`https://6296c83157b6258606132303.mockapi.io/anyusers/${params.userid}`);
    setUserData (user.data); 
  } catch (error) {

    }
  }

  return (
      <>
   
   <h3>Name : {userData.name}</h3> 
   <h3>Position : {userData.position}</h3>
   <h3>Office : {userData.office}</h3>
   <h3>Age : {userData.age}</h3>
   <h3>StartData : {userData.startDate}</h3>
   <h3>Salary : {userData.salary}</h3>
  
    </>
  )
}

export default Userview;



