import { Helmet } from 'react-helmet-async';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { UserEditView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function SettingsEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Settings Edit</title>
      </Helmet>

      <UserEditView id={`${id}`} />
    </>
  );
}
