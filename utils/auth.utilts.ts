import * as SecureStore from "expo-secure-store";

export const GetToken = async () => {
     return await SecureStore.getItemAsync("auth_token", {
          requireAuthentication: false,
          authenticationPrompt: "Authenticate to Verify Your Identity",
          keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY,
     })
          .then((res) => {
               return res;
          })
          .catch((err) => {
               return err;
          });
};
