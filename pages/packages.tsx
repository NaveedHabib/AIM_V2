import { featureSet, Packages } from '@/contants/packagesData';
import { useState, ChangeEvent } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';


// Define types for the packages data
interface Portfolio {
    id: number;
    portfolioName: string;
    price: string;
    features: string[];
}



const PackageTable = () => {

    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio>(Packages[0].portfolio[0]);

    const handlePortfolioChange = (e: any) => {
        const selectedId = parseInt(e.target.value, 10);
        const portfolio = Packages[0].portfolio.find((p) => p.id === selectedId);
        if (portfolio) setSelectedPortfolio(portfolio);
    };

    return (
        <div className="packagesPage-wrapper">
            <div className="inner-banner-section-wrapper">
                <img src="/assets/imgs/Gradient.png" alt="" className="banner-image" />

                <div className="inner-text-container">
                    <h1 className="banner-heading">Delegate Pass</h1>
                </div>
            </div>

            <div className="container">
                <section className='packages'>
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th className="features-heading" style={{ color: "#202c4c", textTransform: "uppercase", fontWeight: "normal" }}>Features</th>
                                    <th>
                                        <div className="package-name mb-2" style={{ color: "#324476", textTransform: "uppercase", fontWeight: "normal" }}>Standard Pass</div>
                                        <div className="standard-pass-price-wrapper">
                                            {/* <div className="package-price">{selectedPortfolio.price}</div> */}

                                            <select className="form-select" value={selectedPortfolio.id} onChange={handlePortfolioChange}>
                                                {Packages[0].portfolio.map((portfolio: any) => (
                                                    <option key={portfolio.id} value={portfolio.id}>
                                                        {portfolio.portfolioName} 
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </th>
                                    <th>
                                        <div>
                                            <div className="package-name mb-2" style={{ color: "#202c4c", textTransform: "uppercase", fontWeight: "normal" }}>{Packages[1].name}</div>
                                        </div>

                                        {/* <div className="package-price">{Packages[1].price}</div> */}
                                    </th>
                                    <th>
                                        <div className="package-name mb-2" style={{ color: "#F28E3E", textTransform: "uppercase", fontWeight: "normal" }}>{Packages[2].name}</div>
                                        {/* <div className="package-price">{Packages[2].price}</div> */}
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {featureSet.map((feature: string, index: number) => (
                                    <tr key={index}>
                                        <td className='feature-item'>{feature}</td>
                                        <td style={{ textAlign: "center" }}>{selectedPortfolio.features.includes(feature) ? (<TiTick size={24} />) : (<IoClose size={24} color='#595959' />)}</td>
                                        <td style={{ textAlign: "center" }}>{Packages[1].features.includes(feature) ? (<TiTick size={24} />) : (<IoClose size={24} color='#595959' />)}</td>
                                        <td style={{ textAlign: "center" }}>{Packages[2].features.includes(feature) ? (<TiTick size={24} />) : (<IoClose size={24} color='#595959' />)}</td>
                                    </tr>
                                ))}

                                <tr>
                                    <td></td>
                                    <td className='text-center'>
                                        <button className='aim-package-btn' style={{ background: "#324476", borderRadius: "50px", color: "white" }}

                                        >
                                            <span className="">{selectedPortfolio.price}</span>
                                        </button>
                                    </td>
                                    <td className='text-center'>
                                        <button className='aim-package-btn' style={{ background: "#202c4c", borderRadius: "50px", color: "white" }}

                                        >
                                            <span>{Packages[1].price}</span>
                                        </button>
                                    </td>
                                    <td className='text-center'>
                                        <button className='aim-package-btn' style={{ background: "#F28E3E", borderRadius: "50px", color: "white" }}

                                        >
                                            <span>{Packages[2].price}</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PackageTable;
