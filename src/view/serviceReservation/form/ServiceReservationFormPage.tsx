import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/serviceReservation/form/serviceReservationFormActions';
import selectors from 'src/modules/serviceReservation/form/serviceReservationFormSelectors';
import { getHistory } from 'src/modules/store';
import ServiceReservationForm from 'src/view/serviceReservation/form/ServiceReservationForm';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';

function ServiceReservationFormPage(props) {
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
    ? i18n('entities.serviceReservation.edit.title')
    : i18n('entities.serviceReservation.new.title');

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
          [i18n('entities.serviceReservation.menu'), '/service-reservation'],
          [title],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
          <div className="h-full w-full flex justify-center">

            {initLoading && <Spinner />}

            {dispatched && !initLoading && (
              <ServiceReservationForm
                saveLoading={saveLoading}
                initLoading={initLoading}
                record={record}
                isEditing={isEditing}
                onSubmit={doSubmit}
                onCancel={() => getHistory().push('/service-reservation')}
              />
            )}
          </div>
      </div>
    </>
  );
}

export default ServiceReservationFormPage;
