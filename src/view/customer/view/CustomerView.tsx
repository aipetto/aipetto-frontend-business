import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';

function CustomerView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <BusinessViewItem
        label={i18n('entities.customer.fields.businessId')}
        value={record.businessId}
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

      <UserViewItem
        label={i18n('entities.customer.fields.userId')}
        value={record.userId}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.name')}
        value={record.name}
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
        label={i18n('entities.customer.fields.phoneNumber')}
        value={record.phoneNumber}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.address')}
        value={record.address}
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

      <TextViewItem
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
    </div>
  );
}

export default CustomerView;
