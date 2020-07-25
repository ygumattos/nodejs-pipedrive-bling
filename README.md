# 🚀️ Integration Node API + Typescript

### Integration between [Pipedrive](https://www.pipedrive.com/pt/gettingstarted?utm_source=google&utm_medium=cpc&utm_campaign=BR_PG_Brd_Pure_Brand_Exact&utm_content=Core&utm_term=pipedrive&cid=339353574&aid=25260185814&tid=kwd-35635346868), [Bling](https://www.bling.com.br/tour/gerenciador-financeiro#utm_source=Google&utm_medium=cpc&utm_campaign=Google_institucional_gerenciador_financeiro) and [MongoDB](https://www.mongodb.com/cloud/atlas) with Nodejs and Typescript.

## How I can use ?

#### For init:

```
yarn or npm i
```
#### For use:

```
yarn dev:server
```
## Routes

Routes are working in port 3333

### About Pipedrive
___________________

> /pipedrive/deals

Get all deals from Pipedrive

```curl
curl --request GET \
  --url http://localhost:3333/pipedrive/deals
```
> /pipedrive/wondeals

Get deals only status 'won' from Pipedrive

```curl
curl --request GET \
  --url http://localhost:3333/pipedrive/wondeals
```

> /pipedrive/deal/products/:id

Get details about a products of deal by deal's id from Pipedrive

```curl
curl --request GET \
  --url http://localhost:3333/pipedrive/deal/products/:id
```
> /pipedrive/deal/participants/:id

Get details about all participants of deal by deal's id from Pipedrive

```curl
curl --request GET \
  --url http://localhost:3333/pipedrive/deal/participants/:id
```
> /pipedrive/deals/consolidated

Convert data of Deals from Pipedrive and insert into Bling.

OBS.: Only insert data of today but return all data in Pipedrive.

```curl
curl --request GET \
  --url http://localhost:3333/pipedrive/deals/consolidated
```

### About Integration With Bling
_______

> /consolidated/create

Get data of today from Bling and insert into database.

```curl
curl --request GET \
  --url http://localhost:3333/consolidated/create
```
> /consolidated

Return consolidated data of database by date on body.

```curl
curl --request POST \
  --url http://localhost:3333/consolidated \
  --header 'content-type: application/json' \
  --data '{
	"date":"2020-07-25T20:37:54.306Z"
}'
```
