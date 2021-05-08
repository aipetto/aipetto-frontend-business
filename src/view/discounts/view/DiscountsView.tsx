import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function DiscountsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.discounts.fields.codeName')}
        value={record.codeName}
      />

      <TextViewItem
        label={i18n('entities.discounts.fields.discountPercentage')}
        value={record.discountPercentage}
      />

      <TextViewItem
        label={i18n('entities.discounts.fields.expirationDate')}
        value={record.expirationDate}
      />
    </div>
  );
}

export default DiscountsView;
