import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import dealsEnumerators from 'src/modules/deals/dealsEnumerators';
import moment from 'moment';

export default [
  {
    name: 'status',
    label: i18n('entities.deals.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.deals.fields.status'),
      {
        "options": dealsEnumerators.status
      },
    ),
  },
  {
    name: 'customer',
    label: i18n('entities.deals.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.deals.fields.customer'),
      {},
    ),
  },
  {
    name: 'digitalContracts',
    label: i18n('entities.deals.fields.digitalContracts'),
    schema: schemas.files(
      i18n('entities.deals.fields.digitalContracts'),
      {},
    ),
  },
  {
    name: 'dateStart',
    label: i18n('entities.deals.fields.dateStart'),
    schema: schemas.date(
      i18n('entities.deals.fields.dateStart'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'dateEnded',
    label: i18n('entities.deals.fields.dateEnded'),
    schema: schemas.date(
      i18n('entities.deals.fields.dateEnded'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'salesManagerResponsible',
    label: i18n('entities.deals.fields.salesManagerResponsible'),
    schema: schemas.relationToOne(
      i18n('entities.deals.fields.salesManagerResponsible'),
      {},
    ),
  },
  {
    name: 'businessID',
    label: i18n('entities.deals.fields.businessID'),
    schema: schemas.relationToOne(
      i18n('entities.deals.fields.businessID'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.deals.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.deals.fields.country'),
      {},
    ),
  },
];