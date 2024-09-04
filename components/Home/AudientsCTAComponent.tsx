import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const AudientsCTAComponent: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='audients-section-wrapper'>
            <div className="section-container">
                <div className="row mb-5">
                    <div className="col-12 d-flex justify-content-center">

                        <motion.div
                            className='main-head'
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span className='' style={{ textTransform: "capitalize" }}>Be a Part of AIM 2025</span>
                        </motion.div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">

                        <motion.p
                            className='sub-head'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Join us in Shaping Tomorrow, Today
                        </motion.p>
                    </div>


                </div>

                <div className="row">

                    <motion.div className="col-lg-3  col-md-6 col-12 mb-4 mb-lg-0" initial={{ y: 100, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}>
                        <div className="cta-card-item">
                            <Link href="/register-interest">

                                <img src="/assets/imgs/Delegate Card.png" alt="" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div className="col-lg-3  col-md-6 col-12 mb-4 mb-lg-0" initial={{ y: 100, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}>
                        <div className="cta-card-item">

                            <Link href="/register-interest">

                                <img src="/assets/imgs/Partner Card.png" alt="" />
                            </Link>


                        </div>
                    </motion.div>

                    <motion.div className="col-lg-3  col-md-6 col-12 mb-4 mb-lg-0" initial={{ y: 100, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}>
                        <div className="cta-card-item">
                            <Link href="/register-interest/exhibitor">
                                <img src="/assets/imgs/Exhibitor Card.png" alt="" />

                            </Link>

                        </div>
                    </motion.div>

                    <motion.div className="col-lg-3  col-md-6 col-12 mb-3 mb-lg-0" initial={{ y: 100, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}>
                        <div className="cta-card-item">

                            <Link href="/register-interest/sponsor">

                                <img src="/assets/imgs/Sponsor Card.png" alt="" />
                            </Link>


                        </div>
                    </motion.div>


                </div>

            </div>

        </section>
    );
};

export default AudientsCTAComponent;