import React from 'react';
import './AllBookingShow.css';

const AllOrderShow = ({allOrder,index,setIsDeleted}) => {
  
  
  
    const { Name, email,phone, date } = allOrder;

    const AllBookingShow = (id) => {
        
        const proceed = window.confirm('Are You Deleted This Order?');
        if (proceed) {
            fetch(`https://whispering-refuge-31044.herokuapp.com/deleteMYBooking/${id}`, {
            method: 'DELETE',
            headers: {
                content: 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
               console.log(result)
               if (result.acknowledged) {
                setIsDeleted(true)
                console.log(result.data)
                alert('Deleted successfully');
               
            }else{
                setIsDeleted(false)
            }
            })
        // console.log(id);
        }
    }



    const handleConfirm = (id)=>{
        
fetch(`https://whispering-refuge-31044.herokuapp.com/CnfirmOrder/${id}`,{
    method: 'PUT',
    headers: {
        content: 'application/json'
    }
}).then(res => res.json())
.then(result => {
    console.log(result)
    if (result.matchedCount) {
        alert('Confirmed successfully ') 
    }
})

    }

    
    return (
        <div>
            <div className='container mx-auto'>

<div className='row shadow d-flex my-2'>


<div className='col-md-4'>
<h1 className='text-warning'>Order {index} </h1> 

<div>
    <h3  >{Name} </h3>
<p>
  {email}
</p>
<span> {date}</span>
</div>
</div>

<div className='BUTTON'>
<button  onClick={() => AllBookingShow(allOrder._id)} type="button" class="btn btn-danger">Delete</button>
<button onClick={()=> handleConfirm(allOrder._id) } type="button" class="btn btn-warning">Confirm</button>
</div>

</div>




                
            </div>
        </div>
    );
};

export default AllOrderShow;