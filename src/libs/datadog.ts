import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: process.env.DATADOG_APPLICATION_ID!,
    clientToken: process.env.DATADOG_CLIENT_TOKEN!,
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'sassy',
    env: process.env.NODE_ENV,
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    defaultPrivacyLevel: 'mask-user-input',
});