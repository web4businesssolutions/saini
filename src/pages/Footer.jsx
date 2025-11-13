import React from "react";

const Footer = () => {
        return (
                <footer
                        id="footer"
                        style={{
                                backgroundColor: "#1a1a1a",
                                color: "white",
                                fontFamily: "'Montserrat', sans-serif",
                        }}
                >
                        {/* Top Footer */}
                        <div
                                style={{
                                        padding: "60px 0 30px",
                                        backgroundColor: "#1a1a1a",
                                }}
                        >
                                <div
                                        style={{
                                                maxWidth: "1200px",
                                                margin: "0 auto",
                                                padding: "0 15px",
                                        }}
                                >
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        gap: "30px",
                                                }}
                                        >
                                                {/* Quick Links */}
                                                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                                                        <h3 style={{ color: "#fff", fontSize: "20px" }}>Quick Links</h3>
                                                        <div
                                                                style={{
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                }}
                                                        >
                                                                <ul style={{ listStyle: "none", padding: 0 }}>
                                                                        <li><a href="index-2.html" style={{ color: "#ccc", textDecoration: "none" }}>Home</a></li>
                                                                        <li><a href="about.html" style={{ color: "#ccc", textDecoration: "none" }}>About</a></li>
                                                                        <li><a href="contact.html" style={{ color: "#ccc", textDecoration: "none" }}>Contact</a></li>
                                                                        <li><a href="career.html" style={{ color: "#ccc", textDecoration: "none" }}>Career</a></li>
                                                                        <li><a href="privacy-policy.html" style={{ color: "#ccc", textDecoration: "none" }}>Privacy Policy</a></li>
                                                                </ul>

                                                                <ul style={{ listStyle: "none", padding: 0 }}>
                                                                        <li><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>FAQ</a></li>
                                                                        <li><a href="blog.html" style={{ color: "#ccc", textDecoration: "none" }}>Blog</a></li>
                                                                        <li><a href="https://play.google.com/store/apps/details?id=com.carems&hl=en" style={{ color: "#ccc", textDecoration: "none" }}>Download Our App</a></li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                {/* Our Services */}
                                                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                                                        <h3 style={{ color: "#fff", fontSize: "20px" }}>Our Services</h3>
                                                        <div
                                                                style={{
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                }}
                                                        >
                                                                <ul style={{ listStyle: "none", padding: 0 }}>
                                                                        <li><div style={{ color: "#ccc", textDecoration: "none" }}>AC Services</div></li>
                                                                        <li><div style={{ color: "#ccc", textDecoration: "none" }}>Refrigerator Services</div></li>
                                                                        <li><div style={{ color: "#ccc", textDecoration: "none" }}>Water Purifier services </div></li>
                                                                        <li><div style={{ color: "#ccc", textDecoration: "none" }}>AC/Refrigerator Refill</div></li>
                                                                {/* </ul>

                                                                <ul style={{ listStyle: "none", padding: 0 }}> */}
                                                                        <li><div style={{ color: "#ccc", textDecoration: "none" }}>Refrigerator Maintenance</div></li>
                                                                        <li><div style={{ color: "#ccc", textDecoration: "none" }}>AC Maintenance</div></li>
                                                                        
                                                                </ul>
                                                        </div>
                                                </div>

                                                {/* Subscribe Section */}
                                                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                                                        <h3 style={{ color: "#fff", fontSize: "20px" }}>
                                                                Subscribe to Newsletter
                                                        </h3>
                                                        <p style={{ color: "#ccc", fontSize: "15px", lineHeight: 1.6 }}>
                                                                Join our newsletter and get news in your inbox every week! We
                                                                hate spam too, so{" "}
                                                                <a href="https://exhibitelevate.co/" style={{ color: "#74b9ff" }}>
                                                                        no worries about
                                                                </a>{" "}
                                                                this.
                                                        </p>

                                                        <form
                                                                action="https://carems.in/send_subscribe.php"
                                                                method="POST"
                                                                style={{
                                                                        display: "flex",
                                                                        gap: "10px",
                                                                        marginTop: "15px",
                                                                }}
                                                        >
                                                                <input
                                                                        type="email"
                                                                        name="email"
                                                                        placeholder="Enter email address"
                                                                        required
                                                                        style={{
                                                                                flex: "1",
                                                                                padding: "10px",
                                                                                borderRadius: "5px",
                                                                                border: "none",
                                                                                outline: "none",
                                                                        }}
                                                                />
                                                                <input
                                                                        type="submit"
                                                                        value="Submit"
                                                                        style={{
                                                                                backgroundColor: "#074699",
                                                                                color: "#fff",
                                                                                border: "none",
                                                                                borderRadius: "5px",
                                                                                padding: "10px 20px",
                                                                                cursor: "pointer",
                                                                        }}
                                                                />
                                                        </form>
                                                </div>
                                        </div>

                                        {/* Social Links */}
                                        <div
                                                style={{
                                                        textAlign: "center",
                                                        marginTop: "40px",
                                                }}
                                        >
                                                <ul
                                                        style={{
                                                                listStyle: "none",
                                                                display: "inline-flex",
                                                                gap: "15px",
                                                                padding: 0,
                                                        }}
                                                >
                                                        <li><a href="https://www.facebook.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/Facebook.png" alt="Facebook" style={{height:"50px"}}/>
                                                         </a></li>
                                                        <li><a href="https://www.twitter.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/Twitter.png" alt="Twitter" style={{height:"50px", borderRadius:"50px"}}/>
                                                        </a></li>
                                                        <li><a href="https://www.youtube.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/YouTube.png" alt="YouTube" style={{height:"50px"}}/>
                                                        </a></li>
                                                        <li><a href="https://www.linkedin.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/LinkedIn.png" alt="LinkedIn" style={{height:"50px"}}/>
                                                        </a></li>
                                                        <li><a href="https://www.instagram.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/instagram.png" alt="instagram" style={{height:"50px"}}/>
                                                        </a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>

                        {/* Copyright */}
                        <div
                                style={{
                                        backgroundColor: "#074699",
                                        textAlign: "center",
                                        padding: "15px 0",
                                        fontSize: "14px",
                                }}
                        >
                                Copyright © 2025 sainiRefrigeration.in. All Rights Reserved.
                        </div>
                </footer>
        );
};

export default Footer;
