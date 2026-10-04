import { useEffect, useState } from "react";
import MultiSelect from "../components/MultiSelect";
import "../styles/page.css";

export default function Home() {
    const [selectedColors, setSelectedColors] = useState("");

    const colors = [
        "Red",      "Blue",     "Green",    "Pink",
        "Orange",   "Yellow",   "Black",    "White",
        "Purple",   "Brown",    "Cyan",     "Lime",
        "Maroon",   "Rose",     "Banana",   "Gray",
        "Tan",      "Coral"
    ];

    function handlePlayersChange(selectedColors) {
        setSelectedColors(selectedColors)
        console.log(selectedColors)
    }

    return (
    <>
        <div className="page">
            <h1 className="title">Home Page</h1>

            <MultiSelect
                options={colors}
                placeholder="Select players"
                onChange={handlePlayersChange}
            />
        </div>
    </>
  )
}