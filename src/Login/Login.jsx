import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import swal from 'sweetalert';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password); 
        
        //call Login function
        loginUser(email,password)
        .then((result)=>{
            console.log(result.user);
            swal("Successfully logged In");
            navigate(location?.state ? location?.state : '/');
        }) 
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 pr-16">
                   <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <h3 className='text-center pb-3'>If you are new user visit <Link to="/signup" className='text-orange-500'>Sign Up</Link> </h3>
                </div>
            </div>
        </div>
    );
};

export default Login;