import { Helmet } from 'react-helmet-async';
// sections
import { SettingsListView } from 'src/sections/settings/view';
// ----------------------------------------------------------------------

export default function SettingsListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Settings List</title>
      </Helmet>

      <SettingsListView />
    </>
  );
}
