import React, { useLayoutEffect, useState } from "react";
import QuickViewResult from "./QuickViewResult";
import { selectDocData } from "../constants/mockData";
import { ColorControl } from "./ControlPanel";
import { ThemeProvider, Button, Dropdown, RadioGroup, Select, Input } from "@ivenyao/capybara-ui";

const ThemeProviderDocs = () => {
    const [propsStr, setPropsStr] = useState("");
    const [primaryColor, setPrimaryColor] = useState("#3B82F6");

    useLayoutEffect(() => {
        let props = '';
        props += (primaryColor? `\n\tprimaryColor="${primaryColor}"`:'')
        
        setPropsStr(props);

    },[])

    return (
        <>
            <div className="title">ThemeProvider</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <ColorControl value={primaryColor} onChange={(value) => setPrimaryColor(value)} label="primaryColor"/>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
{`
    <ThemeProvider${propsStr}>
        <App/>
    </ThemeProvider>

`}
                    </QuickViewResult.Code>
                    <QuickViewResult.Preview style={{padding:0}}>
                        <ThemeProvider primaryColor={primaryColor}>
                            <div className="theme-provider-preview">
                                <Button>Button</Button>
                                <Dropdown variant={"fill"}>
                                    <Dropdown.Button>
                                        Dropdown
                                    </Dropdown.Button>
                                    <Dropdown.Items>
                                        <Dropdown.Item onClick={() => {}}>Dropdown Item 1</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {}}>Dropdown Item 2</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {}}>Dropdown Item 3</Dropdown.Item>
                                    </Dropdown.Items>
                                </Dropdown>
                                <RadioGroup name={"test-group"} orientation={"horizontal"}>
                                    <RadioGroup.Radio value="1" label="radio1"/>
                                    <RadioGroup.Radio value="2" label="radio2"/>
                                    <RadioGroup.Radio value="3" label="radio3"/>
                                </RadioGroup>
                                <Select options={selectDocData} multiple value={["1","3"]}/>
                                <Input floatingLabel="Test Input"/>
                            </div>
                        </ThemeProvider>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default ThemeProviderDocs;