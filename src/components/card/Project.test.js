import React from "react";
import ReactDOM from "react-dom";
import Project from "./Project";
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



describe("Project", () => {
//   let wrapper;
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, "useState");
//   useStateSpy.mockImplementation((init) => [init, setState]);

//   beforeEach(() => {
//     wrapper = Enzyme.shallow(<Project />);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });


//     it('show contents must be true', () => {
//       wrapper.find('#minus').props().onClick();
//       expect(setState).toBeTruthy();
//     });

    it('should create move divs',()=>{
        const {getByTestId} = render(<Project/>)
        let wrapper = shallow(<Project/>)
        fireEvent.click(getByTestId('plus'))
        expect(wrapper.find('div').toBe(true))
    })


});
