import Button from "./Button";

const ButtonDocs = () => {
    return (
        <>
            <div style={{fontSize:'50px', padding:'10px', marginBottom:'10px'}}>Button</div>
            <div style={{backgroundColor:"rgba(0,0,0,0.02)", padding:'10px'}}>

                <div style={{fontSize:'30px'}}>Color</div>
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

                <div style={{fontSize:'30px'}}>Size</div>
                <div style={{padding:'10px', display:'flex', gap:'10px', alignItems:'center'}}>
                    <Button size="xs">x-small</Button>
                    <Button size="sm">small</Button>
                    <Button size="md">medium</Button>
                    <Button size="lg">large</Button>
                    <Button size="xl">x-large</Button>
                </div>

                <div style={{fontSize:'30px'}}>Shape</div>
                <div style={{padding:'10px', display:'flex', gap:'10px', alignItems:'center'}}>
                    <Button>normal</Button>
                    <Button rounded="sm">sm-radius</Button>
                    <Button rounded="md">md-radius</Button>
                    <Button rounded="lg">lg-radius</Button>
                    <Button rounded="pill">pill-button</Button>
                    <Button rounded="circle">circle</Button>
                </div>
            </div>
        </>
    );
}

export default ButtonDocs;