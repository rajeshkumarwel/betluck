import React from "react";
import { Link } from "react-router-dom";
import "../profile/profilePage.css";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";

const ManagePlayerPage1 = () => {

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
							<div className="w-100">
				<div className="container-fluid p-0">

					<h1 className="h3"><strong>Manage Player</strong></h1>


					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
								<div className="row">
									<div className="col-sm-6">
										<div className="card card-bg-trans">											
                                            <div className="row">
                                                <div className="col-12 mt-0">
                                                <div className="d-grid gap-2 mt-3">
												<Link to={'/manageplayer/addplayer'} className="btn btn-lg btn-danger">Add Player</Link>
                                                </div>
                                                </div>                                                   
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
									<div className="col-sm-12">
										<div className="card players-success mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>Succssfully deleted the player account</strong></h4>
												<div className="mb-1">
													<span className="text-muted">suresh.raj@outlook.com</span>
												</div>
												<div className="mb-1">
													<span className="text-muted">Account ID: 4454545</span>
												</div>
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>	
                    
					
                   

					<h5 className="card-title mt-3 mb-2">Total players (3)</h5>
								
                    <div className="row">
						<div className="col-12 col-lg-8 col-xxl-9 d-flex">
							<div className="card flex-fill">
								
								<table className="table table-hover my-0">
									
									<tbody>
										<tr>
											<td>
                                                <div>jai.kumar@gmail.com</div>
                                                <div><small className="text-muted">Super User</small></div>
                                            </td>											
											<td><span className="badge bg-success">Active</span></td>
										</tr>
										{/* <tr>
											<td>
                                                <div>suresh.raj@outlook.com</div>
                                                <div><small className="text-muted">Admin</small></div>
                                            </td>
											<td><span className="badge bg-danger">Expired</span></td>
										</tr> */}
										<tr>
											<td>
                                                <div>asha.vel@hotmail.com</div>
                                                <div><small className="text-muted">Player</small></div>
                                            </td>
											<td><span className="badge bg-success">Active</span></td>
										</tr>
										<tr>
											<td>
                                                <div>suresh.raj@outlook.com</div>
                                                <div><small className="text-muted">Admin</small></div>
                                            </td>
											<td><span className="badge bg-warning">Invited</span></td>
										</tr>
										
									</tbody>
								</table>
							</div>
						</div>
					</div>

                    <div className="text-center mb-3">
							<Link to={'/personalinfo'}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default ManagePlayerPage1;