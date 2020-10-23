"use strict";
exports.__esModule = true;
exports["default"] = {
    token: '',
    user: {},
    test: 'test',
    axiosEnv: {
        development: {
            baseURL: 'https://192.168.20.6',
            timeout: 3000,
            withCredentials: true
            // headers: {
            //   'Access-Control-Allow-Origin': '*',
            //   'Access-Control-Allow-Methods': '*',
            //   'Access-Control-Allow-Headers': '*'
            //   'Content-Type': 'application/json;charset=utf-8'
            // }
        },
        debug: { baseURL: 'https://localhost', timeout: 3000 },
        production: { baseURL: 'https://localhost', timeout: 3000 },
        "default": { baseURL: 'https://192.168.20.6', timeout: 3000 }
    }
};
