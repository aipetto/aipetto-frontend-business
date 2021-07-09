import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import petDiseasesEnumerators from 'src/modules/petDiseases/petDiseasesEnumerators';

export default [
  {
    name: 'diseaseCommonName',
    label: i18n('entities.petDiseases.fields.diseaseCommonName'),
    schema: schemas.string(
      i18n('entities.petDiseases.fields.diseaseCommonName'),
      {},
    ),
  },
  {
    name: 'diseaseScientificNames',
    label: i18n('entities.petDiseases.fields.diseaseScientificNames'),
    schema: schemas.string(
      i18n('entities.petDiseases.fields.diseaseScientificNames'),
      {},
    ),
  },
  {
    name: 'isHumanContagious',
    label: i18n('entities.petDiseases.fields.isHumanContagious'),
    schema: schemas.boolean(
      i18n('entities.petDiseases.fields.isHumanContagious'),
      {},
    ),
  },
  {
    name: 'isPetContagious',
    label: i18n('entities.petDiseases.fields.isPetContagious'),
    schema: schemas.boolean(
      i18n('entities.petDiseases.fields.isPetContagious'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.petDiseases.fields.language'),
    schema: schemas.enumerator(
      i18n('entities.petDiseases.fields.language'),
      {
        "options": petDiseasesEnumerators.language
      },
    ),
  },
];