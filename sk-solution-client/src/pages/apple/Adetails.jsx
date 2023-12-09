import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Adetails = () => {
    const {_id,name,brand,image,price,ratting,desc,type} = useLoaderData(); 

    const myCart = {name,brand,image,price,type};
    console.log(myCart);

    const handleCart = _id =>{
        console.log(_id);
        fetch(`https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/cart`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(myCart)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedId){
            Swal.fire(
              'Good job!',
              'Product Added to Cart Successfully',
              'success'
            )
          }
        })
    }
    return (
      <div className="py-10 bg-[url('/13.jpg')]">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md  md:w-3/5 rounded-xl bg-clip-border mx-auto">
            <div className="relative  overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border">
              <img src={image} className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-slobo text-xl antialiased font-semibold leading-relaxed text-blue-gray-900">
                  {name}
                </p>
                <p className="block font-slobo text-xl antialiased font-semibold leading-relaxed text-blue-gray-900">
                  $ {price}.00
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                {desc}
              </p>
            </div>
            <div className="p-6 pt-0 flex justify-end">
              <button
                className=" bg-emerald-400 text-white btn hover:bg-emerald-600"
                type="button"
                onClick={()=>handleCart(_id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Adetails;