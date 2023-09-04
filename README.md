### Sample AWS Policy returned by Authorizer
{
    "type": "TOKEN",
    "authorizationToken": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6.sample.token",
    "methodArn": "arn:aws:execute-api:ap-southeast-1:376677132685:vaai3wmt1k/prod/GET/users/list"
  }


### Testing the API Gateway 

##### Pass the Token in the Header

  curl  --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJqTXdOVGcwTnpneVFUTXdOalk0UWpoQk9UVXhRa0UwUkVNeVJEZzFRekpHUmpNeU9VVXlSUSJ9.sample.token" \
  --request POST \
  https://9it6uw6d7j.execute-api.ap-southeast-1.amazonaws.com/prod/create