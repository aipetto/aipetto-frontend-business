import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PetTypesViewItem from 'src/view/petTypes/view/PetTypesViewItem';
import BreedViewItem from 'src/view/breed/view/BreedViewItem';

function PetDiseasesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.petDiseases.fields.diseaseCommonName')}
        value={record.diseaseCommonName}
      />

      <TextViewItem
        label={i18n('entities.petDiseases.fields.diseaseScientificNames')}
        value={record.diseaseScientificNames}
      />

      <TextViewItem
        label={i18n('entities.petDiseases.fields.isHumanContagious')}
        value={
          record.isHumanContagious
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.petDiseases.fields.isPetContagious')}
        value={
          record.isPetContagious
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.petDiseases.fields.language')}
        value={
          record.language &&
          i18n(
            `entities.petDiseases.enumerators.language.${record.language}`,
          )
        }
      />

      <PetTypesViewItem
        label={i18n('entities.petDiseases.fields.specificPetTypes')}
        value={record.specificPetTypes}
      />

      <BreedViewItem
        label={i18n('entities.petDiseases.fields.specificPetBreeds')}
        value={record.specificPetBreeds}
      />
    </div>
  );
}

export default PetDiseasesView;
