import React from "react";
import Header from "../pages/Header.jsx";
import Footer from "../pages/Footer.jsx";
// import { FaSearch, FaCalendarCheckO, FaListAlt, FaGear } from "react-icons/fa";



function About() {
        const phone = "+91 7891346525"; // Replace with your number
        const email = "info@sainirefrigeration.com";
        const whatsappLink = "https://wa.me/+91 7891346525";

        const styles = {
                page: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#0f172a",
                        lineHeight: 1.6,
                        margin: 0,
                        backgroundColor: "#fff",
                },
                hero: {
                        background:
                                "linear-gradient(135deg, #0b6 0%, #0a9 100%)",
                        color: "white",
                        padding: "70px 20px",
                        textAlign: "center",
                },
                heroTitle: {
                        fontSize: "32px",
                        fontWeight: "700",
                        margin: "0 0 12px",
                },
                heroSubtitle: {
                        fontSize: "18px",
                        maxWidth: "700px",
                        margin: "0 auto 20px",
                        lineHeight: "1.7",
                },
                btn: {
                        display: "inline-block",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        textDecoration: "none",
                        fontSize: "15px",
                        margin: "6px",
                        transition: "all 0.3s ease",
                },
                btnLight: {
                        background: "#fff",
                        color: "#0b6",
                        border: "none",
                },
                btnOutline: {
                        background: "transparent",
                        color: "#fff",
                        border: "2px solid #fff",
                },
                section: {
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: "60px 20px",
                },
                sectionTitle: {
                        fontSize: "26px",
                        marginBottom: "18px",
                        textAlign: "center",
                        fontWeight: 700,
                },
                sectionSubtitle: {
                        color: "#475569",
                        textAlign: "center",
                        maxWidth: "700px",
                        margin: "0 auto 40px",
                        fontSize: "16px",
                },
                aboutContent: {
                        fontSize: "16px",
                        color: "#475569",
                        maxWidth: "900px",
                        margin: "0 auto",
                        textAlign: "center",
                        lineHeight: "1.7",
                },
                cards: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                        marginTop: "30px",
                },
                card: {
                        backgroundColor: "#f9fafb",
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                },
                icon: {
                        fontSize: "32px",
                        marginBottom: "10px",
                },
                cardTitle: {
                        fontSize: "17px",
                        fontWeight: "600",
                        marginBottom: "6px",
                },
                cardText: {
                        color: "#475569",
                        fontSize: "15px",
                },
                expertise: {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        gap: "20px",
                        alignItems: "center",
                        maxWidth: "1000px",
                        margin: "0 auto",
                },
                expertiseText: {
                        flex: "1",
                        minWidth: "280px",
                        fontSize: "16px",
                        color: "#475569",
                },
                contact: { textAlign: "center" },
                contactButtons: {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "10px",
                        marginTop: "20px",
                },
                address: {
                        marginTop: "30px",
                        color: "#475569",
                        fontStyle: "normal",
                        lineHeight: "1.7",
                },
                footer: {
                        textAlign: "center",
                        padding: "20px 10px",
                        borderTop: "1px solid #e2e8f0",
                        color: "#64748b",
                        fontSize: "14px",
                        marginTop: "40px",
                },
        };

        return (
                <>
                        <Header />



                        <main style={styles.page}>
                                {/* HERO */}
                                <section style={styles.hero}>
                                        <h1 style={styles.heroTitle}>Saini Refrigeration</h1>
                                        <p style={styles.heroSubtitle}>
                                                Your trusted partner for AC, Refrigerator & Water Purifier Services
                                                across Neemrana and nearby areas. Professional solutions for both
                                                residential and commercial clients.
                                        </p>
                                        <div>
                                                <a
                                                        href={whatsappLink}
                                                        style={{ ...styles.btn, ...styles.btnLight }}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                >
                                                        💬 Book on WhatsApp
                                                </a>
                                                <a href={`tel:${phone}`} style={{ ...styles.btn, ...styles.btnOutline }}>
                                                        ☎️ Call Now
                                                </a>
                                        </div>
                                </section>

                                {/* ABOUT */}
                                <section style={styles.section}>
                                        <h2 style={styles.sectionTitle}>About Our Company</h2>
                                        <p style={styles.aboutContent}>
                                                At <strong>Saini Refrigeration</strong>, we pride ourselves on delivering
                                                top-quality air conditioning and refrigeration services with a focus on
                                                customer satisfaction and long-term reliability.
                                                <br /><br />
                                                Based in <strong>Neemrana, Rajasthan</strong>, we serve homes, offices,
                                                and commercial establishments with precision, transparency, and genuine
                                                parts. Whether it's a split AC installation, deep refrigerator cleaning,
                                                or advanced water purifier maintenance — our expert technicians ensure
                                                your appliances perform at their best all year round.
                                                <br /><br />
                                                With years of hands-on experience and a commitment to excellence, we
                                                provide efficient, energy-saving solutions designed to enhance comfort
                                                and reduce electricity bills.
                                        </p>
                                </section>

                                {/* SERVICES */}
                                <section style={styles.section}>
                                        <h2 style={styles.sectionTitle}>Our Key Services</h2>
                                        <p style={styles.sectionSubtitle}>
                                                We offer complete air conditioning and refrigeration support — from installation
                                                to repair and maintenance.
                                        </p>

                                        <div style={styles.cards}>
                                                <div style={styles.card}>
                                                        <div style={styles.icon}>❄️</div>
                                                        <div style={styles.cardTitle}>AC Installation & Repair</div>
                                                        <div style={styles.cardText}>
                                                                Expert installation, gas filling, and maintenance for split,
                                                                window, and inverter AC systems.
                                                        </div>
                                                </div>

                                                <div style={styles.card}>
                                                        <div style={styles.icon}>🧊</div>
                                                        <div style={styles.cardTitle}>Refrigerator Services</div>
                                                        <div style={styles.cardText}>
                                                                Comprehensive repair, cooling diagnosis, compressor replacement,
                                                                and annual servicing.
                                                        </div>
                                                </div>

                                                <div style={styles.card}>
                                                        <div style={styles.icon}>💧</div>
                                                        <div style={styles.cardTitle}>Water Purifier Support</div>
                                                        <div style={styles.cardText}>
                                                                RO/UV filter cleaning, membrane change, and complete water
                                                                purification system maintenance.
                                                        </div>
                                                </div>

                                                <div style={styles.card}>
                                                        <div style={styles.icon}>🏢</div>
                                                        <div style={styles.cardTitle}>Commercial HVAC Solutions</div>
                                                        <div style={styles.cardText}>
                                                                Cooling system installation and AMC support for offices,
                                                                restaurants, and industrial clients.
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                {/* EXPERTISE */}
                                <section style={styles.section}>
                                        <h2 style={styles.sectionTitle}>Our Expertise</h2>
                                        <div style={styles.expertise}>
                                                <div style={styles.expertiseText}>
                                                        We combine advanced diagnostic tools, high-quality spare parts, and
                                                        years of industry experience to deliver long-lasting results.
                                                        <br /><br />
                                                        Our certified technicians follow safety protocols and provide
                                                        transparent quotations before any work begins — ensuring you get
                                                        honest, dependable, and affordable services every time.
                                                        <br /><br />
                                                        From cooling system troubleshooting to preventive maintenance,
                                                        <strong> Saini Refrigeration </strong> stands as a trusted name in Neemrana for
                                                        reliability, speed, and professionalism.
                                                </div>
                                                <img
                                                        src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=700&q=80"
                                                        alt="Technician working"
                                                        style={{
                                                                width: "100%",
                                                                maxWidth: "420px",
                                                                borderRadius: "12px",
                                                                boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
                                                        }}
                                                />
                                        </div>
                                </section>

                                {/* WHY CHOOSE US */}
                                <section style={styles.section}>
                                        <h2 style={styles.sectionTitle}>Why Choose Saini Refrigeration?</h2>
                                        <div style={styles.cards}>
                                                <div style={styles.card}>
                                                        <div style={styles.icon}>🛠️</div>
                                                        <div style={styles.cardTitle}>Certified Technicians</div>
                                                        <div style={styles.cardText}>
                                                                Skilled experts trained in the latest AC & refrigeration technologies.
                                                        </div>
                                                </div>
                                                <div style={styles.card}>
                                                        <div style={styles.icon}>💰</div>
                                                        <div style={styles.cardTitle}>Transparent Pricing</div>
                                                        <div style={styles.cardText}>
                                                                Fair rates, genuine parts, and no hidden charges — guaranteed.
                                                        </div>
                                                </div>
                                                <div style={styles.card}>
                                                        <div style={styles.icon}>⚡</div>
                                                        <div style={styles.cardTitle}>Quick Response</div>
                                                        <div style={styles.cardText}>
                                                                Same-day doorstep service for most areas in Neemrana & nearby.
                                                        </div>
                                                </div>
                                                <div style={styles.card}>
                                                        <div style={styles.icon}>🤝</div>
                                                        <div style={styles.cardTitle}>Trusted by Customers</div>
                                                        <div style={styles.cardText}>
                                                                1000+ satisfied clients who rely on us for professional appliance care.
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                {/* CONTACT */}
                                <section style={{ ...styles.section, ...styles.contact }}>
                                        <h2 style={styles.sectionTitle}>Get in Touch</h2>
                                        <p>
                                                Have a service request or need urgent repair? Our team is available to
                                                help 7 days a week in Neemrana and surrounding areas.
                                        </p>

                                        <div style={styles.contactButtons}>
                                                <a
                                                        href={whatsappLink}
                                                        style={{ ...styles.btn, ...styles.btnLight }}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                >
                                                        💬 Chat on WhatsApp
                                                </a>
                                                <a href={`mailto:${email}`} style={{ ...styles.btn, ...styles.btnOutline }}>
                                                        📧 Email Us
                                                </a>
                                                <a href={`tel:${phone}`} style={{ ...styles.btn, ...styles.btnOutline }}>
                                                        ☎️ Call {phone}
                                                </a>
                                        </div>

                                        <address style={styles.address}>
                                                <strong>Saini Refrigeration</strong>
                                                <br />
                                                Near [Your Local Landmark],
                                                <br />
                                                Neemrana, Rajasthan — 301705
                                                <br />
                                                Email: <a href={`mailto:${email}`}>{email}</a>
                                                <br />
                                                Phone: <a href={`tel:${phone}`}>{phone}</a>
                                        </address>
                                </section>

                                {/* FOOTER */}
                                <footer style={styles.footer}>
                                        © {new Date().getFullYear()} Saini Refrigeration — All Rights Reserved.
                                </footer>
                        </main>
                        <Footer />


                        {/* <section
                                id="how-works"
                                style={{
                                        padding: "60px 0",
                                        backgroundColor: "#ffffff",
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
                                                        justifyContent: "center",
                                                        textAlign: "center",
                                                        marginBottom: "30px",
                                                }}
                                        >
                                                <div style={{ width: "100%" }}>
                                                        <h2
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        color: "red",
                                                                        fontWeight: "700",
                                                                        fontSize: "40px",
                                                                        marginBottom: "10px",
                                                                }}
                                                        >
                                                                How it works
                                                        </h2>
                                                        <p
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontSize: "18px",
                                                                        color: "#074699",
                                                                        margin: "0",
                                                                }}
                                                        >
                                                                Connect with us on your Phone for Easier Access to Our Services!
                                                        </p>
                                                </div>
                                        </div>

                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        textAlign: "center",
                                                        gap: "20px",
                                                }}
                                        >
                                                {[
                                                        {
                                                                icon: '/img/search us.png',
                                                                title: "SIGN UP",
                                                                text: "You can book and track service requests by signing up on our app, following a simple process. So, download our app today.",
                                                        },
                                                        {
                                                                icon: '/img/Book us.png',
                                                                title: "BOOK US",
                                                                text: "Concerned about certain things? Just make a call to us and receive consultation on your queries and our services.",
                                                        },
                                                        {
                                                                icon: '/img/repair us.png',
                                                                title: "EXPECT US",
                                                                text: "Once your service request is confirmed, our team will update you on the time and date of the technician's arrival, and you can get your space repaired and refreshed ASAP.",
                                                        },
                                                        {
                                                                icon: '/img/expert us.webp',
                                                                title: "BECOME A MEMBER",
                                                                text: "Are you in regular need of maintenance services? Become a member and get uninterrupted service at your doorsteps with just one call.",
                                                        },
                                                ].map((item, i) => (
                                                        <div
                                                                key={i}
                                                                style={{
                                                                        flex: "1 1 22%",
                                                                        minWidth: "250px",
                                                                        backgroundColor: "#f9f9f9",
                                                                        padding: "20px",
                                                                        borderRadius: "10px",
                                                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                                                }}
                                                        >
                                                                <div
                                                                        style={{
                                                                                fontSize: "36px",
                                                                                color: "#074699",
                                                                                marginBottom: "15px",
                                                                        }}
                                                                >
                                                                        <img src={item.icon} alt={item.icon} style={{ width: "100vw" }} />

                                                                </div>
                                                                <div
                                                                        style={{
                                                                                fontFamily: "'Montserrat', sans-serif",
                                                                                fontWeight: "600",
                                                                                color: "#333333",
                                                                                fontSize: "20px",
                                                                                marginBottom: "10px",
                                                                        }}
                                                                >
                                                                        {item.title}
                                                                </div>
                                                                <p
                                                                        style={{
                                                                                fontSize: "15px",
                                                                                lineHeight: "1.6",
                                                                                color: "#555555",
                                                                        }}
                                                                >
                                                                        {item.text}
                                                                </p>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </section> */}

                </>
        );
}

export default About