import { useState } from "react";
import "../styles/MultiSelect.css";
import Textbox from "./Textbox.jsx";

export default function MultiSelect({ options, onChange }) {
    const [selected, setSelected] = useState({});

    function toggleOption(option) {
        const newSelected = { ...selected };

        if (option in newSelected) {
            delete newSelected[option];
        } else {
            newSelected[option] = "";
        }

        setSelected(newSelected);
        onChange(newSelected);
    }

    function changeUsername(option, username) {
        const newSelected = {
            ...selected,
            [option]: username
        };

        setSelected(newSelected);
        onChange(newSelected);
    }

    return (
        <div className="multi-select">
            <div className="multi-select-options">
                {options.map((option) => (
                    <label key={option} className="multi-select-option">
                        <input
                            type="checkbox"
                            checked={option in selected}
                            onChange={() => toggleOption(option)}
                        />

                        <span>{option}</span>

                        <Textbox
                            value={selected[option] || ""}
                            onChange={(event) =>
                                changeUsername(option, event.target.value)
                            }
                            placeholder="Username"
                            disabled={!(option in selected)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}