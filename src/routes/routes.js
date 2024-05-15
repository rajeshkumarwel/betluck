import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "../pages/login/loginContainer";
import VerificationContainer from "../pages/verification/verificationContainer";
import HomeContainer from "../pages/home/homeContainer";
import ProfileContainer from "../pages/profile/profileContainer";
import ManagePlayerContainer from "../pages/managePlayer/managePlayerContainer";
import AddPlayerContainer from "../pages/managePlayer/addPlayer/addPlayerContainer";
import PersonalInfoContainer from "../pages/personalInfo/personalInfoContainer";
import DepositContainer from "../pages/deposit/depositContainer";
import WithdrawContainer from "../pages/withdraw/withdrawContainer";
import TransactionContainer from "../pages/transactionHistory/transactionHistoryContainer";
import ManageTransactionContainer from "../pages/manageTransaction/manageTransactionContainer";

import HomeContainer1 from "../pages/home/homeContainer1";


import FullnameContainer from "../pages/fullname/fullnameContainer";
import AddwithdrawaddressContainer from "../pages/addwithdrawaddress/addwithdrawaddressContainer";
import PersonalInfoUpdateContainer1 from "../pages/personalInfoUpdate/personalInfoUpdateContainer1";
import PersonalInfoUpdateContainer2 from "../pages/personalInfoUpdate/personalInfoUpdateContainer2";
import ProfileContainer1 from "../pages/profile/profileContainer1";
import ProfileContainer2 from "../pages/profile/profileContainer2";


import ManagePlayerContainer1 from "../pages/managePlayer/managePlayerContainer1";
import ManagePlayerContainer2 from "../pages/managePlayer/managePlayerContainer2";
import AddPlayerContainer1 from "../pages/managePlayer/addPlayer1/addPlayerContainer1";
import PersonalInfoUpdateContainer from "../pages/personalInfoUpdate/personalInfoUpdateContainer";


const routes = (props) => {

    return(
        <div>
            <Routes>
                <>
                    <Route path="/" element={<LoginContainer />} />
                    <Route path="/verification" element={<VerificationContainer />} />
                    <Route path="/home" element={<HomeContainer />} />
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route path="/manageplayer" element={<ManagePlayerContainer />} />
                    <Route path="/manageplayer/addplayer" element={<AddPlayerContainer />} />
                    <Route path="/personalinfo/:id" element={<PersonalInfoContainer />} />
                    <Route path="/personalinfoupdate" element={<PersonalInfoUpdateContainer />} />
                    <Route path="/deposit" element={<DepositContainer />} />
                    <Route path="/withdraw" element={<WithdrawContainer />} />
                    <Route path="/transactionhistory" element={<TransactionContainer />} />
                    <Route path="/managetransaction" element={<ManageTransactionContainer />} />

                    <Route path="/home1" element={<HomeContainer1 />} />



                    <Route path="/fullname/:id" element={<FullnameContainer />} />
                    <Route path="/addwithdrawaddress/:id" element={<AddwithdrawaddressContainer />} />
                    <Route path="/addwithdrawaddress/:id/:update" element={<AddwithdrawaddressContainer />} />
                    <Route path="/personalinfoupdate1" element={<PersonalInfoUpdateContainer1 />} />
                    <Route path="/personalinfoupdate2" element={<PersonalInfoUpdateContainer2 />} />
                    <Route path="/profile1" element={<ProfileContainer1 />} />
                    <Route path="/profile2" element={<ProfileContainer2 />} />


                    <Route path="/manageplayer1" element={<ManagePlayerContainer1 />} />
                    <Route path="/manageplayer2" element={<ManagePlayerContainer2 />} />
                    <Route path="/manageplayer/addplayer1" element={<AddPlayerContainer1 />} />

                </>
            </Routes>
        </div>
    )

};

export default routes;