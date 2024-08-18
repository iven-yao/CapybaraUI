import Button from "../Button";

const ButtonDocs = () => {
    return (
        <>
            <div className="title">Button</div>
            <div className="interactive-section">
                <div className="controller">
                    <div style={{fontSize:'30px'}}>variant</div>
                    <div style={{padding:'10px', display:'flex', gap:'10px'}}>
                        <Button variant="red">red</Button>
                        <Button variant="orange">orange</Button>
                        <Button variant="yellow">yellow</Button>
                        <Button variant="green">green</Button>
                        <Button variant="blue">blue</Button>
                        <Button variant="indigo">indigo</Button>
                        <Button variant="violet">violet</Button>
                        <Button variant="white">white</Button>
                    </div>

                    <div style={{fontSize:'30px'}}>size</div>
                    <div style={{padding:'10px', display:'flex', gap:'10px', alignItems:'center'}}>
                        <Button size="xl">x-large</Button>
                        <Button size="lg">large</Button>
                        <Button size="md">medium</Button>
                        <Button size="sm">small</Button>
                        <Button size="xs">x-small</Button>
                    </div>

                    <div style={{fontSize:'30px'}}>rounded</div>
                    <div style={{padding:'10px', display:'flex', gap:'10px', alignItems:'center'}}>
                        <Button rounded="none">none</Button>
                        <Button rounded="sm">sm-radius</Button>
                        <Button rounded="md">md-radius</Button>
                        <Button rounded="lg">lg-radius</Button>
                        <Button rounded="pill">pill-button</Button>
                        <Button rounded="circle">circle</Button>
                    </div>
                </div>
                <div className="result">
                    <Button>Click Me!</Button>
                </div>
            </div>
        </>
    );
}

export default ButtonDocs;