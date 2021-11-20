import {
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import providersSelectors from 'src/modules/providers/providersSelectors';
import destroyActions from 'src/modules/providers/destroy/providersDestroyActions';
import destroySelectors from 'src/modules/providers/destroy/providersDestroySelectors';
import actions from 'src/modules/providers/list/providersListActions';
import selectors from 'src/modules/providers/list/providersListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import Pagination from 'src/view/shared/table/Pagination';
import BusinessListItem from 'src/view/business/list/BusinessListItem';
import BusinessCategoryListItem from 'src/view/businessCategory/list/BusinessCategoryListItem';
import BusinessServicesTypesListItem from 'src/view/businessServicesTypes/list/BusinessServicesTypesListItem';
import CityListItem from 'src/view/city/list/CityListItem';
import StateListItem from 'src/view/state/list/StateListItem';
import CountryListItem from 'src/view/country/list/CountryListItem';

function ProvidersListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    providersSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    providersSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <>
      <div className="table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border">
        <table className="border-collapse min-w-full leading-normal">
          <thead>
            <tr>
              <TableColumnHeader>
                {hasRows && (
                  <input
                    type="checkbox"
                    className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    checked={Boolean(isAllSelected)}
                    onChange={doToggleAllSelected}
                  />
                )}
              </TableColumnHeader>
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'name'}
                  label={i18n(
                    'entities.providers.fields.name',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.providers.fields.businessID',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'providerID'}
                  label={i18n(
                    'entities.providers.fields.providerID',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.providers.fields.category',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.providers.fields.serviceTypes',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'contactName'}
                  label={i18n(
                    'entities.providers.fields.contactName',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'contactPhone'}
                  label={i18n(
                    'entities.providers.fields.contactPhone',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'contactWhatsApp'}
                  label={i18n(
                    'entities.providers.fields.contactWhatsApp',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'addressStreet'}
                  label={i18n(
                    'entities.providers.fields.addressStreet',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'addressStreetNumber'}
                  label={i18n(
                    'entities.providers.fields.addressStreetNumber',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'addressPostCode'}
                  label={i18n(
                    'entities.providers.fields.addressPostCode',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.providers.fields.city',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.providers.fields.state',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.providers.fields.country',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'isAvailable'}
                  label={i18n(
                    'entities.providers.fields.isAvailable',
                  )}
                />
              <TableColumnHeader />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="flex justify-center p-5">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <th
                    className="w-12 border-b border-gray-200 dark:border-gray-800"
                    scope="row"
                  >
                    <input
                      type="checkbox"
                      className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      checked={selectedKeys.includes(
                        row.id,
                      )}
                      onChange={() =>
                        doToggleOneSelected(row.id)
                      }
                    />
                  </th>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">{row.name}</td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <BusinessListItem value={row.businessID} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">{row.providerID}</td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <BusinessCategoryListItem value={row.category} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <BusinessServicesTypesListItem value={row.serviceTypes} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">{row.contactName}</td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">{row.contactPhone}</td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">{row.contactWhatsApp}</td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">{row.addressStreet}</td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">{row.addressStreetNumber}</td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">{row.addressPostCode}</td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <CityListItem value={row.city} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <StateListItem value={row.state} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <CountryListItem value={row.country} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.isAvailable
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td
                    className="w-56 whitespace-nowrap border-b px-5 py-5 border-gray-200 dark:border-gray-800"
                    align="right"
                  >
                    <Link
                      className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                      to={`/providers/${row.id}`}
                      title={i18n('common.view')}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                        to={`/providers/${row.id}/edit`}
                        title={i18n('common.edit')}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    )}
                    {hasPermissionToDestroy && (
                      <button
                        className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                        type="button"
                        onClick={() =>
                          doOpenDestroyConfirmModal(row.id)
                        }
                        title={i18n('common.destroy')}
                      >
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                        />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default ProvidersListTable;
