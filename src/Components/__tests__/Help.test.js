import '@testing-library/jest-dom';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Help from "../Help";

test("Help ", () => {
    render(
        <BrowserRouter>
            <Help />
        </BrowserRouter>
    )
    
    const welcome_sect = screen.getByTestId("welcome-sect") 
    const howTo_sect = screen.getByTestId("howto-sect" )
    const getting_started_sect = screen.getByTestId("getting-started-sect")
    const using_website_sect = screen.getByTestId("using-website-sect" )
    const troubleshooting_sect = screen.getByTestId("troubleshooting-sect")
    const common_problems_sect = screen.getByTestId("common-problems-sect")
    const contact_us_sect = screen.getByTestId("contact-sect")

    expect(welcome_sect).toBeInTheDocument()
    expect(howTo_sect).toBeInTheDocument()
    expect(getting_started_sect).toBeInTheDocument()
    expect(using_website_sect).toBeInTheDocument()
    expect(troubleshooting_sect).toBeInTheDocument()
    expect(common_problems_sect).toBeInTheDocument()
    expect(contact_us_sect).toBeInTheDocument()
})