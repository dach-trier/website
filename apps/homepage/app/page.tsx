import styles from "./styles.module.css";
import { Carousel, CarouselSlide } from "@dach/ui";
import { DachLogo, HeartIcon } from "@dach/svg";
import Section from "./section";

const Header = () => {
    return (
        <div className={styles["header"]}>
            <DachLogo />

            <div className={styles["links"]}>
                <span>Арт Майстерня</span>
                <span>Берегиня</span>
                <span>Табір</span>
                <span>Музичний Бенд</span>
            </div>

            <span className={styles["donate"]}>
                <HeartIcon width="25px" />
                <span>Donate</span>
            </span>
        </div>
    );
};

const Hero = () => {
    return (
        <div className={styles["hero"]}>
            <h1>Українсько-німецький ферайн «Дах»</h1>

            <div className="h-5" />

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                pretium sapien risus, ut malesuada nisi facilisis quis
            </p>

            <div className="h-8" />

            <div className={styles["button-group"]}>
                <button>Вступити</button>
                <button>Зв'язатися з нами</button>
            </div>
        </div>
    );
};

const Posts = () => {
    return (
        <Carousel className={styles["posts"]}>
            {Array.from({ length: 5 }).map((_, index) => {
                return (
                    <CarouselSlide key={index} className={styles["slide"]}>
                        <div>{index}</div>
                    </CarouselSlide>
                );
            })}
        </Carousel>
    );
};

const ContactUs = () => {
    return (
        <div className={styles["contact-us"]}>
            <h1>Contact Us</h1>
            <form>
                <input value="info@dach-trier.com" disabled />
                <input placeholder="your email" />
                <textarea placeholder="additional info" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <span>
                Copyright (c) 2026 «DACH» e.V. Trier. All Rights Reserved.
            </span>

            <span>Designed and developed by @hiegz</span>
        </div>
    );
};

export default async function Page() {
    return (
        <>
            <Header />
            <div className="h-[15vh]" />
            <Hero />
            <div className="h-[20vh]" />
            <Posts />

            <Section
                heading="Арт Майстерня"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="end"
            />

            <Section
                heading="Берегиня"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="start"
            />

            <Section
                heading="Табір"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="end"
            />

            <Section
                heading="Музичний Бенд"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="start"
            />

            <div className="h-40" />

            <ContactUs />

            <div className="h-40" />

            <Footer />
        </>
    );
}
