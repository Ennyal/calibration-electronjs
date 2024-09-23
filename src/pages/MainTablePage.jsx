import React from 'react'

const MainTablePage = () => {
    return (
        <div className='bg-[#EFEFEF] px-3 pt-3'>
            <div className='flex items-center'>
                <div className='mr-[10px] text-xs'>Filter by:</div>
                <div class="relative">
                    <select class="w-60 h-10 bg-white text-black rounded-[3px] border border-gray-300 text-xs">
                        <option>Station List</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default MainTablePage
