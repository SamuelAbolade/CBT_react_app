import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactLink = () => {
    return (
        <>
            <div className="attribution">
                <span className=''>
                    <p className='m-auto'>
                        Coded by<a href="https://github.com/techie-sam" className="attribution fw-bolder" target="_blank" rel="noreferrer"> Techie_Sam
                        <a href="https://linkedin.com/in/techie-sam" className='mx-2 attribution' target="_blank" rel="noreferrer"><LinkedInIcon className='fs-5' /></a>
                        <a href="https://twitter.com/techie_sam" target="_blank" rel="noreferrer"><TwitterIcon className='fs-5' /></a></a>
                    </p>
                </span>
            </div>
        </>
    )
}

export default ContactLink