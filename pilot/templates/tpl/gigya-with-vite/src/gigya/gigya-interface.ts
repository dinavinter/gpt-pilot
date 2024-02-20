

export interface Profile{
    [key:string]: any
}
export interface IBaseEvent {
    eventName: string;
    source: string;
    context: any;
}

export interface IBaseGlobalEvent extends IBaseEvent {

}

export interface ILoginEvent extends IBaseGlobalEvent {
    UID: string;
    UIDSignature: string;
    signatureTimestamp: string;
    loginMode: string;
    newUser: boolean;
    provider: string;
    profile: Profile;
    data: object;
    remember: boolean;
    dataCenter?: string;
}

export interface ILogoutEvent extends IBaseGlobalEvent {

}

export interface IBaseScreenSetEvent extends IBaseEvent {
    instanceID?: string;
}

export interface IErrorEvent extends IBaseScreenSetEvent {
    response: any;
    status: string,
    statusMessage: string;
    errorMessage: string;
    errorDetails: string;
    errorCode: number;
}

export interface IBeforeValidationEvent extends IBaseScreenSetEvent {
    form: string;
    formData: any;
    data: any;
    profile: any;
    preferences: any;
    subscriptions: any;
    screen: string;
}

export interface IBeforeSubmitEvent extends IBaseScreenSetEvent {
    screen: string;
    form: string;
    profile: any;
    data: any;
    subscriptions: any;
    formData: any;
    preferences: any;
}

export interface ISubmitEvent extends IBaseScreenSetEvent {
    screen: string;
    form: string;
    accountInfo: any;
    formModel: any;
}

export interface IAfterValidationEvent extends IBaseScreenSetEvent {
    screen: string;
    form: string;
    profile: any;
    data: any;
    preferences: any;
    response: any;
    formData: any;
    validationErrors: any;
}

export interface IAfterSubmitEvent extends IBaseScreenSetEvent {
    screen: string;
    form: string;
    profile: any;
    data: any;
    preferences: any;
    response: any;
    subscriptions: any;
}

export interface IBeforeScreenLoadEvent extends IBaseScreenSetEvent {
    profile: any;
    data: any;
    preferences: any;
    response: any;
    nextScreen: string;
    schema: any;
}

export interface IAfterScreenLoadEvent extends IBaseScreenSetEvent {
    currentScreen: string;
    abTesting: {
        variantId: string;
        testId: string;
    }
    profile: any;
    data: any;
    preferences: any;
    response: any;
}

export interface IOnFieldChangedEvent extends IBaseScreenSetEvent {
    screen: string;
    form: string;
    field: string;
    isValid: boolean;
    errMsg: number;
    value: string;
}

export interface IHideEvent extends IBaseScreenSetEvent {
    reason: string;
}

export type BeforeValidationEventHandler = (e: IBeforeValidationEvent) => object | Promise<Object>;
export type BeforeSubmitEventHandler = (e: IBeforeSubmitEvent) => void | boolean; // Return Value: The event handlerexport declare function may return "false" to cancel the submission.
export type BeforeScreenLoadEventHandler = (e: IBeforeScreenLoadEvent) => void;
export type AfterScreenLoadEventHandler = (e: IAfterScreenLoadEvent) => void;
export type FieldChangedEventHandler = (e: IOnFieldChangedEvent) => void;
export type AfterValidationEventHandler = (e: IAfterValidationEvent) => void;
export type AfterSubmitEventHandler = (e: IAfterSubmitEvent) => void;
export type SubmitEventHandler = (e: ISubmitEvent) => void;
export type ErrorEventHandler = (e: IErrorEvent) => void;
export type HideEventHandler = (e: IHideEvent) => void;

export interface ScreenSetHooks {
    onHide: Array<HideEventHandler>;
    onError: Array<ErrorEventHandler>;
    onBeforeValidation: Array<BeforeValidationEventHandler>;
    onAfterValidation: Array<AfterValidationEventHandler>;
    onSubmit: Array<SubmitEventHandler>;
    onAfterSubmit: Array<AfterSubmitEventHandler>;
    onBeforeSubmit: Array<BeforeSubmitEventHandler>;
    onAfterScreenLoad: Array<AfterScreenLoadEventHandler>;
    onBeforeScreenLoad: Array<BeforeScreenLoadEventHandler>;
    onFieldChanged: Array<FieldChangedEventHandler>;
}

export interface ScreenSetListeners {
    onHide: HideEventHandler;
    onError: ErrorEventHandler;
    onBeforeValidation: BeforeValidationEventHandler;
    onAfterValidation: AfterValidationEventHandler;
    onSubmit: SubmitEventHandler;
    onAfterSubmit: AfterSubmitEventHandler;
    onBeforeSubmit: BeforeSubmitEventHandler;
    onAfterScreenLoad: AfterScreenLoadEventHandler;
    onBeforeScreenLoad: BeforeScreenLoadEventHandler;
    onFieldChanged: FieldChangedEventHandler;
}

export interface ScreenSetParams {
    screenSet: string;
    startScreen: string;
    containerID: string;
    authFlow: AuthFlow;
    cid: string;
    customButtons: Object[];
    customLang: { [key: string]: string };
    dialogStyle: DialogStyle;
    deviceType: DeviceType;
    enabledProviders: string;
    googlePlayAppID: string;
    lang: string;
    mobileScreenSet: string;
    redirectMethod: RedirectMethod;
    redirectURL: string;
    sessionExpiration: SessionExpiration;
    regSource: string;
    regToken: string;
    context: string;
    onError: ErrorEventHandler;
    onSubmit: SubmitEventHandler;
    onAfterSubmit: AfterSubmitEventHandler;
    onBeforeSubmit: BeforeSubmitEventHandler;
    onAfterScreenLoad: AfterScreenLoadEventHandler;
    onBeforeScreenLoad: BeforeScreenLoadEventHandler;
    onFieldChanged: FieldChangedEventHandler;
    onBeforeValidation: BeforeValidationEventHandler;
    onAfterValidation: AfterValidationEventHandler;
    onHide: HideEventHandler;
    version?: number;
    finalizeRegistration: boolean;
}

export enum AuthFlow {
    popup,
    redirect
}

export enum DialogStyle {
    modern,
    legacy
}

export enum DeviceType {
    desktop,
    mobile,
    auto
}

export enum RedirectMethod {
    get,
    post
}

export enum SessionExpiration {
    Session = 0,
    OneMinute = -1,
    Forever = -2
}

export type ScreenSet = {
    html: string;
    css: string;
    javascript: string;
    translations: TranslationsContainer
};


