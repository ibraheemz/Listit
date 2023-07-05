import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";

test("Home component has a header and a paragraph", () => {
	render(
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	)
	
	const header = screen.getByRole("heading")
	const button = screen.getByRole("button")
	const paragraph = screen.getByTestId("home-p")
	
	expect(header.textContent).toBe("TRANSFER YOUR PLAYLIST USING LISTIT")
	expect(button.textContent).toBe("Let's Start")
	expect(paragraph.textContent).toBe("LISTIT will transfer your favourite music playlist from your Youtube to your Spotify")

})

test("Let's Start Button navigates to Conversion modal", () => {
	render(
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	)

	const button = screen.getByRole("button")
	expect(window.location.pathname).toBe("/")
	fireEvent.click(button)
	expect(window.location.pathname).toBe("/ConversionModule")
})