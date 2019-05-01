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

const Login = () => {
    const onSubmit = async () => {
        try {
            // Try to login
            let response = await HasuraAPI.Auth.login(state);

            // Check if the user has logged in
            if (response["auth_token"]) {
                window.location = "/home";
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
       email: "",
       password: ""
    });

    const [error, setError] = useState(null);

    const form = useRef(null);

    return (
        <HeroLayout variant="fullheight" color="primary">
            <CenteredLayout>
                <AuthLayout>
                    { error !== null && <MessageBox message={error} color="danger" /> }

                    <ValidatorForm ref={form} onSubmit={onSubmit} onError={errors => console.log(errors)}>
                        <FormControl margin="normal" required fullWidth>
                            <TextValidator
                                autoFocus
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
                                autoComplete="current-password"
                                name="password"
                                type="password"
                                validators={['required']}
                                errorMessages={['This field is required']}
                                value={state.password}
                            />
                        </FormControl>

                        <AuthLayoutButtons>
                            <div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Sign in
                                </Button>
                            </div>

                            <div>
                                <Button
                                    color="primary"
                                    fullWidth
                                >
                                    Reset Password
                                </Button>
                            </div>
                        </AuthLayoutButtons>
                    </ValidatorForm>
                </AuthLayout>

                <AuthLayoutButtons>
                    <Button href="/register" color="secondary">Don't have an account? Sign up</Button>
                </AuthLayoutButtons>
            </CenteredLayout>
        </HeroLayout>
    );
};

export default Login;