import React, { FC, ReactNode } from "react";
import { Platform, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Colors } from "../../../utils";
import { AppText } from "../text";
import { router } from "expo-router";

export interface AppButtonProps {
     children: ReactNode;
     colored?: boolean;
     colorLess?: boolean;
}

export type Props = TouchableOpacityProps & AppButtonProps;

export const AppButton: FC<Props> = ({ children, colored, colorLess, ...rest }) => {
     const { primary, gray } = Colors;
     return (
          <TouchableOpacity
               style={[
                    {
                         paddingVertical: Platform.OS === "web" ? 10 : 15,
                         paddingHorizontal: 20,
                         borderRadius: 8,
                         gap: 10,
                    },
                    colored && {
                         backgroundColor: primary[500],
                    },
                    colorLess && {
                         backgroundColor: gray[900],
                    },
               ]}
               onPress={() => router.replace("/(account)/login")}
               {...rest}
          >
               <AppText h5 uppercase centered>
                    {children}
               </AppText>
          </TouchableOpacity>
     );
};
