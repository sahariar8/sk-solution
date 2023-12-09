import React from 'react';
import Swal from 'sweetalert2';

const Cart = ({cart,carts,setCarts}) => {
    const {_id,name,brand,price,type,image} = cart;


    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                
            fetch(`https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/cart/${ _id }`,{

                 method:'DELETE'
               })
           .then(res=>res.json())
           .then(data=>{
            console.log('data delted successfully',data);
            if(data.deletedCount > 0){
                Swal.fire('Deleted!','Your file has been deleted.','success');
               const remaining = carts.filter(cart=> cart._id !== _id);
                setCarts(remaining);
            }
           })
            }
          })

        
    } 
    


    return (
      <tr className='text-slate-700 font-semibold'>
        <td>
          <div className="avatar">
            <div className="w-14 rounded-full ">
              <img src={image} />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{brand}</td>
        <td>{type}</td>
        <td>{price}</td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error btn-xs md:btn md:bg-red-400"
          >
            Delete
          </button>
        </td>
      </tr>
    );
};

export default Cart;