import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';

function PlaceTypeView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.placeType.fields.name')}
        value={record.name}
      />

      <LanguagesViewItem
        label={i18n('entities.placeType.fields.language')}
        value={record.language}
      />

      <ImagesViewItem
        label={i18n('entities.placeType.fields.placeTypeImage')}
        value={record.placeTypeImage}
      />

      <TextViewItem
        label={i18n('entities.placeType.fields.isPublicPlace')}
        value={
          record.isPublicPlace
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default PlaceTypeView;
