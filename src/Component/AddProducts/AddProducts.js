import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../Login/Login.css';
import './AddProducts.css';
const AddProducts = () => {
    const { register, handleSubmit,reset }=useForm();
    const onSubmit = data =>{
        data.status = "pending";
        console.log(data);
        axios.post('http://localhost:5000/addCars',data)
        .then(res =>{
            if (res.data.insertedId) {
                console.log(res.data)
                alert('added successfully');
                reset();
            }
         
        })
    }

    return (
        <div>
              <div className='login-form-container'>
            
   

            <div className="add-service MARGE shadow">
            <h2 className='text-center bg-denger'>Add Cars'S</h2>

            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  className="box" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea className="box" {...register("description")} placeholder="Description" />
                <input  className="box" type="number" {...register("price")} placeholder="price" />
                <input  className="box" {...register("img")} placeholder="image url" />
                <input className="btn" type="submit" />
            </form>
        </div>
        </div>
        </div>
    );
};

export default AddProducts;