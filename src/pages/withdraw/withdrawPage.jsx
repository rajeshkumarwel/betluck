import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";

const WithdrawPage = () => {

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

				<h1 className="h3"><strong>Withdraw</strong></h1>
					<Link to={"/personalinfoupdate"}> <h5 className="card-title mb-3">Account ID: 0979797 <span className="pi pi-copy"></span></h5> </Link>
                    
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
							<form>
								<div className="mb-3">
									<label className="form-label">Enter withdraw amount</label>
									<input className="form-control form-control-lg" type="text" name="email" placeholder="Enter players email address"value="50000.00" />
									<small className="form-label text-muted  text-end withdraw-avtext">Available to withdraw: 5000</small>
								</div>
								
								<div className="mb-3">
									<label className="form-label">Confirm withdraw UPI ID</label>
									<input className="form-control form-control-lg" type="text" name="email" placeholder="Send payment to above UPI ID" value="464646446@okhdfc" />
									<small className="text-muted">Please make payment to the above UPI ID and use your Account Id: 090335 as your payment reference</small>
								</div>	
																	
								
								
								<div className="d-grid gap-2 mt-3">
									<Link to={'/profile2'} className="btn btn-lg btn-danger">Confirm withdraw</Link>
								</div>
							</form>
								
							</div>
						</div>
					</div>

                    <div className="text-center  mb-3">
							<Link to={'/profile'}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default WithdrawPage;