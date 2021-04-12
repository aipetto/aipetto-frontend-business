import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.breed.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.breed.fields.name'),
  },
  {
    name: 'type',
    label: i18n('entities.breed.fields.type'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'size',
    label: i18n('entities.breed.fields.size'),
  },
  {
    name: 'exercise',
    label: i18n('entities.breed.fields.exercise'),
  },
  {
    name: 'sizeOfHome',
    label: i18n('entities.breed.fields.sizeOfHome'),
  },
  {
    name: 'grooming',
    label: i18n('entities.breed.fields.grooming'),
  },
  {
    name: 'coatLength',
    label: i18n('entities.breed.fields.coatLength'),
  },
  {
    name: 'sheds',
    label: i18n('entities.breed.fields.sheds'),
  },
  {
    name: 'lifespan',
    label: i18n('entities.breed.fields.lifespan'),
  },
  {
    name: 'vulnerableNativeBreed',
    label: i18n('entities.breed.fields.vulnerableNativeBreed'),
  },
  {
    name: 'townOrCountry',
    label: i18n('entities.breed.fields.townOrCountry'),
  },
  {
    name: 'sizeOfGarden',
    label: i18n('entities.breed.fields.sizeOfGarden'),
  },
  {
    name: 'image',
    label: i18n('entities.breed.fields.image'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.breed.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.breed.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
