import { Box, Menu } from '@mui/material'

import CategoriesPage from '../../AOB Collection/CategoriesPage'

export const AOBCollectionMenu = ({anchorel,onClose}:any) => {
  return (
    
    <Menu
    id="simple-menu"
    anchorEl={anchorel}
    open={Boolean(anchorel)}
    onClose={onClose}
    MenuListProps={{ onMouseLeave: onClose }}
    >
       <Box width={900}>
    <CategoriesPage/></Box>
    </Menu>
    
  )
}
