import React from "react"
import { BrowserRouter } from "react-router-dom"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Header from "../Components/Header"

test ("nav bar has 4 buttons and each has the right text", () => {
    
    //Act
    render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )
    //Arrange
    const homeButton = screen.queryByTestId("nav_to_home")
    const aboutButton = screen.queryByTestId("nav_to_about")
    const contactButton = screen.queryByTestId("nav_to_contact")
    const helpButton = screen.queryByTestId("nav_to_help")
    const navList = screen.getByTestId("nav_list");
    const listItemsCount = navList.childElementCount
    const listItems = navList.children

    //Assert
    expect(listItemsCount).toBe(4)
    expect(listItems[0].firstElementChild).toBe(homeButton)
    expect(listItems[1].firstElementChild).toBe(aboutButton)
    expect(listItems[2].firstElementChild).toBe(contactButton)
    expect(listItems[3].firstElementChild).toBe(helpButton)
    expect(homeButton.textContent).toBe("Home")
    expect(aboutButton.textContent).toBe("About")
    expect(contactButton.textContent).toBe("Contact Us")
    expect(helpButton.textContent).toBe("Help")
})


test("Button Home navigates to /Home", async () => {

    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
    )
    const button = screen.getByTestId("nav_to_home")
    expect(window.location.pathname).toBe("/")
    fireEvent.click(button)
    await waitFor(() => expect(window.location.pathname).toBe("/Home"))
})

test("Button About navigates to /About", async () => {

    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
    )
    const button = screen.getByTestId("nav_to_about")
    expect(window.location.pathname).toBe("/Home")
    fireEvent.click(button)
    await waitFor(() => expect(window.location.pathname).toBe("/About"))
})

test("Contact Us About navigates to /ContactUs", async () => {

    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
    )
    const button = screen.getByTestId("nav_to_contact")
    expect(window.location.pathname).toBe("/About")
    fireEvent.click(button)
    await waitFor(() => expect(window.location.pathname).toBe("/ContactUs"))
})

test("Button Help navigates to /Help", async () => {

    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
    )
    const button = screen.getByTestId("nav_to_help")
    expect(window.location.pathname).toBe("/ContactUs")
    fireEvent.click(button)
    await waitFor(() => expect(window.location.pathname).toBe("/Help"))
})