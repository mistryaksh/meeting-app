import { FC, ReactNode } from "react";
import { Text } from "react-native";
import { Colors, DeviceColor } from "../../../utils";

export interface AppTextProps {
     children: ReactNode;
     h1?: boolean;
     h2?: boolean;
     h3?: boolean;
     h4?: boolean;
     h5?: boolean;
     h6?: boolean;
     label?: boolean;
     capitalize?: boolean;
     uppercase?: boolean;
     centered?: boolean;
     muted?: boolean;
     danger?: boolean;
     success?: boolean;
     colored?: boolean;
}

export const AppText: FC<AppTextProps> = ({
     children,
     h1,
     h2,
     h3,
     h4,
     h5,
     h6,
     label,
     capitalize,
     uppercase,
     centered,
     muted,
     danger,
     success,
     colored,
}) => {
     const { gray, dangerColor, successColor, primary } = Colors;
     const color = DeviceColor() === "dark";
     return (
          <Text
               style={[
                    {
                         color: color ? "#fff" : "#000",
                    },
                    h1 && {
                         fontSize: 28,
                         lineHeight: 40,
                         letterSpacing: 0.4,
                         fontFamily: "Ubuntu_400Regular",
                    },
                    h2 && {
                         fontSize: 24,
                         lineHeight: 36,
                         letterSpacing: 0.2,
                         fontFamily: "Ubuntu_400Regular",
                    },
                    h3 && {
                         fontSize: 20,
                         lineHeight: 32,
                         letterSpacing: 0.2,
                         fontFamily: "Ubuntu_400Regular",
                    },
                    h4 && {
                         fontSize: 16,
                         lineHeight: 28,
                         letterSpacing: 0.2,
                         fontFamily: "Ubuntu_400Regular",
                    },
                    h5 && {
                         fontSize: 14,
                         lineHeight: 24,
                         letterSpacing: 0.2,
                         fontFamily: "Ubuntu_400Regular",
                    },
                    h6 && {
                         fontSize: 12,
                         lineHeight: 20,
                         letterSpacing: 0.2,
                         fontFamily: "Ubuntu_400Regular",
                    },
                    label && {
                         fontSize: 10,
                         lineHeight: 10,
                         fontFamily: "Ubuntu_400Regular",
                    },
                    capitalize && {
                         textTransform: "capitalize",
                    },
                    uppercase && {
                         textTransform: "uppercase",
                    },
                    centered && {
                         textAlign: "center",
                    },
                    muted && {
                         color: gray[500],
                    },
                    danger && {
                         color: dangerColor[500],
                    },
                    success && {
                         color: successColor[500],
                    },
                    colored && {
                         color: primary[500],
                    },
               ]}
          >
               {children}
          </Text>
     );
};
