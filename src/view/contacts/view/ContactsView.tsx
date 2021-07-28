import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';

function ContactsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.contacts.fields.firstName')}
        value={record.firstName}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.lastName')}
        value={record.lastName}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.cellphone')}
        value={record.cellphone}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.whatsapp')}
        value={record.whatsapp}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.source')}
        value={
          record.source &&
          i18n(
            `entities.contacts.enumerators.source.${record.source}`,
          )
        }
      />

      <CountryViewItem
        label={i18n('entities.contacts.fields.country')}
        value={record.country}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.city')}
        value={record.city}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.addressStreetName')}
        value={record.addressStreetName}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.addressStreetNumber')}
        value={record.addressStreetNumber}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.addressStreetComplement')}
        value={record.addressStreetComplement}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.latitude')}
        value={record.latitude}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.longitude')}
        value={record.longitude}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.statusContact')}
        value={
          record.statusContact
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.contactType')}
        value={
          record.contactType &&
          i18n(
            `entities.contacts.enumerators.contactType.${record.contactType}`,
          )
        }
      />

      <CustomerViewItem
        label={i18n('entities.contacts.fields.customerID')}
        value={record.customerID}
      />

      <BusinessViewItem
        label={i18n('entities.contacts.fields.businessID')}
        value={record.businessID}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.companyName')}
        value={record.companyName}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.website')}
        value={record.website}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.linkedinProfile')}
        value={record.linkedinProfile}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.instagramProfile')}
        value={record.instagramProfile}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.facebookProfile')}
        value={record.facebookProfile}
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.isDeveloper')}
        value={
          record.isDeveloper
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.contacts.fields.isActive')}
        value={
          record.isActive
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <ImagesViewItem
        label={i18n('entities.contacts.fields.contactProfilePhoto')}
        value={record.contactProfilePhoto}
      />

      <LanguagesViewItem
        label={i18n('entities.contacts.fields.language')}
        value={record.language}
      />
    </div>
  );
}

export default ContactsView;
