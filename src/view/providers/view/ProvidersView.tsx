import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import BusinessCategoryViewItem from 'src/view/businessCategory/view/BusinessCategoryViewItem';
import BusinessServicesTypesViewItem from 'src/view/businessServicesTypes/view/BusinessServicesTypesViewItem';
import CityViewItem from 'src/view/city/view/CityViewItem';
import StateViewItem from 'src/view/state/view/StateViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';
import CurrencyViewItem from 'src/view/currency/view/CurrencyViewItem';
import LanguagesViewItem from "../../languages/view/LanguagesViewItem";

function ProvidersView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.providers.fields.name')}
        value={record.name}
      />

      <BusinessViewItem
        label={i18n('entities.providers.fields.businessID')}
        value={record.businessID}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.providerID')}
        value={record.providerID}
      />

      <BusinessCategoryViewItem
        label={i18n('entities.providers.fields.category')}
        value={record.category}
      />

      <BusinessServicesTypesViewItem
        label={i18n('entities.providers.fields.serviceTypes')}
        value={record.serviceTypes}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.contactName')}
        value={record.contactName}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.contactPhone')}
        value={record.contactPhone}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.contactWhatsApp')}
        value={record.contactWhatsApp}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.addressStreet')}
        value={record.addressStreet}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.addressStreetNumber')}
        value={record.addressStreetNumber}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.addressPostCode')}
        value={record.addressPostCode}
      />

      <CityViewItem
        label={i18n('entities.providers.fields.city')}
        value={record.city}
      />

      <StateViewItem
        label={i18n('entities.providers.fields.state')}
        value={record.state}
      />

      <CountryViewItem
        label={i18n('entities.providers.fields.country')}
        value={record.country}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.basePricePerService')}
        value={record.basePricePerService}
      />

      <CurrencyViewItem
        label={i18n('entities.providers.fields.currency')}
        value={record.currency}
      />

      <ImagesViewItem
        label={i18n('entities.providers.fields.profileImage')}
        value={record.profileImage}
      />

      <FilesViewItem
        label={i18n(
          'entities.providers.fields.attachedDoc',
        )}
        value={record.attachedDoc}
      />

      <LanguagesViewItem
        label={i18n('entities.providers.fields.language')}
        value={record.language}
      />

      <TextViewItem
        label={i18n('entities.providers.fields.isIndependent')}
        value={
          record.isIndependent
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default ProvidersView;
