import { shallow } from 'enzyme';
import React from 'react';
import { SearchBox } from "./search-icon.component";

describe("SearchBox component", () => {
  let wrapper;
  let mockToggleCartHidden;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };

    wrapper = shallow(<SearchBox {...mockProps} />);
  });

  it("should render CartIcon component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggleCartHidden when icon is clicked", () => {
    wrapper.find('#nanai-icon').simulate("click");
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

});
