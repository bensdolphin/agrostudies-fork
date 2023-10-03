// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import FaqNewEditForm from '../faqs-new-edit-form';

// ----------------------------------------------------------------------

export default function FAQsCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a New Question"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'FAQs',
            href: paths.dashboard.faqs.root,
          },
          { name: 'New Question' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <FaqNewEditForm />
    </Container>
  );
}
