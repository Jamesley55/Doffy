import * as SecureStore from "expo-secure-store";

export const saveSessionID = async (sid: string) => {
  await SecureStore.setItemAsync("sid", sid);
};
export const getSessionID = async (sid: string) => {
  const storage = await SecureStore.getItemAsync(sid);
  return storage;
};
export const deleteSessionID = async (sid: string) => {
  await SecureStore.deleteItemAsync(sid);
};
