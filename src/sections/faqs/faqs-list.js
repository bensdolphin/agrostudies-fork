import { useState } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
// _mock
import { _faqs, FAQS_STATUS_OPTIONS } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import { fDate } from 'src/utils/format-time';
import FaqsFollowupForm from './faqs-followup-form';
import FaqsRow from './faqs-row';
import FaqsUserBox from './faqs-user-box';
// ----------------------------------------------------------------------

export default function FaqsList() {
  const popover = usePopover();

  const [expanded, setExpanded] = useState(null);

  function handleChange(questionId) {
    return (event, newExpanded) => {
      setExpanded(newExpanded ? questionId : null);
    };
  }

  return (
    <div>
      {_faqs.map((accordion) => (
        <Accordion
          key={accordion.id}
          expanded={expanded === accordion.id}
          onChange={handleChange(accordion.id)}
        >
          <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'center' }}
              spacing={{ xs: 1, md: 2 }}
              mr={{ xs: 1, md: 2 }}
              sx={{ width: '100%' }}
            >
              {accordion.questionBy && <FaqsUserBox user={accordion.questionBy} qOrA="asked" />}
              <Typography
                variant="subtitle1"
                sx={{
                  width: { xs: '100%', md: 'unset' },
                  flex: { xs: 'auto', md: 1 },
                  order: { xs: 3, md: 'unset' },
                }}
              >
                {accordion.heading}
              </Typography>
              <Typography variant="caption">
                <Box sx={{ display: { xs: 'none', md: 'unset' } }}>Last edited: </Box>
                {fDate(accordion.editedAt)}
              </Typography>
            </Stack>
          </AccordionSummary>

          <AccordionDetails>
            <FaqsRow row={accordion} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
