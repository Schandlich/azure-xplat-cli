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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreateDisk/providers/Microsoft.Compute/virtualMachines/xplatvmDk?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"742502e5-bb14-4433-887c-3bae6260f344\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"15.10.201602040\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli199aab83be04398f-os-1463478846538\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage1978.blob.core.windows.net/xplatteststoragecnt3610/cli199aab83be04398f-os-1463478846538.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatdiskdk\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatteststorage1978.blob.core.windows.net/xplatteststoragecnt3610/xplatdiskdk.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmDk\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreateDisk/providers/Microsoft.Network/networkInterfaces/xplattestnicDk\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage1978.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreateDisk/providers/Microsoft.Compute/virtualMachines/xplatvmDk\",\r\n  \"name\": \"xplatvmDk\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3602',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131079294894362937',
  'x-ms-request-id': '21dc7beb-7617-4df5-a282-3abd0169237c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2bf76153-82cb-48f9-9b6e-0d7020f00ebf',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T100104Z:2bf76153-82cb-48f9-9b6e-0d7020f00ebf',
  date: 'Tue, 17 May 2016 10:01:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreateDisk/providers/Microsoft.Compute/virtualMachines/xplatvmDk?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"742502e5-bb14-4433-887c-3bae6260f344\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"15.10.201602040\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli199aab83be04398f-os-1463478846538\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage1978.blob.core.windows.net/xplatteststoragecnt3610/cli199aab83be04398f-os-1463478846538.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatdiskdk\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatteststorage1978.blob.core.windows.net/xplatteststoragecnt3610/xplatdiskdk.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmDk\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreateDisk/providers/Microsoft.Network/networkInterfaces/xplattestnicDk\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage1978.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreateDisk/providers/Microsoft.Compute/virtualMachines/xplatvmDk\",\r\n  \"name\": \"xplatvmDk\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3602',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131079294894362937',
  'x-ms-request-id': '21dc7beb-7617-4df5-a282-3abd0169237c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2bf76153-82cb-48f9-9b6e-0d7020f00ebf',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T100104Z:2bf76153-82cb-48f9-9b6e-0d7020f00ebf',
  date: 'Tue, 17 May 2016 10:01:03 GMT',
  connection: 'close' });
 return result; }]];