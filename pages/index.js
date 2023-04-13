import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import PageChunk from "../components/page_chunk";
import Nav from "../components/nav";
import AboutMe from "../components/about/about_me";
import Experience from "../components/experience/experience";
import Card from "../components/card";
import Education from "../components/education/education";
import Skills from "../components/skills";
import Isomer from "isomer/js/isomer";
import { useEffect, useState } from "react";

export default function Home() {
  const [value1, setValue1] = useState(0.14)
  const [value2, setValue2] = useState(0.14)
  const [value3, setValue3] = useState(0.14)

  let val1;
  
  useEffect(() => {
    // browser code
    var canvas = document.getElementById("box_canvas");
    var iso = new Isomer(canvas);
    iso.canvasOrigin = new Isomer.Point(canvas.width / 2, canvas.height / 2);
    var blockWidth = 1.1;
    var blockDepth = 1.1;
    var blockHeight = 1.1;
  
    var randomNumber = Math.floor(Math.random() * 256);
    var currentColor = new Isomer.Color(50, 160, 244, 0.5);
    let colorIncrement1 = 0.013;
    let colorIncrement2 = 0.014;
    let colorIncrement3 = 0.015;
    var angle = 0.0;
    var angleIncrement = 0.009;
    let isoObjects = [];
    
    function animateStack() {

      if (randomNumber < 250) {
        randomNumber++;
      } else {
        randomNumber--;
      }
      for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
          for (var z = 3; z > 0; z--) {
            // if (z >= 2 && x == 2 && y == 2) continue;
            if (z >= 2 && x == 1 && y == 2 ) continue;
            if (z >= 2 && x == 2 && y == 1 ) continue;
            if (z == 2 && x == 0 && y == 2 ) continue;
            if (z == 2 && x == 2 && y == 0 ) continue;
            if (z == 1 && x == 1 && y == 0 ) continue;
            if (z == 1 && x == 0 && y == 1 ) continue;
            var blockPosition = new Isomer.Point(
              x * blockWidth,
              y * blockDepth,
              z * blockHeight
            );
  
            var block = new Isomer.Shape.Prism(
              blockPosition,
              blockWidth,
              blockDepth,
              blockHeight
            );
            
              // if (z == 1 && x == 2 && y == 0){
              //   block = block.rotateZ(
              //     blockPosition,
              //     angle
              //   );
              // }

            currentColor.a = 0.2;
            iso.add(block, currentColor);
            isoObjects.push(block);
            currentColor.r += colorIncrement1;
            currentColor.g += colorIncrement2;
            currentColor.b += colorIncrement3;
            iso.setLightPosition(
              x * blockWidth + colorIncrement1 * 2,
              y * blockDepth + colorIncrement2 * 2,
              z * blockHeight - colorIncrement3 * 2
            );
            currentColor.a = currentColor.r;
            if (currentColor.r >= 210 || currentColor.r <= 40)
              colorIncrement1 = -colorIncrement1;
            if (currentColor.g >= 210 || currentColor.g <= 40)
              colorIncrement2 = -colorIncrement2;
            if (currentColor.b >= 210 || currentColor.b <= 40)
              colorIncrement3 = -colorIncrement3;
          }
          currentColor.r += colorIncrement1;
          currentColor.g += colorIncrement2;
          currentColor.b += colorIncrement3;
          if (currentColor.r >= 210 || currentColor.r <= 40)
            colorIncrement1 = -colorIncrement1;
          if (currentColor.g >= 210 || currentColor.g <= 40)
            colorIncrement2 = -colorIncrement2;
          if (currentColor.b >= 210 || currentColor.b <= 40)
            colorIncrement3 = -colorIncrement3;
        }
        currentColor.r += colorIncrement1;
        currentColor.g += colorIncrement2;
        currentColor.b += colorIncrement3;
        if (currentColor.r >= 210 || currentColor.r <= 40)
          colorIncrement1 = -colorIncrement1;
        if (currentColor.g >= 210 || currentColor.g <= 40)
          colorIncrement2 = -colorIncrement2;
        if (currentColor.b >= 210 || currentColor.b <= 40)
          colorIncrement3 = -colorIncrement3;
      }
  
      var blackColor = new Isomer.Color(value1, value2, value3, 1);
      var redColor1 = new Isomer.Color(255, 140, 0, 0.4);
      var redColor2 = new Isomer.Color(255, 165, 0, 0.4);
      var redColor3 = new Isomer.Color(0, 225, 225, 0.8);
      var smallBlockInner1 = new Isomer.Shape.Prism(
        Isomer.Point(0, 0, 3.4),
        1,
        1,
        1
      );
      blackColor.a = 0.9 - (Math.abs(currentColor.r - currentColor.g) / 255);
      blackColor.r = currentColor.r;
      blackColor.g = currentColor.r;
      blackColor.b = currentColor.r;

      redColor3.a = -blackColor.a;
      redColor3.r = 255 - currentColor.r;
      redColor3.g = 255 - currentColor.g;
      redColor3.b = 255 - currentColor.b;
  
      smallBlockInner1 = smallBlockInner1.rotateZ(Isomer.Point(0.6, 0.7, 1), angle);
      smallBlockInner1 = smallBlockInner1.rotateX(Isomer.Point(0.6, 0.7, 3.95), angle);
      smallBlockInner1 = smallBlockInner1.rotateY(Isomer.Point(0.5, 0, 3.8), angle);
      
      angle += angleIncrement;
      if (angle > Math.PI * 2) angle -= Math.PI * 2;
      iso.add(smallBlockInner1, redColor3);
      isoObjects.push(smallBlockInner1);
  
      var blockInner = new Isomer.Shape.Prism(Isomer.Point(-5, -5, 7.4), 2, 2, 2);
      iso.add(blockInner, blackColor);
      isoObjects.push(blockInner);
  
      setTimeout(function () {
        iso.canvas.clear();
        animateStack();
      }, 10);
    }
    
    animateStack();
  },[]);
  

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function setValue(event) {
    let number = event.target.valueAsNumber;
    switch(event.target.id){
      case 'red_input':
        setValue1(number)
        val1 = number
        break;
      case 'blue_input':
        setValue2(number)
        break;
      case 'green_input':
        setValue3(number)
        break;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Colin Alexander / Software</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PageChunk>
          <div className={styles.landing_grid}>
            <div className={styles.canvas_container}>
              <canvas id="box_canvas" height="600" width="600"></canvas>
              {/* <canvas id="pyramid_canvas" height="600" width="600"></canvas> */}
            </div>
            <div className={styles.info_container}>
              <h1 className={styles.name}>colin alexander</h1>
              <h4 className={styles.job_title}>
                - fullstack software engineer -
              </h4>
              <h5 className={styles.sub_name}>
                forever curious, always learning
              </h5>

              <div className={styles.slider_container}>
                {/* <input
                  id="red_input"
                  type="range"
                  min={-1}
                  max={1}
                  step={0.02}
                  value={value1}
                  onChange={(event) => {
                    setValue(event);
                  }}
                />
                <input
                  id="blue_input"
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={value2}
                  onChange={(event) => {
                    setValue(event);
                  }}
                />
                <input
                  id="green_input"
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={value3}
                  onChange={(event) => {
                    setValue(event);
                  }}
                /> */}
              </div>
            </div>
          </div>

        </PageChunk>
          {/* <div className={styles.name}>
            <hr />
            <Skills />
            <hr />
          </div>
        <Nav />
        <PageChunk>
          <div className={styles.avatar_wrapper}>
            <Image
              src="/colin_selfie.jpg"
              width="300"
              height="300"
              className={styles.avatar}
            />
          </div>
          <AboutMe />
          <Experience />
          <Education />
        </PageChunk> */}
      </main>
    </div>
  );
}
