import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai'
import { LuMessagesSquare } from 'react-icons/lu'
import { FaFilePen } from 'react-icons/fa6'
import { GiPartyPopper } from 'react-icons/gi'

const Stepper = () => {
    return (
      <div className="max-w-screen-xl mx-auto text-center pt-16">
                <div>
                <h1 className="text-2xl md:text-5xl font-semibold">
                    <span className="text-emerald-400">Hello! </span> We Are <span>"Where Technology Meets Trust"</span>
                </h1>
                <h3 className="text-sm font-semibold text-slate-500 py-6 w-2/3 mx-auto">
                To offer the best services in your electronics shop, consider providing a range of offerings that cater to customer needs and enhance their shopping experience. 
                </h3>
                </div>
                <div className='grid md:grid-cols-4 pt-16 shadow-lg py-6'>
                    
                <div>
                    <div className='flex justify-center'>
                    <h1><AiTwotoneHome className='text-7xl text-emerald-400 mb-2'/></h1>
                    </div>
                    <h1 className='text-center text-lg font-semibold text-slate-600'>Online Shopping and Delivery</h1>
                    <p className='text-center bg-emerald-400 rounded-full block w-[25px] text-white mx-auto mt-3'>1</p>
                </div>
                <div>
                    <div className='flex justify-center'>
                    <h1><LuMessagesSquare className='text-7xl text-emerald-400 mb-2'/></h1>
                    </div>
                    <h1 className='text-center text-lg font-semibold text-slate-600'>Connect With the Best Vendors</h1>
                    <p className='text-center bg-emerald-400 rounded-full block w-[25px] text-white mx-auto mt-3'>2</p>
                </div>
                <div>
                    <div className='flex justify-center'>
                    <h1><FaFilePen className='text-7xl text-emerald-400 mb-2'/></h1>
                    </div>
                    <h1 className='text-center text-lg font-semibold text-slate-600'>Regular Promotions and Sales</h1>
                    <p className='text-center bg-emerald-400 rounded-full block w-[25px] text-white mx-auto mt-3'>3</p>
                </div>
                <div>
                    <div className='flex justify-center'>
                    <h1><GiPartyPopper className='text-7xl text-emerald-400 mb-2'/></h1>
                    </div>
                    <h1 className='text-center text-lg font-semibold text-slate-600'>Up-to-Date Inventory</h1>
                    <p className='text-center bg-emerald-400 rounded-full block w-[25px] text-white mx-auto mt-3'>4</p>
                </div>
                
                    
            </div>
       </div>
    );
};

export default Stepper;