import React from 'react';
import TextInput from './formfields/TextInput';

const Form1 = props => {
  const getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  };

  const dateToday = getDate();

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                id="date-of-application"
                type="date"
                className="validate"
                value={dateToday}
                readOnly
                disabled
              />
              <label htmlFor="date-of-application">Date of Application</label>
            </div>

            <TextInput label="Reference No./ID No." />
          </div>
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                id="date-of-registration"
                type="date"
                className="validate"
                value={dateToday}
                onChange={() => {}}
              />
              <label htmlFor="date-of-registration">
                DTI/SEC/CDA Date of Registration
              </label>
            </div>
            <TextInput label="DTI/SEC/CDA Registration No." />
          </div>
          <div className="row">
            <TextInput label="Kind of Organization" />
            <TextInput label="TIN" />
          </div>
          <div className="row">
            <div className="input-field col s12">
              <div className="row">
              <div className="col s12 m8">
                Are you enjoying tax incentive from any Government Entity?
              </div>
              <div className="col s12 m4">
                <label>
                  <input
                    name="group1"
                    type="radio"
                    checked
                    onChange={() => console.log()}
                  />
                  <span>Yes</span>
                </label>
                <span style={{ display: 'inline-block', width: '20px' }} />
                <label>
                  <input name="group1" type="radio" />
                  <span>No</span>
                </label>
              </div>
              </div>
            </div>
            <TextInput cols="s12" label="Please specify the entity" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form1;
