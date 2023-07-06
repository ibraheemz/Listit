import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import About from "../Components/About";

test("About has about listit section and Pros sections", () => {
    render(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    )

    const about_listit = screen.getByTestId("about-listit")
    const about_pros = screen.getByTestId("about-pros")
    
    expect(about_listit.childElementCount).toBe(2)
    expect(about_pros.childElementCount).toBe(7)
})