export type Translations = { [key: string]: string };
export type TranslationsContainer = { [langCode: string]: Translations };
export type TranslationWrapper = {
    langKey: string,
    translations: Translations
};
 
    type IScreenSetParams = {
        context?: any;
        cid?: string;
        onBeforeSubmit?: (e: any) => void;
        onAfterSubmit?: (e: any) => void;
        onSubmit?: (e: any) => void;
        onAfterValidation?: (e: any) => void;
        onBeforeValidation?: (e: any) => void;
        onBeforeScreenLoad?: (e: any) => void;
        onAfterScreenLoad?: (e: any) => void;
        onFieldChanged?: (e: any) => void;
        onHide?: (e: any) => void;
        apiDomain?: string;
        regSource?: string;
        regToken?: string;
        aToken?: string;
        finalizeRegistration?: boolean;
        passwordResetToken?: string;
        mobileScreenSet?: string;
        screenSet: string;
        startScreen?: string;
        initialResponse?: IFormResponse;
        initialMethod?: string;
        remember?: boolean;
        allowAccountsLinking?: boolean;
        rememberSessionExpiration?: any;
        sessionExpiration?: any;
        isChild?: boolean;
        parentData?: ScreenSetData;
        cssPrefix?: string;
        ignoreApiQueue?: boolean;
        parentTranslations?: object;
        conflictHandling?: ConflictHandling;
        providerSessionInfo?: IProviderSessionInfo;
        containerID?: string;
        include?: string;
    };
    type IFormResponse = {
        response?: IFormResponse;
        regToken?: string;
        aToken?: string;
        event?: any;
        autoSkip?: boolean;
        operation?: string;
        profile?: IFormData;
        data?: IFormData;
        errorDetails?: string;
        errorMessage?: string[];
        customMessage?: string;
        user?: string;
        secretQuestion?: string;
        errorDetailsCode?: number;
        validationErrors?: IErrorInfo[];
        errorFlags?: string;
        loginID?: string;
        childScreenSetCloseReason?: string;
        providerSessionInfo?: IProviderSessionInfo;
        gig_provider?: string;
        errorCode?: GSErrors;
    };
    type IFormData = {
        rememberMe?: boolean;
    };
    type IErrorInfo = {
        fieldName?: string;
        fieldArrayKeyValue?: string;
        errorCode: GSErrors;
        errorType?: ErrorType;
        errorMessage?: string;
        customMessage?: string;
        errorFlags?: string;
        handled?: boolean;
        field?: IFormInput;
        widget?: IFormWidget;
        isWarn?: boolean;
    };
    type GSErrors = {};
    type ErrorType = {};
    type IFormInput = {
        isCaptcha: boolean;
        getValue(el?: HTMLElement, currentValue?: any): InputValueType;
        getName(isNormalized: boolean, flatten?: boolean): string;
        arrayKeyField: string;
        arrayKeyValue: string;
        getArrayRoot(flatten?: boolean): string;
        fieldName: string;
        normalizedFieldName: string;
        displayName: string;
        isInHiddenContainer(): boolean;
        isHidden(): boolean;
        required(): boolean;
        disabled(): boolean;
        allowEmpty(): boolean;
        instanceElement: HTMLElement;
        validate(callback: IValidationCallback, formData?: any): void;
        validateAsync(formData?: any): Promise<IValidationInfo>;
        addEventListener(eventName: string, handler:Function): any;
        removeEventListener(eventName: string, handler: Function): any;
        getValidityState(): ValidityStates;
        setValidityState(validityState: ValidityStates): any;
        addValidityStateListener(listener: IValidityStateListener): any;
        removeValidityStateListener(listener: IValidityStateListener): any;
        update(element?: HTMLElement, fieldName?: string, isDataField?: boolean): void;
        evaluateConditionalAttributes(): void;
        getMetadata(): {};
        setValue(dataValue: string | boolean, setByScript: boolean): void;
        runOnServerDone(callback: ServerDoneFieldCallback): void;
        fieldnamespace: SchemaName;
        fieldBaseName: string;
    };
    type HTMLElement = {};
    type InputValueType = {};
    type IValidationCallback = {};
    type ValidityStates = {};
    type IValidityStateListener = {};
    type ServerDoneFieldCallback = {};
    type SchemaName = {
        at(index: number): T | undefined;
    };
    type T = {};
    type IFormWidget = {
        _form: BaseForm;
        getFieldsNames(): string[];
        update(): void;
        validateAsync(formData: any): Promise<IValidationInfo>;
        _screen: Screen;
        linkInstanceElement(parent: HTMLElement): any;
        unlinkInstanceElement(): any;
        _parent: ITemplateElementParent;
        unlinkTemplate(): any;
        evaluateExpression(conditionalExpression: IConditionalExpression): any;
        evaluateConditionalAttributes(): any;
        resetLastConditionalValues(): any;
        _screenSet: ScreenSetPlugin;
        warn?(msg: string, id?: string): void;
    };
    type BaseForm = {
        get dataProvider(): IFormDataProvider;
        get submitButtonClicked(): boolean;
    };
    type IFormDataProvider = {
        defaultSubmitParams: object;
        hasProviderSessionInfo: boolean;
        includeParams: string;
        lang: string;
    };
    type IValidationInfo = {
        errorCode: GSErrors;
        field?: IFormInput;
        widget?: IFormWidget;
        errorType?: ErrorType;
        setByScript?: boolean;
        errorMessage?: string;
        isWarning?: boolean;
    };
    type Screen = {
        get variantGroupId(): string;
        get abTestId(): string;
        get abTestingData(): IAbTestingData;
        get variantPercentage(): number | undefined;
        get isOriginalVariant(): boolean;
        get isScreenVariant(): boolean;
        get requestedScreen(): string;
    };
    type IAbTestingData = {
        testId: string;
        variantId: string;
        requestedScreenId: string;
    };
    type ITemplateElementParent = {
        _screenSet: ScreenSetPlugin;
        warn?(msg: string, id?: string): void;
    };
    type ScreenSetPlugin = {
        get providerSessionInfo(): IProviderSessionInfo;
        get regToken(): string;
        get hasProviderSessionInfo(): boolean;
    };
    type IProviderSessionInfo = {
        access_token?: string;
        provider?: string;
        provider_uid?: string;
        idToken?: string;
        code?: string;
        lastName?: string;
        firstName?: string;
    };
    type IConditionalExpression = {
        condition: string;
        defaultValue?: any;
        ignoreError?: boolean;
    };
    type ScreenSetData = {};
    type ConflictHandling = {};

    type plugins = {
        ["showScreenSet"]: (params: IScreenSetParams) => void;
    };
    type APIServerBase = {
        schema: string
    };

    type ServerApiParams<Api extends APIServerBase> = {
        [Key in keyof Schema<Api['schema']>]?: any
    }
    type APIUIBase = {
        methodName: string
    };

    type Plugin<API extends APIUIBase> = API extends {
        methodName: infer methodName;
    } ? methodName extends keyof plugins ? plugins[methodName] :  any: any;
    type UiApiParams<Api extends APIUIBase> = Plugin<Api>;
