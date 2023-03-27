const data = fetch('https://google.com').then(a => console.log(a)).catch(error => console.log(error))

console.log(data);

/* 
    Promise { <pending> }
    Response {
    [Symbol(realm)]: null,
    [Symbol(state)]: {
        aborted: false,
        rangeRequested: false,
        timingAllowPassed: true,
        requestIncludesCredentials: false,
        type: 'default',
        status: 200,
        timingInfo: {
        startTime: 66.42589999968186,
        redirectStartTime: 66.42589999968186,
        redirectEndTime: 189.210999999661,
        postRedirectStartTime: 189.210999999661,
        finalServiceWorkerStartTime: 0,
        finalNetworkResponseStartTime: 0,
        finalNetworkRequestStartTime: 0,
        endTime: 0,
        encodedBodySize: 234,
        decodedBodySize: 0,
        finalConnectionTimingInfo: null
        },
        cacheState: '',
        statusText: 'OK',
        headersList: HeadersList {
        cookies: [Array],
        [Symbol(headers map)]: [Map],
        [Symbol(headers map sorted)]: null
        },
        urlList: [ [URL], [URL] ],
        body: { stream: undefined }
    },
    [Symbol(headers)]: HeadersList {
        cookies: [
        '1P_JAR=2023-03-27-10; expires=Wed, 26-Apr-2023 10:24:37 GMT; path=/; domain=.google.com; Secure',
        'AEC=AUEFqZewHfY8KKuakzNZEXKC_rIq5tDcrmnYmhB29SwgLdE6veV8Xm4TKAU; expires=Sat, 23-Sep-2023 10:24:37 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax',
        'NID=511=fwous_Sr6tKzACSUlmVZa1DJxvnnWlIXFYdlYldzsnuqZfIK_tXPNCc5QLpTZlzYy-YLV_ZJYI_gYvt02IdzaY2JRgyTZVg2l0w9-G8F6P6He8GS7OlBjpqsMB_6i08z78CduLTfBCtL-0RCSKn-OEzmDP_Y7VMz3BywRYHZhQo; expires=Tue, 26-Sep-2023 10:24:37 GMT; path=/; domain=.google.com; HttpOnly'
        ],
        [Symbol(headers map)]: Map(13) {
        'date' => [Object],
        'expires' => [Object],
        'cache-control' => [Object],
        'content-type' => [Object],
        'content-security-policy-report-only' => [Object],
        'p3p' => [Object],
        'content-encoding' => [Object],
        'server' => [Object],
        'x-xss-protection' => [Object],
        'x-frame-options' => [Object],
        'set-cookie' => [Object],
        'alt-svc' => [Object],
        'transfer-encoding' => [Object]
        },
        [Symbol(headers map sorted)]: null
    }
}

*/
