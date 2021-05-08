import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'name',
    label: i18n('entities.petVaccines.fields.name'),
    schema: schemas.relationToOne(
      i18n('entities.petVaccines.fields.name'),
      {},
    ),
  },
  {
    name: 'uniqueVetVaccineCode',
    label: i18n('entities.petVaccines.fields.uniqueVetVaccineCode'),
    schema: schemas.string(
      i18n('entities.petVaccines.fields.uniqueVetVaccineCode'),
      {},
    ),
  },
  {
    name: 'datetimeTaken',
    label: i18n('entities.petVaccines.fields.datetimeTaken'),
    schema: schemas.datetime(
      i18n('entities.petVaccines.fields.datetimeTaken'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'veterinarianID',
    label: i18n('entities.petVaccines.fields.veterinarianID'),
    schema: schemas.relationToOne(
      i18n('entities.petVaccines.fields.veterinarianID'),
      {},
    ),
  },
  {
    name: 'placeTaken',
    label: i18n('entities.petVaccines.fields.placeTaken'),
    schema: schemas.relationToOne(
      i18n('entities.petVaccines.fields.placeTaken'),
      {},
    ),
  },
  {
    name: 'businessID',
    label: i18n('entities.petVaccines.fields.businessID'),
    schema: schemas.relationToOne(
      i18n('entities.petVaccines.fields.businessID'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.petVaccines.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.petVaccines.fields.country'),
      {},
    ),
  },
];