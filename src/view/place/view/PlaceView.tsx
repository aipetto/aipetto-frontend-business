import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';

function PlaceView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <BusinessViewItem
        label={i18n('entities.place.fields.businessId')}
        value={record.businessId}
      />

      <TextViewItem
        label={i18n('entities.place.fields.latitude')}
        value={record.latitude}
      />

      <TextViewItem
        label={i18n('entities.place.fields.longitude')}
        value={record.longitude}
      />

      <TextViewItem
        label={i18n('entities.place.fields.address')}
        value={record.address}
      />

      <TextViewItem
        label={i18n('entities.place.fields.addressNumber')}
        value={record.addressNumber}
      />

      <TextViewItem
        label={i18n('entities.place.fields.addressZipCode')}
        value={record.addressZipCode}
      />

      <TextViewItem
        label={i18n('entities.place.fields.openTime')}
        value={record.openTime}
      />

      <TextViewItem
        label={i18n('entities.place.fields.closeTime')}
        value={record.closeTime}
      />

      <TextViewItem
        label={i18n('entities.place.fields.is24hours')}
        value={
          record.is24hours
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default PlaceView;
