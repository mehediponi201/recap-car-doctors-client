import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import carDetails from '../assets/images/banner/6.jpg'
import BookingCart from "./BookingCart";
import swal from 'sweetalert'

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
           method:"Delete"
        })
        .then(res=>res.json())
        .then(data=>{
           console.log(data);
           if(data.deletedCount>0)
           {
               swal({
                   title: "Are you sure?",
                   text: "Once deleted, you will not be able to recover this imaginary file!",
                   icon: "warning",
                   buttons: true,
                   dangerMode: true,
                 })
                 .then((willDelete) => {
                   if (willDelete) {
                     swal("Poof! Your imaginary file has been deleted!", {
                       icon: "success",
                     });
                   } else {
                     swal("Your imaginary file is safe!");
                   }
                 });
              const remaining = bookings.filter(booking => booking._id !== id);
              setBookings(remaining);
           }
        })
       }

       const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"put",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0)
            {
              const remaining = bookings.filter(booking=>booking._id !== id);
              const updated = bookings.find(booking=>booking._id === id);
              updated.status = 'confirm';
              const currentBooking = [updated,...remaining];
              setBookings(currentBooking);
            }
        })
       }

    return (
        <div>
            <img className="h-[380px] w-full rounded-lg mt-4" src={carDetails} alt="" />
            <h4 className="text-4xl text-center font-bold text-orange-500 mt-4 mb-4">Booking List</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Delete Process</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Due Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookings.map(booking => <BookingCart key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingCart>)
                       }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Bookings;

