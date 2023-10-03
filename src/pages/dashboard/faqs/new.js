import { Helmet } from 'react-helmet-async';
// sections
import { FAQsCreateView } from 'src/sections/faqs/view';

// ----------------------------------------------------------------------

export default function FAQsCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new FAQ question</title>
      </Helmet>

      <FAQsCreateView />
    </>
  );
}
