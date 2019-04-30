import React, {useRef, useState} from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import CenteredLayout from "layout/CenteredLayout/CenteredLayout";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import AuthLayoutButtons from "layout/AuthLayout/AuthLayoutButtons";

const Register = () => {
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const form = useRef(null);

    // Setup custom rule for password match
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        return value === state.password;
    });

    return (
        <HeroLayout variant="fullheight" color="primary">
            <CenteredLayout>
                <AuthLayout>
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
                    </ValidatorForm>

                    <AuthLayoutButtons>
                        <div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Register
                            </Button>
                        </div>
                    </AuthLayoutButtons>
                </AuthLayout>

                <AuthLayoutButtons>
                    <Button href="/" color="secondary">Already have an account? Sign in</Button>
                </AuthLayoutButtons>
            </CenteredLayout>
        </HeroLayout>
    );
};

export default Register;