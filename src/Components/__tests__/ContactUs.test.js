import '@testing-library/jest-dom';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";

test("Contact Us has facebook, twitter, gmail contact", () => {
    render(
        <BrowserRouter>
            <ContactUs />
        </BrowserRouter>
    )

    const facebook = screen.getByRole("link", { name: "Facebook" })
    const twitter = screen.getByRole("link", { name: "Twitter" })
    const gmail = screen.getByRole("link", { name: "Gmail" })

    expect(facebook).toBeInTheDocument()
    expect(twitter).toBeInTheDocument()
    expect(gmail).toBeInTheDocument()
    
})
