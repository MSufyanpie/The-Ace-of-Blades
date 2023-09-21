import { Typography } from '@mui/material'

import { AiOutlineLoading } from 'react-icons/ai'

export const LoadingScreen = () => {
  return (
    <div>
        <Typography variant='h2'>
          Wait
        </Typography>
        <Typography variant='h3'>
          <AiOutlineLoading/>
        </Typography>
    </div>
  )
}
