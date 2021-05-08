import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CurrencyView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.currency.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.currency.fields.symbol')}
        value={record.symbol}
      />

      <TextViewItem
        label={i18n('entities.currency.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default CurrencyView;
