import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/petVaccines/form/petVaccinesFormActions';
import selectors from 'src/modules/petVaccines/form/petVaccinesFormSelectors';
import { getHistory } from 'src/modules/store';
import PetVaccinesForm from 'src/view/petVaccines/form/PetVaccinesForm';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';

function PetVaccinesFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.petVaccines.edit.title')
    : i18n('entities.petVaccines.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.petVaccines.menu'), '/pet-vaccines'],
          [title],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
          <div className="h-full w-full flex justify-center">

                {initLoading && <Spinner />}

                {dispatched && !initLoading && (
                  <PetVaccinesForm
                    saveLoading={saveLoading}
                    initLoading={initLoading}
                    record={record}
                    isEditing={isEditing}
                    onSubmit={doSubmit}
                    onCancel={() => getHistory().push('/pet-vaccines')}
                  />
                )}
          </div>
      </div>
    </>
  );
}

export default PetVaccinesFormPage;
