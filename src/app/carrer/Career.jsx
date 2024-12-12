"use client"

import React from 'react'
import { useState } from 'react';

function Career () {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <div id="content" className="site-content ">
                <div className="page_header_default style_one ">
                    <div className="parallax_cover">
                        <div className="simpleParallax"> <img src="/assets/images/page-header-default.jpg" alt="bg_image" className="cover-parallax" /> </div>
                    </div>
                    <div className="page_header_content">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner_title_inner">
                                        <div className="title_page"> Career </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="breadcrumbs creote">
                                        <ul className="breadcrumb m-auto">
                                            <li><a href="index-2.html">Home</a></li>
                                            <li className="active">Career</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="creote-icon-box">
                    <div className="pd_top_90"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-4 mb-xl-0">
                                <div className="icon_box_all style_five dark_color_one">
                                    <div className="icon_content">
                                        <div className="icon"> <span className="fa fa-deaf"></span> </div>
                                        <small>01</small>
                                        <div className="text_box">
                                            <h2>Conserve Water</h2>
                                            <p>The less water you use, the less runoff and wastewater that eventually end up in the ocean.</p>
                                        </div>
                                        <div className="hover_content">
                                            <div className="content">
                                                <div className="inner">
                                                    <p>The less water you use, the less runoff and wastewater that eventually end up in the ocean.</p>
                                                    <a href="#" className="read_more">Read More <span className="icon-right-arrow-long"></span></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-4 mb-xl-0">
                                <div className="icon_box_all style_five dark_color_one">
                                    <div className="icon_content">
                                        <div className="icon"> <span className="fa fa-dropbox"></span> </div>
                                        <small>02</small>
                                        <div className="text_box">
                                            <h2>Conserve Water</h2>
                                            <p>The less water you use, the less runoff and wastewater that eventually end up in the ocean.</p>
                                        </div>
                                        <div className="hover_content">
                                            <div className="content">
                                                <div className="inner">
                                                    <p>The less water you use, the less runoff and wastewater that eventually end up in the ocean.</p>
                                                    <a href="#" className="read_more">Read More <span className="icon-right-arrow-long"></span></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="icon_box_all style_five dark_color_one">
                                    <div className="icon_content">
                                        <div className="icon"> <span className="icon-world"></span> </div>
                                        <small>03</small>
                                        <div className="text_box">
                                            <h2>Conserve Water</h2>
                                            <p>The less water you use, the less runoff and wastewater that eventually end up in the ocean.</p>
                                        </div>
                                        <div className="hover_content">
                                            <div className="content">
                                                <div className="inner">
                                                    <p>The less water you use, the less runoff and wastewater that eventually end up in the ocean.</p>
                                                    <a href="#" className="read_more">Read More <span className="icon-right-arrow-long"></span></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pd_top_90"></div>
                <section className="expertise">
                    <div className="area_of_expertise">
                        <div className="simpleParallax"> <img src="/assets/images/areaof-ecp-1.jpg" className="cover-parallax" alt="image" /> </div>
                        <div className="title_and_video">
                            <div className="auto-container">
                                <div className="row d-flex justify-content-end">
                                    <div className="col-lg-6">
                                        <div className="title_all_box style_one text-end">
                                            <div className="title_sections">
                                                <h2>Create Meaningful Experiences for employees</h2>
                                                <p>Our power of choice is untrammelled and when nothing prevents our able to do what
                                                    we like best every pleasure is to be welcomed and occur that pleasures have to be
                                                    repudiated.</p>
                                            </div>
                                            <div className="theme_btn"> <a href="service-default.html" className="theme-btn one">Read more</a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="expertise">
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 expertise_box">
                                        <div className="step_number">
                                            <h1>01.</h1>
                                        </div>
                                        <h2 className="title"><a href="#">Payroll Management</a> </h2>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 expertise_box">
                                        <div className="step_number">
                                            <h1>02.</h1>
                                        </div>
                                        <h2 className="title"> <a href="#">Employee Compensation</a> </h2>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 expertise_box">
                                        <div className="step_number">
                                            <h1>03.</h1>
                                        </div>
                                        <h2 className="title"> <a href="#">Benefits Management</a> </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faqs-section">
                    <div className="pd_top_90"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-start dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">Join Our team</div>
                                        <h2>Current Openings</h2>
                                    </div>
                                    <div className="pd_top_15"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="faq_section type_two">
                                    <div className="block_faq">
                                        <div className="accordion">
                                            <dl>
                                                {/* FAQ 1 */}
                                                <dt
                                                    className={`faq_header ${activeIndex === 0 ? 'active' : ''}`}
                                                    onClick={() => handleToggle(0)}
                                                >
                                                    Business Growth Manager - 2 Posts
                                                    <span className="icon-chevron-down"></span>
                                                </dt>
                                                <dd className={`accordion-content ${activeIndex === 0 ? 'show' : ''}`}>
                                                    <h6>Job Description:</h6>
                                                    <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem...</p>
                                                    <h6>Desired Skills:</h6>
                                                    <ul>
                                                        <li>End to end visibility of time metrics for the hybrid workforce</li>
                                                        <li>Workload Balancing between individuals and teams</li>
                                                        <li>Create Automated timesheets concentrated facilities</li>
                                                        <li>Integrate ProHance data within payroll systems</li>
                                                        <li>Transform processes based on work patterns</li>
                                                    </ul>
                                                </dd>

                                                {/* FAQ 2 */}
                                                <dt
                                                    className={`faq_header ${activeIndex === 1 ? 'active' : ''}`}
                                                    onClick={() => handleToggle(1)}
                                                >
                                                    Joomla Developer - 3 Posts
                                                    <span className="icon-chevron-down"></span>
                                                </dt>
                                                <dd className={`accordion-content ${activeIndex === 1 ? 'show' : ''}`}>
                                                    <h6>Job Description:</h6>
                                                    <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem...</p>
                                                    <h6>Desired Skills:</h6>
                                                    <ul>
                                                        <li>End to end visibility of time metrics for the hybrid workforce</li>
                                                        <li>Workload Balancing between individuals and teams</li>
                                                        <li>Create Automated timesheets concentrated facilities</li>
                                                        <li>Integrate ProHance data within payroll systems</li>
                                                        <li>Transform processes based on work patterns</li>
                                                    </ul>
                                                </dd>

                                                {/* FAQ 3 */}
                                                <dt
                                                    className={`faq_header ${activeIndex === 2 ? 'active' : ''}`}
                                                    onClick={() => handleToggle(2)}
                                                >
                                                    Wordpress Developer
                                                    <span className="icon-chevron-down"></span>
                                                </dt>
                                                <dd className={`accordion-content ${activeIndex === 2 ? 'show' : ''}`}>
                                                    <h6>Job Description:</h6>
                                                    <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem...</p>
                                                    <h6>Desired Skills:</h6>
                                                    <ul>
                                                        <li>End to end visibility of time metrics for the hybrid workforce</li>
                                                        <li>Workload Balancing between individuals and teams</li>
                                                        <li>Create Automated timesheets concentrated facilities</li>
                                                        <li>Integrate ProHance data within payroll systems</li>
                                                        <li>Transform processes based on work patterns</li>
                                                    </ul>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pd_bottom_90"></div>
                <section className="contact-section bg_op_1" style={{ backgroundImage: "url(/assets/images/contact-bg-7.jpg)" }}>
                    <div className="pd_top_80"></div>
                    <div className="container">
                        <div className="row d-flex justify-content-center">

                            <div className="col-xl-10 col-lg-10 d-flex justify-content-center">
                                <div className="contact_form_box_all type_two">
                                    <div className="contact_form_box_inner">
                                        <div className="contact_form_shortcode">
                                            <div className="heading">
                                                <h2>Apply <span> Now</span></h2>
                                            </div>
                                            <div className="_form">
                                                <div role="form" className="wpcf7" id="wpcf7-f2367-p2076-o1" lang="en-US" dir="ltr">
                                                    <div className="screen-reader-response">
                                                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                        <ul>
                                                        </ul>
                                                    </div>
                                                    <form action="#" method="post" className="wpcf7-form init">
                                                        <div className="row">
                                                            <div className="col-lg-4">

                                                                <p className="form-row form-row-first validate-required" id="billing_first_name_field">
                                                                    <label>Your Name&nbsp;</label>

                                                                    <input type="text" className="input-text" name="billing_first_name" id="billing_first_name" placeholder="Name" />

                                                                </p>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <p className="form-row form-row-wide validate-required validate-email" id="billing_email_field">
                                                                    <label> address&nbsp;</label>

                                                                    <input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="Email" autoComplete="email username" />

                                                                </p>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field">
                                                                    <label>Phone Number</label>

                                                                    <input type="tel" className="input-text" name="billing_phone" id="billing_phone" placeholder="Phone Number" autoComplete="tel" />

                                                                </p>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field-2">
                                                                    <label>Total Experience</label>

                                                                    <input type="tel" className="input-text" name="billing_phone-2" id="billing_phone-2" placeholder="Total Experience" autoComplete="tel" />

                                                                </p>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field-3">
                                                                    <label>Notice Period</label>

                                                                    <input type="tel" className="input-text" name="billing_phone-3" id="billing_phone-3" placeholder="Notice Period" autoComplete="tel" />

                                                                </p>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <p className="form-row address-field validate-required validate-state form-row-wide" id="billing_state_field">
                                                                    <label>Position</label>

                                                                    <select name="billing_state" id="billing_state" className="state_select select2-hidden-accessible" data-placeholder="Select an option…" data-input-classnamees="" data-label="State" tabIndex="-1" aria-hidden="true">
                                                                        <option value="">Position</option>
                                                                        <option value="TN">Wordpress Developer</option>
                                                                        <option value="KL">Zoomla Developer</option>
                                                                        <option value="KR">Designer</option>
                                                                    </select>

                                                                </p>
                                                            </div>
                                                            <div className="col-lg-6 text_area">
                                                                <p className="form-row address-field form-row-wide">	<input type="file" className="input-text" /></p>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <input type="submit" value="Submit" className="wpcf7-form-control has-spinner wpcf7-submit theme-btn one" />
                                                            </div>
                                                        </div>
                                                    </form>
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
            </div>
        </>
    )
}


export default Career 