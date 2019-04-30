import React, {useRef, useState} from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import CenteredLayout from "layout/CenteredLayout/CenteredLayout";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import AuthLayoutButtons from "layout/AuthLayout/AuthLayoutButtons";

const Login = () => {
    const onSubmit = () => {
        console.log("Submitted");
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

    const form = useRef(null);

    return (
        <HeroLayout variant="fullheight" color="primary">
            <CenteredLayout>
                <AuthLayout>
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
                                    color="secondary"
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