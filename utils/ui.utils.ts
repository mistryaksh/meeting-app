import { Appearance } from "react-native";

export const DeviceColor = () => {
     return Appearance.getColorScheme();
};

export const Colors = {
     gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
     },
     primary: {
          50: "#eff6ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#3b82f6",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
     },
     successColor: {
          50: "#EDFCF2",
          100: "#D3F8DF",
          200: "#AAF0C4",
          300: "#73E2A3",
          400: "#3CCB7F",
          500: "#16B364",
          600: "#099250",
          700: "#087443",
          800: "#095C37",
          900: "#084C2E",
     },
     infoColor: {
          50: "#EFF8FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84CAFF",
          400: "#53B1FD",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          800: "#1849A9",
          900: "#194185",
     },
     warningColor: {
          50: "#FEF6EE",
          100: "#FDEAD7",
          200: "#F9DBAF",
          300: "#F7B27A",
          400: "#F38744",
          500: "#EF6820",
          600: "#E04F16",
          700: "#B93815",
          800: "#932F19",
          900: "#772917",
     },
     dangerColor: {
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
     },
     bgColor: {
          50: "#FCFCFD",
          100: "#F2F4F7",
          200: "#E4E7EC",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#344054",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
     },
     textColor: {
          baseBlack: "#000",
          baseWhite: "#fff",
     },
};

export const Custom = {
     borderRadius: 8,
};