import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import PetViewItem from 'src/view/pet/view/PetViewItem';

function PetPhotosView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.petPhotos.fields.description')}
        value={record.description}
      />

      <PetViewItem
        label={i18n('entities.petPhotos.fields.petId')}
        value={record.petId}
      />

      <ImagesViewItem
        label={i18n('entities.petPhotos.fields.photo')}
        value={record.photo}
      />

      <TextViewItem
        label={i18n('entities.petPhotos.fields.latitude')}
        value={record.latitude}
      />

      <TextViewItem
        label={i18n('entities.petPhotos.fields.longitude')}
        value={record.longitude}
      />
    </div>
  );
}

export default PetPhotosView;
