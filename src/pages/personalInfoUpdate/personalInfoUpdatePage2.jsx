import React from "react";
import { Link } from "react-router-dom";
import "../profile/profilePage.css";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";

const PersonalInfoUpdatePage2 = () => {

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">
				<h1 className="h3"><strong>ID: 4646445 <span className="pi pi-copy"></span></strong> </h1>
					
				<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card players-success mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>Withdraw UPI ID updated succssfully</strong></h4>												
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-6 col-6">
									<h5 className="card-title mt-3 mb-2">Personal Info</h5>
									</div>
									<div className="col-sm-6 col-6 text-end active-text">
									<div><span className="text-danger">Super User</span></div>	
									</div>
								</div>
							</div>
						</div>
					</div>
                    <div className="row">
						<div className="col-12 col-lg-8 col-xxl-9 d-flex">
							<div className="card flex-fill">								
								<table className="table table-hover my-0">									
									<tbody>
										<tr>
											<td>
											<div><small className="text-muted">Login details</small></div>
                                                <div>jai.kumar@gmail.com</div>                                               
                                            </td>	
											<td></td>					
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Full Name</small></div>
                                                <div>jaya kuamr</div>                                                
                                            </td>
											<td><Link to={"/fullname"}>Edit</Link></td>	
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Withdraw UPI ID</small></div>
                                                <div>646464644644@okhdfc</div>
                                            </td>
											<td><Link to={"/addwithdrawaddress"}>Edit</Link></td>	
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Balance</small></div>
                                                <div><strong><i className="bi bi-currency-rupee"></i>00.00</strong></div>
                                            </td>
											<td>
											<div><Link to={"/"}>Add Balance</Link></div>
											</td>
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Player reference</small></div>
                                                <div>Dinesh K</div>
                                            </td>
										</tr>
										
										
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-12">
										<div className="card">
											<div className="card-body card-body-txt">
											<Link to={'#'}>
												<div className="d-flex">
													<div className="col mt-0 profile-text">
														<h5 className="card-title mb-0"><span className="pi pi-history profile-icon-text"></span> Transaction history </h5>    
													</div>
                                                    <span className="pi pi-angle-right text-end"></span>
												</div>
											</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				

					

                    <div className="text-center mb-3">
							<Link to={'/addwithdrawaddress'}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default PersonalInfoUpdatePage2;