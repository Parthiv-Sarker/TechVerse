// components/Button.js
"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Button = () => {
	useEffect(() => {}, []);

	return (
		<div className="container">
			<Link href="/payment">
				<div className="custom-btn btn-12">
					<span>Click!</span>
					<span>Payment</span>
				</div>
			</Link>
		</div>
	);
};

export default Button;
