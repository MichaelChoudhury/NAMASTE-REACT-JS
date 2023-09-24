import { render, screen } from "@testing-library/react";
import RestautantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestautantCard component with props data", () => {
    render(<RestautantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Asha tiffins");

    expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted label", () => {
    // Homework - test HOC: with PromotedLabel()
})