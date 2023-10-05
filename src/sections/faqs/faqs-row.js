import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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

import { useState } from 'react';
import FaqsFollowupForm from './faqs-followup-form';
import FaqsEditForm from './faqs-new-edit-form';
import FaqsUserBox from './faqs-user-box';
// ----------------------------------------------------------------------

export default function FaqsRow({ row }) {
  const popover = usePopover();

  const [isEdited, setIsEdited] = useState(false);

  return (
    <>
      {isEdited ? (
        <FaqsEditForm currentFaq={row} disableEditMode={() => setIsEdited(false)} />
      ) : (
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={{ xs: 1, md: 2 }}
          mr={{ xs: 1, md: 2 }}
          sx={{ width: '100%' }}
        >
          {row.answerBy && <FaqsUserBox user={row.answerBy} qOrA="answered" />}
          <Typography
            sx={{
              width: { xs: '100%', md: 'unset' },
              flex: { xs: 'auto', md: 1 },
              order: { xs: 3, md: 'unset' },
            }}
          >
            {row.detail}
          </Typography>
          <MenuItem
            sx={{ alignSelf: 'start' }}
            onClick={() => {
              setIsEdited(true);
            }}
          >
            <Iconify icon="solar:pen-bold" />
          </MenuItem>
          {/* <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton> */}
        </Stack>
      )}

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 180 }}
      >
        <MenuItem
          onClick={() => {
            setIsEdited(true);
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
