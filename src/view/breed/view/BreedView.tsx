import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PetTypesViewItem from 'src/view/petTypes/view/PetTypesViewItem';

function BreedView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.breed.fields.name')}
        value={record.name}
      />

      <PetTypesViewItem
        label={i18n('entities.breed.fields.type')}
        value={record.type}
      />
    </div>
  );
}

export default BreedView;
