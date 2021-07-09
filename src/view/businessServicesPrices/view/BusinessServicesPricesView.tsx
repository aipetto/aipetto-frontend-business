import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import BusinessServicesTypesViewItem from 'src/view/businessServicesTypes/view/BusinessServicesTypesViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';

function BusinessServicesPricesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <BusinessServicesTypesViewItem
        label={i18n('entities.businessServicesPrices.fields.service')}
        value={record.service}
      />

      <BusinessViewItem
        label={i18n('entities.businessServicesPrices.fields.businessId')}
        value={record.businessId}
      />

      <TextViewItem
        label={i18n('entities.businessServicesPrices.fields.servicePrice')}
        value={record.servicePrice}
      />
    </div>
  );
}

export default BusinessServicesPricesView;
