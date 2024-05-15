import React, { useState } from "react";
import Logo from "../../assets/img/logo-removebg-preview.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "./loginPage.css";
import { loginPlayer } from "../../store/loginPlayer/actions";
import { toaster, successNotification, errorNotification, warningNotification } from "../../common-components/toaster/toaster";
import 'react-notifications-component/dist/theme.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const LoginPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [status, setStatus] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const loginPlayerLoader = useSelector((state) => state.loginPlayer.loginPlayerLoader)

	const initialValues = {
		email: ""
	}

	const validationSchema = Yup.object({
		email: Yup.string().email('Please enter valid email ID').required("Required")
	})

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async values => {
			await new Promise(resolve => setTimeout(resolve, 500));
			const payload = {
				player_email: values.email,
			}
			const data = {
				loginPlayerData: payload
			}
			dispatch(
				loginPlayer(data, (res) =>  {
					if(res === 'OTP was sent!') {
						localStorage.setItem('Playeremail', values.email)
						navigate('/verification')
					} else {
						
						if(res.response.status === 404) {
							// toaster(
							// 	'Not found',
							// 	res.response.data.message,
							// 	errorNotification
							// )
							setStatus(true);
							setStatusMessage(res.response.data.message)
						}
						
					}
				})
			)
		}
	})

    return(
        <div className="row mt-5">
				<div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">
					<div className="text-center">  
							<div><img src={Logo} alt="logo"  width={"200"}/> </div>
							<h1><strong>BETLUCK</strong></h1>
						</div>
						<div className="text-center mt-4">
							<h1 className="h2">Login/Register</h1>
							<p className="lead">
								Sign in to your account to continue
							</p>
						</div>
						{status &&
						<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card players-danger mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>{statusMessage}</strong></h4>
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>		
					}
						<div className="card">
							<div className="card-body">
								<div className="m-sm-3">
					
									<form onSubmit={formik.handleSubmit}>
										<div className="mb-3">
											<label className="form-label">Enter your email address</label>
											<input 
											id="email"
											type="text"
											name="email"
											placeholder="Enter your email address"
											value={formik.values.email}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className={
												formik.errors.email && formik.touched.email
												? "form-control form-control-lg error errorfocus"
												: "form-control form-control-lg"
											}
											/>
											{formik.touched.email && formik.errors.email && (
												<div className="input-feedback">{formik.errors.email}</div>
											)}
										</div>										
										
										<div className="d-grid gap-2 mt-3">
											<Link  to={'/verification'}
											//type="submit"
											className="btn btn-lg btn-danger"
											//disabled={!loginPlayerLoader ? false:true}
											>
											Send me OTP
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
    )

}

export default LoginPage;