import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';

function ProductView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.product.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.product.fields.description')}
        value={record.description}
      />

      {record.unitPrice != null && <TextViewItem
        label={i18n('entities.product.fields.unitPrice')}
        value={Number(record.unitPrice).toFixed(2)}
      />}

      <ImagesViewItem
        label={i18n('entities.product.fields.photos')}
        value={record.photos}
      />

      <BusinessViewItem
        label={i18n('entities.product.fields.businessId')}
        value={record.businessId}
      />
    </div>
  );
}

export default ProductView;
