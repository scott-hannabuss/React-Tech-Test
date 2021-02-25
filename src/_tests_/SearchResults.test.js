import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("<SearchResults />", () => {
  const images = [
    "https://images-assets.nasa.gov/image/PIA08946/PIA08946~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA09000/PIA09000~thumb.jpg",
  ];

  it("renders and matches snapshot", () => {
    const { asFragment } = render(<SearchResults results={images} />);
    expect(asFragment()).toMatchSnapshot();
  });
});