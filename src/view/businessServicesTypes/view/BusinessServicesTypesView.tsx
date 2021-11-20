import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
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

      <ImagesViewItem
        label={i18n('entities.businessServicesTypes.fields.serviceImage')}
        value={record.serviceImage}
      />

      <TextViewItem
        label={i18n('entities.businessServicesTypes.fields.isEnabled')}
        value={
          record.isEnabled
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default BusinessServicesTypesView;
