
const checkbox = ({label, value, onChange}) =>{
    return (
        <div>
            <input
                type="checkbox"
                checked={value}
                onChange={onChange}
            />
        </div>
    )
}