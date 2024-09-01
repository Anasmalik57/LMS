# LMS Frontend

### Setup Instructions

1. Clone project

```
git clone <repoUrl>
```

2. Move into the directory

```
cd LMS
```

3. Install Dependencies

```
npm i
```

4. run the server

```
npm run dev
```

# Setup instructions of tailwind

[Tailwind official instruction docs](https://tailwindcss.com/docs/installation)

1. Install Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind.config file

```
npx tailwindcss init -p
```

3. Add file extensions in your tailwind.config.js file

```
content: ["./src/**/*.{html,js}"],
```

4. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Start the server

```
npm run dev
```

### Adding plugins and dependencies

```
npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1. install simple import sort

```
npm i -D eslint-plugin-simple-import-sort
```

2. add rule in eslint.js

```
plugins: [..., 'simple-import-sort']
```

3. To enable auto import sort on file save in vscode

- Open `settings.json`

```
"editor.codeActionsOnSave": {
      "source.fixAll.ts": true
    }
```
