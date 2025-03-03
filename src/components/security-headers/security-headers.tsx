import React from 'react';
import { Helmet } from 'react-helmet';

const SecurityHeaders: React.FC = () => (
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="googlebot" content="noindex, nofollow" />
    <meta name="referrer" content="no-referrer" />
    <meta http-equiv="X-Frame-Options" content="DENY" />
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta name="copyright" content={`Copyright (c) ${new Date().getFullYear()} Saurabh Bhatnagar. All rights reserved.`} />
    <meta name="author" content="Saurabh Bhatnagar" />
    <meta name="rights" content="All rights reserved" />
    
    {/* Prevent text selection and right-click */}
    <style type="text/css">
      {`
        body {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}
    </style>
  </Helmet>
);

export default SecurityHeaders; 