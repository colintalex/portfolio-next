import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Isomer from "isomer/js/isomer";
import { useEffect, useState } from "react";
import Nav from "../components/nav";

export default function Home() {
  const [value1, setValue1] = useState(0.14)
  const [value2, setValue2] = useState(0.14)
  const [value3, setValue3] = useState(0.14)

  useEffect(() => {
    // Initialize Isomer
    var ctx = document.getElementById("box_canvas");
    var iso = new Isomer(ctx, { useWorker: false });

    // Define block parameters
    var size = 0.25; // Adjust this value to change the size of the blocks
    var count = 12; // Adjust this value to change the number of blocks
    var initialX = 0; // Adjust this value to change the initial X position of the blocks
    var initialY = 0; // Adjust this value to change the initial Y position of the blocks
    var initialZ = 0.5; // Adjust this value to change the initial Z height of the blocks

    // Define constants
    const PI = Math.PI;

    // Define cubes
    var cubes = [];
    var delayFactor1 = 3; // Adjust this value to change the speed of the ripple
    var delayFactor2 = 2; // Adjust this value to change the speed of the ripple
    var amplitude1 = 0.1; // Adjust this value to change the amplitude of the oscillation
    var amplitude2 = 0.2; // Adjust this value to change the amplitude of the oscillation
    for (var x = 0; x < count; x++) {
      for (var y = 0; y < count; y++) {
        cubes.push({
          shape: new Isomer.Shape.Prism(
            new Isomer.Point(
              x * size + initialX,
              y * size + initialY,
              initialZ
            ),
            size,
            size,
            size
          ),
          delay1: (x + y) / delayFactor1,
          delay2: (x - y) / delayFactor2,
        });
      }
    }

    // Function to get color based on amplitude
    function getColor(amplitude) {
      var r = Math.round(((amplitude + 1) / 2) * 255);
      var b = Math.round((1 - (amplitude + 1) / 2) * 255);
      var a = r < b ? 0.9 : 1 / (r / b);
      return new Isomer.Color(b, Math.abs(r - b), r, a);
    }

    // Animation loop
    var t = 0;
    function animate() {
      // Clear canvas
      iso.canvas.clear();

      // Draw cubes with delay
      for (var i = cubes.length - 1; i >= 0; i--) {
        var tz =
          Math.sin(t - cubes[i].delay1 + 0.06 * i) * amplitude1 +
          Math.sin(t - cubes[i].delay2 + 0.05 * i) * amplitude2;
        var color = getColor(tz / (2 * amplitude2));
        iso.add(cubes[i].shape.translate(0, 0, tz), color);
      }

      // Update time
      t = (t + 0.02) % (2 * PI);

      // Request next frame
      requestAnimationFrame(animate);
    }

    // Start animation
    animate();
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Colin Alexander / Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.landing_grid}>
          <div className={styles.canvas_container}>
            <canvas id="box_canvas" height="390" width="390"></canvas>
          </div>
          <div className={styles.info_container}>
            <h1 className={styles.name}>colin alexander</h1>
            <h4 className={styles.job_title}>
              - fullstack software engineer -
            </h4>
            <h5 className={styles.sub_name}>
              forever curious, always learning
            </h5>
            <div className={styles.social_icons}>
              <a
                href="https://www.linkedin.com/in/colintalex/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/colintalex"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
