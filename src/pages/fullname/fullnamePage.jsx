import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "./../../common-components/navbar/navbar";
import Footer from "./../../common-components/footer/footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "../login/loginPage.css";
import { updatePlayerName } from "../../store/AddPlayer/actions";

const FullnamePage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const updatePlayernameLoader = useSelector((state) => state.addPlayerList.updatePlayernameLoader)

	const initialValues = {
		playerName: "",
	}
	
	const validationSchema = Yup.object({
		playerName: Yup.string().required('Player name is required'),
	})


	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async values => {
			await new Promise(resolve => setTimeout(resolve, 500));
			const payload = {
				playerId: id,
				playerName: values.playerName,
			}
			const data = {
				playerData: payload
			}
			dispatch(
				updatePlayerName(data, (res) =>  {
					if(res?.statusCode === 200) {
						navigate('/personalinfo/'+id)
					}
				})
			)
		}
	})


    return(
		<div className="main">
		<Navbar navitem={false} />

		<main className="content">
			<div className="container-fluid p-0">

				<h1 className="h3"><strong>Enter your fullname</strong></h1>
				
				{/* <div className="row">
					<div className="col-xl-6 col-xxl-5 d-flex">
						<div className="w-100">
							<div className="row">
								<div className="col-sm-12">
									<div className="card players-success mt-3">
										<div className="card-body text-center">
											<h4 className="mt-1"><strong>Players invited succssfully</strong></h4>
											<div className="mb-1">
												<span className="text-muted">suresh.raj@outlook.com</span>
											</div>
										</div>
									</div>
								</div>									
							</div>
						</div>
					</div>
				</div>		 */}
				<div className="row mb-3">
					<div className="col-12 col-lg-8 col-xxl-9 d-flex">
						<div className="flex-fill mt-3">
						<form onSubmit={formik.handleSubmit}>
							<div className="mb-3">
								{/* <label className="form-label">Enter players email address</label> */}
								<input 
								type="text"
								name="playerName"
								id="playerName"
								placeholder="Enter your fullname" 
								value={formik.values.playerName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={
									formik.errors.playerName && formik.touched.playerName
									? "form-control form-control-lg error errorfocus"
									: "form-control form-control-lg"
								}
								/>
								{formik.touched.playerName && formik.errors.playerName && (
										<div className="input-feedback">{formik.errors.playerName}</div>
									)}
							</div>
																
							
							
							<div className="d-grid gap-2 mt-3">
								<Link to={"/personalinfo/2"} className="btn btn-lg btn-danger">
								Save details
																		
									</Link>
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

export default FullnamePage;