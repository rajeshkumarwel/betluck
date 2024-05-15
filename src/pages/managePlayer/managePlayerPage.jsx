import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import "../profile/profilePage.css";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import { managePlayerInformation } from "../../store/managePlayer/actions";

const ManagePlayerPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(()=>{
		dispatch(managePlayerInformation())
	},[])

	const managePlayerInfomation = useSelector((state) => state.managePlayerList.managePlayerInformation)
	const deletePlayerInfo = useSelector((state) => state.addPlayerList.deletePlayerResponse)
	
    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
							<div className="w-100">
				<div className="container-fluid p-0">

					<h1 className="h3"><strong>Manage Player</strong></h1>

					{deletePlayerInfo.message && 
						<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-12">
										<div className="card players-success mt-3">
											<div className="card-body text-center">
												<h4 className="mt-1"><strong>{deletePlayerInfo.message}</strong></h4>
											</div>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>	
					}
                    
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
                   

					<h5 className="card-title mt-3 mb-2">Total players (3)</h5>
								
                    <div className="row">
						<div className="col-12 col-lg-8 col-xxl-9 d-flex">
							<div className="card flex-fill">
								
								<table className="table table-hover my-0">
									
									<tbody>
										
										<tr>
											<td>
                                                <div>
													<Link className="text-link" to={`/personalinfo/2`}>{'Rajeshkumar.wel@gmail.com'}</Link>
												</div>
                                                <div><small className="text-muted">{'SuperUser'}</small></div>
                                            </td>											
											<td>
											{/* <span className={(item.status === "Active" ? "badge bg-success":"") || (item.status === 'Invited' ? "badge bg-warning":"") || (item.status === 'Expired' ? "badge bg-danger":"")}>{item.status}</span> */}
							<span className={"badge bg-success"}>{'Active'}</span>
											</td>
										</tr>

										<tr>
											<td>
                                                <div>
													<Link className="text-link" to={`/personalinfo/2`}>{'Rajesh@gmail.com'}</Link>
												</div>
                                                <div><small className="text-muted">{'Player'}</small></div>
                                            </td>											
											<td>
											
							<span className={"badge bg-warning"}>{'Invited'}</span>
											</td>
										</tr>
										<tr>
											<td>
                                                <div>
													<Link className="text-link" to={`/personalinfo/2`}>{'velan@gmail.com'}</Link>
												</div>
                                                <div><small className="text-muted">{'Admin'}</small></div>
                                            </td>											
											<td>
											
							<span className={"badge bg-warning"}>{'Invited'}</span>
											</td>
										</tr>
										
										
										
									</tbody>
								</table>
							</div>
						</div>
					</div>

                    <div className="text-center mb-3">
							<Link to={'#'} onClick={() => navigate(-1)}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default ManagePlayerPage;