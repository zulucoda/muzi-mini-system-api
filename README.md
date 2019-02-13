# zulucoda mini-system

## Spec

Implement a mini-system what allows storing information about Parcels, Tractors and Processed Parcels and generating additional reports.

You can use any PHP / NodeJS framework you are comfortable with.

Following features need to be implemented

1. Login form
2. Entering information about unlimited Parcels. Each Parcel has:

- Name
- Culture
- Area

3. Entering information about unlimited Tractors. Each Tractor is represented by: - Name
4. Storing information about Processing a Parcel. Process is as follows:

- Select a Tractor
- Select a Parcel
- Enter a date
- Enter area which should not exceed the area of the selected Parcel
- Save the information
  5.Create a report for Processed Parcels. Report should include:
- Name of the Parcel
- Culture
- Date
- Name of the Tractor
- Processed Area
  As summary the report should output the total amount of processed area.

6. The report should allow filtering/search by following parameters:

- Name of the Parcel
- Culture
- Date
- Name of the Tractor

## Features

create db
`createdb zulucoda_dev`

### Parcel

Generate model
`node_modules/.bin/sequelize model:generate --name Parcel --attributes name:string,culture:string,area:integer`

migrate db
`node_modules/.bin/sequelize db:migrate`
