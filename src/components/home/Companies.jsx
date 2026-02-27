import React from 'react';

const Companies = () => {
    return (
        <div className=''>
            <div className="px-5 py-5 md:px-8 md:py-8 max-w-7xl mx-auto">
                <p className="text-sm text-[#9aa3b7]">Companies we helped grow</p>
                <div className="mt-4 grid grid-cols-2 md:flex justify-between gap-y-4 text-[38px] font-bold uppercase tracking-tight text-[#c0c2c8] md:grid-cols-5 md:text-[36px]">
                    <span className="text-[32px] normal-case">vodafone</span>
                    <span className="normal-case">intel</span>
                    <span className="tracking-[0.18em]">TESLA</span>
                    <span className="normal-case">AMD</span>
                    <span className="normal-case">Talkit</span>
                </div>
            </div>
        </div>
    );
};

export default Companies;