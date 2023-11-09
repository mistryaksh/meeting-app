import React, { FC } from "react";
import { Platform, TextInput, TextInputProps } from "react-native";
import { Colors, DeviceColor } from "../../../utils";

export interface TextFieldProps {}

export const TextField: FC<TextFieldProps & TextInputProps> = ({ ...rest }) => {
     const { primary, textColor, gray } = Colors;
     const color = DeviceColor();
     return (
          <TextInput
               placeholderTextColor={gray[500]}
               style={{
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: primary[500],
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    width: "100%",
                    color: color === "dark" ? textColor.baseWhite : textColor.baseBlack,
                    fontSize: 16,
               }}
               cursorColor="gray"
               {...rest}
          />
     );
};
