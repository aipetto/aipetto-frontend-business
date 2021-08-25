import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';
import CurrencyViewItem from 'src/view/currency/view/CurrencyViewItem';

function CustomerView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.customer.fields.name')}
        value={record.name}
      />

      <BusinessViewItem
        label={i18n('entities.customer.fields.businessId')}
        value={record.businessId}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.uniqueCustomIdentifier')}
        value={record.uniqueCustomIdentifier}
      />

      <UserViewItem
        label={i18n('entities.customer.fields.userId')}
        value={record.userId}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.source')}
        value={
          record.source &&
          i18n(
            `entities.customer.enumerators.source.${record.source}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.customer.fields.surname')}
        value={record.surname}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.birthdate')}
        value={record.birthdate}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.gender')}
        value={
          record.gender &&
          i18n(
            `entities.customer.enumerators.gender.${record.gender}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.customer.fields.whatsApp')}
        value={record.whatsApp}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.smsPhoneNumber')}
        value={record.smsPhoneNumber}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.phoneNumber')}
        value={record.phoneNumber}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.address')}
        value={record.address}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.zipCode')}
        value={record.zipCode}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.city')}
        value={record.city}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.state')}
        value={record.state}
      />

      <CountryViewItem
        label={i18n('entities.customer.fields.country')}
        value={record.country}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.billingAddressStreet')}
        value={record.billingAddressStreet}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.billingAddressCity')}
        value={record.billingAddressCity}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.billingAddressState')}
        value={record.billingAddressState}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.billingAddressZipCode')}
        value={record.billingAddressZipCode}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.billingAddressCountry')}
        value={record.billingAddressCountry}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.shippingAddressStreet')}
        value={record.shippingAddressStreet}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.shippingAddressCity')}
        value={record.shippingAddressCity}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.shippingAddressState')}
        value={record.shippingAddressState}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.shippingAddressZipCode')}
        value={record.shippingAddressZipCode}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.shippingAddressCountry')}
        value={record.shippingAddressCountry}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.prospectStatus')}
        value={
          record.prospectStatus &&
          i18n(
            `entities.customer.enumerators.prospectStatus.${record.prospectStatus}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.customer.fields.customerStatus')}
        value={
          record.customerStatus &&
          i18n(
            `entities.customer.enumerators.customerStatus.${record.customerStatus}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.customer.fields.wantToReceiveNotifications')}
        value={
          record.wantToReceiveNotifications
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <CurrencyViewItem
        label={i18n('entities.customer.fields.currency')}
        value={record.currency}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.balance')}
        value={record.balance}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.shippingAddressStreetNumber')}
        value={record.shippingAddressStreetNumber}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.addressStreetNumber')}
        value={record.addressStreetNumber}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.billingAddressStreetNumber')}
        value={record.billingAddressStreetNumber}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.addressStreetComplement')}
        value={record.addressStreetComplement}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.billingAddressStreetComplement')}
        value={record.billingAddressStreetComplement}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.shippingAddressStreetComplement')}
        value={record.shippingAddressStreetComplement}
      />

      <ImagesViewItem
        label={i18n('entities.customer.fields.customerProfileImage')}
        value={record.customerProfileImage}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.facebook')}
        value={record.facebook}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.linkedin')}
        value={record.linkedin}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.instagram')}
        value={record.instagram}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.website')}
        value={record.website}
      />

      <CurrencyViewItem
        label={i18n('entities.customer.fields.language')}
        value={record.language}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.notes')}
        value={record.notes}
      />
    </div>
  );
}

export default CustomerView;
