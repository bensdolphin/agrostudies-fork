import PropTypes from 'prop-types';
// @mui
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useCallback, useMemo, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
// utils
import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';
// components
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import FormProvider, {
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';
// ----------------------------------------------------------------------

export default function JobApplyForm({ job }) {
  const { enqueueSnackbar } = useSnackbar();

  const {
    title,
    skills,
    salary,
    content,
    benefits,
    createdAt,
    experience,
    expiredDate,
    employmentTypes,
  } = job;

  const JobApplySchema = Yup.object().shape({
    cv: Yup.mixed().nullable().required('CV is required'),
  });

  const defaultValues = useMemo(
    () => ({
      cv: null,
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(JobApplySchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar('CV sent!');
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('cv', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('cv', null);
  }, [setValue]);

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Typography variant="subtitle2">Upload CV</Typography>
      <RHFUpload
        name="cv"
        maxSize={3145728}
        // onDrop={handleDrop}
        // onDelete={handleRemoveFile}
      />
      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        // loading={isSubmitting}
        sx={{ mt: 2 }}
      >
        Send CV
      </LoadingButton>
    </FormProvider>
  );
}

JobApplyForm.propTypes = {
  job: PropTypes.object,
};
