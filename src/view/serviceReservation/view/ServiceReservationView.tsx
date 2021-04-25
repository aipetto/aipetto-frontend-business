import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import BusinessServicesTypesViewItem from 'src/view/businessServicesTypes/view/BusinessServicesTypesViewItem';
import PlaceViewItem from 'src/view/place/view/PlaceViewItem';

function ServiceReservationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.serviceReservation.fields.date')}
        value={record.date}
      />

      <BusinessViewItem
        label={i18n('entities.serviceReservation.fields.businessId')}
        value={record.businessId}
      />

      <CustomerViewItem
        label={i18n('entities.serviceReservation.fields.customerId')}
        value={record.customerId}
      />

      <BusinessServicesTypesViewItem
        label={i18n('entities.serviceReservation.fields.serviceType')}
        value={record.serviceType}
      />

      <TextViewItem
        label={i18n('entities.serviceReservation.fields.time')}
        value={
          record.time &&
          i18n(
            `entities.serviceReservation.enumerators.time.${record.time}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.serviceReservation.fields.needTransportation')}
        value={
          record.needTransportation
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <PlaceViewItem
        label={i18n('entities.serviceReservation.fields.place')}
        value={record.place}
      />

      <TextViewItem
        label={i18n('entities.serviceReservation.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.serviceReservation.enumerators.status.${record.status}`,
          )
        }
      />
    </div>
  );
}

export default ServiceReservationView;
