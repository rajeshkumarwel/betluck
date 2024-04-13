import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "../login/loginPage.css";
import { updatePlayerupi } from "../../store/AddPlayer/actions";

const AddwithdrawaddressPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const updatePlayerupiLoader = useSelector((state) => state.addPlayerList.updatePlayerupiLoader)

	const initialValues = {
		upi: "",
	}
	
	const validationSchema = Yup.object({
		upi: Yup.string().required('UPI ID is required'),
	})


	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async values => {
			await new Promise(resolve => setTimeout(resolve, 500));
			const payload = {
				playerId: id,
				upi: values.upi,
			}
			const data = {
				playerData: payload
			}
			dispatch(
				updatePlayerupi(data, (res) =>  {
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

				<h1 className="h3"><strong>Enter your withdraw UPI ID</strong></h1>
				
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
								 name="upi" 
								 id="upi"
								 placeholder="Enter your withdraw UPI ID"
								 value={formik.values.upi}
								 onChange={formik.handleChange}
								 onBlur={formik.handleBlur}
								 className={
									formik.errors.upi && formik.touched.upi
									? "form-control form-control-lg error errorfocus"
									: "form-control form-control-lg"
								 }
								 />
								 {formik.touched.upi && formik.errors.upi && (
										<div className="input-feedback">{formik.errors.upi}</div>
									)}
							</div>
																
							
							
							<div className="d-grid gap-2 mt-3">
								<button type="submit"
								 className="btn btn-lg btn-danger">
									
									{!updatePlayerupiLoader ? ('Save details'):('Loading...')}
									
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

export default AddwithdrawaddressPage;