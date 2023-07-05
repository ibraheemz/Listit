import React from "react"
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import ConversionModule from "../ConversionModule"

test("Youtube link form has link input, name input, and convert button", () => {
    render(
        <BrowserRouter>
            <ConversionModule />
        </BrowserRouter>
    )

    // const x_button = screen.getByRole("x-button") element being ignored by Jest during testing, because it is nested inside a comment, script tag, or style tag.
    // expect(x_button).toBeInTheDocument();
    const youtube_link_input = screen.getByRole("textbox", { name: "Youtube Link" })
    const playlist_name = screen.getByRole("textbox", { name: "Name your playlist" })
    const convert_btn = screen.getByRole("button", { name: "Convert" })

    expect(youtube_link_input).toBeInTheDocument()
    expect(playlist_name).toBeInTheDocument()
    expect(convert_btn).toBeInTheDocument()

    // test for all api calls laterrrr
})