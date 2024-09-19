import React from "react";
import ButtonDocs from "../components/Button/ButtonDocs";
import DropdownDocs from "../components/Dropdown/DropdownDocs";
import InputDocs from "../components/Input/InputDocs";
import RadioGroupDocs from "../components/RadioGroup/RadioGroupDocs";
import SelectDocs from "../components/Select/SelectDocs";
import SwitchDocs from "../components/Switch/SwitchDocs";
import ImageTextDocs from "../components/Text/ImageTextDocs";
import NeonTextDocs from "../components/Text/NeonTextDocs";
import ThreeDTextDocs from "../components/Text/ThreeDTextDocs";
import ThemeProviderDocs from "../components/Theme/ThemeProviderDocs";

export const providers = [
    {
        label:"ThemeProvider",
        link: "/docs/theme-provider",
        path: "theme-provider",
        element: <ThemeProviderDocs/>
    }
]

export const components = [
    {
        label:"Button",
        link: "/docs/button",
        path: "button",
        element: <ButtonDocs/>
    },
    {
        label:"Dropdown",
        link: "/docs/dropdown",
        path: "dropdown",
        element: <DropdownDocs/>
    },
    {
        label:"Input",
        link: "/docs/input",
        path: "input",
        element: <InputDocs/>
    },
    {
        label:"RadioGroup",
        link: "/docs/radio-group",
        path: "radio-group",
        element: <RadioGroupDocs/>
    },
    {
        label:"Select",
        link: "/docs/select",
        path: "select",
        element: <SelectDocs/>
    },
    {
        label:"Switch",
        link: "/docs/switch",
        path: "switch",
        element: <SwitchDocs/>
    },
];

export const effects = [
    {
        label:"Image Text",
        link: "/docs/image-text",
        path:"image-text",
        element: <ImageTextDocs />
      },
      {
        label:"Neon Text",
        link: "/docs/neon-text",
        path:"neon-text",
        element: <NeonTextDocs />
      },
      {
        label:"3D Text",
        link: "/docs/3d-text",
        path:"3d-text",
        element: <ThreeDTextDocs />
      },
]

export const docs = [...providers, ...components, ...effects];