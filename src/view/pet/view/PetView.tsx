import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import BreedViewItem from 'src/view/breed/view/BreedViewItem';
import PetTypesViewItem from 'src/view/petTypes/view/PetTypesViewItem';

function PetView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.pet.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.nickname')}
        value={record.nickname}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.birthdate')}
        value={record.birthdate}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.age')}
        value={record.age}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.color')}
        value={
          record.color &&
          i18n(
            `entities.pet.enumerators.color.${record.color}`,
          )
        }
      />

      <ImagesViewItem
        label={i18n('entities.pet.fields.profileImage')}
        value={record.profileImage}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.sex')}
        value={
          record.sex &&
          i18n(
            `entities.pet.enumerators.sex.${record.sex}`,
          )
        }
      />

      <BreedViewItem
        label={i18n('entities.pet.fields.breed')}
        value={record.breed}
      />

      <PetTypesViewItem
        label={i18n('entities.pet.fields.type')}
        value={record.type}
      />
    </div>
  );
}

export default PetView;
