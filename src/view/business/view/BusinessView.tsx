import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import BusinessServicesTypesViewItem from 'src/view/businessServicesTypes/view/BusinessServicesTypesViewItem';
import CityViewItem from 'src/view/city/view/CityViewItem';
import StateViewItem from 'src/view/state/view/StateViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function BusinessView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.business.fields.name')}
        value={record.name}
      />

      <BusinessServicesTypesViewItem
        label={i18n('entities.business.fields.services')}
        value={record.services}
      />

      <TextViewItem
        label={i18n('entities.business.fields.contactName')}
        value={record.contactName}
      />

      <TextViewItem
        label={i18n('entities.business.fields.contactPhone')}
        value={record.contactPhone}
      />

      <TextViewItem
        label={i18n('entities.business.fields.contactWhatsApp')}
        value={record.contactWhatsApp}
      />

      <TextViewItem
        label={i18n('entities.business.fields.contactEmail')}
        value={record.contactEmail}
      />

      <TextViewItem
        label={i18n('entities.business.fields.addressStreet')}
        value={record.addressStreet}
      />

      <TextViewItem
        label={i18n('entities.business.fields.addressStreetNumber')}
        value={record.addressStreetNumber}
      />

      <TextViewItem
        label={i18n('entities.business.fields.addressPostCode')}
        value={record.addressPostCode}
      />

      <CityViewItem
        label={i18n('entities.business.fields.city')}
        value={record.city}
      />

      <StateViewItem
        label={i18n('entities.business.fields.state')}
        value={record.state}
      />

      <CountryViewItem
        label={i18n('entities.business.fields.country')}
        value={record.country}
      />
    </div>
  );
}

export default BusinessView;
