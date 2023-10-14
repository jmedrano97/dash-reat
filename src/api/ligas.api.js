import axios from "axios";

export const createLigaRequest = async (data) =>
  await axios.post("http://localhost:4000/ligas", data);

export const getLigasRequest = async () =>
  await axios.get("http://localhost:4000/ligas");

export const getLigaRequest = async (id) =>
  await axios.get(`http://localhost:4000/ligas/${id}`);

export const updateLigaRequest = async (id, data) =>
  await axios.put(`http://localhost:4000/ligas/${id}`, data);

export const deleteLigaRequest = async (id) =>
  await axios.delete(`http://localhost:4000/ligas/${id}`);