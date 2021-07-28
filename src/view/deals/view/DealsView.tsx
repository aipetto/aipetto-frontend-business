import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function DealsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.deals.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.deals.enumerators.status.${record.status}`,
          )
        }
      />

      <CustomerViewItem
        label={i18n('entities.deals.fields.customer')}
        value={record.customer}
      />

      <FilesViewItem
        label={i18n(
          'entities.deals.fields.digitalContracts',
        )}
        value={record.digitalContracts}
      />

      <TextViewItem
        label={i18n('entities.deals.fields.dateStart')}
        value={record.dateStart}
      />

      <TextViewItem
        label={i18n('entities.deals.fields.dateEnded')}
        value={record.dateEnded}
      />

      <UserViewItem
        label={i18n('entities.deals.fields.salesManagerResponsible')}
        value={record.salesManagerResponsible}
      />

      <BusinessViewItem
        label={i18n('entities.deals.fields.businessID')}
        value={record.businessID}
      />

      <CountryViewItem
        label={i18n('entities.deals.fields.country')}
        value={record.country}
      />
    </div>
  );
}

export default DealsView;
