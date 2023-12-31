import React from 'react';
import FooterDescription from 'components/common/description/footer';

export default function SignUpFooter() {
  return (
    <div>
      <FooterDescription title="Already have an account?" link="/login" linkValue="Log In" />
    </div>
  );
}
