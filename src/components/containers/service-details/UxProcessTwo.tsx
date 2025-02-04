import React, { useState } from 'react';

const UxProcessTwo = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                How We Work
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">How We Work </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  'service-f-single fade-top ' +
                  (imgTab == 0 ? ' service-f-single-active' : ' ')
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Understanding Your Vision</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We start by getting to know you—your goals, challenges, and
                    what success looks like for your business. Your vision
                    shapes every strategy we create.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  'service-f-single fade-top ' +
                  (imgTab == 1 ? ' service-f-single-active' : ' ')
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Data at the Core</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Smart marketing is built on data, not guesswork. We analyze
                    your audience, industry trends, and competitors to build
                    campaigns that hit the mark.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  'service-f-single fade-top ' +
                  (imgTab == 2 ? ' service-f-single-active' : ' ')
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4> Customized Strategies</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    No two businesses are alike, so we don’t use generic
                    solutions. We craft SEO, PPC, and social media strategies
                    tailored to fit your specific needs.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  'service-f-single fade-top ' +
                  (imgTab == 3 ? ' service-f-single-active' : ' ')
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Clarity in Communication</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We keep you informed with clear, easy-to-understand updates.
                    You’ll know exactly what’s happening and how it’s impacting
                    your growth—no confusing jargon.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  'service-f-single fade-top ' +
                  (imgTab == 4 ? ' service-f-single-active' : ' ')
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Constant Optimization</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We don’t set and forget. Our team monitors your campaigns,
                    making tweaks along the way to ensure the best results for
                    your investment..
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  'service-f-single fade-top ' +
                  (imgTab == 5 ? ' service-f-single-active' : ' ')
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4> Results That Matter</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our goal is simple: to drive measurable growth for your
                    business. We’re here to help you reach new heights, one step
                    (and one click) at a time.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UxProcessTwo;
