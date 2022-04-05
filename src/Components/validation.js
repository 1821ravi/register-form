import React from 'react'

export default function validate(values) {

        let errors = {};

        if (!values.name) {
          errors.name = "Name is required";
        }
        if (!values.username) {
          errors.username = "Username is required";
        }
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = "Email is invalid";
        }
        if (!values.phone) {
                errors.phone = "Phone number is required";
              } else if (!/(10)?[0-9][0-9]{9}/.test(values.phone)) {
                errors.phone = "Enter Valid Number";
              }
        return errors;
      };
