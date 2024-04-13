import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../common-components/navbar/navbar";
import Footer from "../../../common-components/footer/footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "./../../login/loginPage.css";
import { addPlayer } from '../../../store/AddPlayer/actions';

const AddPlayerPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [status, setStatus] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const [errorStatus, setErrorStatus] = useState(false);
	const [errorStatusMessage, setErrorStatusMessage] = useState("");

	const addPlayerLoader = useSelector((state) => state.addPlayerList.addPlayerLoader)

	const initialValues = {
		playersPermission: "",
		email: "",
		playerReferenceId: "",
	}
	
	const validationSchema = Yup.object({
		playersPermission: Yup.string().required('Players permission is required'),
		email: Yup.string().email('Please enter valid email ID').required("Email is Required"),
		playerReferenceId: Yup.string().required('Players player reference Id is required'),
	})

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values, { resetForm }) => {
			await new Promise(resolve => setTimeout(resolve, 500));
			const payload = {
				role: values.playersPermission,
				email: values.email,
				reference: values.playerReferenceId
			}
			const data = {
				playerData: payload
			}
			dispatch(
				addPlayer(data, (res) =>  {
					if(res?.status === 201) {
						setStatus(true);
						setErrorStatus(false);
						setStatusMessage(res.data.player.email)
					} else {
						setErrorStatus(true);
						setStatus(false);
						setErrorStatusMessage(res.response.data.message)
					}
				})
			)
			resetForm();
		}
	})

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

					<h1 className="h3"><strong>Add Player</strong></h1>
                    {status &&
					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card players-success mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>Players invited succssfully</strong></h4>
												<div className="mb-1">
													<span className="text-muted">{statusMessage}</span>
												</div>
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>		
					}

					{errorStatus &&
					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card players-danger mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>{errorStatusMessage}</strong></h4>
												
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>		
					}
                    <div className="row mb-3">
						<div className="col-12 col-lg-8 col-xxl-9 d-flex">
							<div className="flex-fill mt-3">
							<form onSubmit={formik.handleSubmit}>
								<div className="mb-3">
									<label className="form-label">Enter players email address</label>
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
								<div className="mb-3">
									<label className="form-label">Select players permission</label>
									<select
									id="playersPermission"
									name="playersPermission"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.playersPermission}
									className={
										formik.errors.playersPermission && formik.touched.playersPermission
										? "form-select form-control form-control-lg error errorfocus"
										: "form-select mb-3"
									}
									>
									<option value="">Open this select Player</option>
									<option value={"Player"} key={"1"}>Player</option>
									<option value={"Admin"} key={"2"}>Admin</option>
									</select>
									{formik.touched.playersPermission && formik.errors.playersPermission && (
										<div className="input-feedback">{formik.errors.playersPermission}</div>
									)}
								</div>
								<div className="mb-3">
									<label className="form-label">Add player reference</label>
									<input
									id="playerReferenceId"
									type="text"
									name="playerReferenceId"
									placeholder="Enter player ID or name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.playerReferenceId}
									className={
										formik.errors.playerReferenceId && formik.touched.playerReferenceId
										? "form-control form-control-lg error errorfocus"
										: "form-control form-control-lg"
									}
									/>
									{formik.touched.playerReferenceId && formik.errors.playerReferenceId && (
										<div className="input-feedback">{formik.errors.playerReferenceId}</div>
									)}
								</div>										
								
								
								<div className="d-grid gap-2 mt-3">
									<button
									 type="submit"
									 className="btn btn-lg btn-danger"
									 disabled={!addPlayerLoader ? false:true}
									 >
										
										{!addPlayerLoader ? ('Add Player'):('Loading...')}
										
										</button>
								</div>
							</form>
								
							</div>
						</div>
					</div>

                    <div className="text-center  mb-3">
							<Link to={'#'} onClick={()=> navigate(-1)}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default AddPlayerPage;