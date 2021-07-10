import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.posts.fields.title'),
    schema: schemas.string(
      i18n('entities.posts.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.posts.fields.description'),
    schema: schemas.string(
      i18n('entities.posts.fields.description'),
      {},
    ),
  },
  {
    name: 'postHeaderImage',
    label: i18n('entities.posts.fields.postHeaderImage'),
    schema: schemas.images(
      i18n('entities.posts.fields.postHeaderImage'),
      {},
    ),
  },
  {
    name: 'postDocRelated',
    label: i18n('entities.posts.fields.postDocRelated'),
    schema: schemas.files(
      i18n('entities.posts.fields.postDocRelated'),
      {},
    ),
  },
  {
    name: 'postUrl',
    label: i18n('entities.posts.fields.postUrl'),
    schema: schemas.string(
      i18n('entities.posts.fields.postUrl'),
      {},
    ),
  },
  {
    name: 'authors',
    label: i18n('entities.posts.fields.authors'),
    schema: schemas.relationToMany(
      i18n('entities.posts.fields.authors'),
      {},
    ),
  },
  {
    name: 'postCategory',
    label: i18n('entities.posts.fields.postCategory'),
    schema: schemas.relationToMany(
      i18n('entities.posts.fields.postCategory'),
      {},
    ),
  },
  {
    name: 'comments',
    label: i18n('entities.posts.fields.comments'),
    schema: schemas.relationToMany(
      i18n('entities.posts.fields.comments'),
      {},
    ),
  },
];