export type BaseParams =  {
    callback?: (response: any) => void,  errorCallback?: (error: any) => void,
};
    type APIParams<Api> = InferParams<Api> & BaseParams;
    type InferParams<Api> =
        Api extends APIServerBase ? ServerApiParams<Api> :
            Api extends APIUIBase ? UiApiParams<Api> : any;


    type Schema<schema extends string> = Record<Split<schema, "|">[number], any>;


    type Split<S extends string, D extends string> =
        string extends S ? string[] :
            S extends '' ? [] :
                S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

 export namespace accounts {
   export declare function socialLogin(args?: APIParams<{
            methodName: "accounts.socialLogin";
            settings: {
                oauth: true;
                preprocessor: any;
            };
            schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
            requiresSession: false;
            adapterSettings: {
                clearSessionCondition: any;
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;
export  declare function showMyPhotoUI(args?: UiApiParams<{
    methodName: "showMyPhotoUI";
    settings: {
        useBasePlugin: true;
        defaultParams: {
        };
        defaultPopupParams: {
        };
        requiredParams: "";
    };
    jsName: "accounts.plugins.profilePhoto";
    namespace: "accounts";
    className: "profilePhoto.MyPhotoPlugin";
    instanceMethods: {
    };
}>): void;
export declare function initHostedPage(args?: APIParams<{
    methodName: "initHostedPage";
    settings: {
        useBasePlugin: true;
        defaultParams: {
        };
        defaultPopupParams: {
        };
        requiredParams: "";
    };
    jsName: "accounts.plugins.pages";
    namespace: "accounts";
    className: "Pages.PagesPlugin";
    instanceMethods: {
    };
}>): void;
export declare function showScreenSet(params: IScreenSetParams) :void;
export declare function login(args?: APIParams<{
    methodName: "accounts.login";
    settings: {
        riskAssessment: true;
    };
    schema: "loginID|password|sessionExpiration|targetEnv|regToken|include|actionAttributes|profileAttributes|includeUserInfo|includeDynamicSchema|bp_channel_url|captchaToken|blackBoxToken|captchaType|captchaText|loginMode|signKeys|lang|riskContext|aToken";
    requiresSession: false;
    adapterSettings: {
        clearSessionCondition: any;
        forcePost: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function linkAccounts(args?: APIParams<{
    methodName: "accounts.linkAccounts";
    settings: {
    };
    schema: "loginID|password|sessionExpiration|targetEnv|include|regToken|includeUserInfo|bp_channel_url|signKeys";
    requiresSession: false;
    adapterSettings: {
        forcePost: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function notifySocialLogin(args?: APIParams<{
    methodName: "accounts.notifySocialLogin";
    settings: {
    };
    schema: "loginMode|providerSessions|sessionExpiration";
    requiresSession: true;
    adapterSettings: {
        forcePost: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: "providerSessions";
}>): void;
export declare function initRegistration(args?: APIParams<{
    methodName: "accounts.initRegistration";
    settings: {
        preprocessor: any;
    };
    schema: "sdk|isLite|dataCenter";
    requiresSession: false;
    adapterSettings: {
        clearSession: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function initProgression(args?: APIParams<{
    methodName: "accounts.initProgression";
    settings: {
        preprocessor: any;
    };
    schema: "sdk|regToken";
    requiresSession: false;
    adapterSettings: {
        clearSession: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function register(args?: APIParams<{
    methodName: "accounts.register";
    settings: {
        riskAssessment: true;
    };
    schema: "username|email|password|UID|regToken|siteUID|secretQuestion|secretAnswer|regSource|profile|preferences|displayedPreferences|data|captchaText|captchaType|captchaToken|blackBoxToken|lang|hashedPassword|pwHashAlgorithm|skipVerification|finalizeRegistration|targetEnv|sessionExpiration|include|actionAttributes|profileAttributes|includeUserInfo|bp_channel_url|signKeys|subscriptions|communications|addresses";
    requiresSession: false;
    adapterSettings: {
        forcePost: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function finalizeRegistration(args?: APIParams<{
    methodName: "accounts.finalizeRegistration";
    settings: {
    };
    schema: "regToken|targetEnv|include|includeUserInfo|bp_channel_url|allowAccountsLinking|signKeys|subscriptions";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function captchaImage(args?: APIParams<{
    methodName: "accounts.captchaImage";
    settings: {
    };
    schema: "regToken";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function importProfilePhoto(args?: APIParams<{
    methodName: "accounts.importProfilePhoto";
    settings: {
    };
    schema: "regToken|URL|publish";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function setProfilePhoto(args?: APIParams<{
    methodName: "accounts.setProfilePhoto";
    settings: {
    };
    schema: "regToken|publish|photoBytes";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function resetPassword(args?: APIParams<{
    methodName: "accounts.resetPassword";
    settings: {
        riskAssessment: true;
    };
    schema: "lang|loginID|passwordResetToken|secretAnswer|securityFields|newPassword|email|captchaType|captchaToken|blackBoxToken";
    requiresSession: false;
    adapterSettings: {
        forcePost: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function removeProfilePhoto(args?: APIParams<{
    methodName: "accounts.removeProfilePhoto";
    settings: {
    };
    schema: "regToken";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function isAvailableLoginID(args?: APIParams<{
    methodName: "accounts.isAvailableLoginID";
    settings: {
    };
    schema: "loginID";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function resendVerificationCode(args?: APIParams<{
    methodName: "accounts.resendVerificationCode";
    settings: {
    };
    schema: "regToken|email";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getCaptcha(args?: APIParams<{
    methodName: "accounts.getCaptcha";
    settings: {
    };
    schema: "";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getPolicies(args?: APIParams<{
    methodName: "accounts.getPolicies";
    settings: {
        preprocessor: any;
    };
    schema: "sections";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getSchema(args?: APIParams<{
    methodName: "accounts.getSchema";
    settings: {
        preprocessor: any;
    };
    schema: "sections|schemaType";
    requiresSession: false;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getSiteConsentDetails(args?: APIParams<{
    methodName: "accounts.getSiteConsentDetails";
    settings: {
        preprocessor: any;
    };
    schema: "";
    requiresSession: false;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getLegalStatements(args?: APIParams<{
    methodName: "accounts.getLegalStatements";
    settings: {
        preprocessor: any;
    };
    schema: "consentId|lang";
    requiresSession: false;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function verifyLogin(args?: APIParams<{
    methodName: "accounts.verifyLogin";
    settings: {
    };
    schema: "include|extraProfileFields|targetEnv";
    requiresSession: true;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getAccountInfo(args?: APIParams<{
    methodName: "accounts.getAccountInfo";
    settings: {
    };
    schema: "include|extraProfileFields|regToken|lang|includeCommunications";
    requiresSession: true;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: "regToken";
}>): void;
export declare function setAccountInfo(args?: APIParams<{
    methodName: "accounts.setAccountInfo";
    settings: {
        riskAssessment: true;
    };
    schema: "profile|preferences|displayedPreferences|data|regToken|verifyToken|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|conflictHandling|tfaStatus|rba|subscriptions|communications|preferences|lang|captchaToken|blackBoxToken|captchaType|customIdentifiers|addresses";
    requiresSession: true;
    adapterSettings: {
        forcePost: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: "regToken";
}>): void;
export declare function logout(args?: APIParams<{
    methodName: "accounts.logout";
    settings: {
        preprocessor: any;
        disableCache: true;
    };
    schema: "signIDs|samlContext|sustainLogoutURLs";
    requiresSession: true;
    adapterSettings: {
        requiresSession: any;
        forceHttps: true;
    };
    altSessionParams: undefined;
}>): void;
export declare function search(args?: APIParams<{
    methodName: "accounts.search";
    settings: {
    };
    schema: "expTime|querySig|query";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getScreenSets(args?: APIParams<{
    methodName: "accounts.getScreenSets";
    settings: {
        preprocessor: any;
    };
    schema: "screenSetIDs|include|lang|screenSetVersion";
    requiresSession: false;
    adapterSettings: {
        useHttpStatusCodes: true;
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getConflictingAccount(args?: APIParams<{
    methodName: "accounts.getConflictingAccount";
    settings: {
    };
    schema: "regToken|loginID";
    requiresSession: undefined;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function resetSitePreferences(args?: APIParams<{
    methodName: "accounts.resetSitePreferences";
    settings: {
        postprocessor: any;
    };
    schema: "";
    requiresSession: true;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;
export declare function getJWT(args?: APIParams<{
    methodName: "accounts.getJWT";
    settings: {
    };
    schema: "fields|expiration|audience";
    requiresSession: true;
    adapterSettings: {
        forceHttps: true;
        requiresSession: any;
    };
    altSessionParams: undefined;
}>): void;

export namespace b2b {
   export declare function registerOrganization(args?: APIParams<{
        methodName: "accounts.b2b.registerOrganization";
        settings: {
        };
        schema: "organization|requester";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getOrganizationSchema(args?: APIParams<{
        methodName: "accounts.b2b.getOrganizationSchema";
        settings: {
            preprocessor: any;
        };
        schema: "";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function delegatedAdminLogin(args?: APIParams<{
        methodName: "accounts.b2b.delegatedAdminLogin";
        settings: {
        };
        schema: "orgId|lang";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getOrganizationInfo(args?: APIParams<{
        methodName: "accounts.b2b.getOrganizationInfo";
        settings: {
        };
        schema: "orgId|bpid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function setOrganizationContext(args?: APIParams<{
        methodName: "accounts.b2b.setOrganizationContext";
        settings: {
        };
        schema: "bpid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getOrganizationContext(args?: APIParams<{
        methodName: "accounts.b2b.getOrganizationContext";
        settings: {
        };
        schema: "";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

    export namespace auth {
       export declare function getAssets(args?: APIParams<{
            methodName: "accounts.b2b.auth.getAssets";
            settings: {
            };
            schema: "appId|bpid|orgId|includePolicies|environments";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

}

export namespace sso {
   export declare function login(args?: APIParams<{
        methodName: "accounts.sso.login";
        settings: {
            oauth: true;
        };
        schema: "redirectURL|state|authFlow|context|useChildContext";
        requiresSession: false;
        adapterSettings: {
            oauthMode: number;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace tfa {
   export declare function getProviders(args?: APIParams<{
        methodName: "accounts.tfa.getProviders";
        settings: {
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

   export declare function initTFA(args?: APIParams<{
        methodName: "accounts.tfa.initTFA";
        settings: {
        };
        schema: "provider|mode|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function finalizeTFA(args?: APIParams<{
        methodName: "accounts.tfa.finalizeTFA";
        settings: {
        };
        schema: "gigyaAssertion|providerAssertion|tempDevice|regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

   export declare function deactivateProvider(args?: APIParams<{
        methodName: "accounts.tfa.deactivateProvider";
        settings: {
        };
        schema: "provider";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function unregisterDevice(args?: APIParams<{
        methodName: "accounts.tfa.unregisterDevice";
        settings: {
        };
        schema: "allDevices";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

    export namespace backupcodes {
       export declare function get(args?: APIParams<{
            methodName: "accounts.tfa.backupcodes.get";
            settings: {
            };
            schema: "gigyaAssertion";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function create(args?: APIParams<{
            methodName: "accounts.tfa.backupcodes.create";
            settings: {
            };
            schema: "gigyaAssertion";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function verify(args?: APIParams<{
            methodName: "accounts.tfa.backupcodes.verify";
            settings: {
            };
            schema: "gigyaAssertion|code|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace phone {
       export declare function getRegisteredPhoneNumbers(args?: APIParams<{
            methodName: "accounts.tfa.phone.getRegisteredPhoneNumbers";
            settings: {
                preprocessor: any;
            };
            schema: "gigyaAssertion";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function removePhone(args?: APIParams<{
            methodName: "accounts.tfa.phone.removePhone";
            settings: {
            };
            schema: "gigyaAssertion|phoneId";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function sendVerificationCode(args?: APIParams<{
            methodName: "accounts.tfa.phone.sendVerificationCode";
            settings: {
            };
            schema: "gigyaAssertion|lang|phoneID|phone|method|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function completeVerification(args?: APIParams<{
            methodName: "accounts.tfa.phone.completeVerification";
            settings: {
            };
            schema: "gigyaAssertion|phvToken|code|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace email {
       export declare function getEmails(args?: APIParams<{
            methodName: "accounts.tfa.email.getEmails";
            settings: {
                preprocessor: any;
            };
            schema: "gigyaAssertion";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function sendVerificationCode(args?: APIParams<{
            methodName: "accounts.tfa.email.sendVerificationCode";
            settings: {
            };
            schema: "emailID|gigyaAssertion|lang|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function completeVerification(args?: APIParams<{
            methodName: "accounts.tfa.email.completeVerification";
            settings: {
            };
            schema: "gigyaAssertion|phvToken|code|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace totp {
       export declare function register(args?: APIParams<{
            methodName: "accounts.tfa.totp.register";
            settings: {
            };
            schema: "gigyaAssertion|includeSecret";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function verify(args?: APIParams<{
            methodName: "accounts.tfa.totp.verify";
            settings: {
            };
            schema: "gigyaAssertion|sctToken|code|name|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function getRegistered(args?: APIParams<{
            methodName: "accounts.tfa.totp.getRegistered";
            settings: {
                preprocessor: any;
            };
            schema: "gigyaAssertion";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function remove(args?: APIParams<{
            methodName: "accounts.tfa.totp.remove";
            settings: {
            };
            schema: "gigyaAssertion|id";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace push {
       export declare function isVerified(args?: APIParams<{
            methodName: "accounts.tfa.push.isVerified";
            settings: {
            };
            schema: "gigyaAssertion|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function sendVerification(args?: APIParams<{
            methodName: "accounts.tfa.push.sendVerification";
            settings: {
            };
            schema: "gigyaAssertion|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

}

export namespace groups {
   export declare function getSchema(args?: APIParams<{
        methodName: "accounts.groups.getSchema";
        settings: {
        };
        schema: "model";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function registerGroup(args?: APIParams<{
        methodName: "accounts.groups.registerGroup";
        settings: {
        };
        schema: "model|groupId|groupData";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function setGroupInfo(args?: APIParams<{
        methodName: "accounts.groups.setGroupInfo";
        settings: {
        };
        schema: "model|groupId|groupData";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getGroupInfo(args?: APIParams<{
        methodName: "accounts.groups.getGroupInfo";
        settings: {
        };
        schema: "model|groupId";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function deleteGroup(args?: APIParams<{
        methodName: "accounts.groups.deleteGroup";
        settings: {
        };
        schema: "model|groupId";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function setGroupMemberInfo(args?: APIParams<{
        methodName: "accounts.groups.setGroupMemberInfo";
        settings: {
        };
        schema: "model|groupId|uid|relationshipData|permissions";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getGroupMemberInfo(args?: APIParams<{
        methodName: "accounts.groups.getGroupMemberInfo";
        settings: {
        };
        schema: "model|groupId|uid|include";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function removeMember(args?: APIParams<{
        methodName: "accounts.groups.removeMember";
        settings: {
        };
        schema: "model|groupId|uid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getAllMemberGroups(args?: APIParams<{
        methodName: "accounts.groups.getAllMemberGroups";
        settings: {
        };
        schema: "uid|flatNestedFields";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function searchGroupMembers(args?: APIParams<{
        methodName: "accounts.groups.searchGroupMembers";
        settings: {
        };
        schema: "model|groupId|limit|start";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function createInvitation(args?: APIParams<{
        methodName: "accounts.groups.createInvitation";
        settings: {
        };
        schema: "model|groupId|isOneTime";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function invitationConfirm(args?: APIParams<{
        methodName: "accounts.groups.invitationConfirm";
        settings: {
        };
        schema: "invitationId";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function finalizeInvitation(args?: APIParams<{
        methodName: "accounts.groups.finalizeInvitation";
        settings: {
        };
        schema: "token";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace otp {
   export declare function sendCode(args?: APIParams<{
        methodName: "accounts.otp.sendCode";
        settings: {
            riskAssessment: true;
            preprocessor: any;
        };
        schema: "regToken|phoneNumber|email|lang|captchaToken|captchaType|blackBoxToken|dataCenter|phvToken";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function login(args?: APIParams<{
        methodName: "accounts.otp.login";
        settings: {
        };
        schema: "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function update(args?: APIParams<{
        methodName: "accounts.otp.update";
        settings: {
        };
        schema: "vToken|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace auth {
   export declare function guest(args?: APIParams<{
        methodName: "accounts.auth.guest";
        settings: {
        };
        schema: "identifier|identifierType";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getMethods(args?: APIParams<{
        methodName: "accounts.auth.getMethods";
        settings: {
        };
        schema: "identifier|aToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function login(args?: APIParams<{
        methodName: "accounts.auth.login";
        settings: {
        };
        schema: "accessToken|sessionExpiration|targetEnv|include|includeUserInfo|loginMode|lang";
        requiresSession: false;
        adapterSettings: {
            clearSessionCondition: any;
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

    export namespace otp {
       export declare function verify(args?: APIParams<{
            methodName: "accounts.auth.otp.verify";
            settings: {
            };
            schema: "vToken|code";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function authenticate(args?: APIParams<{
            methodName: "accounts.auth.otp.authenticate";
            settings: {
            };
            schema: "vToken|code";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

        export namespace email {
           export declare function sendCode(args?: APIParams<{
                methodName: "accounts.auth.otp.email.sendCode";
                settings: {
                };
                schema: "email|lang";
                requiresSession: false;
                adapterSettings: {
                    forceHttps: true;
                    requiresSession: any;
                };
                altSessionParams: undefined;
            }>): void;

           export declare function login(args?: APIParams<{
                methodName: "accounts.auth.otp.email.login";
                settings: {
                };
                schema: "code|vToken|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
                requiresSession: false;
                adapterSettings: {
                    forcePost: true;
                    forceHttps: true;
                    requiresSession: any;
                };
                altSessionParams: undefined;
            }>): void;

        }

    }

    export namespace push {
       export declare function sendVerification(args?: APIParams<{
            methodName: "accounts.auth.push.sendVerification";
            settings: {
            };
            schema: "identifier";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function isVerified(args?: APIParams<{
            methodName: "accounts.auth.push.isVerified";
            settings: {
            };
            schema: "vToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace fido {
       export declare function initRegisterCredentials(args?: APIParams<{
            methodName: "accounts.auth.fido.initRegisterCredentials";
            settings: {
                preprocessor: any;
            };
            schema: "regToken|aToken";
            requiresSession: true;
            adapterSettings: {
                clearSessionCondition: any;
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: "regToken|aToken";
        }>): void;

       export declare function registerCredentials(args?: APIParams<{
            methodName: "accounts.auth.fido.registerCredentials";
            settings: {
                preprocessor: any;
            };
            schema: "token|attestation|deviceName|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function getAssertionOptions(args?: APIParams<{
            methodName: "accounts.auth.fido.getAssertionOptions";
            settings: {
            };
            schema: "";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function verifyAssertion(args?: APIParams<{
            methodName: "accounts.auth.fido.verifyAssertion";
            settings: {
            };
            schema: "token|authenticatorAssertion";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function getCredentials(args?: APIParams<{
            methodName: "accounts.auth.fido.getCredentials";
            settings: {
                preprocessor: any;
            };
            schema: "regToken";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: "regToken";
        }>): void;

       export declare function removeCredential(args?: APIParams<{
            methodName: "accounts.auth.fido.removeCredential";
            settings: {
                preprocessor: any;
            };
            schema: "credentialId|regToken";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: "regToken";
        }>): void;

    }

}

export namespace identifier {
   export declare function createToken(args?: APIParams<{
        methodName: "accounts.identifier.createToken";
        settings: {
        };
        schema: "identifier|identifierType";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace identity {
   export declare function authorize(args?: APIParams<{
        methodName: "accounts.identity.authorize";
        settings: {
        };
        schema: "authorization_details|grant_type";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace session {
   export declare function verify(args?: APIParams<{
        methodName: "accounts.session.verify";
        settings: {
        };
        schema: "";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

}
export namespace socialize {
    export declare function addEventHandlers(param: { onLogin: (event: ILoginEvent) => void; onLogout: (event:ILogoutEvent) => void , [event:string]: <TEvent extends  ILoginEvent>(event: TEvent) => void }) : void;

    
export declare function login(args?: APIParams<{
        methodName: "socialize.login";
        settings: {
            oauth: true;
            preprocessor: any;
        };
        schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
        requiresSession: false;
        adapterSettings: {
            clearSessionCondition: any;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function addConnection(args?: APIParams<{
        methodName: "socialize.addConnection";
        settings: {
            oauth: true;
        };
        schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function requestPermissions(args?: APIParams<{
        methodName: "socialize.requestPermissions";
        settings: {
            oauth: true;
            defaultParams: {
                forcePermissions: true;
            };
        };
        schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function showLoginUI_v2(args?: APIParams<{
        methodName: "showLoginUI_v2";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.login_v2";
        namespace: "socialize";
        className: "login_v2.LoginPlugin";
        instanceMethods: {
        };
    }>): void;

export declare function showAddConnectionsUI_v2(args?: APIParams<{
        methodName: "showAddConnectionsUI_v2";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.login_v2";
        namespace: "socialize";
        className: "login_v2.LoginPlugin";
        instanceMethods: {
        };
    }>): void;

export declare function showEditConnectionsUI(args?: APIParams<{
        methodName: "showEditConnectionsUI";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.edit";
        namespace: "socialize";
        className: "editConnections.EditConnectionPlugin";
        instanceMethods: {
        };
    }>): void;

export declare function getAvailableProviders(args?: APIParams<{
        methodName: "socialize.getAvailableProviders";
        settings: {
        };
        schema: "enabledProviders|disabledProviders|requiredCapabilities";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function notifyLogin(args?: APIParams<{
        methodName: "socialize.notifyLogin";
        settings: {
        };
        schema: "siteUID|UIDTimestamp|UIDSig|UIDNonce|provider|authToken|tokenSecret|regSource|tokenExpiration|sessionHandle|sessionHandleExpiration|userInfo|providerSessions|sessionExpiration|authCode|includeAllIdentitiesincludeiRank|group|settings|extraFields|signIDs|newUser|actionAttributes|profileAttributes|bp_channel_url|lang|signKeys";
        requiresSession: false;
        adapterSettings: {
            clearSession: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function convertAction(args?: APIParams<{
        methodName: "socialize.convertAction";
        settings: {
        };
        schema: "userAction|[providerCapability=actions]UserAction|provider";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function deleteAccount(args?: APIParams<{
        methodName: "socialize.deleteAccount";
        settings: {
        };
        schema: undefined;
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function delUserSettings(args?: APIParams<{
        methodName: "socialize.delUserSettings";
        settings: {
        };
        schema: "group|settings";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function getContacts(args?: APIParams<{
        methodName: "socialize.getContacts";
        settings: {
        };
        schema: "enabledProviders|disabledProviders";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function getRawData(args?: APIParams<{
        methodName: "socialize.getRawData";
        settings: {
        };
        schema: "provider|UID|fields|dataFormat|path";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function getSessionInfo(args?: APIParams<{
        methodName: "socialize.getSessionInfo";
        settings: {
        };
        schema: "provider|paddingMode|encrypt|signIDs|encryptAll";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function getUserInfo(args?: APIParams<{
        methodName: "socialize.getUserInfo";
        settings: {
        };
        schema: "enabledProviders|disabledProviders|signIDs|includeiRank|includeAllIdentities|extraFields|group|settings|includeOpenidUID|include";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function checkin(args?: APIParams<{
        methodName: "socialize.checkin";
        settings: {
        };
        schema: "enabledProviders|disabledProviders|placeID|comment|latitude|longitude|actionAttributes|profileAttributes";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function logout(args?: APIParams<{
        methodName: "socialize.logout";
        settings: {
            preprocessor: any;
            disableCache: true;
        };
        schema: "signIDs|samlContext|sustainLogoutURLs";
        requiresSession: true;
        adapterSettings: {
            requiresSession: any;
            forceHttps: true;
        };
        altSessionParams: undefined;
    }>): void;

export declare function notifyRegistration(args?: APIParams<{
        methodName: "socialize.notifyRegistration";
        settings: {
        };
        schema: "siteUID|UIDTimestamp|UIDSig";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function removeConnection(args?: APIParams<{
        methodName: "socialize.removeConnection";
        settings: {
        };
        schema: "provider|lastIdentityHandling|removeLoginID";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function setUID(args?: APIParams<{
        methodName: "socialize.setUID";
        settings: {
        };
        schema: "siteUID|UIDTimestamp|UIDSig";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function unlinkAccounts(args?: APIParams<{
        methodName: "socialize.unlinkAccounts";
        settings: {
        };
        schema: undefined;
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function facebookGraphOperation(args?: APIParams<{
        methodName: "socialize.facebookGraphOperation";
        settings: {
        };
        schema: "graphPath|graphParams|authRequired|method|authType";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

export declare function notifySSOLogin(args?: APIParams<{
        methodName: "socialize.notifySSOLogin";
        settings: {
        };
        schema: "bp_channel_url";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

 
export namespace gcs {
  export declare function getUserData(args?: APIParams<{
        methodName: "gcs.getUserData";
        settings: {
        };
        schema: "type|fields";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function setUserData(args?: APIParams<{
        methodName: "gcs.setUserData";
        settings: {
        };
        schema: "data|type|updateBehavior";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function search(args?: APIParams<{
        methodName: "gcs.search";
        settings: {
        };
        schema: "expTime|querySig|query";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getSchema(args?: APIParams<{
        methodName: "gcs.getSchema";
        settings: {
        };
        schema: "schemaType";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace b2b {
   export declare function registerOrganization(args?: APIParams<{
        methodName: "accounts.b2b.registerOrganization";
        settings: {
        };
        schema: "organization|requester";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getOrganizationSchema(args?: APIParams<{
        methodName: "accounts.b2b.getOrganizationSchema";
        settings: {
            preprocessor: any;
        };
        schema: "";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function delegatedAdminLogin(args?: APIParams<{
        methodName: "accounts.b2b.delegatedAdminLogin";
        settings: {
        };
        schema: "orgId|lang";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getOrganizationInfo(args?: APIParams<{
        methodName: "accounts.b2b.getOrganizationInfo";
        settings: {
        };
        schema: "orgId|bpid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function setOrganizationContext(args?: APIParams<{
        methodName: "accounts.b2b.setOrganizationContext";
        settings: {
        };
        schema: "bpid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getOrganizationContext(args?: APIParams<{
        methodName: "accounts.b2b.getOrganizationContext";
        settings: {
        };
        schema: "";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

    export namespace auth {
       export declare function getAssets(args?: APIParams<{
            methodName: "accounts.b2b.auth.getAssets";
            settings: {
            };
            schema: "appId|bpid|orgId|includePolicies|environments";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

}

export namespace suggestions {
   export declare function get(args?: APIParams<{
        methodName: "accounts.address.suggestions.get";
        settings: {
        };
        schema: "address|country|apiKey|suggestionreply|longitude|latitude";
        requiresSession: undefined;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace sso {
   export declare function login(args?: APIParams<{
        methodName: "accounts.sso.login";
        settings: {
            oauth: true;
        };
        schema: "redirectURL|state|authFlow|context|useChildContext";
        requiresSession: false;
        adapterSettings: {
            oauthMode: number;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace tfa {
   export declare function getProviders(args?: APIParams<{
        methodName: "accounts.tfa.getProviders";
        settings: {
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

   export declare function initTFA(args?: APIParams<{
        methodName: "accounts.tfa.initTFA";
        settings: {
        };
        schema: "provider|mode|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function finalizeTFA(args?: APIParams<{
        methodName: "accounts.tfa.finalizeTFA";
        settings: {
        };
        schema: "gigyaAssertion|providerAssertion|tempDevice|regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

   export declare function deactivateProvider(args?: APIParams<{
        methodName: "accounts.tfa.deactivateProvider";
        settings: {
        };
        schema: "provider";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function unregisterDevice(args?: APIParams<{
        methodName: "accounts.tfa.unregisterDevice";
        settings: {
        };
        schema: "allDevices";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

    export namespace backupcodes {
       export declare function get(args?: APIParams<{
            methodName: "accounts.tfa.backupcodes.get";
            settings: {
            };
            schema: "gigyaAssertion";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function create(args?: APIParams<{
            methodName: "accounts.tfa.backupcodes.create";
            settings: {
            };
            schema: "gigyaAssertion";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function verify(args?: APIParams<{
            methodName: "accounts.tfa.backupcodes.verify";
            settings: {
            };
            schema: "gigyaAssertion|code|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace phone {
       export declare function getRegisteredPhoneNumbers(args?: APIParams<{
            methodName: "accounts.tfa.phone.getRegisteredPhoneNumbers";
            settings: {
                preprocessor: any;
            };
            schema: "gigyaAssertion";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function removePhone(args?: APIParams<{
            methodName: "accounts.tfa.phone.removePhone";
            settings: {
            };
            schema: "gigyaAssertion|phoneId";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function sendVerificationCode(args?: APIParams<{
            methodName: "accounts.tfa.phone.sendVerificationCode";
            settings: {
            };
            schema: "gigyaAssertion|lang|phoneID|phone|method|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function completeVerification(args?: APIParams<{
            methodName: "accounts.tfa.phone.completeVerification";
            settings: {
            };
            schema: "gigyaAssertion|phvToken|code|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace email {
       export declare function getEmails(args?: APIParams<{
            methodName: "accounts.tfa.email.getEmails";
            settings: {
                preprocessor: any;
            };
            schema: "gigyaAssertion";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function sendVerificationCode(args?: APIParams<{
            methodName: "accounts.tfa.email.sendVerificationCode";
            settings: {
            };
            schema: "emailID|gigyaAssertion|lang|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function completeVerification(args?: APIParams<{
            methodName: "accounts.tfa.email.completeVerification";
            settings: {
            };
            schema: "gigyaAssertion|phvToken|code|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace totp {
       export declare function register(args?: APIParams<{
            methodName: "accounts.tfa.totp.register";
            settings: {
            };
            schema: "gigyaAssertion|includeSecret";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function verify(args?: APIParams<{
            methodName: "accounts.tfa.totp.verify";
            settings: {
            };
            schema: "gigyaAssertion|sctToken|code|name|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function getRegistered(args?: APIParams<{
            methodName: "accounts.tfa.totp.getRegistered";
            settings: {
                preprocessor: any;
            };
            schema: "gigyaAssertion";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function remove(args?: APIParams<{
            methodName: "accounts.tfa.totp.remove";
            settings: {
            };
            schema: "gigyaAssertion|id";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace push {
       export declare function isVerified(args?: APIParams<{
            methodName: "accounts.tfa.push.isVerified";
            settings: {
            };
            schema: "gigyaAssertion|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function sendVerification(args?: APIParams<{
            methodName: "accounts.tfa.push.sendVerification";
            settings: {
            };
            schema: "gigyaAssertion|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

}

export namespace backupcodes {
   export declare function get(args?: APIParams<{
        methodName: "accounts.tfa.backupcodes.get";
        settings: {
        };
        schema: "gigyaAssertion";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function create(args?: APIParams<{
        methodName: "accounts.tfa.backupcodes.create";
        settings: {
        };
        schema: "gigyaAssertion";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function verify(args?: APIParams<{
        methodName: "accounts.tfa.backupcodes.verify";
        settings: {
        };
        schema: "gigyaAssertion|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace phone {
   export declare function getRegisteredPhoneNumbers(args?: APIParams<{
        methodName: "accounts.tfa.phone.getRegisteredPhoneNumbers";
        settings: {
            preprocessor: any;
        };
        schema: "gigyaAssertion";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function removePhone(args?: APIParams<{
        methodName: "accounts.tfa.phone.removePhone";
        settings: {
        };
        schema: "gigyaAssertion|phoneId";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function sendVerificationCode(args?: APIParams<{
        methodName: "accounts.tfa.phone.sendVerificationCode";
        settings: {
        };
        schema: "gigyaAssertion|lang|phoneID|phone|method|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function completeVerification(args?: APIParams<{
        methodName: "accounts.tfa.phone.completeVerification";
        settings: {
        };
        schema: "gigyaAssertion|phvToken|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace email {
   export declare function getEmails(args?: APIParams<{
        methodName: "accounts.tfa.email.getEmails";
        settings: {
            preprocessor: any;
        };
        schema: "gigyaAssertion";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function sendVerificationCode(args?: APIParams<{
        methodName: "accounts.tfa.email.sendVerificationCode";
        settings: {
        };
        schema: "emailID|gigyaAssertion|lang|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function completeVerification(args?: APIParams<{
        methodName: "accounts.tfa.email.completeVerification";
        settings: {
        };
        schema: "gigyaAssertion|phvToken|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace totp {
   export declare function register(args?: APIParams<{
        methodName: "accounts.tfa.totp.register";
        settings: {
        };
        schema: "gigyaAssertion|includeSecret";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function verify(args?: APIParams<{
        methodName: "accounts.tfa.totp.verify";
        settings: {
        };
        schema: "gigyaAssertion|sctToken|code|name|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getRegistered(args?: APIParams<{
        methodName: "accounts.tfa.totp.getRegistered";
        settings: {
            preprocessor: any;
        };
        schema: "gigyaAssertion";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function remove(args?: APIParams<{
        methodName: "accounts.tfa.totp.remove";
        settings: {
        };
        schema: "gigyaAssertion|id";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace push {
   export declare function isVerified(args?: APIParams<{
        methodName: "accounts.tfa.push.isVerified";
        settings: {
        };
        schema: "gigyaAssertion|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function sendVerification(args?: APIParams<{
        methodName: "accounts.tfa.push.sendVerification";
        settings: {
        };
        schema: "gigyaAssertion|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace auth {
   export declare function getAssets(args?: APIParams<{
        methodName: "accounts.b2b.auth.getAssets";
        settings: {
        };
        schema: "appId|bpid|orgId|includePolicies|environments";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace groups {
   export declare function getSchema(args?: APIParams<{
        methodName: "accounts.groups.getSchema";
        settings: {
        };
        schema: "model";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function registerGroup(args?: APIParams<{
        methodName: "accounts.groups.registerGroup";
        settings: {
        };
        schema: "model|groupId|groupData";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function setGroupInfo(args?: APIParams<{
        methodName: "accounts.groups.setGroupInfo";
        settings: {
        };
        schema: "model|groupId|groupData";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getGroupInfo(args?: APIParams<{
        methodName: "accounts.groups.getGroupInfo";
        settings: {
        };
        schema: "model|groupId";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function deleteGroup(args?: APIParams<{
        methodName: "accounts.groups.deleteGroup";
        settings: {
        };
        schema: "model|groupId";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function setGroupMemberInfo(args?: APIParams<{
        methodName: "accounts.groups.setGroupMemberInfo";
        settings: {
        };
        schema: "model|groupId|uid|relationshipData|permissions";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getGroupMemberInfo(args?: APIParams<{
        methodName: "accounts.groups.getGroupMemberInfo";
        settings: {
        };
        schema: "model|groupId|uid|include";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function removeMember(args?: APIParams<{
        methodName: "accounts.groups.removeMember";
        settings: {
        };
        schema: "model|groupId|uid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getAllMemberGroups(args?: APIParams<{
        methodName: "accounts.groups.getAllMemberGroups";
        settings: {
        };
        schema: "uid|flatNestedFields";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function searchGroupMembers(args?: APIParams<{
        methodName: "accounts.groups.searchGroupMembers";
        settings: {
        };
        schema: "model|groupId|limit|start";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function createInvitation(args?: APIParams<{
        methodName: "accounts.groups.createInvitation";
        settings: {
        };
        schema: "model|groupId|isOneTime";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function invitationConfirm(args?: APIParams<{
        methodName: "accounts.groups.invitationConfirm";
        settings: {
        };
        schema: "invitationId";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function finalizeInvitation(args?: APIParams<{
        methodName: "accounts.groups.finalizeInvitation";
        settings: {
        };
        schema: "token";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace otp {
   export declare function sendCode(args?: APIParams<{
        methodName: "accounts.otp.sendCode";
        settings: {
            riskAssessment: true;
            preprocessor: any;
        };
        schema: "regToken|phoneNumber|email|lang|captchaToken|captchaType|blackBoxToken|dataCenter|phvToken";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function login(args?: APIParams<{
        methodName: "accounts.otp.login";
        settings: {
        };
        schema: "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function update(args?: APIParams<{
        methodName: "accounts.otp.update";
        settings: {
        };
        schema: "vToken|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace auth {
   export declare function guest(args?: APIParams<{
        methodName: "accounts.auth.guest";
        settings: {
        };
        schema: "identifier|identifierType";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getMethods(args?: APIParams<{
        methodName: "accounts.auth.getMethods";
        settings: {
        };
        schema: "identifier|aToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function login(args?: APIParams<{
        methodName: "accounts.auth.login";
        settings: {
        };
        schema: "accessToken|sessionExpiration|targetEnv|include|includeUserInfo|loginMode|lang";
        requiresSession: false;
        adapterSettings: {
            clearSessionCondition: any;
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

    export namespace otp {
       export declare function verify(args?: APIParams<{
            methodName: "accounts.auth.otp.verify";
            settings: {
            };
            schema: "vToken|code";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function authenticate(args?: APIParams<{
            methodName: "accounts.auth.otp.authenticate";
            settings: {
            };
            schema: "vToken|code";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

        export namespace email {
           export declare function sendCode(args?: APIParams<{
                methodName: "accounts.auth.otp.email.sendCode";
                settings: {
                };
                schema: "email|lang";
                requiresSession: false;
                adapterSettings: {
                    forceHttps: true;
                    requiresSession: any;
                };
                altSessionParams: undefined;
            }>): void;

           export declare function login(args?: APIParams<{
                methodName: "accounts.auth.otp.email.login";
                settings: {
                };
                schema: "code|vToken|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
                requiresSession: false;
                adapterSettings: {
                    forcePost: true;
                    forceHttps: true;
                    requiresSession: any;
                };
                altSessionParams: undefined;
            }>): void;

        }

    }

    export namespace push {
       export declare function sendVerification(args?: APIParams<{
            methodName: "accounts.auth.push.sendVerification";
            settings: {
            };
            schema: "identifier";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function isVerified(args?: APIParams<{
            methodName: "accounts.auth.push.isVerified";
            settings: {
            };
            schema: "vToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

    export namespace fido {
       export declare function initRegisterCredentials(args?: APIParams<{
            methodName: "accounts.auth.fido.initRegisterCredentials";
            settings: {
                preprocessor: any;
            };
            schema: "regToken|aToken";
            requiresSession: true;
            adapterSettings: {
                clearSessionCondition: any;
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: "regToken|aToken";
        }>): void;

       export declare function registerCredentials(args?: APIParams<{
            methodName: "accounts.auth.fido.registerCredentials";
            settings: {
                preprocessor: any;
            };
            schema: "token|attestation|deviceName|regToken";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function getAssertionOptions(args?: APIParams<{
            methodName: "accounts.auth.fido.getAssertionOptions";
            settings: {
            };
            schema: "";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function verifyAssertion(args?: APIParams<{
            methodName: "accounts.auth.fido.verifyAssertion";
            settings: {
            };
            schema: "token|authenticatorAssertion";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function getCredentials(args?: APIParams<{
            methodName: "accounts.auth.fido.getCredentials";
            settings: {
                preprocessor: any;
            };
            schema: "regToken";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: "regToken";
        }>): void;

       export declare function removeCredential(args?: APIParams<{
            methodName: "accounts.auth.fido.removeCredential";
            settings: {
                preprocessor: any;
            };
            schema: "credentialId|regToken";
            requiresSession: true;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: "regToken";
        }>): void;

    }

}

export namespace otp {
   export declare function verify(args?: APIParams<{
        methodName: "accounts.auth.otp.verify";
        settings: {
        };
        schema: "vToken|code";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function authenticate(args?: APIParams<{
        methodName: "accounts.auth.otp.authenticate";
        settings: {
        };
        schema: "vToken|code";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

    export namespace email {
       export declare function sendCode(args?: APIParams<{
            methodName: "accounts.auth.otp.email.sendCode";
            settings: {
            };
            schema: "email|lang";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function login(args?: APIParams<{
            methodName: "accounts.auth.otp.email.login";
            settings: {
            };
            schema: "code|vToken|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
            requiresSession: false;
            adapterSettings: {
                forcePost: true;
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

}

export namespace push {
   export declare function sendVerification(args?: APIParams<{
        methodName: "accounts.auth.push.sendVerification";
        settings: {
        };
        schema: "identifier";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function isVerified(args?: APIParams<{
        methodName: "accounts.auth.push.isVerified";
        settings: {
        };
        schema: "vToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace email {
   export declare function send(args?: APIParams<{
        methodName: "accounts.auth.magiclink.email.send";
        settings: {
        };
        schema: "email|context|lang";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function login(args?: APIParams<{
        methodName: "accounts.auth.magiclink.email.login";
        settings: {
        };
        schema: "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace email {
   export declare function sendCode(args?: APIParams<{
        methodName: "accounts.auth.otp.email.sendCode";
        settings: {
        };
        schema: "email|lang";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function login(args?: APIParams<{
        methodName: "accounts.auth.otp.email.login";
        settings: {
        };
        schema: "code|vToken|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace identifier {
   export declare function createToken(args?: APIParams<{
        methodName: "accounts.identifier.createToken";
        settings: {
        };
        schema: "identifier|identifierType";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace identity {
   export declare function authorize(args?: APIParams<{
        methodName: "accounts.identity.authorize";
        settings: {
        };
        schema: "authorization_details|grant_type";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace fido {
   export declare function initRegisterCredentials(args?: APIParams<{
        methodName: "accounts.auth.fido.initRegisterCredentials";
        settings: {
            preprocessor: any;
        };
        schema: "regToken|aToken";
        requiresSession: true;
        adapterSettings: {
            clearSessionCondition: any;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken|aToken";
    }>): void;

   export declare function registerCredentials(args?: APIParams<{
        methodName: "accounts.auth.fido.registerCredentials";
        settings: {
            preprocessor: any;
        };
        schema: "token|attestation|deviceName|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getAssertionOptions(args?: APIParams<{
        methodName: "accounts.auth.fido.getAssertionOptions";
        settings: {
        };
        schema: "";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function verifyAssertion(args?: APIParams<{
        methodName: "accounts.auth.fido.verifyAssertion";
        settings: {
        };
        schema: "token|authenticatorAssertion";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getCredentials(args?: APIParams<{
        methodName: "accounts.auth.fido.getCredentials";
        settings: {
            preprocessor: any;
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

   export declare function removeCredential(args?: APIParams<{
        methodName: "accounts.auth.fido.removeCredential";
        settings: {
            preprocessor: any;
        };
        schema: "credentialId|regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

}

export namespace session {
   export declare function verify(args?: APIParams<{
        methodName: "accounts.session.verify";
        settings: {
        };
        schema: "";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace oauth {
   export declare function register(args?: APIParams<{
        methodName: "oauth.register";
        settings: {
        };
        schema: "lang|regSource|cid|context|sessionExpiration|userInfo|verifyToken|authMode";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            useBearerToken: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function connect(args?: APIParams<{
        methodName: "oauth.connect";
        settings: {
            preprocessor: any;
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forcePost: true;
            useBearerToken: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

   export declare function disconnect(args?: APIParams<{
        methodName: "oauth.disconnect";
        settings: {
            preprocessor: any;
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forcePost: true;
            useBearerToken: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

   export declare function authorize(args?: APIParams<{
        methodName: "oauth.authorize";
        settings: {
        };
        schema: "response_type|authMode";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            useBearerToken: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function token(args?: APIParams<{
        methodName: "oauth.token";
        settings: {
        };
        schema: "grant_type|code|targetEnv|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace token {
   export declare function authenticationContext(args?: APIParams<{
        methodName: "auth.token.authenticationContext";
        settings: {
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>): void;

}

export namespace ds {
   export declare function store(args?: APIParams<{
        methodName: "ds.store";
        settings: {
        };
        schema: "type|data|oid|updateBehavior";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function get(args?: APIParams<{
        methodName: "ds.get";
        settings: {
        };
        schema: "type|data|oid|fields";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function search(args?: APIParams<{
        methodName: "ds.search";
        settings: {
        };
        schema: "expTime|querySig|query";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getSchema(args?: APIParams<{
        methodName: "ds.getSchema";
        settings: {
        };
        schema: "";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

    /* Illegalexport declare function name 'delete' can't be used here
   export declare function delete(args?: APIParams<{
        methodName: "ds.delete";
        settings: {
        };
        schema: "type|oid|fields";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;
    */

}

export namespace ids {
   export declare function getAccountInfo(args?: APIParams<{
        methodName: "ids.getAccountInfo";
        settings: {
        };
        schema: "include|extraProfileFields";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function setAccountInfo(args?: APIParams<{
        methodName: "ids.setAccountInfo";
        settings: {
        };
        schema: "profile|preferences|data|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|lang";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function search(args?: APIParams<{
        methodName: "ids.search";
        settings: {
        };
        schema: "expTime|querySig|query";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace op {
   export declare function deviceContinue(args?: APIParams<{
        methodName: "fidm.oidc.op.deviceContinue";
        settings: {
            restUrl: "oidc/op/v1.0/{APIKey}/device_continue";
        };
        schema: "user_code";
        requiresSession: true;
        adapterSettings: {
            namespace: "fidm";
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

   export declare function getContextData(args?: APIParams<{
        methodName: "fidm.oidc.op.getContextData";
        settings: {
            restUrl: "oidc/op/v1.0/{APIKey}/contextData";
        };
        schema: "oidc_context";
        requiresSession: false;
        adapterSettings: {
            namespace: "fidm";
            forcePost: false;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>): void;

}

export namespace accounts.address {
    export namespace suggestions {
       export declare function get(args?: APIParams<{
            methodName: "accounts.address.suggestions.get";
            settings: {
            };
            schema: "address|country|apiKey|suggestionreply|longitude|latitude";
            requiresSession: undefined;
            adapterSettings: {
                forcePost: true;
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }

}

export namespace accounts.auth.magiclink {
    export namespace email {
       export declare function send(args?: APIParams<{
            methodName: "accounts.auth.magiclink.email.send";
            settings: {
            };
            schema: "email|context|lang";
            requiresSession: false;
            adapterSettings: {
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

       export declare function login(args?: APIParams<{
            methodName: "accounts.auth.magiclink.email.login";
            settings: {
            };
            schema: "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
            requiresSession: false;
            adapterSettings: {
                forcePost: true;
                forceHttps: true;
                requiresSession: any;
            };
            altSessionParams: undefined;
        }>): void;

    }
};
 
 export declare function hasSession(): Promise<boolean>
