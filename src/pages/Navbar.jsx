import React from 'react'
import backIcon from '../../public/image/backIcon.svg'
import homeIcon from '../../public/image/homeIcon.svg'
import logoutIcon from '../../public/image/logoutIcon.svg'
const Navbar = () => {
    return (
        <div>
            <div className='bg-[#0055ff] py-2 text-white items-center  flex justify-between px-3'>
                <div className='flex items-center' >
                    <div>
                        <img src={homeIcon} />
                    </div>
                    <div className='pl-5'>
                        <img src={backIcon} />
                    </div>
                    <div className='flex gap-1 ml-[25px]'>
                        <button className='px-[18.5px] py-[5.5px] text-[10px] rounded leading-[15px] text-black bg-[#c9d3ff]'>Calibration</button>
                        <button className='px-[18.5px] py-[5.5px] text-[10px] rounded leading-[15px] text-black bg-[#c9d3ff]'>Loop Test</button>
                        <button className='px-[18.5px] py-[5.5px] text-[10px] rounded leading-[15px] text-black bg-[#c9d3ff]'>Configuration </button>
                    </div>
                    <div className='flex gap-[6px] ml-[6px] items-center'>
                        <div className='h-[33px] bg-[#c9b3ff] w-[1px]'></div>
                        <div>
                            <button className='px-[18.5px] py-[5.5px] text-[10px] rounded leading-[15px] text-black bg-white font-bold'>Configuration </button>
                        </div>
                    </div>
                </div>
                <div className='text-sm leading-[20.73px]  flex items-center'>
                    <div className='flex gap-2 ml-[25px]'>
                        <button className='px-[18.5px] py-[5.5px] text-[11px] rounded leading-[16.29px] text-black bg-[#2bec56] font-bold '>Connect</button>
                        <button className='px-[18.5px] py-[5.5px] text-[11px] rounded leading-[16.29px] text-white bg-[#da1c1c] font-bold '>Disconnect </button>
                    </div>
                    <div className='ml-[15px]'>System Status:</div>
                    <span className='font-bold text-base leading-[23.7px] '>OK</span>
                    <div className='flex gap-2 ml-[25px]'>
                       
                        <button className='px-[10px] py-[5.5px] text-[14px] rounded leading-[16.29px] text-white bg-[#da1c1c]  flex '>  <img src={logoutIcon}/>Logout </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
