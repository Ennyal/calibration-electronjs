import React from 'react'

const InitalPopup = () => {
    return (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative ">
                    <div className='w-[340px] h-[221px] rounded-[10px] bg-white px-[22px]'>
                        <div className='font-bold leading-[24px] text-center pt-[29px] mb-[26px]'>Calibration Management</div>
                        <div>
                            <button className='bg-[#C9D3FF] py-2  rounded w-full'>Go To Database</button>
                            <div className='text-[#636363] text-[10px] text-center mt-[6px] leading-[14px]'>For offline view</div>
                        </div>
                        <div>
                            <button className='bg-[#0055ff] py-2 text-white rounded w-full mt-4'>Connect to Detector</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-60 fixed inset-0 z-10 bg-black"></div>
        </div>
    )
}

export default InitalPopup
