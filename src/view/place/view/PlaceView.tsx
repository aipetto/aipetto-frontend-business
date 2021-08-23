import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import PlaceTypeViewItem from 'src/view/placeType/view/PlaceTypeViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import BusinessServicesTypesViewItem from 'src/view/businessServicesTypes/view/BusinessServicesTypesViewItem';
import BusinessCategoryViewItem from 'src/view/businessCategory/view/BusinessCategoryViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function PlaceView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.place.fields.name')}
        value={record.name}
      />

      <PlaceTypeViewItem
        label={i18n('entities.place.fields.placeType')}
        value={record.placeType}
      />

      <BusinessViewItem
        label={i18n('entities.place.fields.businessId')}
        value={record.businessId}
      />

      <BusinessServicesTypesViewItem
        label={i18n('entities.place.fields.services')}
        value={record.services}
      />

      <BusinessCategoryViewItem
        label={i18n('entities.place.fields.categories')}
        value={record.categories}
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
        label={i18n('entities.place.fields.addressCity')}
        value={record.addressCity}
      />

      <TextViewItem
        label={i18n('entities.place.fields.addressState')}
        value={record.addressState}
      />

      <CountryViewItem
        label={i18n('entities.place.fields.addressCountry')}
        value={record.addressCountry}
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

      <TextViewItem
        label={i18n('entities.place.fields.stars')}
        value={record.stars}
      />

      <TextViewItem
        label={i18n('entities.place.fields.isOpen')}
        value={
          record.isOpen
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <ImagesViewItem
        label={i18n('entities.place.fields.photoLogo')}
        value={record.photoLogo}
      />

      <ImagesViewItem
        label={i18n('entities.place.fields.photoStore')}
        value={record.photoStore}
      />
    </div>
  );
}

export default PlaceView;
