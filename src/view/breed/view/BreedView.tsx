import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';
import PetTypesViewItem from 'src/view/petTypes/view/PetTypesViewItem';

function BreedView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.breed.fields.name')}
        value={record.name}
      />

      <LanguagesViewItem
        label={i18n('entities.breed.fields.language')}
        value={record.language}
      />

      <PetTypesViewItem
        label={i18n('entities.breed.fields.type')}
        value={record.type}
      />

      <TextViewItem
        label={i18n('entities.breed.fields.size')}
        value={
          record.size &&
          i18n(
            `entities.breed.enumerators.size.${record.size}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.exercise')}
        value={
          record.exercise &&
          i18n(
            `entities.breed.enumerators.exercise.${record.exercise}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.sizeOfHome')}
        value={
          record.sizeOfHome &&
          i18n(
            `entities.breed.enumerators.sizeOfHome.${record.sizeOfHome}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.grooming')}
        value={
          record.grooming &&
          i18n(
            `entities.breed.enumerators.grooming.${record.grooming}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.coatLength')}
        value={
          record.coatLength &&
          i18n(
            `entities.breed.enumerators.coatLength.${record.coatLength}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.sheds')}
        value={
          record.sheds &&
          i18n(
            `entities.breed.enumerators.sheds.${record.sheds}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.lifespan')}
        value={
          record.lifespan &&
          i18n(
            `entities.breed.enumerators.lifespan.${record.lifespan}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.vulnerableNativeBreed')}
        value={
          record.vulnerableNativeBreed &&
          i18n(
            `entities.breed.enumerators.vulnerableNativeBreed.${record.vulnerableNativeBreed}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.townOrCountry')}
        value={
          record.townOrCountry &&
          i18n(
            `entities.breed.enumerators.townOrCountry.${record.townOrCountry}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.breed.fields.sizeOfGarden')}
        value={
          record.sizeOfGarden &&
          i18n(
            `entities.breed.enumerators.sizeOfGarden.${record.sizeOfGarden}`,
          )
        }
      />

      <ImagesViewItem
        label={i18n('entities.breed.fields.image')}
        value={record.image}
      />
    </div>
  );
}

export default BreedView;
