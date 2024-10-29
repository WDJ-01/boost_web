import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "../app/styles/page.module.css"; // assuming you have a CSS module for additional styling
import logo from "../../public/Images/boost_logo (1).png";
import icons from "../../public/Images/activity-icons.png";
import Image from "next/image";
import login from "../../public/Images/login_transparent.png";
import workout from "../../public/Images/iphone_create_workout.png";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Anton } from "next/font/google";

// Dynamically import the Swiper component with ssr: false
const Slider = dynamic(() => import("../app/components/ImageCarousal"), {
  ssr: false,
});
const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src={logo} // Importing the image
            alt="Boost Logo"
            width={100}
            height={50}
          />
        </div>
        {/*} <ul className={styles.navLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>*/}
      </nav>

      <div>
        <section className={styles.banner}>
          <div className={styles.content}>
            <div className={anton.variable} id={styles.textSection}>
              <h1 className={styles.heading}>
                Join the Community.
                <br /> Track Your Progress.
              </h1>
              <p className={styles.description}>
                Boost your game by tracking your workouts, share your progress,
                compete in challenges and be part of the community.
              </p>
              <p className={styles.subtitle}>
                Built by fitness enthusiasts, for fitness enthusiasts!
              </p>

              <Link href="/sign-up" className={styles.ctaButton}>
                {" "}
                <span>Get Early Access</span>
                <AiOutlineArrowRight />
              </Link>
            </div>

            <div className={styles.imageSection}>
              <Image
                src={login}
                height={700}
                alt="Boost Login Page"
                className={styles.phoneImage}
              />
            </div>
          </div>
          <div className={styles.largetext}>
            <h1>Boost</h1>
          </div>
        </section>
        {/*<section id={styles.section2}>
          <div className={styles.section2content}>
            <div>
              <h3>Inspired By</h3>
              <div>
                <Image
                  src={icons} // Importing the image
                  alt="activity icons"
                  width={700}
                  height={100}
                />
              </div>

              <p>
                Boost draws inspiration from a wide range of fitness styles —
                CrossFit's intensity and community, Olympic lifting's strengh
                and precision, bodybuilding's dedication, and Hyrox's endurance.
                We’ve built a platform that welcomes fitness enthusiasts from
                all walks of life, offering a space to connect, share, and
                motivate each other, no matter their training style.
              </p>
            </div>
          </div>
        </section>*/}

        <section className={styles.features}>
          <div className={styles.feature1}>
            <div className={styles.featureimg}>
              {" "}
              <Image
                src={workout}
                height={700}
                alt="Create and customize your workouts"
                className={styles.featurephoneImage}
              />
            </div>
            <div className={styles.featurecontent}>
              <h2>Customize Your Workouts.</h2>
              <h2>Be Inspired By Others.</h2>
              <p>
                With Boost's fully customizable workouts feature, you can design
                workouts tailored to your goals, whether you're targeting
                specific muscle groups or training for an endurance event.
              </p>
              <p>
                {" "}
                You can also share your personalized routines with the community
                and explore workouts created by others for fresh inspiration,
                ensuring you're always motivated to try new training methods.
              </p>
            </div>
          </div>
          <div className={styles.feature2}>
            <div className={styles.featurecontent}>
              <h2>Customize Your Workouts.</h2>
              <h2>Be Inspired By Others.</h2>
              <h2>Share.</h2>
              <p>
                With Boost's fully customizable workouts feature, you can design
                workouts tailored to your goals, whether you're targeting
                specific muscle groups or training for an endurance event.
              </p>
              <p>
                {" "}
                You can also share your personalized routines with the community
                and explore workouts created by others for fresh inspiration,
                ensuring you're always motivated to try new training methods.
              </p>
            </div>
            <div className={styles.featureimg}>
              {" "}
              <Image
               
                src={login}
                height={700}
                alt="Boost Login Page"
                className={styles.featurephoneImage}
              />
            </div>
          </div>
        </section>
      </div>
      {/*} <section className={styles.banner2}>
        <div className={styles.divcontent}>
          <h3>Inspired By</h3>
          <p>
            At Boost, we’re driven by a passion for fitness inspired by
            CrossFit, conventional weightlifting, Olympic lifting, and Hyrox.
            Our goal is to empower everyone with the tools to build fully
            customizable workouts, tailored to their unique goals, and track
            their progress with in-depth analytics—whether it's mastering muscle
            groups or refining specific movements. Boost is where your fitness
            journey meets innovation, supported by a team dedicated to pushing
            the limits of performance.
          </p>
        </div>
        <div className={styles.sliderdiv}>
          <Slider />
        </div>
      </section>*/}
    </div>
  );
}
