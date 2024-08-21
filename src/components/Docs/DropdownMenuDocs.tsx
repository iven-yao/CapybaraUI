import DropdownMenu from "../DropdownMenu";

const DropdownMenuDocs = () => {
    return (
        <>
            <div className="title">Dropdown Menu</div>
            <div className="interactive-section">
                <div className="controller">
                    <div style={{fontSize:'30px'}}>color</div>
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
                    <DropdownMenu>
                        <DropdownMenu.Button>Actions</DropdownMenu.Button>
                        <DropdownMenu.Items>
                            <DropdownMenu.Item onClick={() => {console.log('test1')}}>test1</DropdownMenu.Item>
                            <DropdownMenu.Item onClick={() => {console.log('test2')}}>test2</DropdownMenu.Item>
                            <DropdownMenu.Item onClick={() => {console.log('test3')}}>test3</DropdownMenu.Item>
                        </DropdownMenu.Items>
                    </DropdownMenu>
                </div>
            </div>
        </>
    );
}

export default DropdownMenuDocs;