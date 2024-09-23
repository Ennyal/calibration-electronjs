import React from 'react'
import capsIcon from '../../public/image/capsaIcon.svg'
import ADNOCIcons from '../../public/image/ADNOC-Icon.svg'
import InitalPopup from '../modals/InitalPopup'
import Navbar from './Navbar'
function LoginPage() {
    return (
        <div className='h-screen bg-[#EFEFEF]'>

            <div className='bg-[#0055ff]  text-white items-center justify-end  flex  px-3 h-[49px]'>
                <div className='text-sm leading-[20.73px]  flex text-right'>
                    <div className='ml-[15px]'>System Status:</div>
                    <span className='font-bold text-base leading-[23.7px] '>OK</span>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <div className='flex px-3 justify-between p-5'>
                        <img src={capsIcon} alt="Caps Icon" />
                        <img src={ADNOCIcons} alt="ADNOC Icon" />
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-[432px] h-[281px] bg-white rounded-[10px] mt-[18px] p-5'>
                            <div className='text-center leading-[27px] text-lg font-bold '>Login</div>
                            <div>
                                <div className='text-[#6E6E6E] text-xs mt-[26px]'>User Name</div>
                                <input className='border w-full' />
                            </div>
                            <div>
                                <div className='text-[#6E6E6E] text-xs mt-[15px]'>Password</div>
                                <input className='border w-full' />
                            </div>
                            <div><button className='w-full bg-[#0055ff] rounded text-white py-2 text-[13px] font-bold leading-[19.23px] mt-[29px]'>Login</button></div>
                        </div>
                    </div>
                </div>
            </div>

            {false && <InitalPopup />}
        </div>
    )
}

export default LoginPage
