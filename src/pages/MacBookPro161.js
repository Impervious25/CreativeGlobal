import { useEffect } from "react";
import styles from "./MacBookPro161.module.css";

const MacBookPro161 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.macbookPro161}>
      <div className={styles.groupParent}>
        <header className={styles.behance1Parent}>
          <img className={styles.behance1Icon} alt="" src="../behance-1.svg" />
          <img className={styles.twitter1Icon} alt="" src="../twitter-1.svg" />
          <img
            className={styles.dribbble1Icon}
            alt=""
            src="../dribbble-1.svg"
          />
          <img
            className={styles.linkedinLogo1Icon}
            alt=""
            src="../linkedinlogo-1.svg"
          />
          <div className={styles.logo}>
            <img
              className={styles.creatiweglobalIcon}
              alt=""
              src="../creatiweglobal@2x.png"
            />
          </div>
        </header>
        <div className={styles.group2}>
          <div className={styles.div4}>
            <div className={styles.div} data-animate-on-scroll>
              <div className={styles.div1}>
                <div className={styles.div2}>
                  <div className={styles.div3}>
                    <div className={styles.div5} />
                  </div>
                  <div className={styles.work}>Work</div>
                </div>
              </div>
              <div className={styles.div6} />
              <div className={styles.joinUs}>Join us</div>
            </div>
            <div className={styles.div31} data-animate-on-scroll>
              <div className={styles.rectangle4Contact}>
                <b className={styles.contactUs}>Contact us</b>
              </div>
            </div>
          </div>
          <div className={styles.div11} data-animate-on-scroll>
            <div className={styles.rectangle1Servies}>
              <b className={styles.seeOurServices}>See our services</b>
            </div>
          </div>
        </div>
        <div className={styles.group3}>
          <h3
            className={styles.weCreateExperiencesContainer}
            data-animate-on-scroll
          >
            <span>{`We create `}</span>
            <span className={styles.experiences}>Experiences</span>
            <span> that will inspire..</span>
          </h3>
          <h5
            className={styles.yourCustomersSolutionsContainer}
            data-animate-on-scroll
          >
            <span>{`your `}</span>
            <b className={styles.customers}>{`customers        `}</b>
            <span>
              solutions and powerful partnerships to make them happen.
            </span>
          </h5>
        </div>
        <div className={styles.group4}>
          <div className={styles.tittle}>
            <h5 className={styles.whoWeveWorking}>Who we’ve working with</h5>
            <h4 className={styles.tittle1}>
              <div className={styles.awesomePartner}>
                <span>{`Awesome `}</span>
                <span className={styles.partner}>Partner</span>
              </div>
            </h4>
          </div>
        </div>
        <div className={styles.group5}>
          <div className={styles.mrk2} data-animate-on-scroll>
            <img className={styles.mrk2Child} alt="" src="../group-16@2x.png" />
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <img
                className={styles.itcLimited1Icon}
                alt=""
                src="../itclimited-1@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <img
                className={styles.indianOilLogo1Icon}
                alt=""
                src="../indian-oil-logo-1@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <img className={styles.jio1Icon} alt="" src="../jio-1@2x.png" />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <img
                className={styles.mercedesBenzLogo20111920x1Icon}
                alt=""
                src="../mercedesbenzlogo20111920x1080-1@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <img
                className={styles.olaCabsLogoIcon}
                alt=""
                src="../ola-cabs-logo@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <button className={styles.nykaaLogo} />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <img
                className={styles.josephCyrilBamfordLogo1Icon}
                alt=""
                src="../joseph-cyril-bamford-logo-1@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle7} />
              <img
                className={styles.metablogLogoIcon}
                alt=""
                src="../metablog-logo@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle7} />
              <img
                className={styles.duSolidBrandmarkRgb1Icon}
                alt=""
                src="../du-solid-brandmark-rgb-1@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle9} />
              <img
                className={styles.comicIndiaIcon}
                alt=""
                src="../comicindia@2x.png"
              />
            </div>
          </div>
          <div className={styles.mrk1} data-animate-on-scroll>
            <img className={styles.mrk2Child} alt="" src="../group-16@2x.png" />
            <div className={styles.mrk1Inner}>
              <div className={styles.rectangleParent7}>
                <div className={styles.rectangle} />
                <button className={styles.pxCiplaLogo1} />
              </div>
            </div>
            <div className={styles.mrk1Inner}>
              <div className={styles.rectangleParent7}>
                <div className={styles.rectangle} />
                <img
                  className={styles.samsungLogo2Icon}
                  alt=""
                  src="../samsunglogo2@2x.png"
                />
              </div>
            </div>
            <div className={styles.mrk1Inner}>
              <div className={styles.rectangleParent7}>
                <div className={styles.rectangle} />
                <img
                  className={styles.pxDecathlonLogo1Icon}
                  alt=""
                  src="../2560pxdecathlon-logo-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.rectangle13} />
              <img
                className={styles.index1Icon}
                alt=""
                src="../index-1@2x.png"
              />
            </div>
            <div className={styles.mrk1Inner}>
              <div className={styles.rectangleParent7}>
                <div className={styles.rectangle} />
                <button className={styles.pxAccenture} />
              </div>
            </div>
            <div className={styles.mrk1Inner}>
              <div className={styles.rectangle} />
              <img
                className={styles.welspunLogoBe5825e96aSeekloIcon}
                alt=""
                src="../welspunlogobe5825e96aseeklogo-1@2x.png"
              />
            </div>
            <div className={styles.mrk1Inner}>
              <div className={styles.rectangleParent7}>
                <div className={styles.rectangle} />
                <img
                  className={styles.exideLogo1Icon}
                  alt=""
                  src="../exide-logo-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.mrk1Inner}>
              <div className={styles.rectangle} />
              <img
                className={styles.icon}
                alt=""
                src="../26749945354587-1@2x.png"
              />
            </div>
            <div className={styles.mrk1Inner}>
              <div className={styles.rectangle18} />
              <img
                className={styles.icon1}
                alt=""
                src="../1664475192276@2x.png"
              />
            </div>
          </div>
        </div>
        <section className={styles.group6}>
          <div className={styles.getInTouch}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle.svg"
            />
            <div className={styles.title}>
              <h5
                className={styles.weHaveOcean}
              >{`We have ocean of clients `}</h5>
              <h4 className={styles.youCanAlso}>You can also be one of them</h4>
            </div>
            <button className={styles.btnContact}>
              <h5 className={styles.contact}>Contact</h5>
            </button>
            <div className={styles.iconScroll}>
              <div className={styles.socialMediaIcon}>
                <button className={styles.facebook1}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector.svg"
                  />
                </button>
                <button className={styles.facebook1}>
                  <img className={styles.groupIcon} alt="" src="../group.svg" />
                </button>
                <button className={styles.facebook1}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="../vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="../vector3.svg"
                  />
                </button>
                <button className={styles.facebook1}>
                  <img
                    className={styles.x304twitterIcon}
                    alt=""
                    src="../-x30-4twitter.svg"
                  />
                </button>
                <button className={styles.facebook1}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../group1.svg"
                  />
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="../group2.svg"
                  />
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="../group3.svg"
                  />
                  <img
                    className={styles.groupIcon4}
                    alt=""
                    src="../group4.svg"
                  />
                  <img
                    className={styles.groupIcon5}
                    alt=""
                    src="../group5.svg"
                  />
                  <img
                    className={styles.groupIcon6}
                    alt=""
                    src="../group6.svg"
                  />
                  <img
                    className={styles.groupIcon7}
                    alt=""
                    src="../group7.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.group7}>
          <div className={styles.bgParent}>
            <div className={styles.bg}>
              <div className={styles.bgChild} />
            </div>
            <div className={styles.marketingParent}>
              <div className={styles.marketing}>
                <div className={styles.marketingInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.marketingStrategyParent}>
                      <div
                        className={styles.marketingStrategy}
                      >{`Marketing & Strategy`}</div>
                      <div className={styles.theSearchForContainer}>
                        <p className={styles.theSearchForThe}>
                          The search for the coral reefs where conservation and
                        </p>
                        <p className={styles.restorationEffortsWillHave}>
                          restoration efforts will have the greatest impact.
                        </p>
                      </div>
                    </div>
                    <button className={styles.btnContact1}>
                      <div className={styles.knowMore}>Know more</div>
                    </button>
                  </div>
                </div>
                <div className={styles.div7}>
                  <img
                    className={styles.stratergy1Icon}
                    alt=""
                    src="../stratergy-1@1x.png"
                  />
                  <img
                    className={styles.estrosoLoudspeakerEmittingSIcon}
                    alt=""
                    src="../estroso-loudspeaker-emitting-social-media-icons-as-sound-minima-639933addd13452eb8184f0f9af5999ctransformed-1@1x.png"
                    data-animate-on-scroll
                  />
                </div>
              </div>
              <div className={styles.line3} />
              <div className={styles.design}>
                <div className={styles.div7}>
                  <img
                    className={styles.stratergy1Icon1}
                    alt=""
                    src="../stratergy-11@1x.png"
                  />
                  <img
                    className={styles.estrosoProductDesignTechnicIcon}
                    alt=""
                    src="../estroso-product-design-technical-design-and-its-website-hyperr-43b43224c5e34f608935f6ea04f52dc4transformed-1@1x.png"
                    data-animate-on-scroll
                  />
                </div>
                <div className={styles.marketingInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.marketingStrategyParent}>
                      <div className={styles.marketingStrategy}>Design</div>
                      <div className={styles.theSearchForContainer}>
                        <p className={styles.theSearchForThe}>
                          The search for the coral reefs where conservation and
                        </p>
                        <p className={styles.restorationEffortsWillHave}>
                          restoration efforts will have the greatest impact.
                        </p>
                      </div>
                    </div>
                    <button className={styles.btnContact1}>
                      <div className={styles.knowMore}>Know more</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.line2} />
              <div className={styles.media}>
                <div className={styles.mediaInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.marketingStrategyParent}>
                      <div className={styles.marketingStrategy}>
                        Media Production
                      </div>
                      <div className={styles.theSearchForContainer}>
                        our race to reveal the impact of climate change on the
                        world's coral reefs.
                      </div>
                    </div>
                    <button className={styles.btnContact1}>
                      <div className={styles.knowMore}>Know more</div>
                    </button>
                  </div>
                </div>
                <div className={styles.div9}>
                  <img
                    className={styles.production1Icon}
                    alt=""
                    src="../production-1@1x.png"
                  />
                  <img
                    className={styles.estrosoMediaProductionWebsiIcon}
                    alt=""
                    src="../estroso-media-production-website-mana-shooting-through-film-cam-42f8e2bed3ef4983a99172f8ce448306transformed@1x.png"
                    data-animate-on-scroll
                  />
                </div>
              </div>
              <div className={styles.line1} />
              <div className={styles.tech}>
                <div className={styles.div10}>
                  <img
                    className={styles.immersiveTechnology1}
                    alt=""
                    src="../immersive-technology-1@1x.png"
                  />
                  <img
                    className={styles.immersiveTechnology1TransfoIcon}
                    alt=""
                    src="../immersivetechnology1transfored@2x.png"
                    data-animate-on-scroll
                  />
                </div>
                <div className={styles.techInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.marketingStrategyParent}>
                      <div className={styles.marketingStrategy}>
                        <p className={styles.theSearchForThe}>{`Immersive `}</p>
                        <p className={styles.restorationEffortsWillHave}>
                          Technology
                        </p>
                      </div>
                      <div className={styles.takingGoogleStreet}>
                        Taking Google Street View underwater to record and
                        reveal the state of the ocean.
                      </div>
                    </div>
                    <button className={styles.btnContact1}>
                      <div className={styles.knowMore}>Know more</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ourService} data-animate-on-scroll>
              <h2 className={styles.ourServices}>Our Services</h2>
              <h2 className={styles.capabilities}>
                <span className={styles.capabilitiesTxt}>
                  <span>{`—  `}</span>
                  <span
                    className={styles.capabilities1}
                  >{`& Capabilities`}</span>
                </span>
              </h2>
            </div>
          </div>
        </section>
        <section className={styles.realPplParent}>
          <div className={styles.realPpl}>
            <img className={styles.realPplChild} alt="" />
          </div>
          <div className={styles.section1} data-animate-on-scroll>
            <div className={styles.wereSurprisinglySmallContainer}>
              <span>{`We're surprisingly small nonprofit with outrageously `}</span>
              <b>big ideas</b>
            </div>
            <div className={styles.figure}>
              <img
                className={styles.ayoScienceRhytmjpgwebpIcon}
                alt=""
                src="../ayosciencerhytmjpgwebp@2x.png"
              />
            </div>
            <div className={styles.figure1}>
              <div className={styles.scienceCircadianLightjpg} />
              <img
                className={styles.macStudioSetMockup1}
                alt=""
                src="../mac-studio-set-mockup-1@2x.png"
              />
            </div>
            <div className={styles.figure2}>
              <div className={styles.ayoScienceOptimaljpgwebp} />
              <img
                className={styles.laptopMockupPsd03}
                alt=""
                src="../laptop-mockup--psd03@2x.png"
              />
            </div>
            <div className={styles.pagination}>
              <div className={styles.awesomePartner}>
                <span>{`02 `}</span>
                <span className={styles.span}>/ 05</span>
              </div>
              <div className={styles.btn}>
                <div className={styles.left}>
                  <img
                    className={styles.arrowleftIcon}
                    alt=""
                    src="../arrowleft.svg"
                  />
                </div>
                <div className={styles.left}>
                  <img
                    className={styles.arrowleftIcon}
                    alt=""
                    src="../arrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactus}>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group@2x.png"
              />
              <div className={styles.manWearingOculusQuestInTh} />
              <div className={styles.content}>
                <div className={styles.heading}>
                  <h4 className={styles.loveOurWorkContainer}>
                    <p className={styles.theSearchForThe}>Love our Work</p>
                    <p className={styles.theSearchForThe}>Don’t be shy,</p>
                    <p className={styles.restorationEffortsWillHave}>
                      Contact Us
                    </p>
                  </h4>
                  <h6 className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </h6>
                </div>
                <button className={styles.btnContact5}>
                  <div className={styles.contact1}>Contact</div>
                </button>
              </div>
            </div>
            <img
              className={styles.estrosoCuteSpacemanCallingIcon}
              alt=""
              src="../estroso-cute-spaceman-calling-on-the-telephone-hyperrealistic--5b4c6be7bbf9463c8446592f42e9fc92transformed-1a-3@1x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.divParent}>
              <div className={styles.div13}>
                <img
                  className={styles.parisFrontPage1Aibwhljb0TIcon}
                  alt=""
                  src="../parisfrontpage1aibwhljb0transformed-1@2x.png"
                  data-animate-on-scroll
                />
                <h3 className={styles.realPeopleReal}>
                  Real people Real values
                </h3>
              </div>
              <h3 className={styles.our} data-animate-on-scroll>
                Our
              </h3>
              <h3 className={styles.work1} data-animate-on-scroll>
                Work
              </h3>
              <img
                className={styles.parisFrontPage1Aibwhljb0TIcon1}
                alt=""
                src="../parisfrontpage1aibwhljb0transformedremovebgpreview-1@1x.png"
                data-animate-on-scroll
              />
              <img
                className={styles.cloud8094Icon}
                alt=""
                src="../cloud8094@1x.png"
                data-animate-on-scroll
              />
              <img
                className={styles.parisFrontPage1Aibwhljb0TIcon2}
                alt=""
                src="../parisfrontpage1aibwhljb0transformedremovebgpreview-2@2x.png"
                data-animate-on-scroll
              />
            </div>
          </div>
          <div className={styles.thisEmmyWinningFilmContainer}>
            <span>{`This `}</span>
            <b className={styles.customers}>Emmy-winning film</b>
            <span>{` about our work has helped tens of millions of viewers `}</span>
            <b className={styles.customers}>understand the coral reef crisis</b>
            <span>
              . It has taken home numerous awards, including the Audience Award
              at Sundance Film Festival, Best Documentary at the Peabody Awards,
              Outstanding Nature Documentary at the Emmys, and was even
              shortlisted for an Academy Award.
            </span>
          </div>
          <a className={styles.frameA}>
            <div className={styles.frameChild}>
              <div className={styles.frameWrapper1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="../ellipse-4.svg"
                  />
                  <div className={styles.wParent} data-animate-on-scroll>
                    <div className={styles.w}>W</div>
                    <div className={styles.a}>A</div>
                    <div className={styles.t}>T</div>
                    <div className={styles.c}>C</div>
                    <div className={styles.h}>H</div>
                    <div className={styles.text}>{` `}</div>
                    <div className={styles.t1}>T</div>
                    <div className={styles.h1}>H</div>
                    <div className={styles.e}>E</div>
                    <div className={styles.text1}>{` `}</div>
                    <div className={styles.t2}>T</div>
                    <div className={styles.r}>R</div>
                    <div className={styles.a1}>A</div>
                    <div className={styles.i}>I</div>
                    <div className={styles.l}>L</div>
                    <div className={styles.e1}>E</div>
                    <div className={styles.r1}>R</div>
                    <div className={styles.text2}>{` `}</div>
                    <div className={styles.n}>N</div>
                    <div className={styles.o}>O</div>
                    <div className={styles.w1}>W</div>
                    <div className={styles.text3}>{` `}</div>
                    <div className={styles.div14}>-</div>
                    <div className={styles.text4}>{` `}</div>
                    <div className={styles.w2}>W</div>
                    <div className={styles.a2}>A</div>
                    <div className={styles.t3}>T</div>
                    <div className={styles.c1}>C</div>
                    <div className={styles.h2}>H</div>
                    <div className={styles.text5}>{` `}</div>
                    <div className={styles.t4}>T</div>
                    <div className={styles.h3}>H</div>
                    <div className={styles.e2}>E</div>
                    <div className={styles.text6}>{` `}</div>
                    <div className={styles.t5}>T</div>
                    <div className={styles.r2}>R</div>
                    <div className={styles.a3}>A</div>
                    <div className={styles.i1}>I</div>
                    <div className={styles.l1}>L</div>
                    <div className={styles.e3}>E</div>
                    <div className={styles.r3}>R</div>
                    <div className={styles.text7}>{` `}</div>
                    <div className={styles.n1}>N</div>
                    <div className={styles.o1}>O</div>
                    <div className={styles.w3}>W</div>
                    <div className={styles.text8}>{` `}</div>
                    <div className={styles.div15}>-</div>
                    <div className={styles.text9}>{` `}</div>
                  </div>
                </div>
              </div>
              <img className={styles.vectorIcon4} alt="" src="../vector4.svg" />
            </div>
          </a>
        </section>
        <section className={styles.joinUsParent}>
          <h3 className={styles.joinUs1}>
            <span>{`Join `}</span>
            <b className={styles.us}>Us</b>
          </h3>
          <h4 className={styles.aLibraryOf}>
            A Library of free-to-use resources created for the un ocean decade.
          </h4>
          <article className={styles.div16}>
            <div className={styles.ul} data-animate-on-scroll>
              <div className={styles.a4}>
                <div className={styles.div17}>
                  <img className={styles.svgIcon} alt="" src="../svg.svg" />
                </div>
                <div className={styles.div18}>
                  <div className={styles.div19}>
                    <h5 className={styles.cloudEngineering}>
                      Cloud Engineering
                    </h5>
                    <h6 className={styles.helpMillionsBuild}>
                      Help millions build what’s next for their business — all
                      with technology built in the cloud. Find your engineering
                      jobs with Google Cloud now.
                    </h6>
                  </div>
                  <button className={styles.seeJobs}>See jobs</button>
                </div>
              </div>
              <div className={styles.a5}>
                <div className={styles.div20}>
                  <div className={styles.div21}>
                    <h5 className={styles.executiveLeadership}>
                      Executive Leadership
                    </h5>
                    <h6 className={styles.bringYourExperience}>
                      Bring your experience and perspectives to Google and join
                      our goal to build for everyone.
                    </h6>
                  </div>
                  <button className={styles.seeJobs1}>See jobs</button>
                  <img
                    className={styles.execLeadersLarge1xb64bfff8Icon}
                    alt=""
                    src="../execleaderslarge-1xb64bfff85bf23b3897c7430277860e02jpg@2x.png"
                  />
                </div>
              </div>
              <div className={styles.a4}>
                <div className={styles.div22}>
                  <img
                    className={styles.engTechnologySmall1x1a7ec8Icon}
                    alt=""
                    src="../engtechnologysmall-1x1a7ec886c82c4ef80485a518df1137f3jpg@2x.png"
                  />
                </div>
                <div className={styles.div18}>
                  <div className={styles.div24}>
                    <h5 className={styles.cloudEngineering}>
                      Remote-eligible roles
                    </h5>
                    <h6 className={styles.findJobsThat}>
                      Find jobs that are eligible for remote work.
                    </h6>
                  </div>
                  <button className={styles.seeJobs}>See jobs</button>
                </div>
              </div>
              <div className={styles.a4}>
                <div className={styles.div22}>
                  <img
                    className={styles.engTechnologySmall1x1a7ec8Icon}
                    alt=""
                    src="../datasmall-1xde03bd1325550cae3b36ae2360d531fajpg@2x.png"
                  />
                </div>
                <div className={styles.div18}>
                  <div className={styles.div27}>
                    <h5 className={styles.cloudEngineering}>
                      Data Center Roles
                    </h5>
                    <h6 className={styles.makeGooglesProduct}>
                      Make Google’s product portfolio possible by building data
                      centers of the future.
                    </h6>
                  </div>
                  <button className={styles.seeJobs}>See jobs</button>
                </div>
              </div>
            </div>
          </article>
          <div className={styles.frameItem} />
          <h3 className={styles.andStartWorkingContainer}>
            <p className={styles.theSearchForThe}>and start</p>
            <p className={styles.restorationEffortsWillHave}>working.</p>
          </h3>
          <h4 className={styles.wereAUniqueContainer}>
            <span>{`We’re a unique nonprofit with a `}</span>
            <b className={styles.customers}>different</b>
            <span> approach to ocean conservation</span>
          </h4>
          <div className={styles.frameInner} />
          <div className={styles.rectangleDiv} />
          <img className={styles.vectorIcon5} alt="" />
          <img className={styles.vectorIcon6} alt="" src="../vector5.svg" />
          <img className={styles.vectorIcon7} alt="" />
          <img className={styles.vectorIcon8} alt="" src="../vector6.svg" />
        </section>
        <div className={styles.groupGroup}>
          <img className={styles.groupIcon8} alt="" src="../group8.svg" />
          <div className={styles.frameChild1} />
          <div className={styles.firstName}>First name</div>
          <div className={styles.frameChild2} />
          <div className={styles.service}>Service</div>
          <div className={styles.budgetInUsd}>Budget in USD</div>
          <button className={styles.groupButton}>
            <div className={styles.groupChild} />
            <div className={styles.immersiveTech}>Immersive tech</div>
          </button>
          <button className={styles.rectangleParent16}>
            <button className={styles.groupItem} />
            <div className={styles.k10k}>5K - 10K</div>
          </button>
          <button className={styles.rectangleParent17}>
            <div className={styles.groupChild} />
            <div
              className={styles.marketingStrategy1}
            >{`Marketing & Strategy`}</div>
          </button>
          <button className={styles.rectangleParent18}>
            <div className={styles.groupChild} />
            <div className={styles.design2}>Design</div>
          </button>
          <button className={styles.rectangleParent19}>
            <div className={styles.groupChild} />
            <div className={styles.moreThan50k}>More than 50K</div>
          </button>
          <button className={styles.rectangleParent20}>
            <div className={styles.groupChild} />
            <div className={styles.immersiveTech}>Media Production</div>
          </button>
          <button className={styles.rectangleParent21}>
            <div className={styles.groupChild} />
            <div className={styles.k50k}>10K - 50K</div>
          </button>
          <div className={styles.frameChild3} />
          <input
            className={styles.mobileNumber}
            type="text"
            placeholder="Mobile number"
          />
          <div className={styles.frameChild4} />
          <div className={styles.frameChild5} />
          <div className={styles.enterYourMessage}>Enter your message</div>
          <div className={styles.uploadYourBrief}>Upload Your Brief</div>
          <div className={styles.frameChild6} />
          <button className={styles.rectangleButton} data-animate-on-scroll />
          <b className={styles.sendRequest}>Send Request</b>
          <div className={styles.frameChild7} />
          <div className={styles.emailAdress}>Email adress</div>
          <div className={styles.frameChild8} />
          <div className={styles.frameChild9} />
          <div className={styles.lastName}>Last name</div>
          <div className={styles.frameChild10} />
          <img
            className={styles.arrow07Icon}
            alt=""
            src="../arrow-07@2x.png"
            data-animate-on-scroll
          />
          <div className={styles.div28}>
            <button className={styles.vectorGroup}>
              <img className={styles.vectorIcon9} alt="" src="../vector7.svg" />
              <div className={styles.uploadAFile}>Upload a File</div>
              <div className={styles.dragAndDrop}>Drag and drop files here</div>
            </button>
          </div>
          <input className={styles.rectangleInput} type="text" />
        </div>
        <footer className={styles.footer}>
          <img className={styles.logoIcon} alt="" src="../logo.svg" />
          <div className={styles.support}>
            <div className={styles.pleaseSupportOur}>
              Please support our work
            </div>
            <div className={styles.weRelyOn}>
              We rely on donations from our supporters and partners. Thanks to
              you we are able to provide support for critical ocean science and
              conservation action.
            </div>
            <button className={styles.btn1}>
              <b className={styles.donate}>DONATE</b>
            </button>
          </div>
          <div className={styles.email}>
            <div className={styles.pleaseSupportOur}>Get on our list</div>
            <input
              className={styles.emailChild}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.menu}>
            <div className={styles.aboutUs}>About us</div>
            <div className={styles.aboutUs}>Projects</div>
            <div className={styles.aboutUs}>Mission</div>
            <div className={styles.aboutUs}>Resources</div>
            <div className={styles.aboutUs}>Contact</div>
            <div className={styles.mediaWrapper}>
              <div className={styles.aboutUs}>Media</div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <button className={styles.faBrandstwitter}>
              <img
                className={styles.vectorIcon10}
                alt=""
                src="../vector8.svg"
              />
            </button>
            <button className={styles.faBrandstwitter}>
              <img
                className={styles.vectorIcon11}
                alt=""
                src="../vector9.svg"
              />
            </button>
            <button className={styles.faBrandstwitter}>
              <img
                className={styles.vectorIcon12}
                alt=""
                src="../vector10.svg"
              />
            </button>
            <button className={styles.faBrandstwitter}>
              <img
                className={styles.vectorIcon11}
                alt=""
                src="../vector11.svg"
              />
            </button>
            <button className={styles.faBrandstwitter}>
              <img
                className={styles.vectorIcon14}
                alt=""
                src="../vector12.svg"
              />
            </button>
          </div>
          <img className={styles.graphicIcon} alt="" src="../graphic.svg" />
          <div className={styles.copyright}>
            <div className={styles.aboutUs}>
              Copyright © 2022 The Agensea | The Agensea is a registered
              501(c)(3) nonprofit
            </div>
            <div className={styles.termsOfServiceParent}>
              <div className={styles.aboutUs}>Terms of Service</div>
              <div className={styles.aboutUs}>Privacy Policy</div>
              <div className={styles.aboutUs}>Support</div>
            </div>
          </div>
        </footer>
      </div>
      <div className={styles.frameParent2} data-animate-on-scroll>
        <img className={styles.frameIcon} alt="" src="../frame.svg" />
        <img className={styles.frameIcon1} alt="" src="../frame1.svg" />
      </div>
    </div>
  );
};

export default MacBookPro161;
