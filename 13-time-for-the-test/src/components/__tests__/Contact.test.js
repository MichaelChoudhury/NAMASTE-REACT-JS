import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {

    // beforeAll(() => {
    //     console.log("Before All");
    // })

    // afterAll(() => {
    //     console.log("After All");
    // })

    // beforeEach(() => {
    //     console.log("Before Each");
    // })

    // afterEach(() => {
    //     console.log("After Each");
    // })


    it("Should load Contact Us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside Contact component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input name inside Contact component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes inside Contact component", () => {
        render(<Contact />);
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        console.log(inputBoxes);
        
        //Assertion
    
        expect(inputBoxes.length).toBe(2);
    });
});


