import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'comment',
    label: i18n('entities.postComments.fields.comment'),
    schema: schemas.string(
      i18n('entities.postComments.fields.comment'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'postId',
    label: i18n('entities.postComments.fields.postId'),
    schema: schemas.relationToOne(
      i18n('entities.postComments.fields.postId'),
      {},
    ),
  },
];