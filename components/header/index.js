import styles from "../../styles/Header.module.css";
import Link from "next/link";
import React, { use } from "react";
const Header = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div>
					<h3>Company Logo</h3>
				</div>
				<div>
					<ul className={styles.links}>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<a href="/contact">contact</a>
						</li>
						<li>
							<Link href="/api">
								<a>Home</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
export default Header;
