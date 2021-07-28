import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';

function MessagesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <UserViewItem
        label={i18n('entities.messages.fields.from')}
        value={record.from}
      />

      <UserViewItem
        label={i18n('entities.messages.fields.to')}
        value={record.to}
      />

      <TextViewItem
        label={i18n('entities.messages.fields.message')}
        value={record.message}
      />

      <BusinessViewItem
        label={i18n('entities.messages.fields.businessId')}
        value={record.businessId}
      />

      <LanguagesViewItem
        label={i18n('entities.messages.fields.language')}
        value={record.language}
      />
    </div>
  );
}

export default MessagesView;
