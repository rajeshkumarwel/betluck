import React, { useEffect, useState } from "react";
import { Link , useNavigate, useParams} from "react-router-dom";
import "../profile/profilePage.css";
import Navbar from "../../common-components/navbar/navbar";
import Footer from "../../common-components/footer/footer";
import { useDispatch, useSelector} from 'react-redux';
import { playerInformation } from "../../store/playerInformation/actions";
import { deletePlayer } from '../../store/AddPlayer/actions';

const PersonalInfoPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const [superUser, setSuperUser] = useState(false);

	useEffect(()=>{
		const playerinfo = {
			playerId: id ? id : localStorage.getItem('AccountId')
		}
		dispatch(playerInformation(playerinfo))
	},[])

	const playerInfomation = useSelector((state) => state.playerInformationList.playerInformation)

	const handleDeleteClick = () => {
		let playerId = {
			playerId: id
		}
		if(playerInfomation?.player?.role !== "SuperUser") {
			dispatch(
				deletePlayer(playerId, (res) => {


					if(res?.statusCode === 200) {
						navigate('/manageplayer')
					}
				})
			)
		} else {
			setSuperUser(true)
		}
	}
    return(
        <div className="main">
			<Navbar navitem={false} />

			<main className="content">
				<div className="container-fluid p-0">
				<h1 className="h3">
					<strong>{playerInfomation?.player?.playerName ? playerInfomation?.player?.playerName: playerInfomation?.player?.email.split('@')[0]}</strong>
					 <span className="card-title"> {playerInfomation?.player?.role}</span></h1>
					<div className="row">
						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-6 col-6">
									<h5 className="card-title mt-3 mb-2">Personal Info</h5>
									</div>
									<div className="col-sm-6 col-6 text-end active-text">
									<div>
										<span 
										
										className={(playerInfomation?.player?.status === "Active" ? "badge bg-success":"") || (playerInfomation?.player?.status === 'Invited' ? "badge bg-warning":"") || (playerInfomation?.player?.status === 'Expired' ? "badge bg-danger":"")}
										
										>{playerInfomation?.player?.status}</span>
									</div>	
									</div>
								</div>
							</div>
						</div>
					</div>

					{superUser && 
					<div className="row">
					<div className="col-xl-6 col-xxl-5 d-flex">
						<div className="w-100">
							<div className="row">
								<div className="col-sm-12">
									<div className="card players-danger mt-3">
										<div className="card-body text-center">
											<h4 className="mt-1"><strong>{'Unable to delete Super User'}</strong></h4>
										</div>
									</div>
								</div>									
							</div>
						</div>
					</div>
				</div>	
					}

                    <div className="row">
						<div className="col-12 col-lg-8 col-xxl-9 d-flex">
							<div className="card flex-fill">								
								<table className="table table-hover my-0">									
									<tbody>
										<tr>
											<td>
											<div><small className="text-muted">Login details</small></div>
                                                <div>{playerInfomation?.player?.email}</div>                                               
                                            </td>
											<td></td>						
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Full Name</small></div>
                                                <div>{playerInfomation?.player?.playerName ? playerInfomation?.player?.playerName: playerInfomation?.player?.email.split('@')[0]}</div>                                                
                                            </td>
											<td className="text-end"><Link className="text-link" to={`/fullname/${id}`}>Edit</Link></td>
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Withdraw UPI ID</small></div>
                                                <div>{playerInfomation?.player?.upi ? playerInfomation?.player?.upi:""}</div>
                                            </td>
											<td className="text-end"><Link className="text-link" to={`/addwithdrawaddress/${id}`} >Edit</Link></td>
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Balance</small></div>
                                                <div>
												<i className="bi bi-currency-rupee"></i> 
													{playerInfomation?.player?.balance ? playerInfomation?.player?.balance:"00.00"}</div>
                                            </td>
											<td className="text-end"><Link className="text-link" to={"#"}>Add balance</Link></td>
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Player reference</small></div>
                                                <div>{playerInfomation?.player?.reference}</div>
                                            </td>
											<td></td>
										</tr>
										<tr>
											<td>
											<div><small className="text-muted">Player permission</small></div>
                                                <div>{playerInfomation?.player?.role}</div>
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
					{(playerInfomation?.player?.role === 'SuperUser' || playerInfomation?.player?.role === 'Admin') &&
						<div className="row">
							<div className="col-12 col-lg-6">
								<div>
									<div className="row text-center">
										<div className="d-grid gap-2 mb-3 col-6">
											<button onClick={handleDeleteClick} className="btn btn-danger">Delete Player</button>
										</div>
										<div className="d-grid gap-2 mb-3 col-6">
											<Link to={"/manageplayer2"} className="btn btn-secondary">Freeze account</Link>
										</div>
									</div>
								</div>
							</div>
						
						</div>
						}

					

                    <div className="text-center mb-3">
							<Link to={'#'} onClick={() => navigate(-1)}>Go Back</Link>
						</div>
				</div>
			</main>

			<Footer />
		</div>
    )

}

export default PersonalInfoPage;