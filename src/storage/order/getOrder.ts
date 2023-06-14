import { ORDER_ENTITY } from "../config";

export function getStorageOrder() {
  const storedData = localStorage.getItem(ORDER_ENTITY);

  if (storedData) {
    return JSON.parse(storedData);
  }

  return null;
}
