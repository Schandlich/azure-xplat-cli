// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"4d9f5bf9-4f5e-4d9c-9a83-f92f38a79385\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"57fd9101-aec4-4efe-bab3-954dfafcfa41\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '709',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4d9f5bf9-4f5e-4d9c-9a83-f92f38a79385"',
  'x-ms-request-id': '2d7155fe-1f54-418f-b190-ab09a1f50c34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '6f844c12-55c0-4191-830d-bc35600f175e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T130034Z:6f844c12-55c0-4191-830d-bc35600f175e',
  date: 'Tue, 17 May 2016 13:00:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"4d9f5bf9-4f5e-4d9c-9a83-f92f38a79385\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"57fd9101-aec4-4efe-bab3-954dfafcfa41\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '709',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4d9f5bf9-4f5e-4d9c-9a83-f92f38a79385"',
  'x-ms-request-id': '2d7155fe-1f54-418f-b190-ab09a1f50c34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '6f844c12-55c0-4191-830d-bc35600f175e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T130034Z:6f844c12-55c0-4191-830d-bc35600f175e',
  date: 'Tue, 17 May 2016 13:00:34 GMT',
  connection: 'close' });
 return result; }]];