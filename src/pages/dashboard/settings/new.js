import { Helmet } from 'react-helmet-async';
// sections
import { SettingsCreateView } from 'src/sections/settings/view';

// ----------------------------------------------------------------------

export default function SettingsCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new Setting</title>
      </Helmet>

      <SettingsCreateView />
    </>
  );
}
