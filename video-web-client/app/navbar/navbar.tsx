"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import SignIn from "./signin";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";

export default function Navbar() {
	const [user, setUser] = useState<User | null>(null);

	// listens for authentication changes
	useEffect(() => {
		const unsubscribe = onAuthStateChangedHelper((user) => {
			setUser(user);
		});

		return () => unsubscribe();
	});
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<Image
					width={90}
					height={20}
					src="/youtube-logo.svg"
					alt="Youtube logo"
				/>
			</Link>
			<SignIn user={user} />
		</nav>
	);
}
