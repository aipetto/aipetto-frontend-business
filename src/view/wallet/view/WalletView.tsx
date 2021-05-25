import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function WalletView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.wallet.fields.totalCredits')}
        value={record.totalCredits}
      />

      <TextViewItem
        label={i18n('entities.wallet.fields.aipettoPoints')}
        value={record.aipettoPoints}
      />

      <UserViewItem
        label={i18n('entities.wallet.fields.user')}
        value={record.user}
      />
    </div>
  );
}

export default WalletView;
