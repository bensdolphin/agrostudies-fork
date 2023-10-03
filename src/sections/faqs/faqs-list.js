import { useState } from 'react';
// @mui
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
// _mock
import { _faqs, FAQS_STATUS_OPTIONS } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import FaqsFollowupForm from './faqs-followup-form';
import FaqsRow from './faqs-row';
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
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <FaqsRow row={accordion} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
