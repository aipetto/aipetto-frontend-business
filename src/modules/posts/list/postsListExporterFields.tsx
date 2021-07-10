import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.posts.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.posts.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.posts.fields.description'),
  },
  {
    name: 'postHeaderImage',
    label: i18n('entities.posts.fields.postHeaderImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'postDocRelated',
    label: i18n('entities.posts.fields.postDocRelated'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'postUrl',
    label: i18n('entities.posts.fields.postUrl'),
  },
  {
    name: 'authors',
    label: i18n('entities.posts.fields.authors'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'postCategory',
    label: i18n('entities.posts.fields.postCategory'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'comments',
    label: i18n('entities.posts.fields.comments'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.posts.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.posts.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
