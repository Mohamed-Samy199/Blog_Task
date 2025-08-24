import Select from 'react-select'

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#fff", // لون الخلفية الداكن
        border: "1px solid #c084fc",
        color: "#fff",
        borderRadius: 9999,
        textAlign: "center",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#495057" : "#343a40", // لون الخلفية عند التحديد
        color: "white",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white", // لون النص
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "#495057", // لون السهم
        fontSize: "1.2rem", // حجم السهم
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        backgroundColor: "transparent", // إزالة خط الفاصل بين السهم والمربع
    }),
};
export default function SelectAuther({ setAutherId, posts }) {

    const options = posts.map((option) => ({
        value: option.author.id,
        label: option.author.name
    }));
    return (
        <div className="w-[60%]" >
            <Select
                options={options}
                styles={customStyles}
                onChange={(option) => setAutherId(option.value)}
                placeholder="select auther"
            />
        </div>
    )
}
