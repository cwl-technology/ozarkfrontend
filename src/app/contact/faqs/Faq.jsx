"use client"
import { useState } from 'react';
import React from 'react'

function  Faq () {
    const [activeFAQ, setActiveFAQ] = useState(0);

    const toggleFAQ = (index) => {
        if (activeFAQ === index) {
            setActiveFAQ(null); 
        } else {
            setActiveFAQ(index); 
        }
    };
    return (
        <>
            <div id="content" className="site-content ">
                <div className="page_header_default style_one ">
                    <div className="parallax_cover">
                        <div className="simpleParallax">
                            <img src="/assets/images/page-header-default.jpg" alt="bg_image" className="cover-parallax" />
                        </div>
                    </div>
                    <div className="page_header_content">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner_title_inner">
                                        <div className="title_page">
                                            FAQ's
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="breadcrumbs creote">
                                        <ul className="breadcrumb m-auto">
                                            <li><a href="index-2.html">Home</a></li>
                                            <li className="active">FAQS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="faqs-section project_all filt_style_two filter_enabled">
                    <div className="pd_top_90"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <h2>Useful Question &amp; Answer</h2>
                                        <p>Check our FAQs for quick answers to frequently asked questions we receive.<br /> If you have other questions write.</p>
                                    </div>
                                    <div className="pd_top_15"></div>
                                </div>
                            </div>
                        </div>
                        <div className="pd_top_35"></div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="fliter_group" style={{ textAlign: "center!important" }}>
                                    <ul className="project_filter dark clearfix">
                                        <li data-filter=".project_category-coaching" className="img-fluid current">Financial Automation</li>
                                        <li data-filter=".project_category-human-resources" className="img-fluid">AP/AR Processes</li>
                                        <li data-filter=".project_category-leadership" className="img-fluid">Virtual CFO</li>
                                        <li data-filter=".project_category-leadership" className="img-fluid">Year-End Accounts</li><li data-filter=".project_category-leadership" className="img-fluid">Bookkeeping</li></ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="faq_section type_two">
                                    <div className="block_faq">
                                        <div className="accordion">
                                            <dl>
                                                <dt
                                                    className={`faq_header ${activeFAQ === 0 ? 'active' : ''}`}
                                                    onClick={() => toggleFAQ(0)}
                                                >
                                                    What recruitment services do you offer?
                                                    <span className={`icon-play ${activeFAQ === 0 ? 'rotate' : ''}`}></span>
                                                </dt>
                                                <dd
                                                    className={`accordion-content ${activeFAQ === 0 ? 'show' : 'hide'}`}
                                                    style={{ display: activeFAQ === 0 ? 'block' : 'none' }}
                                                >
                                                    <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                </dd>
                                                <dt
                                                    className={`faq_header ${activeFAQ === 1 ? 'active' : ''}`}
                                                    onClick={() => toggleFAQ(1)}
                                                >
                                                    What sectors or industries do you recruit for?
                                                    <span className={`icon-play ${activeFAQ === 1 ? 'rotate' : ''}`}></span>
                                                </dt>
                                                <dd
                                                    className={`accordion-content ${activeFAQ === 1 ? 'show' : 'hide'}`}
                                                    style={{ display: activeFAQ === 1 ? 'block' : 'none' }}
                                                >
                                                    <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                </dd>
                                                <dt
                                                    className={`faq_header ${activeFAQ === 2 ? 'active' : ''}`}
                                                    onClick={() => toggleFAQ(2)}
                                                >
                                                    How can I register a job?
                                                    <span className={`icon-play ${activeFAQ === 2 ? 'rotate' : ''}`}></span>
                                                </dt>
                                                <dd
                                                    className={`accordion-content ${activeFAQ === 2 ? 'show' : 'hide'}`}
                                                    style={{ display: activeFAQ === 2 ? 'block' : 'none' }}
                                                >
                                                    <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <section className="faq_section type_two">
                                    <div className="block_faq">
                                        <div className="accordion">
                                            <dl>
                                                <dt
                                                    className={`faq_header ${activeFAQ === 3 ? 'active' : ''}`}
                                                    onClick={() => toggleFAQ(3)}
                                                >
                                                    What sectors or industries do you recruit for?
                                                    <span className={`icon-play ${activeFAQ === 3 ? 'rotate' : ''}`}></span>
                                                </dt>
                                                <dd
                                                    className={`accordion-content ${activeFAQ === 3 ? 'show' : 'hide'}`}
                                                    style={{ display: activeFAQ === 3 ? 'block' : 'none' }}
                                                >
                                                    <p>Blinded by desire, that they cannot foresee the trouble that are bound to ensue; and equal blame belongs to those who fail in their duty which is the same as saying through shrinking. Nor again is there anyone who loves or pursues or desires to obtain pain itself is pains but circumstances great.</p>
                                                </dd>
                                                <dt
                                                    className={`faq_header ${activeFAQ === 4 ? 'active' : ''}`}
                                                    onClick={() => toggleFAQ(4)}
                                                >
                                                    What recruitment services do you offer?
                                                    <span className={`icon-play ${activeFAQ === 4 ? 'rotate' : ''}`}></span>
                                                </dt>
                                                <dd
                                                    className={`accordion-content ${activeFAQ === 4 ? 'show' : 'hide'}`}
                                                    style={{ display: activeFAQ === 4 ? 'block' : 'none' }}
                                                >
                                                    <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                </dd>
                                                <dt
                                                    className={`faq_header ${activeFAQ === 5 ? 'active' : ''}`}
                                                    onClick={() => toggleFAQ(5)}
                                                >
                                                    Where will you advertise my job vacancy?
                                                    <span className={`icon-play ${activeFAQ === 5 ? 'rotate' : ''}`}></span>
                                                </dt>
                                                <dd
                                                    className={`accordion-content ${activeFAQ === 5 ? 'show' : 'hide'}`}
                                                    style={{ display: activeFAQ === 5 ? 'block' : 'none' }}
                                                >
                                                    <p>Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_60"></div>
                </section>
            </div>
        </>
    )
}

export default Faq