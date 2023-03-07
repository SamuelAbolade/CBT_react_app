import React from 'react'
import { useSelector } from 'react-redux';
import { ButtonGroup, Button } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ConfirmSubmitDialog from './ConfirmSubmitDialog';

const AppBar = () => {
    const { timerReducer: { timeRemaining } } = useSelector((state) => state)
    const minutes = (Math.floor(timeRemaining / 60));
    const seconds = Math.floor(timeRemaining % 60).toString().padStart(2, "0");
    return (
        <>
            <div className='m-auto mt-4  text-center'>
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                >
                    <Button className='p-2 px-4 rounded-0 rounded-start' color="primary"><AccessAlarmIcon /> {minutes + ":" + seconds}</Button>
                    <ConfirmSubmitDialog />
                </ButtonGroup>
            </div>
        </>
    )
}

export default AppBar