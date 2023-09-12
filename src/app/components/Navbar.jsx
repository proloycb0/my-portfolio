import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/C.png";
import Github from "../../../public/github.png";
import Fb from "../../../public/fb.png";
import Insta from "../../../public/insta.png";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.first_container}>
                    <ul>
                        <li>Project</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={styles.second_container}>
                    <Link href="/"><Image width={50} height={50} src={logo} alt="navlogo" /></Link>
                </div>
                <div className={styles.third_container}>
                    <Link href="">
                        <Image className={styles.socialIcon} src={Github} alt="Github logo" />
                    </Link>
                    <Link href="">
                        <Image className={styles.socialIcon} src={Insta} alt="Instagram logo" />
                    </Link>
                    <Link href="">
                        <Image className={styles.socialIcon} src={Fb} alt="Facebook logo" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;