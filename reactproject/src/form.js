// import React, { useRef, useState } from 'react';
// function form(){
//   return (
//     <form ref={formRef} onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           className="form-control"
//           id="username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="phone">Phone Number:</label>
//         <input
//           type="tel"
//           className="form-control"
//           id="phone"
//           value={phone}
//           onChange={(event) => setPhone(event.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="confirm-password">Confirm Password:</label>
//         <input
//           type="password"
//           className="form-control"
//           id="confirm-password"
//           value={confirmPassword}
//           onChange={(event) => setConfirmPassword(event.target.value)}
//           required
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// export default Form;