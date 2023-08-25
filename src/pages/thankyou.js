import React from 'react'
import { useRouter } from 'next/router';

export default function ThankYou(){
    const router=useRouter();
    console.log('router',router.query)
    return(
        <>
        
        <h1>THANK YOU</h1>
        </>
    )
}