import React from "react";
import Flatpickr from "react-flatpickr"; // ✅ Corrected import
import "flatpickr/dist/themes/material_blue.css";

export default function CalendarComponent() {
  return (
    <div>
      <Flatpickr
        options={{
          inline: true,
          dateFormat: "Y-m-d",
        }}
      />
    </div>
  );
}
