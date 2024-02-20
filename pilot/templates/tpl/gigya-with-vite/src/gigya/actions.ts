// @ts-nocheck
//<reference types="gigya.d.ts" />
 
const gigyaWebSDK = ()=>window.gigya as gigya;
export interface SocialPayload {
    provider: string,

    [key: string]: any
}
export type LoginParams = {
    [key: string]: any
    loginMode?: string
}

export type SocialLoginParams = SocialPayload & LoginParams

declare type AnyRequest = { [key: string]: any } | undefined;

export async function performSignup(args: any) {
    return new Promise((resolve, reject) => {
        initRegistration().then(regToken =>
            gigyaWebSDK().accounts.register({
                email: args.email,
                password: args.password,
                finalizeRegistration: true,
                regToken: regToken,
                callback: (response) => {
                    if (response.errorCode === 0) {
                        resolve(response);

                    } else {
                        reject(
                            `Error during registration: ${response.errorMessage}, ${response.errorDetails}`
                        );
                    }
                },
            }))

    });
}

export async function screenSetSignUp(args: ScreenSetParams) {
    return new Promise((resolve, reject) => { 
        gigyaWebSDK().accounts.showScreenSet(
            {
                screenSet: "Default-RegistrationLogin",
                startScreen: 'gigya-register-screen',
                onLogin: (r) => {
                    resolve(r)
                },
                ...args,
                callback: (response) => {
                    if (response.errorCode === 0) {
                        resolve(response);

                    }
                    if (response.errorCode !== 0) {
                        reject(
                            `Error during registration: ${response.errorMessage}, ${response.errorDetails}`
                        );
                    }
                },
            })

    });
}

export async function screenSetLogin(args: ScreenSetParams) {
    return new Promise((resolve, reject) => {
        gigyaWebSDK().accounts.showScreenSet(
            {
                screenSet: "Default-RegistrationLogin",
                startScreen: 'gigya-login-screen',
                onLogin: (r) => {
                    resolve(r)
                },
                ...args,
                callback: (response) => {
                    if (response.errorCode === 0) {
                        resolve(response);

                    }
                    if (response.errorCode !== 0) {
                        reject(
                            `Error during registration: ${response.errorMessage}, ${response.errorDetails}`
                        );
                    }
                },
            })

    });
}

export async function initRegistration(args: any) {
    return new Promise((resolve, reject) => {
        gigyaWebSDK().accounts.initRegistration({
            callback: (response) => {
                if (response.errorCode === 0) {
                    resolve(response.regToken);

                } else {
                    reject(
                        `Error during registration: ${response.errorMessage}, ${response.errorDetails}`
                    );
                }
            },
        });


    });
}

export async function performSignin(args: {loginId,password, [key: string]: any}) {
    return new Promise((resolve, reject) => {
        const params = {
            loginID: args.email,
            password: args.password,
            ...args
        };
        gigyaWebSDK().accounts.login(params, {
            callback: (response) => {
                if (response.errorCode === 0) {
                    resolve(response);
                } else {
                    reject(
                        `Error during login: ${response.errorMessage}, ${response.errorDetails}`
                    );
                }
            }


        });

    });

}
export async function performSsoLogin(args) {
    return new Promise((resolve, reject) => {

        gigyaWebSDK().sso.login(args, {
            callback: (response) => {
                if (response.errorCode === 0) {
                    resolve(response);
                } else {
                    reject(
                        `Error during login: ${response.errorMessage}, ${response.errorDetails}`
                    );
                }
            }


        });

    });

}

export function getJwt(args) {
    return new Promise((resolve, reject) => {
        gigyaWebSDK().accounts.getJWT({
            ...(args || {}),
            fields: 'profileField,data.dataField,phone_number,isRegistered,authMethods,email',
            callback: function (res) {
                if (res.errorCode === 0) {
                    resolve(res.id_token as string)
                } else {
                    reject(res)
                }

            }
        })
    });
}


export function getAccount(args): Promise<any> {
    return new Promise((resolve, reject) => {
        gigyaWebSDK().accounts.getAccountInfo({
            ...(args || {}),
            include: "all",
            callback: function (res) {
                if (res.errorCode === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }

            }
        })
    });
}


export const socialLoginAsync = (args: SocialLoginParams) => {
    return new Promise((resolve, reject) => {
        const params = {
            ...(args || {}),
            include: "all",
            callback: function (res) {
                if (res.errorCode === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }

            }
        };
        window.gigya.socialize.login({...params, enabledProviders: params.provider});
    });
}
export const socialLogin = (args: { provider: string, [key: string]: any }, callback: (res) => {}) => {
    const params = {
        ...(args || {}),
        include: "all",
        callback: callback
    }
    gigyaWebSDK().socialize.login({...params, enabledProviders: params.provider});
}
export const startFlow = (args: { provider: string, [key: string]: any }, callback: (res) => {}) => {
    const params = {
        ...(args || {}),
        include: "all",
        callback: callback
    }
    gigyaWebSDK().identityFlows.start({...params, enabledProviders: params.provider});
}


export const logout = (args: AnyRequest = {}) => {
    return new Promise((resolve, reject) => {
        const params = {
            ...(args || {}),
            callback: function (res) {
                if (res.errorCode === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }

            }
        };
        gigyaWebSDK().socialize.logout({...params});
    });
}


export function useGigya(listener: (gigya: gigya) => void) {
    if (window.gigya && window.gigya.isReady) {
        listener(window.gigya);
    } else {
        window.onGigyaServiceReady= () => listener(window.gigya);
        // window.addEventListener('onGigyaServiceReady', () => {
        //     listener(window.gigya);
        // });
    }
}

export function addEventHandlers ({onLogin, ...events}: Record<string, (e:any)=> void>) {
    useGigya((gigya) => {
        gigya.hasSession().then((hasSession) => {
            if (hasSession) {
                window.gigya.accounts.getAccountInfo({
                    include: "all",
                    callback: function (res) {
                        console.log('getAccountInfo', res, onLogin);
                        if (res.errorCode === 0) {
                            onLogin && onLogin(res)
                        }
                    }
                })
            }
        }) 
        
        gigya.accounts.addEventHandlers({
                    onLogin: (e) => {
                        console.log('onLogin', e);
                        onLogin && onLogin(e)
                    },
                    ...events
                });
        }
    )
}