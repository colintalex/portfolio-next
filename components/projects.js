import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Projects() {
  const workHistory = [
    {
      company: "Sanborn Geospatial",
      position: "Fullstack Engineer",
      startDate: "Sept 2023",
      endDate: "Present",
      descriptions: [
        "Products Team, works with Principal Architect to manage and maintain a Rails-based application suite, GIS-server deployments, and automated data pipelines.",
        "Team-developed a geospatial, public web-app in 5 weeks, providing a platform for spatial funding-analysis while bolstering over 1Tb of user downloads to date.",
        "Self-authored a role-based documentation platform on Rails, streamlining internal viewing/editing of client-facing documentation for 4 applications within the company suite.",
      ],
    },
    {
      company: "Sanborn Geospatial",
      position: "Software Engineer II",
      startDate: "Sept 2022",
      endDate: "Sept 2023",
      descriptions: [
        "Products Team, works with Principal Architect to manage and maintain a Rails-based application suite, GIS-server deployments, and automated data pipelines.",
        "Team-developed a geospatial, public web-app in 5 weeks, providing a platform for spatial funding-analysis while bolstering over 1Tb of user downloads to date.",
        "Self-authored a role-based documentation platform on Rails, streamlining internal viewing/editing of client-facing documentation for 4 applications within the company suite.",
      ],
    },
    {
      company: "Sanborn Geospatial",
      position: "Software Engineer I",
      startDate: "June 2021",
      endDate: "Sept 2022",
      descriptions: [
        "Assisted Lead Engineer with development/on-site deployment of  company software product suite, built using Rails.",
        "Regained control on technical debt by assisting with debugging deep-dives & developing strategies for new technology.",
        "Developed a plane tracking map interface by using aerial tracking API's for observing/recording/replaying of flight paths.",
      ],
    },
  ];

  return (
    <>
      <div id="projectsCarousel" className="carousel slide h-100">
        <div className="carousel-inner h-100">
          <div key="-1" className="carousel-item projects h-100 active">
            <div className="p-2 ">
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 translate-center opacity-50 d-flex ps-2">
                  <p className="mb-0 fs-3 px-3 border-bottom">
                    my work <i className="bi bi-arrow-right-short"></i>
                  </p>
                </div>
                <svg
                  id={styles.logo}
                  className="d-block top-50"
                  viewBox="150 180 550 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={styles.logo.path}
                    d="M383.598 241.134C385.719 240.855 388.025 241.099 390.165 241.099C392.901 241.099 395.657 241.021 398.374 241.368C401.375 241.751 404.377 242.634 407.24 243.588C413.363 245.63 419.364 248.557 424.396 252.641C427.408 255.085 430.172 257.818 432.653 260.799C433.488 261.803 434.231 262.876 435.016 263.918C435.383 264.406 435.812 265.109 436.381 265.38C436.766 265.563 437.298 265.334 437.694 265.267C438.674 265.103 439.665 265.043 440.649 264.927C443.681 264.569 446.873 264.666 449.925 264.74C454.043 264.841 458.211 265.755 462.156 266.908C463.292 267.24 464.421 267.607 465.522 268.039C466.079 268.258 466.811 268.71 467.41 268.743C467.986 268.775 468.757 267.66 469.134 267.284L473.813 262.605C478.883 257.543 484.993 253.494 491.462 250.438C511.038 241.192 534.258 241.203 553.767 250.642C560.266 253.786 566.298 257.938 571.58 262.858C587.896 278.057 596.103 300.595 593.894 322.691C593.369 327.94 592.166 333.043 590.499 338.041C589.963 339.651 589.369 341.241 588.701 342.802C588.483 343.312 587.825 344.207 587.914 344.772C588.038 345.57 589.393 346.695 589.906 347.316C591.388 349.113 592.708 351.068 593.908 353.063C597.45 358.955 600.09 365.592 601.394 372.353C602.078 375.9 601.952 379.507 601.952 383.106C601.952 386.781 602.104 390.482 601.394 394.105C598.293 409.914 588.466 424.373 574.781 432.896C567.897 437.184 560.354 439.896 552.371 441.215C546.455 442.193 540.362 441.456 534.394 441.717C528.34 441.983 522.234 441.796 516.17 441.796C506.957 441.796 497.727 441.878 488.507 441.878C446.559 441.878 404.607 441.796 362.666 441.796C352.843 441.796 343.015 441.632 333.196 441.632C329.2 441.632 325.202 441.55 321.211 441.55C318.653 441.55 315.952 441.745 313.413 441.444C303.984 440.329 294.84 436.47 287.309 430.725C276.624 422.573 268.967 410.234 266.576 396.978C266.101 394.348 266.194 391.754 266.129 389.098C266.049 385.836 265.924 382.416 266.318 379.166C266.824 374.993 268.211 370.835 269.727 366.935C271.486 362.407 273.906 357.992 276.856 354.13C277.978 352.66 279.239 351.336 280.449 349.943C280.811 349.525 281.608 349.015 281.744 348.466C281.88 347.922 281.387 346.945 281.235 346.414C280.818 344.96 280.503 343.472 280.256 341.981C279.537 337.632 279.568 333.156 279.76 328.765C280.57 310.27 291.213 293.212 306.928 283.603C313.099 279.83 320.086 277.416 327.204 276.238C329.593 275.842 332.087 275.493 334.51 275.492C335.311 275.492 336.179 275.467 336.972 275.363C337.218 275.331 337.543 275.371 337.741 275.196C338.11 274.872 338.262 274.2 338.471 273.768C339.052 272.567 339.597 271.35 340.194 270.157C341.797 266.95 343.679 263.903 345.955 261.127C354.202 251.067 365.385 244.58 378.016 241.79C379.882 241.378 381.727 241.379 383.598 241.134Z"
                    stroke=""
                    strokeWidth="0.5"
                  />

                  <path
                    className={styles.logo.path}
                    d="M421.03 296.999L421.112 297.081C423.819 294.142 426.333 291.308 429.814 289.237C440.377 282.954 454.68 283.512 464.783 290.378C466.949 291.849 468.942 293.717 470.57 295.767C471.614 297.084 472.463 298.542 473.484 299.871C474.173 298.764 474.453 297.238 474.914 296.013C475.707 293.912 476.697 291.905 477.779 289.939C482.005 282.262 488.573 275.597 496.059 271.076C514.222 260.109 537.865 261.791 554.423 274.983C558.106 277.917 561.416 281.345 564.156 285.178C567.727 290.171 570.473 295.757 572.12 301.677C575.027 312.137 574.683 323.883 570.395 333.937C568.696 337.923 566.542 341.722 564.05 345.264C563.369 346.233 562.583 347.132 561.844 348.055C561.648 348.301 561.143 348.752 561.223 349.105C561.288 349.394 561.826 349.579 562.057 349.708C562.91 350.181 563.794 350.627 564.602 351.177C567.468 353.127 570.092 355.464 572.377 358.07C580.633 367.482 584.072 380.089 580.865 392.299C577.131 406.52 565.426 418.068 550.893 420.992C547.476 421.68 543.618 421.357 540.14 421.357C534.454 421.357 528.758 421.439 523.066 421.439C468.4 421.439 413.72 421.521 359.054 421.521C349.997 421.521 340.932 421.547 331.883 421.439C328.409 421.398 324.932 421.439 321.458 421.439C319.636 421.439 317.68 421.568 315.876 421.333C306.474 420.113 297.989 414.579 292.451 406.992C289.602 403.089 287.236 398.013 286.523 393.202C286.215 391.122 286.324 388.98 286.324 386.882C286.324 384.566 286.267 382.26 286.769 379.987C288.122 373.86 291.436 368.104 295.614 363.487C298.088 360.753 301.287 358.829 304.466 357.037C305.309 356.562 306.193 356.19 307.092 355.837C307.367 355.729 307.95 355.602 308.034 355.27C308.16 354.774 307.195 353.707 306.928 353.309C305.788 351.606 304.62 349.913 303.74 348.055C301.233 342.758 299.801 336.712 300.204 330.818C300.548 325.805 301.576 320.979 303.839 316.453C310.576 302.98 325.565 294.449 340.584 296.365C345.007 296.93 349.547 298.349 353.472 300.471C354.812 301.196 356.16 301.933 357.412 302.804C358.263 303.395 359.199 304.255 360.203 304.55C360.224 303.629 359.492 302.509 359.124 301.677C358.384 300.002 357.75 298.309 357.396 296.506C355.834 288.539 357.941 280.559 363.193 274.343C374.316 261.18 394.817 259.221 408.881 268.597C411.91 270.616 414.684 273.144 416.759 276.149C418.76 279.046 420.649 282.64 421.159 286.163C421.541 288.795 421.533 291.559 421.351 294.207C421.287 295.14 421.038 296.063 421.03 296.999Z"
                    stroke=""
                    strokeWidth="0.5"
                  />

                  <path
                    className={styles.logo.path}
                    d="M389.591 456.606C390.934 456.43 392.435 456.594 393.777 456.722C402.265 457.53 409.481 462.478 413.586 469.951C414.695 471.971 415.693 474.165 416.15 476.436C418.261 486.922 414.004 497.755 404.941 503.581C402.396 505.217 399.267 506.787 396.24 507.195C389.796 508.063 383.382 507.567 377.77 504.013C374.8 502.131 371.77 499.505 369.835 496.547C362.265 484.972 365.142 468.764 376.621 460.843C379.385 458.935 382.848 457.555 386.143 456.938C387.29 456.723 388.445 456.757 389.591 456.606Z"
                    stroke=""
                    strokeWidth="0.5"
                  />

                  <path
                    className={styles.logo.path}
                    d="M390.822 468.194C396.837 467.977 402.846 472.724 404.554 478.406C405.318 480.951 405.042 484.544 404.158 487.025C403.06 490.107 400.178 492.891 397.307 494.351C395.653 495.192 393.757 495.805 391.889 495.887C389.826 495.977 387.827 495.669 385.897 494.94C384.229 494.311 382.72 493.288 381.464 492.032C374.732 485.301 376.672 473.616 385.322 469.499C387.042 468.68 388.928 468.263 390.822 468.194Z"
                    stroke=""
                    strokeWidth="0.5"
                  />

                  <path
                    className={styles.logo.path}
                    d="M364.39 506.597C366.611 506.36 369.061 506.945 371.121 507.726C377.354 510.089 382.449 516.068 383.092 522.814C383.312 525.119 383.283 527.623 382.682 529.874C380.777 537.019 374.355 542.932 366.934 543.65C362.877 544.042 358.842 543.601 355.278 541.493C351.919 539.505 348.936 536.353 347.387 532.746C344.578 526.206 345.916 517.767 350.77 512.554C353.241 509.9 356.724 507.792 360.285 507.006C361.656 506.704 363.011 506.744 364.39 506.597Z"
                    stroke=""
                    strokeWidth="0.5"
                  />

                  <path
                    className={styles.logo.path}
                    d="M363.24 515.297C369.339 514.487 375.23 519.889 374.637 526.098C374.343 529.177 372.599 531.781 370.054 533.485C368.817 534.313 367.508 534.822 366.032 535.022C364.321 535.252 362.577 535.16 360.942 534.578C359.726 534.145 358.651 533.406 357.741 532.5C356.791 531.555 355.906 530.472 355.397 529.217C352.984 523.259 356.781 516.155 363.24 515.297Z"
                    stroke=""
                    strokeWidth="0.5"
                  />

                  {/* <path
                          className={styles.logo.path}
                          id="hexagon"
                          d="M213.338 267.05L444.5 143.567L675.662 267.05V513.95L444.5 637.433L213.338 513.95V267.05Z"
                          stroke=""
                          strokeWidth="0.5"
                        /> */}
                  <defs>
                    <clipPath id="clip0">
                      <rect width="806" height="726" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div key="0" className="carousel-item projects h-100" id="apaz">
            <div className="position-absolute bottom-0 start-0 mb-3 ms-3  bg-black border p-3 rounded bg-opacity-90 z-1">
              <h5>AlphaProject Training Gym</h5>
              <hr className="my-1"></hr>
              <span className="opacity-50">
                Booking Platform + Sales Funnel
              </span>
              <hr className="my-1"></hr>
              <span className="opacity-50 fs-6">
                Rails + Hotwire w/ Stripe & DocuSeal
              </span>
              <br></br>
              <Link
                className="btn btn-outline-info btn-sm mt-2"
                target="_blank"
                href="https://www.apaztraining.com"
              >
                Go To Site <i className="bi bi-arrow-right-circle"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <button
            className="carousel-control-prev pb-3"
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon opacity-75"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next pb-3"
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon opacity-75"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}