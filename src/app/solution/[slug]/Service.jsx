"use client"

import { useState} from 'react';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Navigation } from 'swiper/modules';

function Service() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        console.log(index + "hello");
        setActiveIndex(activeIndex == index ? null : index);
    };
    return (
        <>
            <div id="content" className="site-content ">
                <div className="page_header_default style_one ">
                    <div className="parallax_cover">
                        <div className="simpleParallax"> <img src="/assets/images/page-header-default.jpg" alt="bg_image"
                            className="cover-parallax" /> </div>
                    </div>
                    <div className="page_header_content">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner_title_inner">
                                        <div className="title_page"> Our Services</div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="breadcrumbs creote">
                                        <ul className="breadcrumb m-auto">
                                            <li><a href="index-2.html">Home</a></li>
                                            <li className="active">Our Services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auto-container">
                    <div className="row default_row">
                        <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                            <div className="service_siderbar side_bar">
                                <div className="pd_top_85"></div>
                                <div className="widgets_grid_box">
                                    <div className="widget creote_widget_service_list">
                                        <h4 className="widget-title">Our Services</h4>
                                        <ul className="service_list_box">
                                            <li><a href="#">Year-End Accounts</a> </li>
                                            <li><a href="#">Virtual CFO</a> </li>
                                            <li><a href="#">Bookkeeping</a> </li>
                                            <li><a href="#">Financial Automation</a> </li>
                                            <li><a href="#">AP/AR Processes</a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widgets_grid_box">
                                    <div id="creote-contactus-3" className="widget widget_contactus">
                                        <div className="contact_box_widget widget_box">
                                            <div className="widget_content"> <img src="/assets/images/service-sidebar-contact-bg.jpg"
                                                alt="backgroundimage" />
                                                <div className="top_section">
                                                    <h3>Have Questions?</h3>
                                                    <p>Nothing prevents our being to what we like. </p>
                                                </div>
                                                <div className="bottom_section"> <a href="tel:+91-8743877462"
                                                    className="phone_number">+91-8743877462</a> <a href="mailto:info@theozarkco.com"
                                                        className="mailid">info@theozarkco.com</a> </div>
                                            </div>
                                            <a href="#" className="theme-btn one">Appointment</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pd_bottom_65"></div>
                            </div>
                        </aside>
                        <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <main id="main" className="site-main" role="main">
                                <div className="pd_top_85"></div>
                                <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
                                    <div className="title_all_box style_one dark_color">
                                        <div className="title_sections left">
                                            <div className="before_title">HR Employee</div>
                                            <div className="title">Recruitment Process</div>
                                            <p>Our power of choice is untrammelled and when nothing prevents being able to do what we like
                                                best every pleasure. </p>
                                            <p>Our power of choice is untrammelled and when nothing prevents our being able to do what we like
                                                best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
                                                owing to the claims of duty.</p>
                                        </div>
                                    </div>
                                    <div className="row no-space">
                                        <div
                                            className="col-xl-6 col-lg-6 col-md-6 col-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
                                            <div className="icon_box_all style_one">
                                                <div className="icon_content ">
                                                    <div className="icon"> <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image"
                                                        alt="icon png" /> </div>
                                                    <div className="txt_content">
                                                        <h3> <a href="#" target="_blank" rel="nofollow">Background Checks</a> </h3>
                                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour when our power.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-6 col-lg-6 col-md-6 col-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
                                            <div className="icon_box_all style_one">
                                                <div className="icon_content ">
                                                    <div className="icon"> <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image"
                                                        alt="icon png" /> </div>
                                                    <div className="txt_content">
                                                        <h3> <a href="#" target="_blank" rel="nofollow">Position Description</a> </h3>
                                                        <p>Trouble that are bound to ensue and equal blame belongs those who fail in their duty.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pd_bottom_45"></div>
                                    <div className="row no-space">
                                        <div
                                            className="col-xl-8 col-lg-8 col-md-8 col-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
                                            <h3>HR Functions</h3>
                                            <div className="pd_bottom_15"></div>
                                            <div className="description_box">
                                                <p>Nothing prevents our being able to do what we like best every pleasure is to be welcomed
                                                    &amp; every pain avoided certain circumstances.</p>
                                            </div>
                                            <div className="pd_bottom_25"></div>
                                            <div className="content_box_cn style_one">
                                                <div className="txt_content">
                                                    <h3> <a href="#" target="_blank" rel="nofollow">Open Communication</a> </h3>
                                                    <p>Equal blame belongs to those who fail in their duty through weakness same duty.</p>
                                                </div>
                                            </div>
                                            <div className="content_box_cn  style_one">
                                                <div className="txt_content">
                                                    <h3> <a href="#" target="_blank" rel="nofollow">Sharing a Vision</a> </h3>
                                                    <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                                </div>
                                            </div>
                                            <div className="content_box_cn  style_one">
                                                <div className="txt_content">
                                                    <h3> <a href="#" target="_blank" rel="nofollow">Recognizing Employee</a> </h3>
                                                    <p>Holds in these matter to this principle selection he rejects pleasures to secure.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-4 col-lg-4 col-md-4 col-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
                                            <div className="simple_image_boxes"> <img src="/assets/images/blog/single-post-gal-1.jpg"
                                                className="object-fit-cover-center height_570px" alt="image" /> </div>
                                        </div>
                                    </div>
                                    <div className="pd_bottom_45"></div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-0 ps-lg-0 pe-0 pe-lg-0 ps-xl-3">
                                        <h3>Service Benefits</h3>
                                        <div className="pd_bottom_25"></div>
                                        <div className="faq_section type_two">
                                            <div className="block_faq">
                                                <div className="accordion">
                                                    <dl>
                                                        <dt
                                                            className={`faq_header ${activeIndex === 0 ? 'active' : ''}`}
                                                            onClick={()=>handleToggle(0)}
                                                            
                                                        >
                                                            Lorem Ipsum?
                                                            <span className="icon-play"></span>
                                                        </dt>
                                                        <dd
                                                            className={`accordion-content ${activeIndex === 0 ? 'show' : 'hide'}`}
                                                            style={{ display: activeIndex === 0 ? 'block' : 'none' }}
                                                        >
                                                            <p>
                                                                Nor again is there anyone who loves or pursues or desires to obtain
                                                                pain itself because it is pains but because occasionally circumstances
                                                                occurs great pleasure take a trivial of us.
                                                            </p>
                                                        </dd>
                                                        <dt
                                                            className={`faq_header ${activeIndex === 1 ? 'active' : ''}`}
                                                            onClick={() => handleToggle(1)}
                                                        >
                                                            What recruitment services do you offer?
                                                            <span className="icon-play"></span>
                                                        </dt>
                                                        <dd
                                                            className={`accordion-content ${activeIndex === 1 ? 'show' : 'hide'}`}
                                                            style={{ display: activeIndex === 1 ? 'block' : 'none' }}
                                                        >
                                                            <p>
                                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People,
                                                                Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart
                                                                Energy Grid Utility Services.
                                                            </p>
                                                        </dd>
                                                        <dt
                                                            className={`faq_header ${activeIndex === 2 ? 'active' : ''}`}
                                                            onClick={() => handleToggle(2)}
                                                        >
                                                            How can I register a job?
                                                            <span className="icon-play"></span>
                                                        </dt>
                                                        <dd
                                                            className={`accordion-content ${activeIndex === 2 ? 'show' : 'hide'}`}
                                                            style={{ display: activeIndex === 2 ? 'block' : 'none' }}
                                                        >
                                                            <p>
                                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People,
                                                                Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart
                                                                Energy Grid Utility Services.
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <div className="pd_bottom_65"></div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <section className="testimonial-section testimonial-section project_all filt_style_two filter_enabled">
                <div className="pd_top_50"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="title_all_box style_six text-center dark_color">
                                <div className="title_sections">

                                    <div className="title">Words From Our Customers</div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fliter_group" style={{ textAlign: "center!important" }}>
                                <ul className="project_filter dark clearfix">
                                    <li data-filter=".project_category-coaching" className="img-fluid current">Financial Automation</li>
                                    <li data-filter=".project_category-human-resources" className="img-fluid">AP/AR Processes</li>
                                    <li data-filter=".project_category-leadership" className="img-fluid">Virtual CFO</li>
                                    <li data-filter=".project_category-leadership" className="img-fluid">Year-End Accounts</li>
                                    <li data-filter=".project_category-leadership" className="img-fluid">Bookkeeping</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial_all owl_new_one ">
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={30}

                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="owl-item cloned" style={{ width: "555px" }}>
                                            <div className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="/assets/images/testi-3.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            We hired creote to assist us with refining marketing plans, you
                                                            truly understands &amp; gave us very good ideas.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Ivor Herbert</h2>
                                                        <h6>Manager, Airlines</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star empty"></i>
                                                        <i className="fa fa-star empty"></i>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item cloned" style={{ width: "555px" }}>
                                            <div className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="/assets/images/testi-2.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            I love creote everyone has been great to work with and you’re
                                                            all
                                                            great partner for company, we thank you ...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Boris Elbert </h2>
                                                        <h6>Green Tech</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star empty"></i>
                                                        <i className="fa fa-star empty"></i>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item cloned" style={{ width: "555px" }}>
                                            <div className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="/assets/images/testi-1.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            You bring tremendous value to company. We have generated more
                                                            leads in the last 45 days than the last 2 days ...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Fleix Everard </h2>
                                                        <h6>HR, Blue Soft Sol</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star empty"></i>
                                                        <i className="fa fa-star empty"></i>
                                                    </p>
                                                </div>

                                            </div>
                                        </div></SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item active" style={{ width: "555px" }}>
                                            <div className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="/assets/images/testi-3.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            We hired creote to assist us with refining marketing plans, you
                                                            truly understands &amp; gave us very good ideas.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Ivor Herbert</h2>
                                                        <h6>Manager, Airlines</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star empty"></i>
                                                        <i className="fa fa-star empty"></i>
                                                    </p>
                                                </div>

                                            </div>
                                        </div></SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item active" style={{ width: "555px" }}>
                                            <div className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="/assets/images/testi-2.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            I love creote everyone has been great to work with and you’re
                                                            all
                                                            great partner for company, we thank you ...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Boris Elbert </h2>
                                                        <h6>Green Tech</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star empty"></i>
                                                        <i className="fa fa-star empty"></i>
                                                    </p>
                                                </div>

                                            </div>
                                        </div></SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item cloned" style={{ width: "555px" }}>
                                            <div className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="/assets/images/testi-1.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            You bring tremendous value to company. We have generated more
                                                            leads in the last 45 days than the last 2 days ...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Fleix Everard </h2>
                                                        <h6>HR, Blue Soft Sol</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star empty"></i>
                                                        <i className="fa fa-star empty"></i>
                                                    </p>
                                                </div>

                                            </div>
                                        </div></SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item cloned" style={{ width: "555px" }}>
                                            <div className="testimonial_box type_two">
                                                <div className="upper_content">
                                                    <div className="image_box">
                                                        <img src="/assets/images/testi-3.png" className="img-fluid" alt="image" />
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="description">
                                                        <p>
                                                            We hired creote to assist us with refining marketing plans, you
                                                            truly understands &amp; gave us very good ideas.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lower_content clearfix">
                                                    <div className="authour_name">
                                                        <h2>Ivor Herbert</h2>
                                                        <h6>Manager, Airlines</h6>
                                                    </div>
                                                    <p>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star fill"></i>
                                                        <i className="fa fa-star empty"></i>
                                                        <i className="fa fa-star empty"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_90"></div>
            </section>

        </>
    )
}

export default Service