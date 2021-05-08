import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';

function PetTypesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.petTypes.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.petTypes.fields.image')}
        value={record.image}
      />

      <LanguagesViewItem
        label={i18n('entities.petTypes.fields.language')}
        value={record.language}
      />
    </div>
  );
}

export default PetTypesView;
