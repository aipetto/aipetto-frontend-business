import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.postComments.fields.id'),
  },
  {
    name: 'comment',
    label: i18n('entities.postComments.fields.comment'),
  },
  {
    name: 'postId',
    label: i18n('entities.postComments.fields.postId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.postComments.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.postComments.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
