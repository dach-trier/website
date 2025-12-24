import styles from "./styles.module.css";

import Map from "@/components/map";

import StarIcon from "@/components/star-icon";
import HeartIcon from "@/components/heart-icon";

export default function Hero() {
    return (
        <div className={styles["container"]}>
            <div>
                <div className={styles["about"]}>
                    <h1>Dach</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam eleifend turpis et risus tincidunt, ac faucibus
                        enim cursus.
                    </p>
                </div>

                <div className={styles["buttons"]}>
                    <button className={styles["join-button"]}>
                        <StarIcon height="25px" /> Join
                    </button>

                    <button className={styles["support-button"]}>
                        <HeartIcon variant="solid" height="25px" /> Support
                    </button>
                </div>
            </div>

            <Map className={styles["map"]} />
        </div>
    );
}
