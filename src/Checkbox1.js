import React, { Component, Fragment } from "react";
import checkbox2 from "./Checkbox2";

class checkbox1 extends Component {
   state = { isChecked: false, head: "", val: [] };
 render() {
      return (
         <Fragment>
            <div className="left">
               <div className="left-detail">
                  <h2>Portugal</h2>
                  <label><input
                        type="checkbox"
                        name="Portugal"
                        value="Aasiya Jayavatan"
                        onChange={(e) => this.handleOnChange(e)}
                     />
                     Aasiya Jayavatan
                  </label>
                  <label>
                     {" "}
                     <input
                        type="checkbox"
                        name="Portugal"
                        value="Livleen Lawrence"
                        onChange={(e) => this.handleOnChange(e)}
                     />
                     Livleen Lawrence
                  </label>
                  <label>
                     {" "}
                     <input
                        type="checkbox"
                        value="Rey Mibourne"
                        name="Portugal"
                        onChange={(e) => this.handleOnChange(e)}
                     />
                     Rey Mibourne
                  </label>
                  <label>
                     {" "}
                     <input
                        type="checkbox"
                        name="Portugal"
                        value="Cayla Brister"
                        onChange={(e) => this.handleOnChange(e)}
                     />
                     Cayla Brister
                  </label>
               </div>
            </div>
            <Right state={this.state} />
         </Fragment>
      );
   }
   handleOnChange = (e) => {
      const { head, val } = this.state;
         if (head === "") {
            this.setState({ head: e.target.name });
         }
         this.setState({
            isChecked: e.target.checked,
            val: e.target.checked === true ? [...val, e.target.value] : [...val],
         });
         
      };
}

export default checkbox1;
