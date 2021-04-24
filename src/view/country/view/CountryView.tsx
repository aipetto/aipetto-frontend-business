import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CountryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.country.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.country.fields.initials')}
        value={record.initials}
      />
    </div>
  );
}

export default CountryView;
