import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {
  render,
  fireEvent,
  getByTestId,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe("About", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should show text", () => {
    const wrapper = shallow(<About />);
    const text = wrapper.find("summary h2");
    expect(text.text()).toBe("About Me");
  });

  it("check if buttons work", () => {
    const { getByTestId } = render(<About />);
    fireEvent.click(getByTestId("zero-btn"));
    expect(getByTestId("zero-btn")).toBeChecked();
  });

  it("includes two paragraphs", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find("p").length).toEqual(9);
  });

  it("should update state on click", () => {
    const setSize = jest.fn();
    const wrapper = mount(<About onClick={setSize} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((size) => [size, setSize]);
    wrapper.find("#shortest").simulate("click");
    expect(setSize).toBeTruthy();
  });

  it("sets size to 0", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    let wrapper = Enzyme.shallow(<About />);
    wrapper.find("#shortest").props().onChange();
    expect(setState).toHaveBeenCalledWith(0);
  });

  it("sets size to 1", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    let wrapper = Enzyme.shallow(<About />);
    wrapper.find("#short").props().onChange();
    expect(setState).toHaveBeenCalledWith(1);
  });
  it("sets size to 2", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    let wrapper = Enzyme.shallow(<About />);
    wrapper.find("#medium").props().onChange();
    expect(setState).toHaveBeenCalledWith(2);
  });
  it("sets size to 3", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    let wrapper = Enzyme.shallow(<About />);
    wrapper.find("#long").props().onChange();
    expect(setState).toHaveBeenCalledWith(3);
  });
});
