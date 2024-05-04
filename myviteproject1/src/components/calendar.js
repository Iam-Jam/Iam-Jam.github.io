// // Replace require statements with import statements
// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import { Container } from 'react-bootstrap';

// const BookingCalendar = () => {
//   const [dates, setDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

//   useEffect(() => {
//     fetchDates();
//   }, []);

//   const fetchDates = async () => {
//     try {
//       const response = await fetch('/api/available-dates');
//       if (!response.ok) {
//         throw new Error('Failed to fetch available dates');
//       }
//       const datesData = await response.json();
//       setDates(Object.keys(datesData));
//     } catch (error) {
//       console.error('Error fetching available dates:', error);
//     }
//   };

//   const handleDateClick = async (date) => {
//     try {
//       const response = await fetch(`/api/available-time-slots/${date}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch available time slots');
//       }
//       const timeSlots = await response.json();
//       setAvailableTimeSlots(timeSlots);
//       setSelectedDate(date);
//     } catch (error) {
//       console.error('Error fetching available time slots:', error);
//     }
//   };

//   const handleSubmit = async () => {
//     // Your handleSubmit logic for submitting schedule
//   };

//   return (
//     <Container className="text-primary">
//       <div>
//         {dates.map((date, index) => (
//           <div key={index} onClick={() => handleDateClick(date)}>
//             {date}
//           </div>
//         ))}
//       </div>
//       {selectedDate && (
//         <div>
//           <h2>Available Time Slots for {selectedDate}</h2>
//           <ul>
//             {availableTimeSlots.map((timeSlot, index) => (
//               <li key={index}>{timeSlot.time}</li>
//             ))}
//           </ul>
//           <button onClick={handleSubmit}>Submit Schedule</button>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default BookingCalendar;
