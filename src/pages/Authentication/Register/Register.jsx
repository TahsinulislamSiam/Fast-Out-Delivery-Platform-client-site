import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const { createUser } = useAuth()
    const onSubmit = data =>{
        console.log(data)
       createUser(data.email,data.password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>{
        console.error(error)
       })
    }

    return (

    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body bg-lime-100 rounded-3xl">
              <h1 className="text-3xl font-bold text-center">Create an Account!</h1>

       <form onSubmit={handleSubmit(onSubmit)} >
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})}
           className="input" placeholder="Email" />
           {
                errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>
           }
          <label className="label">Password</label>
          <input type="password" {...register('password' ,{required:true, minLength:8})}
           className="input" placeholder="Password" />
           {
            errors.password?.type==='required' && <p className='text-red-500'>Password is Required !</p>
           }
           {
            errors.password?.type==='minLength' && <p className='text-red-500'>Password contain atleast 8 character</p>
           }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-lime-400 mt-4">Register</button>
        </fieldset>
        <p><small>Already have an account?<Link className='btn btn-link text-lime-400' to='/login'>Login</Link></small></p>
       </form>
       <SocialLogin></SocialLogin> 
      </div>
    </div>
 
    );
};

export default Register;