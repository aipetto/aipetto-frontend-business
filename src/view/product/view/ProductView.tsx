import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import CurrencyViewItem from 'src/view/currency/view/CurrencyViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

function ProductView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.product.fields.sku')}
        value={record.sku}
      />

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

      <TextViewItem
        label={i18n('entities.product.fields.acceptPointsToShop')}
        value={
          record.acceptPointsToShop
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.product.fields.pointsPrice')}
        value={record.pointsPrice}
      />

      <CurrencyViewItem
        label={i18n('entities.product.fields.currency')}
        value={record.currency}
      />

      <LanguagesViewItem
        label={i18n('entities.product.fields.language')}
        value={record.language}
      />

      <CountryViewItem
        label={i18n('entities.product.fields.country')}
        value={record.country}
      />

      <TextViewItem
        label={i18n('entities.product.fields.barcode')}
        value={record.barcode}
      />

      <TextViewItem
        label={i18n('entities.product.fields.productNCM')}
        value={record.productNCM}
      />

      <TextViewItem
        label={i18n('entities.product.fields.inStock')}
        value={record.inStock}
      />
    </div>
  );
}

export default ProductView;
