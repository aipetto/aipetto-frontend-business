import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function StateView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.state.fields.name')}
        value={record.name}
      />

      <CountryViewItem
        label={i18n('entities.state.fields.country')}
        value={record.country}
      />

      <TextViewItem
        label={i18n('entities.state.fields.initials')}
        value={record.initials}
      />
    </div>
  );
}

export default StateView;
