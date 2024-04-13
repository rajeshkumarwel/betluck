import React, { useEffect, useState} from "react";
import VerificationPage from "./verificationPage";

export default function VerificationContainer() {

    return(
        <main className="d-flex w-100">
		<div className="container d-flex flex-column">
			<VerificationPage />
		</div>
	</main>
    )

}