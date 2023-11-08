"use client";
import React from "react";
import TimerCount from "./TimerCount";
import EventTime from "./EventTime";
import { useRef, useEffect } from "react";

const Timer = () => {
	const plane = useRef(null);
	const maxRotate = 45;

	const manageMouseMove = (e) => {
		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;
		const perspective = window.innerWidth * 4;
		const rotateX = maxRotate * x - maxRotate / 2;
		const rotateY = (maxRotate * y - maxRotate / 2) * -1;
		plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
	};

	return (
		<div 
			onMouseMove={(e) => {
				manageMouseMove(e);
			}}
			className="h-screen w-screen justify-center items-center"
		>
			<EventTime plane={plane} />
			<TimerCount/>
		</div>
	);
};

export default Timer;
