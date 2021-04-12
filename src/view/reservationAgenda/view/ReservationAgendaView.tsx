import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import BusinessServicesTypesViewItem from 'src/view/businessServicesTypes/view/BusinessServicesTypesViewItem';

function ReservationAgendaView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <BusinessViewItem
        label={i18n('entities.reservationAgenda.fields.businessId')}
        value={record.businessId}
      />

      <CustomViewItem
        label={i18n('entities.reservationAgenda.fields.timeSlot')}
        value={record.timeSlot}
        render={(values) =>
          (values || []).map((value) => (
            <div key={value}>
              <span>{value
                ? i18n(
                  `entities.reservationAgenda.enumerators.timeSlot.${value}`,
                  )
                : null}</span>
            </div>
          ))
        }
      />

      <BusinessServicesTypesViewItem
        label={i18n('entities.reservationAgenda.fields.serviceType')}
        value={record.serviceType}
      />

      <TextViewItem
        label={i18n('entities.reservationAgenda.fields.name')}
        value={record.name}
      />
    </div>
  );
}

export default ReservationAgendaView;
