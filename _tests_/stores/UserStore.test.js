/**
 * Created by ajf on 14/06/2017.
 */
import React from "react";
import { userStore } from '../../src/stores/UserStore';

// Store Unit Tests Using Jest
// Full Jest Documentation available at
// https://facebook.github.io/jest/docs/api.html

// Unit Test Example

describe('UserStore Unit Tests', () => {
    it('Logout Function', () => {
        userStore.logOut();
        expect(userStore.loggedIn).toBe(false);
    })
})



