import styles from "./styles.module.css";

import DachLogo from "@/components/dach-logo";
import StarIcon from "@/components/star-icon";
import HeartIcon from "@/components/heart-icon";

export default function Hero() {
    return (
        <div className="mt-10 flex items-center gap-20 justify-between px-(--content-padding)">
            <div className="flex flex-col gap-10 h-fit">
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

            <DachLogo className="hidden h-50 md:block lg:h-80 2xl:h-90" />
        </div>
    );
}
