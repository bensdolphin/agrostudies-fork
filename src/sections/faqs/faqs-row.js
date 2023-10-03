import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { ConfirmDialog } from 'src/components/custom-dialog';
//
// import UserQuickEditForm from './user-quick-edit-form';

import FaqsFollowupForm from './faqs-followup-form';
// ----------------------------------------------------------------------

export default function FaqsRow({
  row,
  // row, selected, onEditRow, onSelectRow, onDeleteRow
}) {
  // const {
  //   name,
  //   avatarUrl,
  //   company,
  //   role,
  //   status,
  //   email,
  //   country,
  //   phoneNumber,
  //   gradYear,
  //   passport,
  // } = row;

  // const confirm = useBoolean();

  // const quickEdit = useBoolean();

  const popover = usePopover();

  return (
    <>
      <Typography>{row.detail}</Typography>
      <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 180 }}
      >
        <MenuItem
          onClick={() => {
            onEditRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit Question
        </MenuItem>
      </CustomPopover>
      <FaqsFollowupForm />
    </>
  );
}

FaqsRow.propTypes = {
  row: PropTypes.object,
  // onDeleteRow: PropTypes.func,
  // onEditRow: PropTypes.func,
  // onSelectRow: PropTypes.func,
  // row: PropTypes.object,
  // selected: PropTypes.bool,
};
