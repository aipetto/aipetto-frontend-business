import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.vaccineTypes.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.vaccineTypes.fields.name'),
  },
  {
    name: 'country',
    label: i18n('entities.vaccineTypes.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'language',
    label: i18n('entities.vaccineTypes.fields.language'),
  },
  {
    name: 'frequencyShotDosis',
    label: i18n('entities.vaccineTypes.fields.frequencyShotDosis'),
  },
  {
    name: 'petSpecificType',
    label: i18n('entities.vaccineTypes.fields.petSpecificType'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'vaccineCustomUniqueID',
    label: i18n('entities.vaccineTypes.fields.vaccineCustomUniqueID'),
  },
  {
    name: 'isMandatory',
    label: i18n('entities.vaccineTypes.fields.isMandatory'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'specificBreeds',
    label: i18n('entities.vaccineTypes.fields.specificBreeds'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'vaccinePetTargetAgeInMonths',
    label: i18n('entities.vaccineTypes.fields.vaccinePetTargetAgeInMonths'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.vaccineTypes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.vaccineTypes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
