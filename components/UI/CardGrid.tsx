import { Portfoliofeatures } from '@/models/portfoliofeatures';
import { Serviceitem } from '@/models/serviceitem';
import Globals from '@/modules/Globals';
import React, { useEffect, useState } from 'react'

interface CardGridProps {
    pageData: Portfoliofeatures | null;
}

const CardGrid: React.FC<CardGridProps> = ({ pageData }) => {

    if (!pageData) {
        return <></>;
    }



    return (
        <section className='key-features-section-wrapper '>

            <div className="section-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='section-heading'>FEATURES AND ACTIVITIES
                        </h1>
                    </div>
                    <div className="col-12">
                        <p className='sub-heading'>Overcoming Challenges, Seizing New Global Opportunities</p>
                    </div>
                </div>

                <div className="row key-benefits mt-4">
                    <div className="masonry-container">
                        {pageData.items.value.map((m: any, index) => {
                            const item: Serviceitem = m;


                            const sizePattern = ['large', 'large', 'small', 'small'];
                            const sizeClass = sizePattern[index % sizePattern.length];

                            return (
                                <div
                                    key={index}
                                    className={`masonry-item feature-card-item card-${sizeClass}`}
                                >
                                    <img
                                        src={item.image.value[0].url}
                                        alt={`feature-${index + 1}`}
                                        className="benefit-card-bg"
                                    />
                                    <p className="features-name">{item.name.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </section>
    )
}



export default CardGrid;


{/* <div className="masonry-container">
                        <div className="masonry-column">
                            <div className="card card-1">
                                <img src="/assets/imgs/economic-growth.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-2">
                                <img src="/assets/imgs/resources.png" alt="" className='benefit-card-bg' />
                            </div>
                        </div>
                        <div className="masonry-column">
                            <div className="card card-3">
                                <img src="/assets/imgs/sustainable-focus.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-4">
                                <img src="/assets/imgs/gp-influence.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-5">
                                <img src="/assets/imgs/risk-diversification.png" alt="" className='benefit-card-bg' />
                            </div>
                        </div>
                        <div className="masonry-column">
                            <div className="card card-6">
                                <img src="/assets/imgs/gpshift.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-7">
                                <img src="/assets/imgs/technology-innovation.png" alt="" className='benefit-card-bg' />
                            </div>
                        </div>
                        <div className="masonry-column">
                            <div className="card card-8">
                                <img src="/assets/imgs/market-expansion.png" alt="" className='benefit-card-bg' />
                            </div>
                            <div className="card card-9">
                                <img src="/assets/imgs/digital-transformation.png" alt="" className='benefit-card-bg' />
                            </div>
                        </div>
                    </div> */}
