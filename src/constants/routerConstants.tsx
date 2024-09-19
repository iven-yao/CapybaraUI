import React from "react";
import ThreeDTextDocs from "../docs/ThreeDTextDocs";
import ThemeProviderDocs from "../docs/ThemeProviderDocs";
import ButtonDocs from "../docs/ButtonDocs";
import DropdownDocs from "../docs/DropdownDocs";
import ImageTextDocs from "../docs/ImageTextDocs";
import InputDocs from "../docs/InputDocs";
import NeonTextDocs from "../docs/NeonTextDocs";
import RadioGroupDocs from "../docs/RadioGroupDocs";
import SelectDocs from "../docs/SelectDocs";
import SwitchDocs from "../docs/SwitchDocs";

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