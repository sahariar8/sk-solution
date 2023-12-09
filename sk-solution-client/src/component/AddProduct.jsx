import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

        const handleForm = e =>{

                    e.preventDefault();
                    const form = e.target;
                    const name = form.name.value;
                    const brand = form.brand.value.toLowerCase();
                    const type = form.type.value;
                    const price = form.price.value;
                    const image = form.image.value;
                    const desc = form.desc.value;
                    const ratting = form.ratting.value;
                    const product = {name,brand,price,image,desc,type,ratting}
                    console.log(product)

                    fetch('https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/products',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(product)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log("data submitted",data)
                        if(data.insertedId){
                            Swal.fire(
                                'Good job!',
                                'Product Added Successfully',
                                'success'
                              )
                              form.reset();
                        }
                    })
        }

    return (
      <div className='shadow-lg font-rancho'>
        <h1 className="text-emerald-400 md:text-5xl font-slobo font-bold text-center pt-10">
          Product Add Form
        </h1>
        <section className="max-w-4xl p-5 mx-auto bg-white rounded-md  dark:bg-gray-800 font-rancho">

          <form onSubmit={handleForm}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className=" dark:text-gray-200" for="username">
                  Name
                </label>
                <input
                 name='name'
                  type="text"
                  required
                  placeholder='Enter Product Name'
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className=" dark:text-gray-200"
                  for="emailAddress"
                >
                 Brand
                </label>
                <input
                  name='brand'
                  type="text"
                  required
                  placeholder='Enter Brand Name'
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className=" dark:text-gray-200" for="username">
                  Type
                </label>
                <select name="type" required  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                        <option value="">Select</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Accessories">Acessories</option>
                </select>
              </div>

              <div>
                <label
                  className=" dark:text-gray-200"
                  for="emailAddress"
                >
                 Price
                </label>
                <input
                 name='price'
                  type="text"
                  placeholder='Enter price'
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className=" dark:text-gray-200" for="password">
                 Ratting
                </label>
                <input
                 name='ratting'
                  type="number"
                  min="1"
                  max="5"
                  required
                  placeholder='Enter Ratting'
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className=" dark:text-gray-200"
                  for="passwordConfirmation"
                >
                Photo
                </label>
                <input
                  name='image'
                  type="text"
                  required
                  placeholder='Enter Photo Url'
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div>
            <div className='w-full mt-2 py-2'>
                <label
                  className=" dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Description
                </label>
                <input
                  name='desc'
                  type="text"
                  required
                  placeholder='Description'
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-emerald-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type='submit'>
               Add Product
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default AddProduct;