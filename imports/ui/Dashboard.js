import React from 'react';

import PrivateHeader from './PrivateHeader'

export default () => {
  return (
          <div>
            <PrivateHeader title="Dashboard"/>
            <div className="page-content">
              Here should be Dashboard page content.
            </div>
          </div>
  )
};
