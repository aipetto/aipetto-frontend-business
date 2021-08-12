import authAxios from 'src/modules/shared/axios/authAxios';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import LanguagesService from "../languages/languagesService";
import {getLanguageCode} from "../../i18n";

export default class PlaceTypeService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/place-type/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(
      `/tenant/${tenantId}/place-type`,
      {
        params,
      },
    );

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/place-type`,
      body,
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/place-type/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {

    const response = await authAxios.get(
      `/place-type/${id}`,
    );

    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(
      `/place-type`,
      {
        params,
      },
    );

    return response.data;
  }

  static async listAutocomplete(query, limit) {

    const languageService = await LanguagesService.listAutocomplete({}, {});
    const language = languageService.filter(langCode => langCode.label == getLanguageCode());

    query = {
      language: language[0].id
    };

    const params = {
      query,
      limit,
    };

    const response = await authAxios.get(
      `/place-type/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }
}
