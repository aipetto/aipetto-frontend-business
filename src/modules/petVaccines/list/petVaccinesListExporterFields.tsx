import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.petVaccines.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.petVaccines.fields.name'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'uniqueVetVaccineCode',
    label: i18n('entities.petVaccines.fields.uniqueVetVaccineCode'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'datetimeTaken',
    label: i18n('entities.petVaccines.fields.datetimeTaken'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'veterinarianID',
    label: i18n('entities.petVaccines.fields.veterinarianID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'placeTaken',
    label: i18n('entities.petVaccines.fields.placeTaken'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'businessID',
    label: i18n('entities.petVaccines.fields.businessID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'country',
    label: i18n('entities.petVaccines.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'vaccinationNotes',
    label: i18n('entities.petVaccines.fields.vaccinationNotes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.petVaccines.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.petVaccines.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
