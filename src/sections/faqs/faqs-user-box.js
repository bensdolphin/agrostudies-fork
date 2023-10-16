import PropTypes from 'prop-types';
// @mui
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// ----------------------------------------------------------------------

export default function FaqsUserBox({ user, qOrA = 'asked' }) {
  return (
    <Stack direction="row" spacing={{ xs: 0, md: 2 }} sx={{ width: { md: '220px' } }}>
      <Avatar alt={user.name.split(' ')[0]} src={user.avatarUrl} sx={{ mr: { xs: 1, md: 2 } }} />
      <Typography variant="caption">
        {user.name.split(' ')[0]} from
        <br />
        {user.country}
        <br />
        {qOrA}
      </Typography>
    </Stack>
  );
}

FaqsUserBox.propTypes = {
  user: PropTypes.object,
  qOrA: PropTypes.string,
};
