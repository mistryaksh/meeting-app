import React, { useEffect } from "react";

import { AppLayout } from "../../../layout";
import { AppButton, AppText, TextField } from "../../../component";
import { Platform, TextInput, View } from "react-native";
import { Colors, DeviceColor } from "../../../utils";
import { Link, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import {
     handleEmail,
     handleLayoutError,
     handleLayoutLoading,
     handleLayoutSuccess,
     handlePassword,
     handleSignInLayoutView,
     handleToken,
     handleUserName,
     useAccountSlice,
     useLayoutSlice,
} from "../../../redux/features";
import { useAppDispatch } from "../../../redux";
import { useSignInMutation } from "../../../redux/api";

export default function LoginPage() {
     const color = DeviceColor();
     const { gray } = Colors;
     const { input } = useAccountSlice();
     const { signInPage, error, success } = useLayoutSlice();
     const [
          SignIn,
          {
               data: signInData,
               isError: isSignInError,
               isLoading: isSignInLoading,
               isSuccess: isSignInSuccess,
               error: signInError,
          },
     ] = useSignInMutation();
     const dispatch = useAppDispatch();

     useEffect(() => {
          if (isSignInError) {
               console.log(signInError);
               if ((signInError as any).data) {
                    console.log((signInError as any).data.message);
                    dispatch(handleLayoutError((signInError as any).data.message));
               } else {
                    console.log((signInError as any).message);
                    dispatch(handleLayoutError((signInError as any).message));
               }
          }
          if (isSignInSuccess) {
               dispatch(handleLayoutSuccess(signInData?.data.message));

               SecureStore.setItemAsync("auth_token", signInData?.data.token, {
                    requireAuthentication: false,
                    authenticationPrompt: "Authenticate to Verify Your Identity",
                    keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY,
               });
               dispatch(handleToken(signInData?.data.token));
               router.replace("/home/");
          }
          if (isSignInLoading) {
               dispatch(handleLayoutLoading());
          }
     }, [isSignInError, signInError, isSignInSuccess, signInData]);

     const handleSubmit = async () => {
          if (!input.username) {
               dispatch(handleLayoutError("please enter username"));
          } else if (input.username.length) {
               if (!input.password) {
                    dispatch(handleSignInLayoutView());
               } else if (input.username && input.password) {
                    dispatch(handleLayoutError(null));
                    await SignIn({ password: input.password, username: input.username });
               }
          }
     };
     return (
          <AppLayout loading={isSignInLoading} paddingEnable>
               <View
                    style={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         height: "100%",
                    }}
               >
                    <View
                         style={{
                              width: Platform.OS === "web" ? "40%" : "100%",
                              height: Platform.OS === "web" ? "40%" : "100%",
                              justifyContent: "space-between",
                              display: "flex",
                              flexDirection: "column",
                              gap: 20,
                         }}
                    >
                         <View
                              style={{
                                   gap: 20,
                                   height: "100%",
                                   justifyContent: "space-between",
                              }}
                         >
                              <View
                                   style={{
                                        gap: 20,
                                        marginTop: Platform.OS === "web" ? 0 : 10,
                                   }}
                              >
                                   <AppText h1>Login to your account</AppText>
                                   <View style={{ gap: 10 }}>
                                        {signInPage.view === "phone" && (
                                             <TextField
                                                  placeholder="username"
                                                  keyboardType="default"
                                                  value={input.username}
                                                  onChangeText={(e) => dispatch(handleUserName(e))}
                                             />
                                        )}
                                        {signInPage.view === "password" && (
                                             <TextField
                                                  placeholder="Enter password"
                                                  value={input.password}
                                                  onChangeText={(e) => dispatch(handlePassword(e))}
                                                  secureTextEntry
                                             />
                                        )}
                                        <AppText danger label uppercase>
                                             {error}
                                        </AppText>
                                        <AppText success label uppercase>
                                             {success}
                                        </AppText>
                                   </View>
                              </View>
                              <View style={{ gap: 20 }}>
                                   <AppButton onPress={handleSubmit} colored>
                                        Continue
                                   </AppButton>
                                   <AppButton onPress={() => router.replace("/")} colorLess>
                                        Go Back
                                   </AppButton>
                              </View>
                              {Platform.OS === "web" && (
                                   <View>
                                        <AppText>
                                             <Link href="/(account)/forgot-password">Reset Password?</Link>
                                        </AppText>
                                   </View>
                              )}
                         </View>
                    </View>
               </View>
          </AppLayout>
     );
}
