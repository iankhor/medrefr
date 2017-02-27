               <div style={style.referralOptions}>
                <FormsyText
                    name="userSurname"
                    validations="isWords"
                    validationError={errorMessages.wordsError}
                    required
                    hintText="Surname"
                    floatingLabelText="Surname"
                    // defaultValue={this.props.referral.patientSurname}
                />
                <br />
                <FormsyText
                    name="usergivenName"
                    validations="isWords"
                    validationError={errorMessages.wordsError}
                    required
                    hintText="Given name"
                    floatingLabelText="Given name"
                    // value={this.props.referral.patientgivenName}
                />
            <br />
            </div>
            <div>
                <FormsyText
                    name="providerNumber"
                    hintText="Provider Number"
                    floatingLabelText="Provider Number"
                    // defaultValue={this.props.referral.patientMedicare}
                />
            <br />
                <FormsyText
                    name="ContactNumber"
                    validations="isInt"
                    validationError={errorMessages.wordsError}
                    hintText="Contact number"
                    floatingLabelText="Contact number"
                    // defaultValue={this.props.referral.patientContactNumber}
                />
                </div>
                <div>
                    <FormsySelect
                        name="Role"
                        floatingLabelText="Role"
                        // value={this.props.referral.referralStatus}
                    >
                        <MenuItem value={'psychiatrist'} primaryText="Psychiatrist" />
                        <MenuItem value={'generalPractitioner'} primaryText="General Practitioner" />
                    </FormsySelect>
                </div>
                */}
