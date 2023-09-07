import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([]);
  const getData=async()=>{
    const{data}=await axios.get("http://localhost:3000/customers");
    console.log(data);
    setData(data);
  }
  
  useEffect(()=>{
    getData();
  },[])
  return (
    <>
    {JSON.stringify(data)}
    </>
  );
}
export default App;
