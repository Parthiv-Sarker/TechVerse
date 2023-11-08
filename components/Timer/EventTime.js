"use client"
import styles from "@/app/styles/TimeCom.module.css";
import Text3d from "./Text";
import { useRef, useEffect } from "react";


export default function Home({ plane }) {

	return (
		<>
			<div className={styles.container}>
				<div ref={plane} className={styles.body}>
					<Text3d 
						primary={"We Are Coming"}
						secondary={"2nd January"}
					/>
				</div>
			</div>
		</>
	);
}
