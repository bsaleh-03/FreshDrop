import React, {useRef, useState} from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import CenteredLayout from "layout/CenteredLayout/CenteredLayout";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import AuthLayoutButtons from "layout/AuthLayout/AuthLayoutButtons";
import HasuraAPI from "lib/Hasura";
import MessageBox from "components/MessageBox/MessageBox";
import EmailConfirmation from "pages/auth/emailConfirmation/emailConfirmation";

const Register = () => {
    const onSubmit = async () => {
        try {
            // Try to register the user
            let response = await HasuraAPI.Auth.register(state);

            // Check if we were able to register the user
            if (response["hasura_id"]) {
                const userInfo = {
                    hasura_id: response.hasura_id,
                    name: state.name
                };

                // Try to set the user info
                let setInfoResponse = await HasuraAPI.Auth.setUserInfo(userInfo);

                // Check if we were able to set the user info
                if (setInfoResponse["affected_rows"]) {
                    // Show email confirmation screen
                    setState({
                        ...state,
                        emailSent: true
                    });
                } else {
                    // Set an error
                    setError(setInfoResponse.message);
                }
            } else {
                // Set error
                setError(response.message);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        emailSent: false
    });

    const [error, setError] = useState(null);

    const form = useRef(null);

    // Setup custom rule for password match
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        return value === state.password;
    });

    const registerForm = (
        <React.Fragment>
            <AuthLayout>
                { error !== null && <MessageBox message={error} color="danger" /> }

                <ValidatorForm ref={form} onSubmit={onSubmit} onError={errors => console.log(errors)}>
                    <FormControl margin="normal" required fullWidth>
                        <TextValidator
                            autoFocus
                            id="name"
                            name="name"
                            label="Your Name"
                            onChange={handleChange}
                            value={state.name}
                            autoComplete="name"
                            validators={['required']}
                            errorMessages={['This field is required']}
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <TextValidator
                            id="email"
                            name="email"
                            label="Email Address"
                            onChange={handleChange}
                            value={state.email}
                            autoComplete="email"
                            validators={['required', 'isEmail']}
                            errorMessages={['This field is required', 'Email is not valid']}
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <TextValidator
                            id="password"
                            label="Password"
                            onChange={handleChange}
                            name="password"
                            type="password"
                            validators={['required', 'minStringLength:8']}
                            errorMessages={['This field is required', 'Password must be a minimum of 8 characters']}
                            value={state.password}
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <TextValidator
                            id="confirmPassword"
                            label="Confirm Password"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="password"
                            validators={['required', 'isPasswordMatch']}
                            errorMessages={['This field is required', 'The passwords must match']}
                            value={state.confirmPassword}
                        />
                    </FormControl>

                    <AuthLayoutButtons>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Register
                        </Button>
                    </AuthLayoutButtons>
                </ValidatorForm>
            </AuthLayout>

            <AuthLayoutButtons>
                <Button href="/" color="secondary">Already have an account? Sign in</Button>
            </AuthLayoutButtons>
        </React.Fragment>
    );

    return (
        <HeroLayout variant="fullheight" color="primary">
            <CenteredLayout>
                { state.emailSent ? <EmailConfirmation email={state.email} /> : registerForm }
            </CenteredLayout>
        </HeroLayout>
    );
};

export default Register;