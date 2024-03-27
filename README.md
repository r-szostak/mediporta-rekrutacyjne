# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Features

- Paginated table or list of tags with the count of associated posts (field count).
- Configurable number of elements per page through a numeric field above the table/list.
- Selection of sorting field and direction.
- Appropriate states for loading data and errors during data retrieval.
- Utilization of ready-made UI component library - Shadcn-ui.
- Integration of TanstackTable for displaying data.
- Data fetching using Axios and useSWR.
- Presentation of components using Storybook.

## Running the Project

To run the project, you can use the following npm commands:

1. `npm ci` - Installs project dependencies.
2. `npm start` - Starts the development server.
3. `npm run storybook` - Starts Storybook for component presentation.

## Official Plugins and Resources

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Official Vite plugin for React.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Official Vite plugin for React using SWC for Fast Refresh.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
- [useSWR](https://swr.vercel.app/) - React Hooks library for data fetching.
- [Storybook](https://storybook.js.org/) - Tool for developing UI components in isolation.
- [Shadcn UI](https://ui.shadcn.com/docs) - Component library used for UI components.
- [React TanstackTable](https://tanstack.com/table/latest/docs/introduction) - Library used for displaying data in tables.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules. Here are the steps to expand the ESLint configuration:

1. Configure the top-level `parserOptions` property to include TypeScript settings.
2. Replace `plugin:@types
