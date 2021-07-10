import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.petDiseases.fields.id'),
  },
  {
    name: 'diseaseCommonName',
    label: i18n('entities.petDiseases.fields.diseaseCommonName'),
  },
  {
    name: 'diseaseScientificNames',
    label: i18n('entities.petDiseases.fields.diseaseScientificNames'),
  },
  {
    name: 'isHumanContagious',
    label: i18n('entities.petDiseases.fields.isHumanContagious'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'isPetContagious',
    label: i18n('entities.petDiseases.fields.isPetContagious'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'language',
    label: i18n('entities.petDiseases.fields.language'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.petDiseases.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.petDiseases.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
