import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../common-components/navbar/navbar";
import Footer from "../../../common-components/footer/footer";

const AddPlayerPage1 = () => {

    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">

					<h1 className="h3"><strong>Add Player</strong></h1>
                    
					<div className="row">
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
					</div>		
                    <div className="row mb-3">
						<div className="col-12 col-lg-8 col-xxl-9 d-flex">
							<div className="flex-fill mt-3">
							<form>
								<div className="mb-3">
									<label className="form-label">Enter players email address</label>
									<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter players email address" />
								</div>
								<div className="mb-3">
									<label className="form-label">Select players permission</label>
									<select className="form-select mb-3">
									<option>Open this select menu</option>
									<option>One</option>
									<option>Two</option>
									<option>Three</option>
									</select>
								</div>
								<div className="mb-3">
									<label className="form-label">Add player reference</label>
									<input className="form-control form-control-lg" type="text" name="email" placeholder="Enter player ID or name" />
								</div>										
								
								
								<div className="d-grid gap-2 mt-3">
									<Link to={'#'} className="btn btn-lg btn-danger">Add Player</Link>
								</div>
							</form>
								
							</div>
						</div>
					</div>

                    <div className="text-center  mb-3">
							<Link to={'/manageplayer/addplayer'}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default AddPlayerPage1;