import { useEffect, useState } from "react";
import axios from "axios";

export default function IconsPage() {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        axios.get("/api/icons")
            .then((response) => {
                console.log("API Response:", response.data); // Debug API response

                // Validate API response before setting state
                if (response.data && Array.isArray(response.data.icons)) {
                    setIcons(response.data.icons);
                } else {
                    console.error("Unexpected API response format:", response.data);
                    setIcons([]); // Prevents invalid data issues
                }
            })
            .catch((error) => {
                console.error("Error fetching icons:", error);
                setIcons([]);
            });
    }, []);

    return (
        <div>
            <h1>Icons List</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {Array.isArray(icons) && icons.length > 0 ? (
                    icons.map((icon, index) =>
                        typeof icon === "object" &&
                        icon !== null &&
                        !RegExp.prototype.isPrototypeOf(icon) ? (
                            <div key={icon.Id || index} style={{ textAlign: "center" }}>
                                <div dangerouslySetInnerHTML={{ __html: icon.icon_svg }} /> {/* Render SVG */}
                                <p>{icon.icon_name}</p> {/* Icon name */}
                            </div>
                        ) : null
                    )
                ) : (
                    <p>No icons available</p>
                )}
            </div>
        </div>
    );
}
