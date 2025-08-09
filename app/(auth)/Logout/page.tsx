'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';



const LogoutPage = () => {
   const router = useRouter();

//   useEffect(() => {
//     const handleLogout = async () => {
//       await dispatch(logout());
//       router.push('/login');
//     };

//     handleLogout();
//   }, [dispatch, router]);

  return <div>You have Logged out successfully</div>;
};

export default LogoutPage;
