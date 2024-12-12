"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
export default function Home() {

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div id="content" className="site-content ">
        <section className="slider style_page_thirteen nav_position_one position-relative">
          <div>

            <Swiper navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]} className="mySwiper">
              <SwiperSlide>
                <div className="slide-item-content">
                  <div className="slide-item content_center">
                    <div className="image-layer"
                      style={{ backgroundImage: "url(assets/images/sliders/slider-home-13-1.jpg)" }}>
                    </div>
                    <div className="medium-container">
                      <div className="row align-items-center">
                        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
                          <div className="slider_content">
                            <h6 className="animate_left text-uppercase">
                              Solutions for your business
                            </h6>
                            <h1 className="animate_up">
                              Save time and increase profits for your business
                            </h1>
                            <p className="animate_right pd_bottom_40">
                              Professional back office and administrative support for accountants, book-keepers
                              and finance experts
                            </p>
                            <ul className="animate_down">
                              <li className="theme_btn_all color_two">
                                <a href="#" className="theme-btn one">Our Solutions</a>
                              </li>
                              <li className="theme_btn_all">
                                <a href="#" className="theme-btn one color_white">Our Projects</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-item-content">
                  <div className="slide-item content_left">
                    <div className="image-layer"
                      style={{ backgroundImage: "url(assets/images/sliders/slider-home-13-1.jpg)" }}>
                    </div>
                    <div className="medium-container">
                      <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                          <div className="slider_content">
                            <h6 className="animate_left">
                              Solutions for your business
                            </h6>
                            <h1 className="animate_up">
                              Save time and increase profits for your business

                            </h1>
                            <p className="animate_right pd_bottom_40">
                              Professional back office and administrative support for accountants, book-keepers
                              and finance experts

                            </p>
                            <ul className="animate_down">
                              <li className="theme_btn_all color_two">
                                <a href="#" className="theme-btn one">Our Solutions</a>
                              </li>
                              <li className="theme_btn_all">
                                <a href="#" className="theme-btn one color_white">Our Projects</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-item-content">
                  <div className="slide-item content_center">
                    <div className="image-layer"
                      style={{ backgroundImage: "url(assets/images/sliders/slider-home-13-1.jpg)" }}>
                    </div>
                    <div className="medium-container">
                      <div className="row align-items-center">
                        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
                          <div className="slider_content">
                            <h6 className="animate_left text-uppercase">
                              Solutions for your business
                            </h6>
                            <h1 className="animate_up">
                              Save time and increase profits for your business
                            </h1>
                            <p className="animate_right pd_bottom_40">
                              Professional back office and administrative support for accountants, book-keepers
                              and finance experts
                            </p>
                            <ul className="animate_down">
                              <li className="theme_btn_all color_two">
                                <a href="#" className="theme-btn one">Our Solutions</a>
                              </li>
                              <li className="theme_btn_all">
                                <a href="#" className="theme-btn one color_white">Our Projects</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

        </section>


        <section className="service_section bg_light_1" id="service">

          <div className="pd_top_80"></div>
          <div className="container">
            <div className="row">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">

                  <h2>Benefits of choosing Ozark & Co.</h2>
                  <p>We deliver the highest quality of work, on time, everytime.</p>
                </div>
              </div>
              <div className="pd_bottom_20"></div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="service_content_two ">
                    <div className="content_inner"
                      style={{ backgroundImage: "url(/assets/images/service/service-image-1.png)" }}>
                      <div className="content_inner_in">
                        <div className="icon_image">
                          <img src="assets/images/010-job-search.png" className="img-fluid"
                            alt="Service Image" />
                        </div>
                        <h2>
                          <a href="#">A solution that works for you</a>
                        </h2>
                        <p>Pay for what you need and never more.</p>
                        <ul>
                          <li>Year-round availability</li>
                          <li>Flexible and Convenient</li>
                          <li>Available On-Demand</li>
                        </ul>
                      </div>
                    </div>
                    <div className="ovarlay_link">
                      <a href="#">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="overlay_content">
                      <h2>
                        <a href="#">Unique Solution</a>
                      </h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                </div>
                <div className="mr_bottom_20"></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="service_content_two  active_ser">
                    <div className="content_inner"
                      style={{ backgroundImage: "url(/assets/images/service/service-image-2.png)" }}>
                      <div className="content_inner_in">
                        <div className="icon_image">
                          <img src="assets/images/service-ico-1.png" className="img-fluid" alt="Service Image" />
                        </div>
                        <h2>
                          <a href="#">Increase your profit margins</a>
                        </h2>
                        <p>Indignation sed dislike men who are beguiled and demoralized.</p>
                        <ul>
                          <li>
                            Improving Communication
                          </li>
                          <li>
                            Employee issue resolution
                          </li>
                          <li>
                            Proper Documentation Process
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ovarlay_link">
                      <a href="#">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="overlay_content">
                      <h2>
                        <a href="#">Profitability</a>
                      </h2>
                      <p>On average we save clients as much as 50% in cost, compared with carrying out the
                        work themselves.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mr_bottom_20"></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="service_content_two ">
                    <div className="content_inner"
                      style={{ backgroundImage: "url(/assets/images/service/service-image-3.png)" }}>
                      <div className="content_inner_in">
                        <div className="icon_image">
                          <img src="assets/images/service-ico-2.png" className="img-fluid" alt="Service Image" />
                        </div>
                        <h2>
                          <a href="#">Low prices, quick turnaround</a>
                        </h2>
                        <p>Where competitive fixed fee pricing meets quality work.</p>
                        <ul>
                          <li>
                            Efficiency
                          </li>
                          <li>
                            Cost-effective
                          </li>
                          <li>
                            Resourceful
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ovarlay_link">
                      <a href="#">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="overlay_content">
                      <h2>
                        <a href="#">Compliance Audits</a>
                      </h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                </div>
                <div className="mr_bottom_20"></div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_70"></div>
        </section>



        <section className="project-section bg_dark_3">
          <div className="pd_top_85"></div>
          <div className="container-fluid pd_zero">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections text-white">

                <h2 className="text-white">Our Solutions</h2>
                <p>We deliver the highest quality of work, on time, everytime.</p>
              </div>
            </div>

            <Swiper
              slidesPerView={5}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}

              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div style={{ width: "350.6px", marginRight: "30px" }}>
                  <div className="project_post style_seven">
                    <div className="image_box">
                      <img src="/assets/images/service/1.webp" className="img-fluid" alt="img" />
                    </div>
                    <div className="content_box">
                      <h2 className="title_pro"><a href="#" rel="bookmark">Bookkeeping</a></h2>
                      <a className="quote-btn" href="#">Get A Quote</a>
                      <div className="image_zoom_box ">
                        <a href="#" data-fancybox="gallery"><span
                          className="fa fa-plus zoom_icon"></span></a>
                      </div>
                    </div>
                    <div className="overlay ">
                      <div className="text ">
                        <h2 className="title_pro"><a href="#" rel="bookmark">Bookkeeping</a></h2>
                        <p className="short_desc">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard dummy
                          text ever...</p>
                        <a href="#" className="read_more tp_five ">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div style={{ width: "350.6px", marginRight: "30px" }}>
                  <div className="project_post style_seven">
                    <div className="image_box">
                      <img src="/assets/images/service/2.webp" className="img-fluid" alt="img" />
                    </div>
                    <div className="content_box">
                      <h2 className="title_pro"><a href="#" rel="bookmark">Year-End Accounts</a></h2>
                      <a className="quote-btn" href="#">Get A Quote</a>
                      <div className="image_zoom_box ">
                        <a href="#" data-fancybox="gallery"><span
                          className="fa fa-plus zoom_icon"></span></a>
                      </div>
                    </div>
                    <div className="overlay ">
                      <div className="text ">
                        <h2 className="title_pro"><a href="#" rel="bookmark">Year-End Accounts</a></h2>
                        <p className="short_desc">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard dummy
                          text ever...</p>
                        <a href="#" className="read_more tp_five ">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ width: "350.6px", marginRight: "30px" }}>
                  <div className="project_post style_seven">
                    <div className="image_box">
                      <img src="/assets/images/service/3.webp" className="img-fluid" alt="img" />
                    </div>
                    <div className="content_box">
                      <h2 className="title_pro"><a href="#" rel="bookmark">Virtual CFO</a></h2>
                      <a className="quote-btn" href="#">Get A Quote</a>
                      <div className="image_zoom_box ">
                        <a href="#" data-fancybox="gallery"><span
                          className="fa fa-plus zoom_icon"></span></a>
                      </div>
                    </div>
                    <div className="overlay ">
                      <div className="text ">
                        <h2 className="title_pro"><a href="#" rel="bookmark">Virtual CFO</a></h2>
                        <p className="short_desc">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard dummy
                          text ever...</p>
                        <a href="#" className="read_more tp_five ">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ width: "350.6px", marginRight: "30px" }}>
                  <div className="project_post style_seven">
                    <div className="image_box">
                      <img src="/assets/images/service/4.webp" className="img-fluid" alt="img" />
                    </div>
                    <div className="content_box">
                      <h2 className="title_pro"><a href="#" rel="bookmark">Financial Automation</a></h2>
                      <a className="quote-btn" href="#">Get A Quote</a>
                      <div className="image_zoom_box ">
                        <a href="#" data-fancybox="gallery"><span
                          className="fa fa-plus zoom_icon"></span></a>
                      </div>
                    </div>
                    <div className="overlay ">
                      <div className="text ">
                        <h2 className="title_pro"><a href="#" rel="bookmark">Financial Automation</a>
                        </h2>
                        <p className="short_desc">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard dummy
                          text ever...</p>
                        <a href="#" className="read_more tp_five ">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ width: "350.6px", marginRight: "30px" }}>
                  <div className="project_post style_seven">
                    <div className="image_box">
                      <img src="/assets/images/service/5.webp" className="img-fluid" alt="img" />
                    </div>
                    <div className="content_box">
                      <h2 className="title_pro"><a href="#" rel="bookmark">AP/AR Processes</a></h2>
                      <a className="quote-btn" href="#">Get A Quote</a>
                      <div className="image_zoom_box ">
                        <a href="#" data-fancybox="gallery"><span
                          className="fa fa-plus zoom_icon"></span></a>
                      </div>
                    </div>
                    <div className="overlay ">
                      <div className="text ">
                        <h2 className="title_pro"><a href="#" rel="bookmark">AP/AR Processes</a></h2>
                        <p className="short_desc">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard dummy
                          text ever...</p>
                        <a href="#" className="read_more tp_five ">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="pd_bottom_65"></div>
        </section>

        <section className="about-section">
          <div className="pd_top_85"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                <div className="image_boxes style_seven">
                  <div className="image_box">
                    <img
                      src="/assets/images/about/about-11.jpg"
                      className="img-fluid height_600px object-fit-cover"
                      alt="about"
                    />

                    <div className="experience">
                      <div className="experience_inner">
                        <h2> 25+ Years Of Experience </h2>
                      </div>
                    </div>
                  </div>
                  <div className="pattern_imag">
                    <img src="/assets/images/pattern-n1.png" alt="img" />
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-lg-9 col-md-11 offset-1">
                <div className="title_all_box style_one dark_color">
                  <div className="title_sections left">
                    <div className="before_title">Why Choose Us</div>
                    <h2>Trusted Partner for Accounts & Finance Professionals</h2>

                    <div className="description_box">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>

                    <div className="pd_top_20"></div>
                    <div className="description_box">
                      <p>
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pd_top_20"></div>
                <div className="tabs_all_box tabs_all_box_start type_three">
                  <div className="tab_over_all_box">
                    <div className="tabs_header clearfix">
                      <ul className="showcase_tabs_btns nav-pills nav clearfix">
                        <li className="nav-item">
                          <a
                            className={`s_tab_btn nav-link ${activeTab === 1 ? 'active' : ''}`}
                            onClick={() => handleTabClick(1)}
                          >
                            Mission
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`s_tab_btn nav-link ${activeTab === 2 ? 'active' : ''}`}
                            onClick={() => handleTabClick(2)}
                          >
                            Vision
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`s_tab_btn nav-link ${activeTab === 3 ? 'active' : ''}`}
                            onClick={() => handleTabClick(3)}
                          >
                            Values
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="s_tab_wrapper">
                      <div className="s_tabs_content">
                        <div className={`s_tab fade ${activeTab === 1 ? 'active-tab show' : ''}`} id="tabtabone">
                          <div className="tab_content one">
                            <div className="content_bx">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={`s_tab fade ${activeTab === 2 ? 'active-tab show' : ''}`} id="tabtabtwo">
                          <div className="tab_content one">
                            <div className="content_bx">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={`s_tab fade ${activeTab === 3 ? 'active-tab show' : ''}`} id="tabtabthree">
                          <div className="tab_content one">
                            <div className="content_bx">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_80"></div>
        </section>


        <section className="funfact-section bg_light_1">
          <div className="pd_bottom_80"></div>
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                <div className="section__counter four_column">
                  <div className="grid_show_case grid_layout clearfix" style={{ position: "relative", height: "235px" }}>
                    <div className="grid_box _card" style={{ position: "absolute", left: "0px", top: "0px" }}>
                      <div className="counter-block style_one count-box counted">
                        <div className="icon_box  ">

                          <div className="coun_ter">
                            <span className="count-text" data-speed="1500" data-stop="1423">3000</span>
                            <small>+</small>
                          </div>
                        </div>
                        <div className="content_box">
                          <h6>Global Clients</h6>

                        </div>
                      </div>
                    </div>
                    <div className="grid_box _card" style={{ position: "absolute", left: "277.5px", top: "0px" }}>
                      <div className="counter-block style_one count-box counted">
                        <div className="icon_box  ">

                          <div className="coun_ter">
                            <span className="count-text" data-speed="1500" data-stop="100">500</span>
                            <small>+</small>
                          </div>
                        </div>
                        <div className="content_box">
                          <h6>Financial Planners</h6>

                        </div>
                      </div>
                    </div>
                    <div className="grid_box _card" style={{ position: "absolute", left: "555px", top: "0px" }}>
                      <div className="counter-block style_one count-box counted">
                        <div className="icon_box  ">

                          <div className="coun_ter">
                            <span className="count-text" data-speed="1500" data-stop="82">22</span>
                            <small>+</small>
                          </div>
                        </div>
                        <div className="content_box">
                          <h6>Awards Wins</h6>

                        </div>
                      </div>
                    </div>
                    <div className="grid_box _card" style={{ position: "absolute", left: "832.5px", top: "0px" }}>
                      <div className="counter-block style_one count-box counted">
                        <div className="icon_box  ">

                          <div className="coun_ter">
                            <span className="count-text" data-speed="1500" data-stop="82">92</span>
                            <small>%</small>
                          </div>
                        </div>
                        <div className="content_box">
                          <h6>Client Satisfaction</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_70"></div>
        </section>

        <section className="content-section">
          <div className="pd_top_50"></div>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="title_all_box style_six text-center">
                  <div className="title_sections">

                    <div className="title">Our Expertise</div>
                    <p className="description_text">We deliver the highest quality of work, on time, everytime.
                    </p>
                  </div>
                  <div className="pd_bottom_20"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="choose_box  type_one">
                  <div className="image_box">
                    <img src="assets/images/24-hours-support.png" className="img-fluid svg_image" alt="icon png" />
                  </div>
                  <div className="content_box">
                    <span className="step_no">01</span>
                    <div className="text_box">
                      <h2>
                        <a href="#" target="_blank">
                          24/7 support </a>
                      </h2>
                      <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>


                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="choose_box  type_one">
                  <div className="image_box">
                    <img src="assets/images/email-marketing.png" className="img-fluid svg_image" alt="icon png" />
                  </div>
                  <div className="content_box">
                    <span className="step_no">02</span>
                    <div className="text_box">
                      <h2>
                        <a href="#" target="_blank">
                          Quick Response </a>
                      </h2>
                      <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>


                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="choose_box  type_one">
                  <div className="image_box">
                    <img src="assets/images/team-management.png" className="img-fluid svg_image" alt="icon png" />
                  </div>
                  <div className="content_box">
                    <span className="step_no">03</span>
                    <div className="text_box">
                      <h2>
                        <a href="#" target="_blank">
                          Experience Team </a>
                      </h2>
                      <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>


                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="choose_box  type_one">
                  <div className="image_box">
                    <img src="assets/images/solution-1.png" className="img-fluid svg_image" alt="icon png" />
                  </div>
                  <div className="content_box">
                    <span className="step_no">04</span>
                    <div className="text_box">
                      <h2>
                        <a href="#" target="_blank">
                          Smart solutions </a>
                      </h2>
                      <p>Alienssa pentalim ex arcu, ac ultricies tortor ultricies pellentesque.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_65"></div>
        </section>

        <section className="contact-client-carousel-section">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-12 bg_op_1"
              style={{ background: "url(assets/images/testimonialbg.jpg)" }}>
              <div className="videobtns text-center d-flex align-items-center flex-column justify-content-center">
                <h4 className="color_white">How can we help you?</h4>
                <h5 className="color_white">+91 - 8743877462</h5>
                <div className="pd_top_100"></div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 bg_op_1"
              style={{ backgroundImage: "url(assets/images/home-12-testi.jpg)" }}>
              <div className="pd_top_90"></div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-9 col-md-12">
                  <div className="client-brand-wrapper">
                    <div className="title_all_box style_one light_color">
                      <div className="title_sections left">
                        <h2>Software Integration </h2>
                        <p>Over 20 years of experience we’ll ensure you always get the best guidance.We help
                          our clients set new standards of excellence.</p>
                      </div>
                    </div>
                    <div className="pd_bottom_15"></div>
                    <div className="software-div">
                      <img src="assets/images/softwares/1.png" alt="softwares" />
                    </div>
                    <div className="pd_bottom_40"></div>
                    <div className="software-div">
                      <img src="assets/images/softwares/2.png" alt="softwares" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2"></div>
              </div>
              <div className="pd_bottom_60"></div>
            </div>
          </div>
        </section>


        <section className="tab-section bg_op_1" style={{ backgroundImage: "url(assets/images/tab-sec-bg.jpg)" }}>
          <div className="pd_top_100"></div>
          <div className="container">
            <div className="row">
              <div className="tabs_all_box  tabs_all_box_start type_one">
                <div className="tab_over_all_box">
                  <div className="tabs_header clearfix">
                    <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                      <li className="nav-item">
                        <a className="s_tab_btn nav-link active" data-tab="#tabtabone">01. Affordable</a>
                      </li>
                      <li className="nav-item">
                        <a className="s_tab_btn nav-link" data-tab="#tabtabtwo">02. Knowledge</a>
                      </li>
                      <li className="nav-item">
                        <a className="s_tab_btn nav-link" data-tab="#tabtabthree">03. Saves Time</a>
                      </li>
                      <li className="nav-item">
                        <a className="s_tab_btn nav-link" data-tab="#tabtabtfour">04. Fast &amp; Quality</a>
                      </li>
                      <li className="nav-item">
                        <a className="s_tab_btn nav-link" data-tab="#tabtabfive">05. Experienced</a>
                      </li>
                    </ul>
                    <div className="toll_free">
                      <a href="tel:180667586677"> <i className="icon-phone-call"></i>Call For Free
                        Consultation</a>
                    </div>
                  </div>
                  <div className="s_tab_wrapper">
                    <div className="s_tabs_content">
                      <div className="s_tab fade active-tab show" id="tabtabone">
                        <div className="tab_content one"
                          style={{ backgroundImage: "url(assets/images/tab-image.jpg)" }}>
                          <div className="content_image">
                            <h6>Why Ozark</h6>

                            <h2>Affordable &amp; Flexible</h2>

                            <p>Must explain too you how all this mistaken idea of denouncing pleasures
                              praising pain was born and we will give you complete account of the system
                              the actual teachings of the great explorer.</p>

                            <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i
                              className="icon-right-arrow"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="s_tab fade" id="tabtabtwo">
                        <div className="tab_content one"
                          style={{ backgroundImage: "url(/assets/images/blog/blog-image-8.jpg)" }}>
                          <div className="content_image">
                            <h6>Why Ozark</h6>

                            <h2>Affordable &amp; Flexible</h2>

                            <p>Must explain too you how all this mistaken idea of denouncing pleasures
                              praising pain was born and we will give you complete account of the system
                              the actual teachings of the great explorer.</p>

                            <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i
                              className="icon-right-arrow"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="s_tab fade" id="tabtabthree">
                        <div className="tab_content one"
                          style={{ backgroundImage: "url(/assets/images/about/about-4.jpg)" }}>
                          <div className="content_image">
                            <h6>Why Ozark</h6>

                            <h2>Affordable &amp; Flexible</h2>

                            <p>Must explain too you how all this mistaken idea of denouncing pleasures
                              praising pain was born and we will give you complete account of the system
                              the actual teachings of the great explorer.</p>

                            <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i
                              className="icon-right-arrow"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="s_tab fade" id="tabtabtfour">
                        <div className="tab_content one"
                          style={{ backgroundImage: "url(/assets/images/about/about-2.jpg)" }}>
                          <div className="content_image">
                            <h6>Why Ozark</h6>

                            <h2>Affordable &amp; Flexible</h2>

                            <p>Must explain too you how all this mistaken idea of denouncing pleasures
                              praising pain was born and we will give you complete account of the system
                              the actual teachings of the great explorer.</p>

                            <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i
                              className="icon-right-arrow"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="s_tab fade" id="tabtabfive">
                        <div className="tab_content one"
                          style={{ backgroundImage: "url(/assets/images/about/about-3.jpg)" }}>
                          <div className="content_image">
                            <h6>Why Ozark</h6>

                            <h2>Affordable &amp; Flexible</h2>

                            <p>Must explain too you how all this mistaken idea of denouncing pleasures
                              praising pain was born and we will give you complete account of the system
                              the actual teachings of the great explorer.</p>

                            <a href="#" target="_blank" rel="nofollow" className="rd_more">Read More <i
                              className="icon-right-arrow"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_90"></div>
        </section>

        <section className="testimonial-section pd_left_100 pd_right_100">
          <div className="pd_top_85"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_two text-center dark_color">
                  <div className="title_sections two">

                    <h2>Customers Experience</h2>
                  </div>
                  <div className="mr_bottom_20"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-11 m-auto">
                <div className="testimonial_sec dark_color style_two">
                  <div
                    className="swiper single_swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div>

                      <Swiper

                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        initialSlide={1}
                        centeredSlides={true}
                        loop
                      >
                        <SwiperSlide>
                          <div
                            style={{ width: "490.333px", marginRight: "30px" }}>
                            <div className="testimonial_box">
                              <div className="authour_image">
                                <i className="icon-quote"></i>
                                <img src="assets/images/team/team-2.jpg" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h4>Jacob Leonardo</h4>
                                  <span>Senior Manager of Excel Solution</span>
                                </div>
                              </div>
                              <div className="pd_bottom_20"></div>
                              <div className="comment">
                                While running an early stage startup everything feels
                                hard, that’s why it’s been so nice to have our accounting
                                feel easy. We recommed Qetus.
                              </div>
                              <div className="rating">
                                <ul>
                                  <li><span className="fa fa-star fill"></span><span
                                    className="fa fa-star fill"></span><span
                                      className="fa fa-star empty"></span><span
                                        className="fa fa-star empty"></span><span
                                          className="fa fa-star empty"></span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            style={{ width: "490.333px", marginRight: "30px" }}>
                            <div className="testimonial_box">
                              <div className="authour_image">
                                <i className="icon-quote"></i>
                                <img src="assets/images/team/team-1.jpg" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h4>Jacob Leonardo</h4>
                                  <span>Senior Manager of Excel Solution</span>
                                </div>
                              </div>
                              <div className="pd_bottom_20"></div>
                              <div className="comment">
                                While running an early stage startup everything feels
                                hard, that’s why it’s been so nice to have our accounting
                                feel easy. We recommed Qetus.
                              </div>
                              <div className="rating">
                                <ul>
                                  <li><span className="fa fa-star fill"></span><span
                                    className="fa fa-star fill"></span><span
                                      className="fa fa-star empty"></span><span
                                        className="fa fa-star empty"></span><span
                                          className="fa fa-star empty"></span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div style={{ width: "490.333px", marginRight: "30px" }}>
                            <div className="testimonial_box">
                              <div className="authour_image">
                                <i className="icon-quote"></i>
                                <img src="assets/images/team/team-3.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h4>Jacob Leonardo</h4>
                                  <span>Senior Manager of Excel Solution</span>
                                </div>
                              </div>
                              <div className="pd_bottom_20"></div>
                              <div className="comment">
                                While running an early stage startup everything feels
                                hard, that’s why it’s been so nice to have our accounting
                                feel easy. We recommed Qetus.
                              </div>
                              <div className="rating">
                                <ul>
                                  <li><span className="fa fa-star fill"></span><span
                                    className="fa fa-star fill"></span><span
                                      className="fa fa-star empty"></span><span
                                        className="fa fa-star empty"></span><span
                                          className="fa fa-star empty"></span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div style={{ width: "490.333px", marginRight: "30px" }}>
                            <div className="testimonial_box">
                              <div className="authour_image">
                                <i className="icon-quote"></i>
                                <img src="assets/images/team/team-2.jpg" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h4>Jacob Leonardo</h4>
                                  <span>Senior Manager of Excel Solution</span>
                                </div>
                              </div>
                              <div className="pd_bottom_20"></div>
                              <div className="comment">
                                While running an early stage startup everything feels
                                hard, that’s why it’s been so nice to have our accounting
                                feel easy. We recommed Qetus.
                              </div>
                              <div className="rating">
                                <ul>
                                  <li><span className="fa fa-star fill"></span><span
                                    className="fa fa-star fill"></span><span
                                      className="fa fa-star empty"></span><span
                                        className="fa fa-star empty"></span><span
                                          className="fa fa-star empty"></span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div style={{ width: "490.333px", marginRight: "30px" }}>
                            <div className="testimonial_box">
                              <div className="authour_image">
                                <i className="icon-quote"></i>
                                <img src="/assets/images/team/team-1.jpg" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h4>Jacob Leonardo</h4>
                                  <span>Senior Manager of Excel Solution</span>
                                </div>
                              </div>
                              <div className="pd_bottom_20"></div>
                              <div className="comment">
                                While running an early stage startup everything feels
                                hard, that’s why it’s been so nice to have our accounting
                                feel easy. We recommed Qetus.
                              </div>
                              <div className="rating">
                                <ul>
                                  <li><span className="fa fa-star fill"></span><span
                                    className="fa fa-star fill"></span><span
                                      className="fa fa-star empty"></span><span
                                        className="fa fa-star empty"></span><span
                                          className="fa fa-star empty"></span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            style={{ width: "490.333px", marginRight: "30px" }}>
                            <div className="testimonial_box">
                              <div className="authour_image">
                                <i className="icon-quote"></i>
                                <img src="assets/images/team/team-3.png" alt="image" />
                              </div>
                              <div className="c_content">
                                <div className="content_in">
                                  <h4>Jacob Leonardo</h4>
                                  <span>Senior Manager of Excel Solution</span>
                                </div>
                              </div>
                              <div className="pd_bottom_20"></div>
                              <div className="comment">
                                While running an early stage startup everything feels
                                hard, that’s why it’s been so nice to have our accounting
                                feel easy. We recommed Qetus.
                              </div>
                              <div className="rating">
                                <ul>
                                  <li><span className="fa fa-star fill"></span><span
                                    className="fa fa-star fill"></span><span
                                      className="fa fa-star empty"></span><span
                                        className="fa fa-star empty"></span><span
                                          className="fa fa-star empty"></span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>

                    </div>

                  </div>


                  <div
                    className="swiper single_swiper_tab swiper-initialized swiper-horizontal swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs">
                    <div className="swiper-wrapper" id="swiper-wrapper-dadfd711360e46e9" aria-live="polite"
                      style={{ transform: "translate3d(0px, 0px, 0px)", transitionDuration: "0ms" }}>

                    </div>

                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="pd_bottom_80"></div>
        </section>

        <section className="blog-post" id="blog" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="pd_top_80"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="title_all_box style_six text-center  dark_color">
                  <div className="title_sections">
                    <h2>Latest News and Updates</h2>

                  </div>
                </div>
                <div className="pd_bottom_10"></div>
              </div>
            </div>
            <div className="blog_all_styles grid ">


              <div className="row">

                <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">

                  <div className="news_box type_one clearfix">
                    <div className="news_inner">
                      <div className="image_box">
                        <img src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" />
                        <div className="overlay"></div>
                        <div className="post-category">
                          <a href="blog-single.html" className="categories">
                            <i className="icon-folder"></i>
                            Compliance Audits
                          </a>
                        </div>
                      </div>
                      <div className="content_box">
                        <ul className="post-info clearfix">

                          <li className="date">
                            <a href="blog-single.html">
                              <i className="far  fa-calendar"></i>
                              8 Oct , 2023
                            </a>
                          </li>
                        </ul>
                        <h2 className="entry-title"><a href="blog-single.html">Why
                          Should Business Payroll Outsourcing?</a></h2>
                        <p className="short_desc">How well this mistaken ideas off denouncing
                          pleasure &amp; praisings will give you complete.</p>
                        <div className="bottom_content clearfix">
                          <div className="continure_reading">
                            <a href="blog-single.html" className="read_more type_one">
                              Continue Reading <span className="icon-arrow-right"></span></a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">

                  <div className="news_box type_one clearfix">
                    <div className="news_inner">
                      <div className="image_box">
                        <img src="/assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" />
                        <div className="overlay"></div>
                        <div className="post-category">
                          <a href="blog-single.html" className="categories">
                            <i className="icon-folder"></i>
                            HR Consulting
                          </a>
                        </div>
                      </div>
                      <div className="content_box">
                        <ul className="post-info clearfix">

                          <li className="date">
                            <a href="blog-single.html"><i className="far  fa-calendar"></i>
                              8 Oct , 2023
                            </a>
                          </li>
                        </ul>
                        <h2 className="entry-title">
                          <a href="blog-single.html">
                            How to Handle Employee With Works
                          </a>
                        </h2>
                        <p className="short_desc">How well this mistaken ideas off denouncing
                          pleasure &amp; praisings will give you complete.</p>
                        <div className="bottom_content clearfix">
                          <div className="continure_reading">
                            <a href="blog-single.html" className="read_more type_one">
                              Continue Reading <span className="icon-arrow-right"></span></a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>


                </div>

                <div className="col-xl-4 col-md-6 col-sm-6  col-xs-12">

                  <div className="news_box type_one clearfix">
                    <div className="news_inner">
                      <div className="image_box">
                        <img width="750" height="420" src="/assets/images/blog/blog-image-6.jpg"
                          className="img-fluid" alt="" decoding="async" loading="lazy"
                          srcSet="/assets/images/blog/blog-image-6.jpg 750w, assets/images/blog/blog-image-6-600x336.jpg 600w, /assets/images/blog/blog-image-6-300x168.jpg 300w"
                          sizes="(max-width: 750px) 100vw, 750px" />
                        <div className="overlay"></div>
                        <div className="post-category">
                          <a href="https://themepanthers.com/wp/creote/v2-new/category/recruiting/"
                            className="categories"><i className="icon-folder"></i>Recruiting</a>
                        </div>
                      </div>
                      <div className="content_box">
                        <ul className="post-info clearfix">

                          <li className="date"> <a
                            href="https://themepanthers.com/wp/creote/v2-new/2023/10/08/retaining-good-employees-motivated/"><i
                              className="far  fa-calendar"></i>8 Oct ,
                            2023 </a> </li>
                        </ul>
                        <h2 className="entry-title"><a
                          href="https://themepanthers.com/wp/creote/v2-new/2023/10/08/retaining-good-employees-motivated/">Retaining
                          Good Employees &amp; Motivated</a></h2>
                        <p className="short_desc">How well this mistaken ideas off denouncing
                          pleasure &amp; praisings will give you complete.</p>
                        <div className="bottom_content clearfix">
                          <div className="continure_reading">
                            <a href="https://themepanthers.com/wp/creote/v2-new/2023/10/08/retaining-good-employees-motivated/"
                              className="read_more type_one">
                              Continue Reading <span className="icon-arrow-right"></span></a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_70"></div>
        </section>


        <section className="banner-section bg_op_1" style={{ backgroundImage: "url(/assets/images/sliders/banner-9.jpg)" }}>
          <div className="pd_top_100"></div>
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 col-md-12">
                <div className="title_all_box style_one dark_color">
                  <div className="title_sections">
                    <div className="before_title">Solutions for your business</div>
                    <h2 className="title_big">Searching for the best HR software for your business?</h2>
                    <p>Our power of choice is untrammelled and when nothing prevents being able to do what we
                      like best every pleasure.</p>
                  </div>
                </div>
                <div className="pd_bottom_20"></div>
                <div className="theme_btn_all color_one">
                  <a href="#" target="_blank" rel="nofollow" className="theme-btn one">Enroll Now</a>
                </div>
                <div className="pd_bottom_40"></div>
              </div>
              <div className="col-xl-1 hidden-lg"></div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="contact_form_box_all type_five">
                  <div className="contact_form_box_inner simple_form">
                    <div className="title_all_box style_one dark_color">
                      <div className="title_sections">
                        <div className="before_title">We here to help you</div>
                        <h6 className="font_24">Book Appointment</h6>
                      </div>
                    </div>
                    <div className="pd_bottom_10"></div>
                    <div className="contact_form_shortcode">
                    </div>
                    <form>
                      <p>
                        <label>
                          <input type="text" name="your-name" size="40" placeholder="Enter Your Name" />
                          <br />
                          <i className="fa fa-user"></i>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input type="email" name="your-email" size="40" placeholder="Enter Your Email" />
                          <br />
                          <i className="fa fa-envelope"></i>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input type="text" name="your-subject" size="40" placeholder="Enter Your Subject" />
                          <br />
                          <i className="fa fa-folder"></i>
                        </label>
                        
                        <input type="submit" />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_100"></div>
        </section>
      </div>
    </>

  );
}
