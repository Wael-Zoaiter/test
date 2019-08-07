import React, { Component } from 'react'
import Stepper from '../components/Stepper';
import { InterestsForm, InfoForm, ProInfoForm } from '../components/forms';

export default class Signup extends Component {
    render() {
        return (
            <div class="signup page">
                <Stepper 
                    titles={[
                        'Career Interests',
                        'General Info',
                        'Professional Info'
                    ]}
                    content={[
                        InterestsForm,
                        InfoForm,
                        ProInfoForm
                    ]}
                />
            </div>
        )
    }
}
