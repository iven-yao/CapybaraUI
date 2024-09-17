import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import RadioGroup from "./RadioGroup";

const mockData = [
    {
        value: '1',
        label: '1'
    },
    {
        value: '2',
        label: '2'
    },
    {
        value: '3',
        label: '3'
    },
]

describe("RadioGroup/RadioButton Component", () => {
    it("Render RadioGroup with options list correctly", () => {
        render(<RadioGroup name={"test1"} testid="radiotest01" options={mockData}/>);

        expect(screen.getByTestId("radiotest01").children.length).toBe(3);
        
    });

    it("Render RadioGroup with children props correctly", () => {
        render(
        <RadioGroup name={"test1"} testid="radiotest02">
            <RadioGroup.Radio value="1" label="1"/>
            <RadioGroup.Radio value="2" label="2"/>
            <RadioGroup.Radio value="3" label="3"/>
        </RadioGroup>);

        expect(screen.getByTestId("radiotest02").children.length).toBe(3);
    });

    it("Render RadioGroup with mix of options list and children props correctly", () => {
        render(
            <RadioGroup name={"test1"} testid="radiotest03" options={mockData}>
                <RadioGroup.Radio value="4" label="4"/>
                <RadioGroup.Radio value="5" label="5"/>
                <RadioGroup.Radio value="6" label="6"/>
            </RadioGroup>);
    
            expect(screen.getByTestId("radiotest03").children.length).toBe(6);
    })

    afterEach(() => {
        cleanup();
    })
});