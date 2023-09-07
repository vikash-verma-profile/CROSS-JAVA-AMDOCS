import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SendData() {

    const [customerName,setCustomerName]=useState('');
    const [customerAmount,setcustomerAmount]=useState('');
    const [data,setData]=useState([]);
    const getData=async()=>{
        const{data}=await axios.get("http://localhost:3000/customers");
        console.log(data);
        setData(data);
      }
    const handleSubmit=(event)=>{
        console.log(customerName);
        console.log(customerAmount);
        const customerdata={
            "CustomerName": customerName,
            "CustomerAmount": customerAmount
        }

        axios.post("http://localhost:3000/customers",customerdata).then(res=>{
            getData();
        });
    }
    useEffect(()=>{
        getData();
      },[])
    return (
        <div className='container'>
            <>
            <div className="mb-3">
                    <label className="form-label">Customer Name</label>
                    <input type="text" name='CustomerName' value={customerName} 
                    onChange={(e)=>setCustomerName(e.target.value)}
                    className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Customer Amount</label>
                    <input type="text" name='CustomerAmount' value={customerAmount} 
                    onChange={(e)=>setcustomerAmount(e.target.value)}
                    className="form-control" />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
             
            </>
            <br/>
            <hr/>
            {JSON.stringify(data)}
        </div>
    );
}

