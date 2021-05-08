import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import BusinessCategoryViewItem from 'src/view/businessCategory/view/BusinessCategoryViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';

function BusinessServicesTypesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.businessServicesTypes.fields.name')}
        value={record.name}
      />

      <BusinessCategoryViewItem
        label={i18n('entities.businessServicesTypes.fields.category')}
        value={record.category}
      />

      <LanguagesViewItem
        label={i18n('entities.businessServicesTypes.fields.language')}
        value={record.language}
      />
    </div>
  );
}

export default BusinessServicesTypesView;
