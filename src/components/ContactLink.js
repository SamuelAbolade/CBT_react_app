import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactLink = () => {
    return (
        <>
            <div className="attribution  ">
                <div className='d-flex justify-content-evenly col-9 col-lg-2 m-auto mt-2 pt-2'>
                    <p>Coded by
                        <a href="https://github.com/techie-sam" className="attribution" target="_blank" rel="noreferrer"> Techie Sam</a>
                    </p>

                    <p>
                        <a href="https://linkedin.com/techie-sam" className='mx-2 attribution' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                        <a href="https://twitter.com/techie_sam" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactLink