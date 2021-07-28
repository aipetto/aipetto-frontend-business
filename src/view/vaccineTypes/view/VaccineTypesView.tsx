import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';
import PetTypesViewItem from 'src/view/petTypes/view/PetTypesViewItem';
import BreedViewItem from 'src/view/breed/view/BreedViewItem';

function VaccineTypesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.vaccineTypes.fields.name')}
        value={record.name}
      />

      <CountryViewItem
        label={i18n('entities.vaccineTypes.fields.country')}
        value={record.country}
      />

      <TextViewItem
        label={i18n('entities.vaccineTypes.fields.language')}
        value={
          record.language &&
          i18n(
            `entities.vaccineTypes.enumerators.language.${record.language}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.vaccineTypes.fields.frequencyShotDosis')}
        value={
          record.frequencyShotDosis &&
          i18n(
            `entities.vaccineTypes.enumerators.frequencyShotDosis.${record.frequencyShotDosis}`,
          )
        }
      />

      <PetTypesViewItem
        label={i18n('entities.vaccineTypes.fields.petSpecificType')}
        value={record.petSpecificType}
      />

      <TextViewItem
        label={i18n('entities.vaccineTypes.fields.vaccineCustomUniqueID')}
        value={record.vaccineCustomUniqueID}
      />

      <TextViewItem
        label={i18n('entities.vaccineTypes.fields.isMandatory')}
        value={
          record.isMandatory
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <BreedViewItem
        label={i18n('entities.vaccineTypes.fields.specificBreeds')}
        value={record.specificBreeds}
      />

      <TextViewItem
        label={i18n('entities.vaccineTypes.fields.vaccinePetTargetAgeInMonths')}
        value={record.vaccinePetTargetAgeInMonths}
      />
    </div>
  );
}

export default VaccineTypesView;
