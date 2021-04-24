import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function CityView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <CountryViewItem
        label={i18n('entities.city.fields.country')}
        value={record.country}
      />

      <TextViewItem
        label={i18n('entities.city.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.city.fields.latitude')}
        value={record.latitude}
      />

      <TextViewItem
        label={i18n('entities.city.fields.longitude')}
        value={record.longitude}
      />
    </div>
  );
}

export default CityView;
