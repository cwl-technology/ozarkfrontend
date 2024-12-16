import Link from 'next/link';
import React from 'react'
export const metadata = {
    title: "Blogs || Ozark Company",
    description: "Created by CWL pvt. ltd.",
};

function page() {
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
                                            Blogs
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="breadcrumbs creote">
                                        <ul className="breadcrumb m-auto">
                                            <li><a href="index-2.html">Home</a></li>
                                            <li className="active">Blogs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="content" className="site-content ">
                    <div className="auto-container">
                        <div className="row default_row">
                            <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                                <div className="side_bar">
                                    <div className="pd_top_90"></div>

                                    <div className="widgets_grid_box">
                                        <h2 className="widget-title">Post Categories</h2>
                                        <ul className="wp-block-categories">
                                            <li><a href="#">Leadership</a> (1)</li>
                                            <li><a href="#">Management</a> (5)</li>
                                            <li><a href="#">Compliance Audits</a> (5)</li>
                                            <li><a href="#">Employee Relations</a> (8)</li>
                                            <li><a href="#">Corporate</a> (1)</li>
                                            <li><a href="#">HR Consulting</a> (7)</li>
                                            <li><a href="#">Business Skills</a> (1)</li>
                                            <li><a href="#">Recruiting</a> (6)</li>
                                            <li><a href="#">Small Business HR</a> (7)</li>
                                            <li><a href="#">Sustainability</a> (1)</li>
                                        </ul>
                                    </div>
                                    <div className="widgets_grid_box">
                                        <h2 className="widget-title">Recent Posts</h2>
                                        <div className="widget_post_box">
                                            <div className="blog_in clearfix image_in">
                                                <div className="image">
                                                    <img decoding="async" src="/assets/images/blog/blog-image-9.jpg" alt="img" />
                                                </div>
                                                <div className="content_inner">
                                                    <p className="post-date"><span className="icon-calendar"></span>October 8, 2023</p>
                                                    <h3><a href="/resources/blog_details">Why Should Business Payroll Outsourcing?</a></h3>
                                                </div>
                                            </div>
                                            <div className="blog_in clearfix image_in">
                                                <div className="image">
                                                    <img decoding="async" src="/assets/images/blog/blog-image-8.jpg" alt="img" />
                                                </div>
                                                <div className="content_inner">
                                                    <p className="post-date"><span className="icon-calendar"></span>October 8, 2023</p>
                                                    <h3><a href="/resources/blog_details">Most Employees Support Measures</a></h3>
                                                </div>
                                            </div>
                                            <div className="blog_in clearfix image_in">
                                                <div className="image">
                                                    <img decoding="async" src="/assets/images/blog/blog-image-7.jpg" alt="img" />
                                                </div>
                                                <div className="content_inner">
                                                    <p className="post-date"><span className="icon-calendar"></span>October 8, 2023</p>
                                                    <h3><a href="/resources/blog_details">How to Handle Employee</a></h3>
                                                </div>
                                            </div>
                                            <div className="blog_in clearfix image_in">
                                                <div className="image">
                                                    <img decoding="async" src="/assets/images/blog/blog-image-6.jpg" alt="img" />
                                                </div>
                                                <div className="content_inner">
                                                    <p className="post-date"><span className="icon-calendar"></span>October 8, 2023</p>
                                                    <h3><Link href="/resources/blog_details">Retaining Good Employees &amp; Motivated</Link></h3>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="pd_bottom_70"></div>
                                </div>
                            </aside>
                            <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <div className="pd_top_90"></div>
                                <main id="main" className="site-main" role="main">

                                    <article id="" className="clearfix service type-service status-publish has-post-thumbnail hentry">
                                        <div className="row grid_layout" style={{ position: "relative", height: "auto" }}>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box" style={{ position: "absolute", left: "0px", top: "0px" }}>
                                                <div className="news_box type_one clearfix">
                                                    <div className="news_inner">
                                                        <div className="image_box">
                                                            <img src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" />
                                                            <div className="overlay"></div>

                                                        </div>
                                                        <div className="content_box">
                                                            <ul className="post-info clearfix">

                                                                <li className="date">
                                                                    <Link href="/blog_details">
                                                                        <i className="far  fa-calendar"></i>
                                                                        8 Oct , 2023
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <h2 className="entry-title"><Link href="/resources/blog_details">Why
                                                                Should Business Payroll Outsourcing?</Link></h2>
                                                            <p className="short_desc">How well this mistaken ideas off denouncing
                                                                pleasure &amp; praisings will give you complete.</p>
                                                            <div className="bottom_content clearfix">
                                                                <div className="continure_reading">
                                                                    <Link href="/blog_details" className="read_more type_one">
                                                                        Continue Reading <span className="icon-arrow-right"></span></Link>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box" style={{ position: "absolute", left: "372px", top: "0px" }}>
                                                <div className="news_box type_one clearfix">
                                                    <div className="news_inner">
                                                        <div className="image_box">
                                                            <img src="/assets/images/blog/blog-image-7.jpg" className="img-fluid" alt="img" />
                                                            <div className="overlay"></div>

                                                        </div>
                                                        <div className="content_box">
                                                            <ul className="post-info clearfix">

                                                                <li className="date">
                                                                    <Link href="/blog_details"><i className="far  fa-calendar"></i>
                                                                        8 Oct , 2023
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <h2 className="entry-title">
                                                                <Link href="/resources/blog_details">
                                                                    How to Handle Employee With Works
                                                                </Link>
                                                            </h2>
                                                            <p className="short_desc">How well this mistaken ideas off denouncing
                                                                pleasure &amp; praisings will give you complete.</p>
                                                            <div className="bottom_content clearfix">
                                                                <div className="continure_reading">
                                                                    <Link href="/blog_details" className="read_more type_one">
                                                                        Continue Reading <span className="icon-arrow-right"></span></Link>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box" style={{ position: "absolute", left: "0px", top: "650px" }}>
                                                <div className="news_box type_one clearfix">
                                                    <div className="news_inner">
                                                        <div className="image_box">
                                                            <img width="750" height="420" src="/assets/images/blog/blog-image-6.jpg" className="img-fluid" alt="" decoding="async" loading="lazy" srcSet="/assets/images/blog/blog-image-6.jpg 750w, assets/images/blog/blog-image-6-600x336.jpg 600w, assets/images/blog/blog-image-6-300x168.jpg 300w" sizes="(max-width: 750px) 100vw, 750px" />
                                                            <div className="overlay"></div>

                                                        </div>
                                                        <div className="content_box">
                                                            <ul className="post-info clearfix">

                                                                <li className="date"> <a href="#"><i className="far  fa-calendar"></i>8 Oct ,
                                                                    2023 </a> </li>
                                                            </ul>
                                                            <h2 className="entry-title"><Link href="/blog_details">Retaining
                                                                Good Employees &amp; Motivated</Link></h2>
                                                            <p className="short_desc">How well this mistaken ideas off denouncing
                                                                pleasure &amp; praisings will give you complete.</p>
                                                            <div className="bottom_content clearfix">
                                                                <div className="continure_reading">
                                                                    <Link href="/blog_details" className="read_more type_one">
                                                                        Continue Reading <span className="icon-arrow-right"></span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 grid_box" style={{ position: "absolute", left: "372px", top: "650px" }}>
                                                <div className="news_box type_one clearfix">
                                                    <div className="news_inner">
                                                        <div className="image_box">
                                                            <img src="/assets/images/blog/blog-image-9.jpg" className="img-fluid" alt="img" />
                                                            <div className="overlay"></div>

                                                        </div>
                                                        <div className="content_box">
                                                            <ul className="post-info clearfix">

                                                                <li className="date">
                                                                    <Link href="/blog_details">
                                                                        <i className="far  fa-calendar"></i>
                                                                        8 Oct , 2023
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <h2 className="entry-title"><Link href="//resources/blog_details">Why
                                                                Should Business Payroll Outsourcing?</Link></h2>
                                                            <p className="short_desc">How well this mistaken ideas off denouncing
                                                                pleasure &amp; praisings will give you complete.</p>
                                                            <div className="bottom_content clearfix">
                                                                <div className="continure_reading">
                                                                    <Link href="/blog_details" className="read_more type_one">
                                                                        Continue Reading <span className="icon-arrow-right"></span></Link>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_70"></div>
            </div>
        </>
    )
}

export default page