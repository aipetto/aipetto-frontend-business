import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

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
    </div>
  );
}

export default MessagesView;
