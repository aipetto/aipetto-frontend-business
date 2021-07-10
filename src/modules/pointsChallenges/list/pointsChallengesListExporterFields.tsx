import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.pointsChallenges.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.pointsChallenges.fields.name'),
  },
  {
    name: 'points',
    label: i18n('entities.pointsChallenges.fields.points'),
  },
  {
    name: 'country',
    label: i18n('entities.pointsChallenges.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.pointsChallenges.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.pointsChallenges.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
