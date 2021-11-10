import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import BusinessServicesTypesViewItem from 'src/view/businessServicesTypes/view/BusinessServicesTypesViewItem';
import PlaceViewItem from 'src/view/place/view/PlaceViewItem';

function BusinessPlaceServiceAvailabilityView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.businessPlaceServiceAvailability.fields.name')}
        value={record.name}
      />

      <PlaceViewItem
        label={i18n('entities.businessPlaceServiceAvailability.fields.places')}
        value={record.places}
      />

      <BusinessViewItem
        label={i18n('entities.businessPlaceServiceAvailability.fields.businessId')}
        value={record.businessId}
      />

      <TextViewItem
        label={i18n('entities.businessPlaceServiceAvailability.fields.dateStart')}
        value={record.dateStart}
      />

      <TextViewItem
        label={i18n('entities.businessPlaceServiceAvailability.fields.dateEnd')}
        value={record.dateEnd}
      />

      <CustomViewItem
        label={i18n('entities.businessPlaceServiceAvailability.fields.timeSlot')}
        value={record.timeSlot}
        render={(values) =>
          (values || []).map((value) => (
            <div key={value}>
              <span>{value
                ? i18n(
                  `entities.businessPlaceServiceAvailability.enumerators.timeSlot.${value}`,
                  )
                : null}</span>
            </div>
          ))
        }
      />

      <BusinessServicesTypesViewItem
        label={i18n('entities.businessPlaceServiceAvailability.fields.serviceType')}
        value={record.serviceType}
      />
    </div>
  );
}

export default BusinessPlaceServiceAvailabilityView;
