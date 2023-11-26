/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import login from '../../../../../public/joinUs1.jpg'
import '../../../../index.css'
import Swal from "sweetalert2";
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthContext/AuthProvider';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';


const Register = () => {
    const { createUser, logOut, handleUpdateProfile } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {
                    email: data.email,
                    name: data.name,
                    photo: data.photo
                }
                console.log(result.user)
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Register successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            
                            logOut()
                            navigate('/login')
                        }
                        handleUpdateProfile(data.name, data.photo)
                    })

            })
            .catch(err => { console.log(err) })
    }


    return (
        <div className='relative font3'>

            <div className='absolute flex flex-col justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] min-h-screen right-0 left-0'>
                <form onSubmit={handleSubmit(onSubmit)} className=" py-8 px-10 rounded-lg transparent">
                    <p className=' text-[#FFF1B0] text-4xl text-center font-bold mb-5'>Register now!</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFF1B0] text-xl font-bold">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="inputFild input input-bordered text-[#FFF1B0] text-lg font2 font-semibold" />
                        {errors.name && <span className='text-red-600 font-bold mt-1'>Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFF1B0] text-xl font-bold">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="inputFild input input-bordered text-[#FFF1B0] text-lg font2 font-semibold" />
                        {errors.email && <span className='text-red-600 font-bold mt-1'>Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFF1B0] text-xl font-bold">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/ })} name='password' placeholder="Password" className="inputFild font2 input text-[#FFF1B0] text-lg font-semibold input-bordered" />
                        {errors.password?.type === 'required' && <span className="text-red-600 font-bold mt-1">Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-600 font-bold mt-1">Password must be 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span className="text-red-600 font-bold mt-1">Password maximum 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-600 font-bold mt-1">Password must be one uppercase, one lowercase,one number and one special characters</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFF1B0] text-xl font-bold">Photo url</span>
                        </label>
                        <input type="url" {...register("photo")} placeholder="Photo URL" className="inputFild input input-bordered text-[#FFF1B0] text-lg font2 font-semibold" />
                    </div>


                    <div>
                        <input className='btn border-none bg-[#FFF1B0] hover:bg-[#EB671C] text-center text-[#EB671C] hover:text-[#FFF1B0] py-3 rounded-lg text-xl font-bold w-full my-4' type="submit" value="Register" />
                    </div>
                    <p className='text-[#9CA3AF] text-base font-semibold text-center mt-4'>Already have an account? Please <Link to='/login' className='text-[#FFF1B0] underline'>Login</Link></p>

                </form>
            </div>
            <img className='h-screen w-full' src={login} alt="" />
        </div>
    );
};

export default Register;