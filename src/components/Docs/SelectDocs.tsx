import Select from "../Select/Select";

const SelectDocs = () => {
    return (
        <>
            <div className="title">Select</div>
            <div className="interactive-section">
                <div className="controller">
                    <div style={{fontSize:'30px'}}>variant</div>
                    <div style={{padding:'10px', display:'flex', gap:'10px'}}>
                    </div>

                    <div style={{fontSize:'30px'}}>size</div>
                    <div style={{padding:'10px', display:'flex', gap:'10px', alignItems:'center'}}>
                    </div>

                    <div style={{fontSize:'30px'}}>rounded</div>
                    <div style={{padding:'10px', display:'flex', gap:'10px', alignItems:'center'}}>
                    </div>
                </div>
                <div className="result">
                    <Select variant="blue" onChange={(s) => console.log(s)}>
                        <Select.Option value="1" label="one"/>
                        <Select.Option value="2" label="two"/>
                        <Select.Option value="3" label="three"/>
                        <Select.Option value="4" label="four"/>
                    </Select>
                </div>
            </div>
        </>
    );
}

export default SelectDocs;