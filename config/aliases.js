const path = require('path');

const ases = {
  // модули
  node_modules: 'node_modules',

  // конфиги
  app_config: 'config',

  // приложение
  app: 'src/app',

  // главные модули
  app_components: 'src/app/containers/components',
  app_routes: 'src/app/routes',
  app_containers: 'src/app/containers',

  app_pages: 'src/app/components/pages',
  app_controls: 'src/app/components/controls',

  // сервисы и компоненты redux
  app_redux: 'src/app/redux',
  app_services: 'src/app/services',

  redux_store: 'src/app/redux/configureStore',
  redux_reducers: 'src/app/redux/rootReducer.js',

  // ресурсы приложения
  assets_img: 'src/assets/img',

  //хелперы
  helpers : 'src/app/helpers',
}

function returnWebpackases(als) {
  const newases = {};

  for(let key in als) {
    if ( als.hasOwnProperty(key) ) {
      const newValue = path.resolve(__dirname, `./../${als[key]}`);
      newases[key] = newValue;
    }
  }

  return newases;
}

module.exports = {
  webpack: returnWebpackases(ases),
  jestases: ases
}
