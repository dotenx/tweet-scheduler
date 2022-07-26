import axios from "axios";
import authService from "./auth.service";

const getRecords = async (projectTag, tableName, columns) => {
  try {
    const url = `https://api.dotenx.com/database/query/select/project/${projectTag}/table/${tableName}`;
    const response = await axios.post(url, { columns }, prepareHeaders());
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get records: ${error.message}`);
  }
}

const addRecord = async (projectTag, tableName, record) => {
  try {
    const url = `https://api.dotenx.com/database/query/insert/project/${projectTag}/table/${tableName}`;
    const response = await axios.post(url, record, prepareHeaders());
    return response.data;
  } catch (error) {
    throw new Error(`Failed to add record: ${error.message}`);
  }
}

const updateRecord = async (projectTag, tableName, id, updated) => {
  try {
    const url = `https://api.dotenx.com/database/update/insert/project/${projectTag}/table/${tableName}/row/${id}`;
    const response = await axios.post(url, updated, prepareHeaders());
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update record: ${error.message}`);
  }
}

const deleteRecord = async (projectTag, tableName, id) => {
  try {
    const url = `https://api.dotenx.com/database/query/delete/project/${projectTag}/table/${tableName}/row/${id}`;
    const response = await axios.post(url, {}, prepareHeaders());
    return response.data;
  } catch (error) {
    throw new Error(`Failed to delete record: ${error.message}`);
  }
}

const prepareHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authService().getToken()}`,
    },
  }
}

export {
  getRecords,
  addRecord,
  updateRecord,
  deleteRecord,
}