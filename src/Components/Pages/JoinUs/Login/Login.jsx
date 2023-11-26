/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../../../public/joinUs1.jpg'
import '../../../../index.css'
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';


const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/"
    // console.log(location, form)

    const handleLogin = e => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    navigate(form, { replace: true })
                }
                Swal("Good job!", "You are successfully Logged in!", "success");
            })
            .catch(error => { console.log(error) })
    }

    const loginWithGoogle = () => {
        googleLogin()
            .then(res => {
                const userInfo = {
                    email: res.user.email,
                    name: res.user.displayName,
                    photo: res.user.photoURL
                }
                console.log(res.user, userInfo)
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    console.log(res.data)
                    Swal.fire({
                        icon: "success",
                        title: "Good job!",
                        text: "You are successfully Logged in!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    navigate(form, { replace: true })
                })
            })
            .catch(error => { console.log(error) })
    }

    return (
        <div className='relative font3'>

            <div className='absolute flex flex-col justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] min-h-screen right-0 left-0'>
                <form onSubmit={handleLogin} className=" py-8 px-10 rounded-lg transparent">
                    <p className=' text-[#FFF1B0] text-4xl text-center font-bold mb-5'>Log In now!</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFF1B0] text-xl font-bold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="font2 inputFild input input-bordered text-[#FFF1B0] text-lg font-semibold" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFF1B0] text-xl font-bold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="font2 inputFild input
                    text-[#FFF1B0] text-lg font-semibold input-bordered" required />
                    </div>
                    <div>
                        <input className='btn border-none bg-[#FFF1B0] hover:bg-[#EB671C] text-center text-[#EB671C] hover:text-[#FFF1B0] py-3 rounded-lg text-xl font-bold w-full my-4' type="submit" value="Login" />
                    </div>
                    <p className='divider'>or</p>
                    <div onClick={loginWithGoogle} className='flex items-center mt-4 justify-center rounded-lg cursor-pointer border hover:bg-gray-800'>
                        <img className='w-10 h-10 ' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                        <span className='text-[#FFF1B0] text-sm font-semibold'>Continue With Google</span>
                    </div>

                    <p className='text-[#9CA3AF] text-base font-semibold text-center mt-4'>Don't have an account? Please <Link to='/register' className='text-[#FFF1B0] underline'>Register</Link></p>

                </form>
            </div>
            <img className='h-screen w-full' src={login} alt="" />
        </div>
    );
};

export default Login;