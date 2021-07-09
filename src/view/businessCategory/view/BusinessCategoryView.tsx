import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';

function BusinessCategoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.businessCategory.fields.name')}
        value={record.name}
      />

      <LanguagesViewItem
        label={i18n('entities.businessCategory.fields.language')}
        value={record.language}
      />

      <ImagesViewItem
        label={i18n('entities.businessCategory.fields.categoryImage')}
        value={record.categoryImage}
      />

      <TextViewItem
        label={i18n('entities.businessCategory.fields.pageUrl')}
        value={record.pageUrl}
      />
    </div>
  );
}

export default BusinessCategoryView;
