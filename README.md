# BackendArduinoIot

## get - https://arduino-iot-0020.herokuapp.com/v1/arduino-status

Response:
```
{
    "hasSmoke": true,
    "isHighLight": 950,
    "temp": 30
}
```

## get - https://arduino-iot-0020.herokuapp.com/v2/arduino-status

Response:
```
[
    {
        "id": "hasSmoke",
        "value": true,
        "status": "danger"
    },
    {
        "id": "isHighLight",
        "value": 950,
        "status": "warning"
    },
    {
        "id": "temp",
        "value": 30,
        "status": "warning"
    }
]
```

## post - https://arduino-iot-0020.herokuapp.com/v1/arduino-status

body:
```
{
    "hasSmoke": false
}
```

response:
```
Status updated!
```
