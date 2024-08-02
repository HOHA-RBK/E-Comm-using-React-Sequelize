import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

const ProductsActions = ({ params }) => {
  const {  } = params.row;

  return (
    <Box>
      <Tooltip title="Edit this room">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this room">
        <IconButton
          onClick={() =>{} }
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ProductsActions;
