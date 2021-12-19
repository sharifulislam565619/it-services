import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddServices = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = data => {
      fetch('https://young-hamlet-32330.herokuapp.com/services', {
         method: "POST",
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)

      })
         .then(res => res.json())
         .then(data => {
            if (data.insertedId) {
               alert('your service successfully added')
               reset()
            }
         })
         .catch(() => { })
   }
   return (
      <div>
         <h2>Add a new Product</h2>
         <Link to='/'>Home</Link>

         <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Service Title" {...register("title")} /><br />
            <input type="number" placeholder='Price' {...register("price", { min: 0, max: 99999 })} /><br />
            <input placeholder="Description" {...register("description", { required: true })} /><br />
            <input placeholder="ulr/link" type='files' {...register("img")} /><br />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
         </form>
      </div>
   );
};

export default AddServices;



