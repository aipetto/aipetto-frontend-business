import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import BusinessServicesTypesViewItem from 'src/view/businessServicesTypes/view/BusinessServicesTypesViewItem';

function ProfessionalsServiceAvailabilityView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <UserViewItem
        label={i18n('entities.professionalsServiceAvailability.fields.userId')}
        value={record.userId}
      />

      <BusinessViewItem
        label={i18n('entities.professionalsServiceAvailability.fields.businessId')}
        value={record.businessId}
      />

      <BusinessServicesTypesViewItem
        label={i18n('entities.professionalsServiceAvailability.fields.serviceType')}
        value={record.serviceType}
      />

      <CustomViewItem
        label={i18n('entities.professionalsServiceAvailability.fields.timeSlot')}
        value={record.timeSlot}
        render={(values) =>
          (values || []).map((value) => (
            <div key={value}>
              <span>{value
                ? i18n(
                  `entities.professionalsServiceAvailability.enumerators.timeSlot.${value}`,
                  )
                : null}</span>
            </div>
          ))
        }
      />

      <TextViewItem
        label={i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStart')}
        value={record.dateAvailabilityStart}
      />

      <TextViewItem
        label={i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEnd')}
        value={record.dateAvailabilityEnd}
      />
    </div>
  );
}

export default ProfessionalsServiceAvailabilityView;
