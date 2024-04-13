import React, { useEffect, useState} from "react";
import LoginPage from "./loginPage";

export default function LoginContainer() {

    return(
        <main className="d-flex w-100">
		<div className="container d-flex flex-column">
			<LoginPage />
		</div>
	</main>
    )

}