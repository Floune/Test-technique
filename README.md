# Tests automatisés avec cypress

## Setup

### ddev

- `ddev start`
- `ddev composer install`
- `cp .env.example .env` (laisser tel quel pour ddev)
- `ddev exec php artisan composer key:generate`
- `npm install`
- `npm run dev`
- `ddev cypress-open`

### classique

- `composer install`
- `cp .env.example .env` (remplacer les valeurs par défaut)
- `php artisan key:generate`
- `php artisan migrate`
- `ddev npm install`
- `ddev npm run dev`
- `npx cypress open`

